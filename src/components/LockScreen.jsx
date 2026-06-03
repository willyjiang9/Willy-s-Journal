import { useState } from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase'

// Your login email is stored here — visitors never see it, they just enter the password
const OWNER_EMAIL = 'willyj915@gmail.com' // change this to match what you set in Firebase Auth

export default function LockScreen() {
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [shake, setShake] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    if (!password) return
    setLoading(true)
    setError('')
    try {
      await signInWithEmailAndPassword(auth, OWNER_EMAIL, password)
    } catch {
      setError('Wrong password.')
      setShake(true)
      setTimeout(() => setShake(false), 500)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div style={styles.wrap}>
      <div style={styles.center}>
        {/* Lock icon */}
        <div style={styles.iconWrap}>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#1a1a18" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
            <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
          </svg>
        </div>

        <p style={styles.label}>Private</p>

        <form onSubmit={handleSubmit} style={{ width: '100%' }}>
          <div style={{ ...styles.inputWrap, animation: shake ? 'shake 0.4s ease' : 'none' }}>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              style={styles.input}
              autoFocus
            />
          </div>

          {error && <p style={styles.error}>{error}</p>}

          <button type="submit" style={styles.btn} disabled={loading}>
            {loading ? '...' : 'Enter'}
          </button>
        </form>
      </div>

      <style>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          20% { transform: translateX(-8px); }
          40% { transform: translateX(8px); }
          60% { transform: translateX(-5px); }
          80% { transform: translateX(5px); }
        }
      `}</style>
    </div>
  )
}

const styles = {
  wrap: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: '#faf9f7',
  },
  center: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 16,
    width: 280,
  },
  iconWrap: {
    width: 56,
    height: 56,
    border: '1px solid #e8e6e0',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 4,
  },
  label: {
    fontSize: 13,
    color: '#888',
    letterSpacing: '0.05em',
    marginBottom: 8,
  },
  inputWrap: {
    width: '100%',
  },
  input: {
    width: '100%',
    padding: '12px 16px',
    border: '1px solid #e8e6e0',
    borderRadius: 10,
    fontSize: 15,
    background: '#fff',
    color: '#1a1a18',
    outline: 'none',
    textAlign: 'center',
    letterSpacing: '0.15em',
  },
  btn: {
    marginTop: 10,
    width: '100%',
    padding: '12px',
    background: '#1a1a18',
    color: '#fff',
    border: 'none',
    borderRadius: 10,
    fontSize: 14,
    fontWeight: 500,
    letterSpacing: '0.03em',
  },
  error: {
    fontSize: 12,
    color: '#c0392b',
    textAlign: 'center',
    marginTop: 8,
  },
}
