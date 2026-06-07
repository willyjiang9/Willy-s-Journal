import { useState, useEffect } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './firebase'
import Landing from './pages/Landing'
import Dashboard from './components/Dashboard'
import Auth from './components/Auth'

export default function App() {
  const [user, setUser] = useState(undefined)
  const [authMode, setAuthMode] = useState(null)

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => setUser(u))
    return unsub
  }, [])

  if (user === undefined) {
    return (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', background: '#faf9f7' }}>
        <div style={{ width: 24, height: 24, border: '2px solid #e8e6e0', borderTopColor: '#1a1a18', borderRadius: '50%', animation: 'spin 0.7s linear infinite' }} />
        <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
      </div>
    )
  }

  if (user) return <Dashboard user={user} />

  if (authMode) return <Auth mode={authMode} onBack={() => setAuthMode(null)} />

  return (
    <Landing
      onSignup={() => setAuthMode('signup')}
      onLogin={() => setAuthMode('login')}
    />
  )
}