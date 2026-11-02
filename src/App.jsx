import { useState, useEffect } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './firebase'
import Landing from './pages/Landing'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'
import Auth from './components/Auth'
import Dashboard from './components/Dashboard'
import VerifyEmail from './components/VerifyEmail'

export default function App() {
  const [user, setUser] = useState(undefined)
  const [authMode, setAuthMode] = useState(null)
  const path = window.location.pathname

  useEffect(() => onAuthStateChanged(auth, u => setUser(u)), [])

  if (path === '/privacy') return <Privacy />
  if (path === '/terms') return <Terms />

  if (user === undefined) {
    return (
      <div style={{ minHeight: '100vh', background: '#faf9f7', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ width: 20, height: 20, border: '2px solid #e8e6e0', borderTopColor: '#1a1a18', borderRadius: '50%', animation: 'spin 0.8s linear infinite' }} />
        <style>{`@keyframes spin { to { transform: rotate(360deg) } }`}</style>
      </div>
    )
  }

  if (user) {
    const passwordUser = user.providerData.some(p => p.providerId === 'password')
    if (passwordUser && !user.emailVerified) return <VerifyEmail user={user} />
    return <Dashboard user={user} />
  }
  if (authMode) return <Auth mode={authMode} onBack={() => setAuthMode(null)} />
  return <Landing onSignup={() => setAuthMode('signup')} onLogin={() => setAuthMode('login')} />
}
