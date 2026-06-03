import { useState, useEffect, useRef } from 'react'
import { signOut } from 'firebase/auth'
import {
  collection, addDoc, getDocs, deleteDoc, doc,
  orderBy, query, serverTimestamp
} from 'firebase/firestore'
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import { auth, db, storage } from '../firebase'

const TABS = ['All', 'Essay', 'Photo', 'Thought']

export default function Dashboard() {
  const [posts, setPosts] = useState([])
  const [filter, setFilter] = useState('All')
  const [composing, setComposing] = useState(false)
  const [postType, setPostType] = useState('Essay')
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [imageFile, setImageFile] = useState(null)
  const [imagePreview, setImagePreview] = useState(null)
  const [caption, setCaption] = useState('')
  const [thought, setThought] = useState('')
  const [saving, setSaving] = useState(false)
  const [loading, setLoading] = useState(true)
  const [activeTag, setActiveTag] = useState(null)
  const [selectedTags, setSelectedTags] = useState([])
  const fileRef = useRef()

  const TAG_OPTIONS = ['life', 'ideas', 'travel', 'work', 'random']

  useEffect(() => { fetchPosts() }, [])

  async function fetchPosts() {
    setLoading(true)
    try {
      const q = query(collection(db, 'posts'), orderBy('createdAt', 'desc'))
      const snap = await getDocs(q)
      setPosts(snap.docs.map(d => ({ id: d.id, ...d.data() })))
    } catch (e) {
      console.error(e)
    }
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
        data = { ...data, thought }
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
    setTitle(''); setBody(''); setCaption(''); setThought('')
    setImageFile(null); setImagePreview(null); setSelectedTags([])
    setPostType('Essay')
  }

  function handleImageSelect(e) {
    const file = e.target.files[0]
    if (!file) return
    setImageFile(file)
    setImagePreview(URL.createObjectURL(file))
  }

  function toggleTag(tag) {
    setSelectedTags(prev =>
      prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
    )
  }

  function formatDate(ts) {
    if (!ts) return ''
    const d = ts.toDate ? ts.toDate() : new Date(ts)
    return d.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
  }

  const filtered = posts.filter(p => {
    if (filter !== 'All' && p.type !== filter) return false
    return true
  })

  return (
    <div style={s.wrap}>
      {/* Header */}
      <header style={s.header}>
        <span style={s.logo}>Willy's space</span>
        <div style={s.headerRight}>
          <div style={s.filterRow}>
            {TABS.map(t => (
              <button key={t} style={{ ...s.tab, ...(filter === t ? s.tabActive : {}) }} onClick={() => setFilter(t)}>{t}</button>
            ))}
          </div>
          <button style={s.newBtn} onClick={() => setComposing(true)}>+ New</button>
          <button style={s.logoutBtn} onClick={() => signOut(auth)} title="Log out">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/>
            </svg>
          </button>
        </div>
      </header>

      {/* Compose drawer */}
      {composing && (
        <div style={s.drawer}>
          <div style={s.drawerInner}>
            {/* Type selector */}
            <div style={s.typeTabs}>
              {['Essay', 'Photo', 'Thought'].map(t => (
                <button key={t} style={{ ...s.typeTab, ...(postType === t ? s.typeTabActive : {}) }} onClick={() => setPostType(t)}>{t}</button>
              ))}
            </div>

            {postType === 'Essay' && (
              <>
                <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Title..." style={s.titleInput} />
                <textarea value={body} onChange={e => setBody(e.target.value)} placeholder="Start writing..." style={s.bodyText} rows={8} />
                <div style={s.tagRow}>
                  {TAG_OPTIONS.map(tag => (
                    <button key={tag} style={{ ...s.tagBtn, ...(selectedTags.includes(tag) ? s.tagBtnActive : {}) }} onClick={() => toggleTag(tag)}>{tag}</button>
                  ))}
                </div>
              </>
            )}

            {postType === 'Photo' && (
              <>
                {!imagePreview ? (
                  <div style={s.dropZone} onClick={() => fileRef.current.click()}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#aaa" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: 8 }}>
                      <rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/>
                    </svg>
                    <span style={{ fontSize: 13, color: '#aaa' }}>Click to upload a photo</span>
                  </div>
                ) : (
                  <div style={{ position: 'relative' }}>
                    <img src={imagePreview} alt="" style={s.imgPreview} />
                    <button onClick={() => { setImageFile(null); setImagePreview(null) }} style={s.removeImg}>✕</button>
                  </div>
                )}
                <input type="file" accept="image/*" ref={fileRef} style={{ display: 'none' }} onChange={handleImageSelect} />
                <textarea value={caption} onChange={e => setCaption(e.target.value)} placeholder="Add a caption..." style={{ ...s.bodyText, minHeight: 60 }} rows={3} />
                <div style={s.tagRow}>
                  {TAG_OPTIONS.map(tag => (
                    <button key={tag} style={{ ...s.tagBtn, ...(selectedTags.includes(tag) ? s.tagBtnActive : {}) }} onClick={() => toggleTag(tag)}>{tag}</button>
                  ))}
                </div>
              </>
            )}

            {postType === 'Thought' && (
              <textarea value={thought} onChange={e => setThought(e.target.value)} placeholder="What's on your mind..." style={{ ...s.bodyText, fontFamily: "'Lora', serif", fontStyle: 'italic', fontSize: 18 }} rows={5} />
            )}

            <div style={s.drawerFooter}>
              <button style={s.cancelBtn} onClick={resetCompose}>Cancel</button>
              <button style={s.publishBtn} onClick={handlePublish} disabled={saving}>
                {saving ? 'Saving...' : 'Publish'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Feed */}
      <main style={s.feed}>
        {loading && <p style={{ color: '#aaa', fontSize: 14, textAlign: 'center', padding: '60px 0' }}>Loading...</p>}

        {!loading && filtered.length === 0 && (
          <div style={{ textAlign: 'center', padding: '80px 0', color: '#aaa' }}>
            <p style={{ fontSize: 14 }}>Nothing here yet.</p>
            <p style={{ fontSize: 13, marginTop: 6 }}>Hit + New to write your first post.</p>
          </div>
        )}

        {filtered.map(post => (
          <div key={post.id} style={s.post}>
            <div style={s.postMeta}>
              <span>{formatDate(post.createdAt)}</span>
              <span style={{ margin: '0 6px', opacity: 0.4 }}>·</span>
              <span>{post.type}</span>
              {post.tags?.map(tag => (
                <span key={tag} style={s.tag}>{tag}</span>
              ))}
              <button style={s.deleteBtn} onClick={() => handleDelete(post.id)}>Delete</button>
            </div>

            {post.type === 'Essay' && (
              <>
                <h2 style={s.postTitle}>{post.title}</h2>
                <p style={s.postBody}>{post.body}</p>
              </>
            )}

            {post.type === 'Photo' && (
              <>
                {post.imageUrl && <img src={post.imageUrl} alt={post.caption} style={s.postImage} />}
                {post.caption && <p style={s.postBody}>{post.caption}</p>}
              </>
            )}

            {post.type === 'Thought' && (
              <p style={s.thoughtText}>"{post.thought}"</p>
            )}
          </div>
        ))}
      </main>
    </div>
  )
}

const s = {
  wrap: { maxWidth: 680, margin: '0 auto', padding: '0 24px 80px' },
  header: { display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '28px 0', borderBottom: '1px solid #e8e6e0', flexWrap: 'wrap', gap: 12 },
  logo: { fontFamily: "'Lora', serif", fontSize: 20, letterSpacing: '-0.3px' },
  headerRight: { display: 'flex', alignItems: 'center', gap: 12 },
  filterRow: { display: 'flex', gap: 4 },
  tab: { fontSize: 12, padding: '5px 12px', background: 'none', border: '1px solid transparent', borderRadius: 20, color: '#888', letterSpacing: '0.2px' },
  tabActive: { border: '1px solid #e8e6e0', color: '#1a1a18', background: '#fff' },
  newBtn: { fontSize: 13, padding: '7px 16px', background: '#1a1a18', color: '#fff', border: 'none', borderRadius: 20 },
  logoutBtn: { background: 'none', border: '1px solid #e8e6e0', borderRadius: 8, padding: '6px 8px', color: '#888', display: 'flex', alignItems: 'center' },
  drawer: { background: '#fff', border: '1px solid #e8e6e0', borderRadius: 14, margin: '28px 0', overflow: 'hidden' },
  drawerInner: { padding: '20px 24px' },
  typeTabs: { display: 'flex', gap: 0, marginBottom: 18, border: '1px solid #e8e6e0', borderRadius: 8, overflow: 'hidden', width: 'fit-content' },
  typeTab: { fontSize: 12, padding: '7px 16px', background: 'none', border: 'none', color: '#888', letterSpacing: '0.2px' },
  typeTabActive: { background: '#1a1a18', color: '#fff' },
  titleInput: { width: '100%', border: 'none', outline: 'none', fontFamily: "'Lora', serif", fontSize: 22, fontWeight: 500, color: '#1a1a18', background: 'transparent', marginBottom: 10, display: 'block' },
  bodyText: { width: '100%', border: 'none', outline: 'none', fontSize: 15, lineHeight: 1.7, resize: 'none', background: 'transparent', color: '#1a1a18', display: 'block', minHeight: 120 },
  tagRow: { display: 'flex', gap: 6, flexWrap: 'wrap', marginTop: 12 },
  tagBtn: { fontSize: 11, padding: '4px 12px', border: '1px solid #e8e6e0', borderRadius: 12, background: 'none', color: '#888', letterSpacing: '0.2px' },
  tagBtnActive: { background: '#1a1a18', color: '#fff', borderColor: '#1a1a18' },
  dropZone: { border: '1.5px dashed #e0ddd7', borderRadius: 10, padding: 40, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', marginBottom: 14 },
  imgPreview: { width: '100%', maxHeight: 340, objectFit: 'cover', borderRadius: 10, display: 'block', marginBottom: 12 },
  removeImg: { position: 'absolute', top: 8, right: 8, background: 'rgba(0,0,0,0.5)', color: '#fff', border: 'none', borderRadius: '50%', width: 26, height: 26, fontSize: 11, cursor: 'pointer' },
  drawerFooter: { display: 'flex', justifyContent: 'flex-end', gap: 10, marginTop: 16, paddingTop: 14, borderTop: '1px solid #e8e6e0' },
  cancelBtn: { fontSize: 13, padding: '8px 18px', background: 'none', border: '1px solid #e8e6e0', borderRadius: 20, color: '#888' },
  publishBtn: { fontSize: 13, padding: '8px 20px', background: '#1a1a18', color: '#fff', border: 'none', borderRadius: 20 },
  feed: { marginTop: 40 },
  post: { padding: '28px 0', borderBottom: '1px solid #e8e6e0' },
  postMeta: { display: 'flex', alignItems: 'center', gap: 4, fontSize: 11, color: '#aaa', letterSpacing: '0.5px', textTransform: 'uppercase', marginBottom: 10, flexWrap: 'wrap' },
  tag: { fontSize: 11, background: '#f0ede8', color: '#888', padding: '2px 8px', borderRadius: 8, marginLeft: 4 },
  deleteBtn: { marginLeft: 'auto', fontSize: 11, background: 'none', border: 'none', color: '#ccc', cursor: 'pointer', padding: '2px 6px' },
  postTitle: { fontFamily: "'Lora', serif", fontSize: 22, fontWeight: 500, lineHeight: 1.3, marginBottom: 10, color: '#1a1a18' },
  postBody: { fontSize: 15, lineHeight: 1.75, color: '#444', whiteSpace: 'pre-wrap' },
  postImage: { width: '100%', maxHeight: 400, objectFit: 'cover', borderRadius: 10, marginBottom: 12, display: 'block' },
  thoughtText: { fontFamily: "'Lora', serif", fontStyle: 'italic', fontSize: 20, lineHeight: 1.6, color: '#333' },
}
