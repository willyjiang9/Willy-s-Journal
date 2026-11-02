const CONTACT = 'willyj915@gmail.com'

export default function Terms() {
  const h = { fontFamily: "'Lora', serif", fontSize: 18, margin: '28px 0 8px', fontWeight: 500 }
  const p = { fontSize: 15, lineHeight: 1.7, color: '#444', margin: '0 0 10px' }
  return (
    <div style={{ minHeight: '100vh', background: '#faf9f7', color: '#1a1a18', fontFamily: "'DM Sans', sans-serif", padding: '40px 24px' }}>
      <div style={{ maxWidth: 640, margin: '0 auto' }}>
        <a href="/" style={{ fontSize: 14, color: '#888', textDecoration: 'none' }}>← Memoiv</a>
        <h1 style={{ fontFamily: "'Lora', serif", fontSize: 32, fontWeight: 500, margin: '20px 0 4px' }}>Terms of Service</h1>
        <p style={{ ...p, color: '#888' }}>Last updated: November 2, 2026</p>

        <h2 style={h}>Using Memoiv</h2>
        <p style={p}>You must be at least 13 years old. You're responsible for your account and for keeping your password safe. One person per account.</p>

        <h2 style={h}>Your content</h2>
        <p style={p}>You own what you write and upload. You give Memoiv permission only to store and display it back to you so the service works. Don't upload anything illegal, or content that infringes someone else's rights or depicts the abuse of children. We may remove such content and close accounts that violate these terms.</p>

        <h2 style={h}>Fair use</h2>
        <p style={p}>Don't abuse the service: no automated sign-ups, scraping, attempts to access other people's data, or uploading excessive amounts of data. Photo uploads are limited per day and per file size.</p>

        <h2 style={h}>Not therapy or medical advice</h2>
        <p style={p}>Memoiv is a journaling tool. It does not provide medical, mental-health, or professional advice. If you're in crisis, contact emergency services or call or text 988 (US).</p>

        <h2 style={h}>Availability and backups</h2>
        <p style={p}>Memoiv is currently a free pilot provided "as is." It may change, have downtime, or lose data despite our efforts. Use Settings to download a copy of your entries whenever you like.</p>

        <h2 style={h}>Liability</h2>
        <p style={p}>To the fullest extent allowed by law, Memoiv and its operator aren't liable for indirect or consequential damages, or for loss of data, arising from your use of the service.</p>

        <h2 style={h}>Ending your account</h2>
        <p style={p}>You can delete your account at any time in Settings. We may suspend accounts that break these terms.</p>

        <h2 style={h}>Contact</h2>
        <p style={p}><a href={`mailto:${CONTACT}`} style={{ color: '#1a1a18' }}>{CONTACT}</a></p>
      </div>
    </div>
  )
}
