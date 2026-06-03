import { useState, useEffect } from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase'

const OWNER_EMAIL = 'willyj915@gmail.com'

export default function LockScreen() {
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [shake, setShake] = useState(false)
  const [dark, setDark] = useState(() => localStorage.getItem('theme') === 'dark')

  const t = {
    bg:      dark ? '#111110' : '#faf9f7',
    ink:     dark ? '#f0ede8' : '#1a1a18',
    muted:   dark ? '#666'    : '#888',
    border:  dark ? '#2a2a28' : '#e8e6e0',
    surface: dark ? '#1c1c1a' : '#ffffff',
  }

  useEffect(() => {
    document.body.style.background = t.bg
    document.body.style.color = t.ink
    localStorage.setItem('theme', dark ? 'dark' : 'light')
  }, [dark])

  async function handleSubmit(e) {
    e.preventDefault()
    if (!password) return
    setLoading(true); setError('')
    try {
      await signInWithEmailAndPassword(auth, OWNER_EMAIL, password)
    } catch {
      setError('Wrong password.')
      setShake(true)
      setTimeout(() => setShake(false), 500)
    } finally { setLoading(false) }
  }

  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: t.bg, position: 'relative' }}>
      <button onClick={() => setDark(d => !d)} style={{
        position: 'absolute', top: 20, right: 20,
        width: 32, height: 32, borderRadius: '50%',
        border: `1.5px solid ${t.ink}`,
        background: dark ? t.ink : 'transparent',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        cursor: 'pointer', flexShrink: 0
      }}>
        {!dark && <div style={{ width: 10, height: 10, borderRadius: '50%', border: `1.5px solid ${t.ink}` }} />}
      </button>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16, width: 280 }}>
        <div style={{ width: 56, height: 56, border: `1px solid ${t.border}`, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 4 }}>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={t.ink} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
            <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
          </svg>
        </div>
        <p style={{ fontSize: 13, color: t.muted, letterSpacing: '0.05em', marginBottom: 8 }}>Private</p>
        <form onSubmit={handleSubmit} style={{ width: '100%' }}>
          <div style={{ animation: shake ? 'shake 0.4s ease' : 'none' }}>
            <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)}
              style={{ width: '100%', padding: '12px 16px', border: `1px solid ${t.border}`, borderRadius: 10, fontSize: 15, background: t.surface, color: t.ink, outline: 'none', textAlign: 'center', letterSpacing: '0.15em' }}
              autoFocus />
          </div>
          {error && <p style={{ fontSize: 12, color: '#c0392b', textAlign: 'center', marginTop: 8 }}>{error}</p>}
          <button type="submit" disabled={loading} style={{ marginTop: 10, width: '100%', padding: '12px', background: t.ink, color: t.bg, border: 'none', borderRadius: 10, fontSize: 14, fontWeight: 500 }}>
            {loading ? '...' : 'Enter'}
          </button>
        </form>
      </div>
      <style>{`@keyframes shake { 0%,100%{transform:translateX(0)} 20%{transform:translateX(-8px)} 40%{transform:translateX(8px)} 60%{transform:translateX(-5px)} 80%{transform:translateX(5px)} }`}</style>
    </div>
  )
}