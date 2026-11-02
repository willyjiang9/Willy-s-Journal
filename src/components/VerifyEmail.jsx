import { useState } from 'react'
import { sendEmailVerification, signOut } from 'firebase/auth'
import { auth } from '../firebase'

export default function VerifyEmail({ user }) {
  const [msg, setMsg] = useState('')
  const btn = { padding: '12px 20px', borderRadius: 10, fontSize: 14, cursor: 'pointer', fontFamily: "'DM Sans', sans-serif" }

  async function resend() {
    try { await sendEmailVerification(user); setMsg('Sent! Check your inbox (and spam).') }
    catch { setMsg('Please wait a minute before trying again.') }
  }
  async function check() {
    await user.reload()
    if (auth.currentUser.emailVerified) window.location.reload()
    else setMsg("Not verified yet. Click the link in the email first.")
  }

  return (
    <div style={{ minHeight: '100vh', background: '#faf9f7', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24, fontFamily: "'DM Sans', sans-serif" }}>
      <div style={{ maxWidth: 360, textAlign: 'center' }}>
        <div style={{ fontFamily: "'Lora', serif", fontSize: 24, marginBottom: 12 }}>Check your email</div>
        <p style={{ fontSize: 14, color: '#666', lineHeight: 1.6 }}>
          We sent a verification link to <b>{user.email}</b>. Click it, then come back here.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: 20 }}>
          <button onClick={check} style={{ ...btn, background: '#1a1a18', color: '#faf9f7', border: 'none' }}>I've verified</button>
          <button onClick={resend} style={{ ...btn, background: '#fff', color: '#1a1a18', border: '1px solid #e8e6e0' }}>Resend email</button>
          <button onClick={() => signOut(auth)} style={{ ...btn, background: 'none', color: '#888', border: 'none' }}>Sign out</button>
        </div>
        {msg && <p style={{ fontSize: 12, color: '#888', marginTop: 14 }}>{msg}</p>}
      </div>
    </div>
  )
}
