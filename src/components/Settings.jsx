import { useState } from 'react'
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore'
import { ref, listAll, deleteObject } from 'firebase/storage'
import { deleteUser, reauthenticateWithPopup, reauthenticateWithCredential, EmailAuthProvider, GoogleAuthProvider, signOut } from 'firebase/auth'
import { auth, db, storage } from '../firebase'

export default function Settings({ user, onClose }) {
  const [busy, setBusy] = useState(false)
  const [msg, setMsg] = useState('')
  const [confirmText, setConfirmText] = useState('')
  const [password, setPassword] = useState('')
  const uid = user.uid
  const usesPassword = user.providerData.some(p => p.providerId === 'password')
  const btn = { padding: '11px 18px', borderRadius: 10, fontSize: 14, cursor: 'pointer', fontFamily: "'DM Sans', sans-serif" }

  async function exportData() {
    setBusy(true); setMsg('')
    try {
      const out = { exportedAt: new Date().toISOString(), email: user.email, posts: [], meta: {} }
      const posts = await getDocs(collection(db, 'users', uid, 'posts'))
      posts.forEach(d => out.posts.push({ id: d.id, ...d.data() }))
      const meta = await getDocs(collection(db, 'users', uid, 'meta'))
      meta.forEach(d => { out.meta[d.id] = d.data() })
      const blob = new Blob([JSON.stringify(out, null, 2)], { type: 'application/json' })
      const a = document.createElement('a')
      a.href = URL.createObjectURL(blob)
      a.download = 'memoiv-export.json'
      a.click()
      URL.revokeObjectURL(a.href)
      setMsg('Downloaded. Photos are linked by URL in your entries.')
    } catch { setMsg('Export failed. Try again.') }
    setBusy(false)
  }

  async function deleteAccount() {
    setBusy(true); setMsg('')
    try {
      // re-authenticate (required by Firebase for deleting accounts)
      if (usesPassword) {
        await reauthenticateWithCredential(auth.currentUser, EmailAuthProvider.credential(user.email, password))
      } else {
        await reauthenticateWithPopup(auth.currentUser, new GoogleAuthProvider())
      }
      for (const sub of ['posts', 'meta']) {
        const snap = await getDocs(collection(db, 'users', uid, sub))
        for (const d of snap.docs) await deleteDoc(doc(db, 'users', uid, sub, d.id))
      }
      try {
        const list = await listAll(ref(storage, `users/${uid}/photos`))
        for (const item of list.items) await deleteObject(item)
      } catch {}
      await deleteUser(auth.currentUser)
      await signOut(auth).catch(() => {})
    } catch (e) {
      setMsg(e.code === 'auth/invalid-credential' || e.code === 'auth/wrong-password'
        ? 'Wrong password.' : 'Could not delete account. Try again.')
      setBusy(false)
    }
  }

  return (
    <div onClick={onClose} style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.35)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 20, zIndex: 100 }}>
      <div onClick={e => e.stopPropagation()} style={{ background: '#faf9f7', borderRadius: 16, padding: 28, width: '100%', maxWidth: 400, fontFamily: "'DM Sans', sans-serif", color: '#1a1a18', maxHeight: '90vh', overflow: 'auto' }}>
        <div style={{ fontFamily: "'Lora', serif", fontSize: 22, marginBottom: 4 }}>Settings</div>
        <p style={{ fontSize: 13, color: '#888', margin: '0 0 20px' }}>{user.email}</p>

        <div style={{ fontSize: 14, fontWeight: 500, marginBottom: 6 }}>Your data</div>
        <p style={{ fontSize: 13, color: '#666', margin: '0 0 10px' }}>Download everything you've written as a file.</p>
        <button onClick={exportData} disabled={busy} style={{ ...btn, background: '#fff', border: '1px solid #e8e6e0', color: '#1a1a18' }}>Download my data</button>

        <hr style={{ border: 'none', borderTop: '1px solid #e8e6e0', margin: '24px 0' }} />

        <div style={{ fontSize: 14, fontWeight: 500, marginBottom: 6, color: '#c0392b' }}>Delete account</div>
        <p style={{ fontSize: 13, color: '#666', margin: '0 0 10px' }}>Permanently deletes your entries, photos and account. This can't be undone. Type DELETE to confirm.</p>
        <input value={confirmText} onChange={e => setConfirmText(e.target.value)} placeholder="DELETE"
          style={{ width: '100%', boxSizing: 'border-box', padding: '10px 12px', border: '1px solid #e8e6e0', borderRadius: 10, fontSize: 14, marginBottom: 8, background: '#fff' }} />
        {usesPassword && (
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Your password"
            style={{ width: '100%', boxSizing: 'border-box', padding: '10px 12px', border: '1px solid #e8e6e0', borderRadius: 10, fontSize: 14, marginBottom: 8, background: '#fff' }} />
        )}
        <button onClick={deleteAccount} disabled={busy || confirmText !== 'DELETE' || (usesPassword && !password)}
          style={{ ...btn, background: '#c0392b', color: '#fff', border: 'none', opacity: (busy || confirmText !== 'DELETE') ? 0.5 : 1 }}>
          {busy ? 'Working…' : 'Delete everything'}
        </button>

        {msg && <p style={{ fontSize: 12, color: '#888', marginTop: 14 }}>{msg}</p>}
        <div style={{ marginTop: 20, fontSize: 12, display: 'flex', gap: 14 }}>
          <a href="/privacy" style={{ color: '#888' }}>Privacy</a>
          <a href="/terms" style={{ color: '#888' }}>Terms</a>
          <button onClick={onClose} style={{ marginLeft: 'auto', background: 'none', border: 'none', color: '#1a1a18', cursor: 'pointer', fontSize: 13 }}>Close</button>
        </div>
      </div>
    </div>
  )
}
