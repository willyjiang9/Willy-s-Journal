const CONTACT = 'willyj915@gmail.com'

export default function Privacy() {
  const h = { fontFamily: "'Lora', serif", fontSize: 18, margin: '28px 0 8px', fontWeight: 500 }
  const p = { fontSize: 15, lineHeight: 1.7, color: '#444', margin: '0 0 10px' }
  return (
    <div style={{ minHeight: '100vh', background: '#faf9f7', color: '#1a1a18', fontFamily: "'DM Sans', sans-serif", padding: '40px 24px' }}>
      <div style={{ maxWidth: 640, margin: '0 auto' }}>
        <a href="/" style={{ fontSize: 14, color: '#888', textDecoration: 'none' }}>← Memoiv</a>
        <h1 style={{ fontFamily: "'Lora', serif", fontSize: 32, fontWeight: 500, margin: '20px 0 4px' }}>Privacy Policy</h1>
        <p style={{ ...p, color: '#888' }}>Last updated: November 2, 2026</p>

        <h2 style={h}>The short version</h2>
        <p style={p}>Memoiv is a private journal. Only you can see your entries. They are never shared with other users, sold, or used for advertising. Memoiv does not use your entries to train AI models or send them to AI services.</p>

        <h2 style={h}>What we collect</h2>
        <p style={p}>Your name and email (or Google account basics if you sign in with Google), the entries and photos you write or upload, and your Day to-dos. We also store simple account settings such as whether you finished the intro tour.</p>

        <h2 style={h}>How it's stored</h2>
        <p style={p}>Your data is stored with Google Firebase (Authentication, Firestore, Cloud Storage). It is encrypted in transit and at rest by Google, and access rules limit each account to its own data. Please understand that Memoiv is not end-to-end encrypted, so the person who operates the service has technical administrative access to the database and commits to not reading your entries except where needed to keep the service secure or where required by law.</p>

        <h2 style={h}>Who we share it with</h2>
        <p style={p}>Only service providers needed to run Memoiv (Google Firebase for data and sign-in, Vercel for hosting), or if the law requires it. We do not sell your data.</p>

        <h2 style={h}>Your controls</h2>
        <p style={p}>In Settings you can download all your data as a file and permanently delete your account and everything in it. Deletion removes your entries, photos, and profile. Copies in backups may persist for a short time before they expire.</p>

        <h2 style={h}>Age</h2>
        <p style={p}>Memoiv is for people 13 and older. If you believe a child under 13 has an account, contact us and we'll delete it.</p>

        <h2 style={h}>Not a substitute for care</h2>
        <p style={p}>Memoiv is a writing tool, not therapy or medical advice. If you're in crisis, contact local emergency services or, in the US, call or text 988.</p>

        <h2 style={h}>Changes and contact</h2>
        <p style={p}>If this policy changes in a meaningful way, we'll update the date above. Questions or data requests: <a href={`mailto:${CONTACT}`} style={{ color: '#1a1a18' }}>{CONTACT}</a>.</p>
      </div>
    </div>
  )
}
