import { useState, useEffect, useRef } from 'react'
import { signOut } from 'firebase/auth'
import {
  collection, addDoc, getDocs, deleteDoc, doc,
  orderBy, query, serverTimestamp
} from 'firebase/firestore'
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import { auth, db, storage } from '../firebase'

const TABS = ['All', 'Thought', 'Photo', 'Essay']

function extractSpotifyId(input) {
  if (!input) return null
  const match = input.match(/track\/([a-zA-Z0-9]+)/)
  if (match) return match[1]
  if (/^[a-zA-Z0-9]{22}$/.test(input.trim())) return input.trim()
  return null
}

export default function Dashboard() {
  const [posts, setPosts] = useState([])
  const [filter, setFilter] = useState('All')
  const [composing, setComposing] = useState(false)
  const [postType, setPostType] = useState('Thought')
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [imageFile, setImageFile] = useState(null)
  const [imagePreview, setImagePreview] = useState(null)
  const [caption, setCaption] = useState('')
  const [thought, setThought] = useState('')
  const [spotifyUrl, setSpotifyUrl] = useState('')
  const [saving, setSaving] = useState(false)
  const [loading, setLoading] = useState(true)
  const [selectedTags, setSelectedTags] = useState([])
  const [dark, setDark] = useState(() => localStorage.getItem('theme') === 'dark')
  const fileRef = useRef()

  const TAG_OPTIONS = ['life', 'ideas', 'travel', 'work', 'random']

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light')
    localStorage.setItem('theme', dark ? 'dark' : 'light')
  }, [dark])

  useEffect(() => { fetchPosts() }, [])

  async function fetchPosts() {
    setLoading(true)
    try {
      const q = query(collection(db, 'posts'), orderBy('createdAt', 'desc'))
      const snap = await getDocs(q)
      setPosts(snap.docs.map(d => ({ id: d.id, ...d.data() })))
    } catch (e) { console.error(e) }
    setLoading(false)
  }

  async function handlePublish() {
    setSaving(true)
    try {
      let data = { type: postType, createdAt: serverTimestamp() }

      if (postType === 'Essay') {
        if (!body.trim()) { setSaving(false); return }
        data = { ...data, title: title || 'Untitled', body, tags: selectedTags }
      } else if (postType === 'Photo') {
        let imageUrl = null
        if (imageFile) {
          const storageRef = ref(storage, `photos/${Date.now()}_${imageFile.name}`)
          await uploadBytes(storageRef, imageFile)
          imageUrl = await getDownloadURL(storageRef)
        }
        data = { ...data, caption, imageUrl, tags: selectedTags }
      } else {
        if (!thought.trim()) { setSaving(false); return }
        const spotifyId = extractSpotifyId(spotifyUrl)
        data = { ...data, thought, spotifyId }
      }

      const docRef = await addDoc(collection(db, 'posts'), data)
      setPosts(prev => [{ id: docRef.id, ...data, createdAt: { toDate: () => new Date() } }, ...prev])
      resetCompose()
    } catch (e) {
      console.error(e)
      alert('Failed to save. Check your Firebase config.')
    }
    setSaving(false)
  }

  async function handleDelete(id) {
    if (!confirm('Delete this post?')) return
    await deleteDoc(doc(db, 'posts', id))
    setPosts(prev => prev.filter(p => p.id !== id))
  }

  function resetCompose() {
    setComposing(false)
    setTitle(''); setBody(''); setCaption(''); setThought(''); setSpotifyUrl('')
    setImageFile(null); setImagePreview(null); setSelectedTags([])
    setPostType('Thought')
  }

  function handleImageSelect(e) {
    const file = e.target.files[0]
    if (!file) return
    setImageFile(file)
    setImagePreview(URL.createObjectURL(file))
  }

  function toggleTag(tag) {
    setSelectedTags(prev => prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag])
  }

  function formatDate(ts) {
    if (!ts) return ''
    const d = ts.toDate ? ts.toDate() : new Date(ts)
    return d.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }) +
      ' · ' + d.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' })
  }

  const filtered = posts.filter(p => filter === 'All' || p.type === filter)

  return (
    <div style={{ maxWidth: 680, margin: '0 auto', padding: '0 20px 120px', color: 'var(--ink)' }}>

      <header style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '24px 0 20px', borderBottom: '1px solid var(--border)', flexWrap: 'wrap', gap: 10 }}>
        <span style={{ fontFamily: "'Lora', serif", fontSize: 24, letterSpacing: '-0.3px', color: 'var(--ink)' }}>Willy's space</span>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div className="header-filters" style={{ display: 'flex', gap: 4 }}>
            {TABS.map(t => (
              <button key={t} onClick={() => setFilter(t)} style={{
                fontSize: 13, padding: '6px 14px', background: filter === t ? 'var(--ink)' : 'none',
                border: '1px solid var(--border)', borderRadius: 20,
                color: filter === t ? 'var(--cream)' : 'var(--muted)', letterSpacing: '0.2px'
              }}>{t}</button>
            ))}
          </div>
          <button onClick={() => setDark(d => !d)} title="Toggle dark mode" style={{
            background: 'none', border: '1px solid var(--border)', borderRadius: 8,
            padding: '7px 9px', color: 'var(--muted)', display: 'flex', alignItems: 'center', fontSize: 16
          }}>{dark ? '☀️' : '🌙'}</button>
          <button onClick={() => setComposing(true)} style={{
            fontSize: 14, padding: '8px 18px', background: 'var(--ink)', color: 'var(--cream)',
            border: 'none', borderRadius: 20, fontWeight: 500
          }}>+ New</button>
          <button onClick={() => signOut(auth)} title="Log out" style={{
            background: 'none', border: '1px solid var(--border)', borderRadius: 8,
            padding: '7px 9px', color: 'var(--muted)', display: 'flex', alignItems: 'center'
          }}>
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/>
            </svg>
          </button>
        </div>
      </header>

      {composing && (
        <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 14, margin: '24px 0', overflow: 'hidden' }}>
          <div style={{ padding: '20px 20px' }}>
            <div style={{ display: 'flex', marginBottom: 18, border: '1px solid var(--border)', borderRadius: 8, overflow: 'hidden', width: 'fit-content' }}>
              {['Thought', 'Photo', 'Essay'].map(t => (
                <button key={t} onClick={() => setPostType(t)} style={{
                  fontSize: 13, padding: '8px 18px', background: postType === t ? 'var(--ink)' : 'none',
                  border: 'none', color: postType === t ? 'var(--cream)' : 'var(--muted)', letterSpacing: '0.2px'
                }}>{t}</button>
              ))}
            </div>

            {postType === 'Essay' && (
              <>
                <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Title..." style={{
                  width: '100%', border: 'none', outline: 'none', fontFamily: "'Lora', serif",
                  fontSize: 22, fontWeight: 500, color: 'var(--ink)', background: 'transparent', marginBottom: 10, display: 'block'
                }} />
                <textarea value={body} onChange={e => setBody(e.target.value)} placeholder="Start writing..." rows={8} style={{
                  width: '100%', border: 'none', outline: 'none', fontSize: 15, lineHeight: 1.7,
                  resize: 'none', background: 'transparent', color: 'var(--ink)', display: 'block', minHeight: 120
                }} />
                <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginTop: 12 }}>
                  {TAG_OPTIONS.map(tag => (
                    <button key={tag} onClick={() => toggleTag(tag)} style={{
                      fontSize: 12, padding: '5px 13px', border: '1px solid var(--border)', borderRadius: 12,
                      background: selectedTags.includes(tag) ? 'var(--ink)' : 'none',
                      color: selectedTags.includes(tag) ? 'var(--cream)' : 'var(--muted)'
                    }}>{tag}</button>
                  ))}
                </div>
              </>
            )}

            {postType === 'Photo' && (
              <>
                {!imagePreview ? (
                  <div onClick={() => fileRef.current.click()} style={{
                    border: '1.5px dashed var(--border)', borderRadius: 10, padding: 40,
                    display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                    cursor: 'pointer', marginBottom: 14, color: 'var(--muted)'
                  }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: 8 }}>
                      <rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/>
                    </svg>
                    <span style={{ fontSize: 13 }}>Tap to upload a photo</span>
                  </div>
                ) : (
                  <div style={{ position: 'relative', marginBottom: 12 }}>
                    <img src={imagePreview} alt="" style={{ width: '100%', maxHeight: 300, objectFit: 'cover', borderRadius: 10, display: 'block' }} />
                    <button onClick={() => { setImageFile(null); setImagePreview(null) }} style={{
                      position: 'absolute', top: 8, right: 8, background: 'rgba(0,0,0,0.5)', color: '#fff',
                      border: 'none', borderRadius: '50%', width: 26, height: 26, fontSize: 11, cursor: 'pointer'
                    }}>✕</button>
                  </div>
                )}
                <input type="file" accept="image/*" ref={fileRef} style={{ display: 'none' }} onChange={handleImageSelect} />
                <textarea value={caption} onChange={e => setCaption(e.target.value)} placeholder="Add a caption..." rows={3} style={{
                  width: '100%', border: 'none', outline: 'none', fontSize: 15, lineHeight: 1.7,
                  resize: 'none', background: 'transparent', color: 'var(--ink)', display: 'block', minHeight: 60
                }} />
                <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginTop: 12 }}>
                  {TAG_OPTIONS.map(tag => (
                    <button key={tag} onClick={() => toggleTag(tag)} style={{
                      fontSize: 12, padding: '5px 13px', border: '1px solid var(--border)', borderRadius: 12,
                      background: selectedTags.includes(tag) ? 'var(--ink)' : 'none',
                      color: selectedTags.includes(tag) ? 'var(--cream)' : 'var(--muted)'
                    }}>{tag}</button>
                  ))}
                </div>
              </>
            )}

            {postType === 'Thought' && (
              <>
                <textarea value={thought} onChange={e => setThought(e.target.value)} placeholder="What's on your mind..." rows={5} style={{
                  width: '100%', border: 'none', outline: 'none', fontFamily: "'Lora', serif",
                  fontStyle: 'italic', fontSize: 18, lineHeight: 1.7, resize: 'none',
                  background: 'transparent', color: 'var(--ink)', display: 'block'
                }} />
                <div style={{ marginTop: 14 }}>
                  <p style={{ fontSize: 12, color: 'var(--muted)', marginBottom: 6 }}>Spotify track (optional)</p>
                  <input
                    value={spotifyUrl}
                    onChange={e => setSpotifyUrl(e.target.value)}
                    placeholder="Paste Spotify link or track ID..."
                    style={{
                      width: '100%', padding: '9px 12px', border: '1px solid var(--border)', borderRadius: 8,
                      fontSize: 13, background: 'var(--surface2)', color: 'var(--ink)', outline: 'none'
                    }}
                  />
                  {spotifyUrl && extractSpotifyId(spotifyUrl) && (
                    <p style={{ fontSize: 11, color: 'var(--accent)', marginTop: 4 }}>✓ Spotify track detected</p>
                  )}
                  {spotifyUrl && !extractSpotifyId(spotifyUrl) && (
                    <p style={{ fontSize: 11, color: '#c0392b', marginTop: 4 }}>Paste the full Spotify share link</p>
                  )}
                </div>
              </>
            )}

            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 10, marginTop: 16, paddingTop: 14, borderTop: '1px solid var(--border)' }}>
              <button onClick={resetCompose} style={{
                fontSize: 13, padding: '9px 18px', background: 'none', border: '1px solid var(--border)', borderRadius: 20, color: 'var(--muted)'
              }}>Cancel</button>
              <button onClick={handlePublish} disabled={saving} style={{
                fontSize: 13, padding: '9px 20px', background: 'var(--ink)', color: 'var(--cream)', border: 'none', borderRadius: 20
              }}>{saving ? 'Saving...' : 'Publish'}</button>
            </div>
          </div>
        </div>
      )}

      <main style={{ marginTop: 36 }}>
        {loading && <p style={{ color: 'var(--muted)', fontSize: 14, textAlign: 'center', padding: '60px 0' }}>Loading...</p>}

        {!loading && filtered.length === 0 && (
          <div style={{ textAlign: 'center', padding: '80px 0', color: 'var(--muted)' }}>
            <p style={{ fontSize: 14 }}>Nothing here yet.</p>
            <p style={{ fontSize: 13, marginTop: 6 }}>Hit + New to write your first post.</p>
          </div>
        )}

        {filtered.map(post => (
          <div key={post.id} style={{ padding: '28px 0', borderBottom: '1px solid var(--border)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 11, color: 'var(--muted)', letterSpacing: '0.4px', textTransform: 'uppercase', marginBottom: 10, flexWrap: 'wrap' }}>
              <span>{formatDate(post.createdAt)}</span>
              <span style={{ opacity: 0.4, margin: '0 2px' }}>·</span>
              <span>{post.type}</span>
              {post.tags?.map(tag => (
                <span key={tag} style={{ fontSize: 11, background: 'var(--tag-bg)', color: 'var(--tag-color)', padding: '2px 8px', borderRadius: 8, marginLeft: 4 }}>{tag}</span>
              ))}
              <button onClick={() => handleDelete(post.id)} style={{ marginLeft: 'auto', fontSize: 11, background: 'none', border: 'none', color: 'var(--border)', cursor: 'pointer', padding: '2px 6px' }}>Delete</button>
            </div>

            {post.type === 'Essay' && (
              <>
                <h2 style={{ fontFamily: "'Lora', serif", fontSize: 22, fontWeight: 500, lineHeight: 1.3, marginBottom: 10, color: 'var(--ink)' }}>{post.title}</h2>
                <p style={{ fontSize: 15, lineHeight: 1.75, color: 'var(--body-text)', whiteSpace: 'pre-wrap' }}>{post.body}</p>
              </>
            )}

            {post.type === 'Photo' && (
              <>
                {post.imageUrl && <img src={post.imageUrl} alt={post.caption} style={{ width: '100%', maxHeight: 420, objectFit: 'cover', borderRadius: 10, marginBottom: 12, display: 'block' }} />}
                {post.caption && <p style={{ fontSize: 15, lineHeight: 1.75, color: 'var(--body-text)' }}>{post.caption}</p>}
              </>
            )}

            {post.type === 'Thought' && (
              <>
                <p style={{ fontFamily: "'Lora', serif", fontStyle: 'italic', fontSize: 20, lineHeight: 1.6, color: 'var(--thought-text)', marginBottom: post.spotifyId ? 16 : 0 }}>"{post.thought}"</p>
                {post.spotifyId && (
                  <iframe
                    src={`https://open.spotify.com/embed/track/${post.spotifyId}?utm_source=generator&theme=${dark ? 0 : 1}`}
                    width="100%"
                    height="80"
                    frameBorder="0"
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                    style={{ borderRadius: 10, marginTop: 4 }}
                  />
                )}
              </>
            )}
          </div>
        ))}
      </main>

      <div className="mobile-bottom-bar" style={{
        display: 'none', position: 'fixed', bottom: 0, left: 0, right: 0,
        background: 'var(--surface)', borderTop: '1px solid var(--border)',
        padding: '10px 16px 24px', gap: 6, zIndex: 100, justifyContent: 'center', flexWrap: 'wrap'
      }}>
        {TABS.map(t => (
          <button key={t} onClick={() => setFilter(t)} style={{
            fontSize: 13, padding: '7px 16px',
            background: filter === t ? 'var(--ink)' : 'var(--surface2)',
            border: '1px solid var(--border)', borderRadius: 20,
            color: filter === t ? 'var(--cream)' : 'var(--muted)'
          }}>{t}</button>
        ))}
      </div>
    </div>
  )
}