import { useState } from 'react'
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup
} from 'firebase/auth'
import { doc, setDoc, getDoc } from 'firebase/firestore'
import { auth, db } from '../firebase'

const provider = new GoogleAuthProvider()

export default function Auth({ mode, onBack }) {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const isSignup = mode === 'signup'

  async function handleSubmit(e) {
    e.preventDefault()
    setLoading(true); setError('')
    try {
      if (isSignup) {
        if (!firstName.trim()) { setError('Please enter your first name.'); setLoading(false); return }
        const cred = await createUserWithEmailAndPassword(auth, email, password)
        await setDoc(doc(db, 'users', cred.user.uid, 'meta', 'profile'), {
          firstName: firstName.trim(),
          lastName: lastName.trim(),
        })
      } else {
        await signInWithEmailAndPassword(auth, email, password)
      }
    } catch (err) {
      const msg = {
        'auth/email-already-in-use': 'An account with this email already exists.',
        'auth/invalid-email': 'Please enter a valid email.',
        'auth/weak-password': 'Password should be at least 6 characters.',
        'auth/user-not-found': 'No account found with this email.',
        'auth/wrong-password': 'Incorrect password.',
        'auth/invalid-credential': 'Incorrect email or password.',
      }
      setError(msg[err.code] || 'Something went wrong. Try again.')
    }
    setLoading(false)
  }

  async function handleGoogle() {
    setLoading(true); setError('')
    try {
      const cred = await signInWithPopup(auth, provider)
      const profileDoc = await getDoc(doc(db, 'users', cred.user.uid, 'meta', 'profile'))
      if (!profileDoc.exists()) {
        const displayName = cred.user.displayName || ''
        const parts = displayName.split(' ')
        await setDoc(doc(db, 'users', cred.user.uid, 'meta', 'profile'), {
          firstName: parts[0] || '',
          lastName: parts.slice(1).join(' ') || '',
        })
      }
    } catch (err) {
      setError('Google sign-in failed. Try again.')
    }
    setLoading(false)
  }

  return (
    <div style={{ minHeight: '100vh', background: '#faf9f7', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: 24, fontFamily: "'DM Sans', sans-serif" }}>
      <button onClick={onBack} style={{ position: 'absolute', top: 24, left: 24, background: 'none', border: 'none', fontSize: 14, color: '#888', cursor: 'pointer' }}>
        ← Back
      </button>

      <div style={{ width: '100%', maxWidth: 360 }}>
        <div style={{ textAlign: 'center', marginBottom: 36 }}>
          <span style={{ fontFamily: "'Lora', serif", fontSize: 24 }}>Memoiv</span>
          <p style={{ fontSize: 14, color: '#888', marginTop: 8 }}>{isSignup ? 'Create your private space' : 'Welcome back'}</p>
        </div>

        <button onClick={handleGoogle} disabled={loading} style={{ width: '100%', padding: '12px', border: '1px solid #e8e6e0', borderRadius: 10, background: '#fff', fontSize: 14, color: '#1a1a18', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, marginBottom: 16, fontFamily: "'DM Sans', sans-serif" }}>
          <svg width="18" height="18" viewBox="0 0 24 24">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
          </svg>
          Continue with Google
        </button>

        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
          <div style={{ flex: 1, height: 1, background: '#e8e6e0' }} />
          <span style={{ fontSize: 12, color: '#aaa' }}>or</span>
          <div style={{ flex: 1, height: 1, background: '#e8e6e0' }} />
        </div>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {isSignup && (
            <div style={{ display: 'flex', gap: 10 }}>
              <input type="text" placeholder="First name" value={firstName} onChange={e => setFirstName(e.target.value)} required
                style={{ flex: 1, padding: '12px 14px', border: '1px solid #e8e6e0', borderRadius: 10, fontSize: 15, background: '#fff', color: '#1a1a18', outline: 'none', fontFamily: "'DM Sans', sans-serif" }} />
              <input type="text" placeholder="Last (optional)" value={lastName} onChange={e => setLastName(e.target.value)}
                style={{ flex: 1, padding: '12px 14px', border: '1px solid #e8e6e0', borderRadius: 10, fontSize: 15, background: '#fff', color: '#1a1a18', outline: 'none', fontFamily: "'DM Sans', sans-serif" }} />
            </div>
          )}
          <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required
            style={{ padding: '12px 14px', border: '1px solid #e8e6e0', borderRadius: 10, fontSize: 15, background: '#fff', color: '#1a1a18', outline: 'none', fontFamily: "'DM Sans', sans-serif" }} />
          <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required
            style={{ padding: '12px 14px', border: '1px solid #e8e6e0', borderRadius: 10, fontSize: 15, background: '#fff', color: '#1a1a18', outline: 'none', fontFamily: "'DM Sans', sans-serif" }} />
          {error && <p style={{ fontSize: 12, color: '#c0392b', textAlign: 'center' }}>{error}</p>}
          <button type="submit" disabled={loading} style={{ padding: '13px', background: '#1a1a18', color: '#faf9f7', border: 'none', borderRadius: 10, fontSize: 15, fontWeight: 500, cursor: 'pointer', fontFamily: "'DM Sans', sans-serif", marginTop: 4 }}>
            {loading ? '...' : isSignup ? 'Create account' : 'Sign in'}
          </button>
        </form>

        <p style={{ textAlign: 'center', fontSize: 13, color: '#888', marginTop: 20 }}>
          {isSignup ? 'Already have an account?' : "Don't have an account?"}{' '}
          <button onClick={onBack} style={{ background: 'none', border: 'none', color: '#1a1a18', fontSize: 13, cursor: 'pointer', textDecoration: 'underline', fontFamily: "'DM Sans', sans-serif" }}>
            {isSignup ? 'Sign in' : 'Sign up'}
          </button>
        </p>
      </div>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500&family=DM+Sans:wght@300;400;500&display=swap');`}</style>
    </div>
  )
}