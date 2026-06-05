import { useState, useEffect, useRef } from 'react'
import { signOut } from 'firebase/auth'
import {
  collection, addDoc, getDocs, deleteDoc, doc,
  orderBy, query, serverTimestamp, updateDoc, arrayUnion
} from 'firebase/firestore'
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import { auth, db, storage } from '../firebase'

const TABS = ['All', 'Thought', 'Photo', 'Grateful', 'Day']

function extractSpotifyId(input) {
  if (!input) return null
  const match = input.match(/track\/([a-zA-Z0-9]+)/)
  if (match) return match[1]
  if (/^[a-zA-Z0-9]{22}$/.test(input.trim())) return input.trim()
  return null
}

function todayKey() {
  return new Date().toISOString().slice(0, 10)
}

function formatDayLabel(key) {
  const d = new Date(key + 'T12:00:00')
  return d.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })
}

export default function Dashboard() {
  const [posts, setPosts] = useState([])
  const [filter, setFilter] = useState('All')
  const [composing, setComposing] = useState(false)
  const [postType, setPostType] = useState('Thought')
  const [imageFile, setImageFile] = useState(null)
  const [imagePreview, setImagePreview] = useState(null)
  const [caption, setCaption] = useState('')
  const [thought, setThought] = useState('')
  const [spotifyUrl, setSpotifyUrl] = useState('')
  const [grateful, setGrateful] = useState('')
  const [todos, setTodos] = useState(['', '', ''])
  const [saving, setSaving] = useState(false)
  const [loading, setLoading] = useState(true)
  const [dark, setDark] = useState(() => localStorage.getItem('theme') === 'dark')
  const [replyingTo, setReplyingTo] = useState(null)
  const [replyText, setReplyText] = useState('')
  const [replySaving, setReplySaving] = useState(false)
  const [editingDay, setEditingDay] = useState(null)
  const [actuallyDid, setActuallyDid] = useState('')
  const [addingTodoTo, setAddingTodoTo] = useState(null)
  const [newTodoText, setNewTodoText] = useState('')
  const [blurred, setBlurred] = useState(false)
  const fileRef = useRef()

  const t = {
    bg:          dark ? '#111110' : '#faf9f7',
    ink:         dark ? '#f0ede8' : '#1a1a18',
    muted:       dark ? '#666'    : '#888',
    border:      dark ? '#2a2a28' : '#e8e6e0',
    surface:     dark ? '#1c1c1a' : '#ffffff',
    surface2:    dark ? '#222220' : '#f4f2ef',
    bodyText:    dark ? '#bbb'    : '#444',
    thoughtText: dark ? '#ccc'    : '#333',
    accent:      dark ? '#5a9e70' : '#2d5a3d',
    green:       dark ? '#4a9e6a' : '#2d5a3d',
  }

  useEffect(() => {
    document.body.style.background = t.bg
    document.body.style.color = t.ink
    localStorage.setItem('theme', dark ? 'dark' : 'light')
  }, [dark])

  useEffect(() => { fetchPosts() }, [])

  function toggleDark() { setDark(d => !d) }

  function handleNewPost() {
    const typeMap = { Thought: 'Thought', Photo: 'Photo', Grateful: 'Grateful', Day: 'Day' }
    setPostType(typeMap[filter] || 'Thought')
    setComposing(true)
  }

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
      if (postType === 'Photo') {
        let imageUrl = null
        if (imageFile) {
          const storageRef = ref(storage, `photos/${Date.now()}_${imageFile.name}`)
          await uploadBytes(storageRef, imageFile)
          imageUrl = await getDownloadURL(storageRef)
        }
        data = { ...data, caption, imageUrl }
      } else if (postType === 'Thought') {
        if (!thought.trim()) { setSaving(false); return }
        const spotifyId = extractSpotifyId(spotifyUrl)
        data = { ...data, thought, spotifyId, replies: [] }
      } else if (postType === 'Grateful') {
        if (!grateful.trim()) { setSaving(false); return }
        data = { ...data, grateful }
      } else if (postType === 'Day') {
        const filteredTodos = todos.filter(t => t.trim())
        if (!filteredTodos.length) { setSaving(false); return }
        const existing = posts.find(p => p.type === 'Day' && p.dayKey === todayKey())
        if (existing) { alert("You've already created today's day entry."); setSaving(false); return }
        data = { ...data, dayKey: todayKey(), todos: filteredTodos.map(text => ({ text, done: false })), actuallyDid: '' }
      }
      const docRef = await addDoc(collection(db, 'posts'), data)
      setPosts(prev => [{ id: docRef.id, ...data, createdAt: { toDate: () => new Date() } }, ...prev])
      resetCompose()
    } catch (e) { console.error(e); alert('Failed to save.') }
    setSaving(false)
  }

  async function toggleTodo(postId, index) {
    const post = posts.find(p => p.id === postId)
    if (!post) return
    const updatedTodos = post.todos.map((todo, i) => i === index ? { ...todo, done: !todo.done } : todo)
    await updateDoc(doc(db, 'posts', postId), { todos: updatedTodos })
    setPosts(prev => prev.map(p => p.id === postId ? { ...p, todos: updatedTodos } : p))
  }

  async function addTodoToPost(postId) {
    if (!newTodoText.trim()) return
    const post = posts.find(p => p.id === postId)
    if (!post) return
    const updatedTodos = [...post.todos, { text: newTodoText.trim(), done: false }]
    await updateDoc(doc(db, 'posts', postId), { todos: updatedTodos })
    setPosts(prev => prev.map(p => p.id === postId ? { ...p, todos: updatedTodos } : p))
    setNewTodoText('')
    setAddingTodoTo(null)
  }

  async function saveActuallyDid(postId) {
    const trimmed = actuallyDid.trim()
    await updateDoc(doc(db, 'posts', postId), { actuallyDid: trimmed })
    setPosts(prev => prev.map(p => p.id === postId ? { ...p, actuallyDid: trimmed } : p))
    setEditingDay(null)
    setActuallyDid('')
  }

  async function handleReply(postId) {
    if (!replyText.trim()) return
    setReplySaving(true)
    const reply = { text: replyText.trim(), createdAt: new Date().toISOString() }
    try {
      await updateDoc(doc(db, 'posts', postId), { replies: arrayUnion(reply) })
      setPosts(prev => prev.map(p => p.id === postId ? { ...p, replies: [...(p.replies || []), reply] } : p))
      setReplyText(''); setReplyingTo(null)
    } catch (e) { console.error(e) }
    setReplySaving(false)
  }

  async function handleDelete(id) {
    if (!confirm('Delete this post?')) return
    await deleteDoc(doc(db, 'posts', id))
    setPosts(prev => prev.filter(p => p.id !== id))
  }

  function resetCompose() {
    setComposing(false)
    setCaption(''); setThought(''); setSpotifyUrl(''); setGrateful('')
    setTodos(['', '', ''])
    setImageFile(null); setImagePreview(null)
    setPostType('Thought')
  }

  function handleImageSelect(e) {
    const file = e.target.files[0]
    if (!file) return
    setImageFile(file)
    setImagePreview(URL.createObjectURL(file))
  }

  function formatDate(ts) {
    if (!ts) return ''
    const d = ts.toDate ? ts.toDate() : new Date(ts)
    return d.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }) +
      ' · ' + d.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' })
  }

  function formatReplyDate(iso) {
    const d = new Date(iso)
    return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }) +
      ' · ' + d.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' })
  }

  const filtered = posts.filter(p => filter === 'All' || p.type === filter)

  const DotToggle = () => (
    <button onClick={toggleDark} title="Toggle dark mode" style={{
      width: 32, height: 32, borderRadius: '50%',
      border: `1.5px solid ${t.ink}`,
      background: dark ? t.ink : 'transparent',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      transition: 'background 0.2s', cursor: 'pointer', flexShrink: 0
    }}>
      {!dark && <div style={{ width: 10, height: 10, borderRadius: '50%', border: `1.5px solid ${t.ink}` }} />}
    </button>
  )

  const tabBtn = (label) => ({
    fontSize: 13, padding: '6px 14px',
    background: filter === label ? t.ink : 'none',
    border: `1px solid ${t.border}`, borderRadius: 20,
    color: filter === label ? t.bg : t.muted, letterSpacing: '0.2px'
  })

  const typeBtn = (label) => ({
    fontSize: 13, padding: '8px 16px',
    background: postType === label ? t.ink : 'none',
    border: 'none',
    color: postType === label ? t.bg : t.muted, letterSpacing: '0.2px'
  })

  return (
    <div style={{ maxWidth: 680, margin: '0 auto', padding: '0 20px 120px', color: t.ink, background: t.bg, minHeight: '100vh' }}>

      {/* Header */}
      <header style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '24px 0 20px', borderBottom: `1px solid ${t.border}`, flexWrap: 'wrap', gap: 10 }}>
        <span style={{ fontFamily: "'Lora', serif", fontSize: 24, letterSpacing: '-0.3px', color: t.ink }}>Willy's space</span>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div className="header-filters" style={{ display: 'flex', gap: 4 }}>
            {TABS.map(tab => <button key={tab} onClick={() => setFilter(tab)} style={tabBtn(tab)}>{tab}</button>)}
          </div>
          {/* Blur toggle */}
          <button onClick={() => setBlurred(b => !b)} title="Privacy mode" style={{
            width: 32, height: 32, borderRadius: 8,
            border: `1px solid ${blurred ? t.ink : t.border}`,
            background: blurred ? t.ink : 'none',
            color: blurred ? t.bg : t.muted,
            display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0
          }}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              {blurred
                ? <><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/><path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/><line x1="1" y1="1" x2="23" y2="23"/></>
                : <><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></>
              }
            </svg>
          </button>
          <DotToggle />
          <button onClick={handleNewPost} style={{ fontSize: 14, padding: '8px 18px', background: t.ink, color: t.bg, border: 'none', borderRadius: 20, fontWeight: 500 }}>+ New</button>
          <button onClick={() => signOut(auth)} title="Log out" style={{ background: 'none', border: `1px solid ${t.border}`, borderRadius: 8, padding: '7px 9px', color: t.muted, display: 'flex', alignItems: 'center' }}>
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/>
            </svg>
          </button>
        </div>
      </header>

      {/* Compose */}
      {composing && (
        <div style={{ background: t.surface, border: `1px solid ${t.border}`, borderRadius: 14, margin: '24px 0' }}>
          <div style={{ padding: 20 }}>
            <div style={{ display: 'flex', marginBottom: 18, border: `1px solid ${t.border}`, borderRadius: 8, overflow: 'hidden', width: 'fit-content' }}>
              {['Thought', 'Photo', 'Grateful', 'Day'].map(tab => (
                <button key={tab} onClick={() => setPostType(tab)} style={typeBtn(tab)}>{tab}</button>
              ))}
            </div>

            {postType === 'Thought' && <>
              <textarea value={thought} onChange={e => setThought(e.target.value)} placeholder="What's on your mind..." rows={5}
                style={{ width: '100%', border: 'none', outline: 'none', fontSize: 16, lineHeight: 1.7, resize: 'none', background: 'transparent', color: t.ink, display: 'block' }} />
              <div style={{ marginTop: 14 }}>
                <p style={{ fontSize: 12, color: t.muted, marginBottom: 6 }}>Spotify track (optional)</p>
                <input value={spotifyUrl} onChange={e => setSpotifyUrl(e.target.value)} placeholder="Paste Spotify link or track ID..."
                  style={{ width: '100%', padding: '9px 12px', border: `1px solid ${t.border}`, borderRadius: 8, fontSize: 13, background: t.surface2, color: t.ink, outline: 'none' }} />
                {spotifyUrl && extractSpotifyId(spotifyUrl) && <p style={{ fontSize: 11, color: t.accent, marginTop: 4 }}>✓ Spotify track detected</p>}
                {spotifyUrl && !extractSpotifyId(spotifyUrl) && <p style={{ fontSize: 11, color: '#c0392b', marginTop: 4 }}>Paste the full Spotify share link</p>}
              </div>
            </>}

            {postType === 'Photo' && <>
              {!imagePreview ? (
                <div onClick={() => fileRef.current.click()} style={{ border: `1.5px dashed ${t.border}`, borderRadius: 10, padding: 40, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', marginBottom: 14, color: t.muted }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: 8 }}>
                    <rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/>
                  </svg>
                  <span style={{ fontSize: 13 }}>Tap to upload a photo</span>
                </div>
              ) : (
                <div style={{ position: 'relative', marginBottom: 12 }}>
                  <img src={imagePreview} alt="" style={{ width: '100%', maxHeight: 300, objectFit: 'contain', borderRadius: 10, display: 'block' }} />
                  <button onClick={() => { setImageFile(null); setImagePreview(null) }} style={{ position: 'absolute', top: 8, right: 8, background: 'rgba(0,0,0,0.5)', color: '#fff', border: 'none', borderRadius: '50%', width: 26, height: 26, fontSize: 11, cursor: 'pointer' }}>✕</button>
                </div>
              )}
              <input type="file" accept="image/*" ref={fileRef} style={{ display: 'none' }} onChange={handleImageSelect} />
              <textarea value={caption} onChange={e => setCaption(e.target.value)} placeholder="Add a caption..." rows={3}
                style={{ width: '100%', border: 'none', outline: 'none', fontSize: 15, lineHeight: 1.7, resize: 'none', background: 'transparent', color: t.ink, display: 'block', minHeight: 60 }} />
            </>}

            {postType === 'Grateful' && <>
              <p style={{ fontSize: 13, color: t.muted, marginBottom: 10 }}>What are you grateful for today?</p>
              <textarea value={grateful} onChange={e => setGrateful(e.target.value)} placeholder="I'm grateful for..." rows={5}
                style={{ width: '100%', border: 'none', outline: 'none', fontSize: 16, lineHeight: 1.75, resize: 'none', background: 'transparent', color: t.ink, display: 'block' }} />
            </>}

            {postType === 'Day' && <>
              <p style={{ fontSize: 13, color: t.muted, marginBottom: 12 }}>What do you want to get done today?</p>
              {todos.map((todo, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
                  <div style={{ width: 18, height: 18, borderRadius: 4, border: `1.5px solid ${t.border}`, flexShrink: 0 }} />
                  <input value={todo} onChange={e => { const u = [...todos]; u[i] = e.target.value; setTodos(u) }}
                    placeholder={`Task ${i + 1}`}
                    style={{ flex: 1, border: 'none', outline: 'none', fontSize: 15, background: 'transparent', color: t.ink, borderBottom: `1px solid ${t.border}`, paddingBottom: 4 }} />
                </div>
              ))}
              <button onClick={() => setTodos([...todos, ''])} style={{ fontSize: 12, color: t.muted, background: 'none', border: 'none', cursor: 'pointer', padding: 0, marginTop: 4 }}>+ add task</button>
            </>}

            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 10, marginTop: 16, paddingTop: 14, borderTop: `1px solid ${t.border}` }}>
              <button onClick={resetCompose} style={{ fontSize: 13, padding: '9px 18px', background: 'none', border: `1px solid ${t.border}`, borderRadius: 20, color: t.muted }}>Cancel</button>
              <button onClick={handlePublish} disabled={saving} style={{ fontSize: 13, padding: '9px 20px', background: t.ink, color: t.bg, border: 'none', borderRadius: 20 }}>{saving ? 'Saving...' : 'Publish'}</button>
            </div>
          </div>
        </div>
      )}

      {/* Feed */}
      <main style={{ marginTop: 36 }}>
        {loading && <p style={{ color: t.muted, fontSize: 14, textAlign: 'center', padding: '60px 0' }}>Loading...</p>}
        {!loading && filtered.length === 0 && (
          <div style={{ textAlign: 'center', padding: '80px 0', color: t.muted }}>
            <p style={{ fontSize: 14 }}>Nothing here yet.</p>
            <p style={{ fontSize: 13, marginTop: 6 }}>Hit + New to write your first post.</p>
          </div>
        )}

        {filtered.map(post => (
          <div key={post.id} style={{ padding: '28px 0', borderBottom: `1px solid ${t.border}` }}>

            {/* Meta — never blurred */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 11, color: t.muted, letterSpacing: '0.4px', textTransform: 'uppercase', marginBottom: 10, flexWrap: 'wrap' }}>
              <span>{formatDate(post.createdAt)}</span>
              <span style={{ opacity: 0.4, margin: '0 2px' }}>·</span>
              <span>{post.type}</span>
              <button onClick={() => handleDelete(post.id)} style={{ marginLeft: 'auto', fontSize: 11, background: 'none', border: 'none', color: t.border, cursor: 'pointer', padding: '2px 6px' }}>Delete</button>
            </div>

            {/* Content — blurred in privacy mode */}
            <div style={{ filter: blurred ? 'blur(12px)' : 'none', userSelect: blurred ? 'none' : 'auto', transition: 'filter 0.2s', pointerEvents: blurred ? 'none' : 'auto' }}>

              {post.type === 'Thought' && <>
                <p style={{ fontSize: 17, lineHeight: 1.75, color: t.thoughtText, marginBottom: post.spotifyId ? 16 : 0 }}>"{post.thought}"</p>
                {post.spotifyId && (
                  <iframe src={`https://open.spotify.com/embed/track/${post.spotifyId}?utm_source=generator&theme=${dark ? 0 : 1}`}
                    width="100%" height="80" frameBorder="0"
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy" style={{ borderRadius: 10, marginTop: 4 }} />
                )}
                {post.replies?.length > 0 && (
                  <div style={{ marginTop: 20, paddingLeft: 16, borderLeft: `2px solid ${t.border}` }}>
                    {post.replies.map((r, i) => (
                      <div key={i} style={{ marginBottom: 14 }}>
                        <p style={{ fontSize: 11, color: t.muted, marginBottom: 4 }}>{formatReplyDate(r.createdAt)}</p>
                        <p style={{ fontSize: 15, lineHeight: 1.75, color: t.thoughtText }}>"{r.text}"</p>
                      </div>
                    ))}
                  </div>
                )}
                {replyingTo === post.id ? (
                  <div style={{ marginTop: 16, paddingLeft: 16, borderLeft: `2px solid ${t.ink}` }}>
                    <textarea value={replyText} onChange={e => setReplyText(e.target.value)} placeholder="Revisit this thought..." autoFocus rows={3}
                      style={{ width: '100%', border: 'none', outline: 'none', fontSize: 15, lineHeight: 1.7, resize: 'none', background: 'transparent', color: t.ink, display: 'block' }} />
                    <div style={{ display: 'flex', gap: 8, marginTop: 8 }}>
                      <button onClick={() => { setReplyingTo(null); setReplyText('') }} style={{ fontSize: 12, padding: '6px 14px', background: 'none', border: `1px solid ${t.border}`, borderRadius: 20, color: t.muted }}>Cancel</button>
                      <button onClick={() => handleReply(post.id)} disabled={replySaving} style={{ fontSize: 12, padding: '6px 14px', background: t.ink, color: t.bg, border: 'none', borderRadius: 20 }}>{replySaving ? '...' : 'Add'}</button>
                    </div>
                  </div>
                ) : (
                  <button onClick={() => { setReplyingTo(post.id); setReplyText('') }} style={{ marginTop: 14, fontSize: 12, color: t.muted, background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>↩ revisit</button>
                )}
              </>}

              {post.type === 'Photo' && <>
                {post.imageUrl && <img src={post.imageUrl} alt={post.caption} style={{ width: '100%', objectFit: 'contain', borderRadius: 10, marginBottom: 12, display: 'block' }} />}
                {post.caption && <p style={{ fontSize: 15, lineHeight: 1.75, color: t.bodyText }}>{post.caption}</p>}
              </>}

              {post.type === 'Grateful' && (
                <p style={{ fontSize: 16, lineHeight: 1.8, color: t.bodyText, whiteSpace: 'pre-wrap' }}>{post.grateful}</p>
              )}

              {post.type === 'Day' && <>
                <p style={{ fontFamily: "'Lora', serif", fontSize: 18, fontWeight: 500, color: t.ink, marginBottom: 16 }}>{formatDayLabel(post.dayKey)}</p>
                <div style={{ marginBottom: 20 }}>
                  <p style={{ fontSize: 11, color: t.muted, letterSpacing: '0.5px', textTransform: 'uppercase', marginBottom: 10 }}>To-do</p>
                  {post.todos?.map((todo, i) => (
                    <div key={i} onClick={() => toggleTodo(post.id, i)} style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 10, cursor: 'pointer' }}>
                      <div style={{ width: 18, height: 18, borderRadius: 4, flexShrink: 0, border: `1.5px solid ${todo.done ? t.green : t.border}`, background: todo.done ? t.green : 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        {todo.done && <svg width="10" height="10" viewBox="0 0 12 12" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="2 6 5 9 10 3"/></svg>}
                      </div>
                      <span style={{ fontSize: 15, color: todo.done ? t.muted : t.ink, textDecoration: todo.done ? 'line-through' : 'none', lineHeight: 1.5 }}>{todo.text}</span>
                    </div>
                  ))}
                  {addingTodoTo === post.id ? (
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginTop: 8 }}>
                      <div style={{ width: 18, height: 18, borderRadius: 4, border: `1.5px solid ${t.border}`, flexShrink: 0 }} />
                      <input value={newTodoText} onChange={e => setNewTodoText(e.target.value)}
                        onKeyDown={e => e.key === 'Enter' && addTodoToPost(post.id)}
                        placeholder="New task..." autoFocus
                        style={{ flex: 1, border: 'none', outline: 'none', fontSize: 15, background: 'transparent', color: t.ink, borderBottom: `1px solid ${t.border}`, paddingBottom: 4 }} />
                      <button onClick={() => addTodoToPost(post.id)} style={{ fontSize: 12, padding: '4px 12px', background: t.ink, color: t.bg, border: 'none', borderRadius: 12 }}>Add</button>
                      <button onClick={() => { setAddingTodoTo(null); setNewTodoText('') }} style={{ fontSize: 12, color: t.muted, background: 'none', border: 'none', cursor: 'pointer' }}>✕</button>
                    </div>
                  ) : (
                    <button onClick={() => setAddingTodoTo(post.id)} style={{ fontSize: 12, color: t.muted, background: 'none', border: 'none', cursor: 'pointer', padding: 0, marginTop: 6 }}>+ add task</button>
                  )}
                </div>
                <div style={{ paddingTop: 16, borderTop: `1px solid ${t.border}` }}>
                  <p style={{ fontSize: 11, color: t.muted, letterSpacing: '0.5px', textTransform: 'uppercase', marginBottom: 10 }}>What I actually did</p>
                  {editingDay === post.id ? (
                    <>
                      <textarea value={actuallyDid} onChange={e => setActuallyDid(e.target.value)} placeholder="What did you actually end up doing..." autoFocus rows={4}
                        style={{ width: '100%', border: 'none', outline: 'none', fontSize: 15, lineHeight: 1.7, resize: 'none', background: 'transparent', color: t.ink, display: 'block', borderBottom: `1px solid ${t.border}` }} />
                      <div style={{ display: 'flex', gap: 8, marginTop: 10 }}>
                        <button onClick={() => { setEditingDay(null); setActuallyDid('') }} style={{ fontSize: 12, padding: '6px 14px', background: 'none', border: `1px solid ${t.border}`, borderRadius: 20, color: t.muted }}>Cancel</button>
                        <button onClick={() => saveActuallyDid(post.id)} style={{ fontSize: 12, padding: '6px 14px', background: t.ink, color: t.bg, border: 'none', borderRadius: 20 }}>Save</button>
                      </div>
                    </>
                  ) : post.actuallyDid ? (
                    <>
                      <p style={{ fontSize: 15, lineHeight: 1.75, color: t.bodyText, whiteSpace: 'pre-wrap', marginBottom: 8 }}>{post.actuallyDid}</p>
                      <button onClick={() => { setEditingDay(post.id); setActuallyDid(post.actuallyDid) }} style={{ fontSize: 12, color: t.muted, background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>✏ edit</button>
                    </>
                  ) : (
                    <button onClick={() => { setEditingDay(post.id); setActuallyDid('') }} style={{ fontSize: 12, color: t.muted, background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>↩ revisit — what did you actually do?</button>
                  )}
                </div>
              </>}

            </div>{/* end blur wrapper */}
          </div>
        ))}
      </main>

      {/* Mobile bottom bar */}
      <div className="mobile-bottom-bar" style={{ display: 'none', position: 'fixed', bottom: 0, left: 0, right: 0, background: t.surface, borderTop: `1px solid ${t.border}`, padding: '10px 16px 24px', gap: 6, zIndex: 100, justifyContent: 'center', flexWrap: 'wrap' }}>
        {TABS.map(tab => (
          <button key={tab} onClick={() => setFilter(tab)} style={{ fontSize: 13, padding: '7px 16px', background: filter === tab ? t.ink : t.surface2, border: `1px solid ${t.border}`, borderRadius: 20, color: filter === tab ? t.bg : t.muted }}>{tab}</button>
        ))}
      </div>
    </div>
  )
}