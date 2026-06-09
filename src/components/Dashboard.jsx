import useIsInstalled from '../hooks/useIsInstalled'
import { useState, useEffect, useRef } from 'react'
import { signOut } from 'firebase/auth'
import {
  collection, addDoc, getDocs, deleteDoc, doc, getDoc,
  orderBy, query, serverTimestamp, updateDoc, arrayUnion, setDoc
} from 'firebase/firestore'
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import { auth, db, storage } from '../firebase'
import Onboarding from './Onboarding'

const TABS = ['All', 'Thought', 'Photo', 'Grateful', 'Day', 'Prompt']

const PROMPTS = [
  "What is something you believe that most people around you don't?",
  "If your life had a title right now, what would it be?",
  "What's a version of yourself you've abandoned? Do you miss them?",
  "What would you do differently if no one would ever find out?",
  "What fear has quietly been running your life?",
  "What's something you've never said out loud but need to?",
  "Who in your life challenges you the most, and what does that reveal about you?",
  "What does your ideal day look like, and how far is it from today?",
  "What have you outgrown but haven't let go of yet?",
  "What's a decision you made that changed everything?",
  "What do you want people to say about you at your funeral?",
  "Where in your life are you settling?",
  "What's the most honest thing you could say about yourself right now?",
  "What would you regret not doing in the next 5 years?",
  "What's a belief you inherited that you've never questioned?",
  "When do you feel most like yourself?",
  "What are you currently pretending not to know?",
  "What does success actually mean to you — not what you've been told?",
  "What's a pattern in your relationships you keep repeating?",
  "What would you attempt if failure wasn't possible?",
  "What part of your past do you still carry that no longer serves you?",
  "Who are you when no one is watching?",
  "What emotion do you avoid the most, and why?",
  "What's something you're proud of that you never talk about?",
  "What would you tell your 16-year-old self?",
  "What story do you tell yourself that might not be true?",
  "What are you waiting for permission to do?",
  "What does your gut tell you that your brain keeps overriding?",
  "What have you sacrificed for others that you secretly resent?",
  "If money wasn't a factor, what would your life look like?",
  "What chapter of your life are you currently in?",
  "What's the difference between who you are and who you want to be?",
  "What makes you feel most alive?",
  "What's a conversation you've been avoiding?",
  "What are you most curious about right now?",
  "What do you need more of in your life? Less of?",
  "What would it mean to truly forgive yourself?",
  "What's something you've changed your mind about recently?",
  "What kind of person do you want to be in a relationship?",
  "What are you most afraid people will find out about you?",
  "What does your body tell you that you often ignore?",
  "If you could restart one thing in your life, what would it be?",
  "What's a dream you've quietly given up on?",
  "What boundaries do you need to set but haven't?",
  "What does home mean to you?",
  "What's the bravest thing you've ever done?",
  "What are you grateful for that you never acknowledge?",
  "What would you do today if it were your last normal day?",
  "What's a compliment you've received that you never believed?",
  "What parts of yourself do you hide from the world?",
  "What's one thing you know you need to change but keep delaying?",
  "What does your relationship with money say about you?",
  "When did you last feel truly free?",
  "What's a value you hold that you've compromised recently?",
  "What do you envy in others, and what does that reveal about your desires?",
  "What's something you've done that you're still not sure was right?",
  "Who has shaped you the most, and how do you feel about that?",
  "What's the hardest lesson you've learned?",
  "What would a braver version of you do right now?",
  "What's something you love about yourself that took a long time to accept?",
  "What are you building, and does it feel meaningful?",
  "What does your inner critic sound like, and whose voice is it?",
  "What's a moment that changed how you see the world?",
  "What would you do if you weren't afraid of disappointing people?",
  "What's a version of your future that excites and terrifies you?",
  "What do you need to hear right now that no one is saying?",
  "What's something you've been carrying alone that you don't have to?",
  "What makes you feel most misunderstood?",
  "What's a habit that's quietly hurting you?",
  "What would you do if you knew you only had one year left?",
  "What does it feel like to be you on a hard day?",
  "What's something that used to scare you that no longer does?",
  "What's a question you're afraid to answer honestly?",
  "What brings you peace that you don't make enough time for?",
  "What's a risk worth taking that you've been putting off?",
  "What do you want your life to stand for?",
  "What's a moment where you surprised yourself?",
  "What are you teaching others by how you live?",
  "What would your life look like if you fully trusted yourself?",
]

function getDailyPrompt(offset = 0) {
  const start = new Date('2026-01-01')
  const now = new Date()
  const days = Math.floor((now - start) / (1000 * 60 * 60 * 24)) + offset
  return PROMPTS[((days % PROMPTS.length) + PROMPTS.length) % PROMPTS.length]
}

function todayKey() {
  return new Date().toISOString().slice(0, 10)
}

function formatDayLabel(key) {
  const d = new Date(key + 'T12:00:00')
  return d.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })
}

function getPostDate(post) {
  if (!post.createdAt) return new Date()
  return post.createdAt.toDate ? post.createdAt.toDate() : new Date(post.createdAt)
}

function getDayKey(date) { return date.toISOString().slice(0, 10) }
function getMonthKey(date) { return date.toISOString().slice(0, 7) }

function formatMonthLabel(key) {
  const [year, month] = key.split('-')
  return new Date(parseInt(year), parseInt(month) - 1).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })
}

function formatDayGroupLabel(key) {
  const d = new Date(key + 'T12:00:00')
  const today = todayKey()
  const yesterday = new Date()
  yesterday.setDate(yesterday.getDate() - 1)
  const yKey = yesterday.toISOString().slice(0, 10)
  if (key === today) return 'Today'
  if (key === yKey) return 'Yesterday'
  return d.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })
}

export default function Dashboard({ user }) {
  const uid = user.uid
  const postsCol = () => collection(db, 'users', uid, 'posts')
  const postDoc = (id) => doc(db, 'users', uid, 'posts', id)

  const [posts, setPosts] = useState([])
  const [filter, setFilter] = useState('All')
  const [groupBy, setGroupBy] = useState('none')
  const [collapsedGroups, setCollapsedGroups] = useState({})
  const [composing, setComposing] = useState(false)
  const [postType, setPostType] = useState('Thought')
  const [imageFile, setImageFile] = useState(null)
  const [imagePreview, setImagePreview] = useState(null)
  const [caption, setCaption] = useState('')
  const [thought, setThought] = useState('')
  const [spotifyUrl, setSpotifyUrl] = useState('')
  const [grateful, setGrateful] = useState('')
  const [todos, setTodos] = useState(['', '', ''])
  const [promptAnswer, setPromptAnswer] = useState('')
  const [promptOffset, setPromptOffset] = useState(0)
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
  const [firstName, setFirstName] = useState('')
  const [showOnboarding, setShowOnboarding] = useState(false)
  const [showInstallBanner, setShowInstallBanner] = useState(() => {
    return localStorage.getItem('installBannerDismissed') !== 'true'
  })
  const { installed, mobile } = useIsInstalled()
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

  useEffect(() => {
    fetchPosts()
    checkOnboarding()
  }, [])

  async function checkOnboarding() {
    console.log('checkOnboarding called, uid:', uid)
    try {
      const metaDoc = await getDoc(doc(db, 'users', uid, 'meta', 'onboarding'))
      if (!metaDoc.exists()) setShowOnboarding(true)
      const profileDoc = await getDoc(doc(db, 'users', uid, 'meta', 'profile'))
      console.log('profile exists:', profileDoc.exists())
      console.log('profile data:', profileDoc.data())
      if (profileDoc.exists()) setFirstName(profileDoc.data().firstName || '')
    } catch (e) { console.error('checkOnboarding error:', e) }
  }

  function toggleDark() { setDark(d => !d) }

  function handleNewPost() {
    const typeMap = { Thought: 'Thought', Photo: 'Photo', Grateful: 'Grateful', Day: 'Day', Prompt: 'Prompt' }
    setPostType(typeMap[filter] || 'Thought')
    setComposing(true)
  }

  function toggleGroup(key) {
    setCollapsedGroups(prev => ({ ...prev, [key]: !prev[key] }))
  }

  async function fetchPosts() {
    setLoading(true)
    try {
      const q = query(postsCol(), orderBy('createdAt', 'desc'))
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
          const storageRef = ref(storage, `users/${uid}/photos/${Date.now()}_${imageFile.name}`)
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
      } else if (postType === 'Prompt') {
        if (!promptAnswer.trim()) { setSaving(false); return }
        data = { ...data, prompt: getDailyPrompt(promptOffset), answer: promptAnswer }
      }
      const docRef = await addDoc(postsCol(), data)
      setPosts(prev => [{ id: docRef.id, ...data, createdAt: { toDate: () => new Date() } }, ...prev])
      resetCompose()
    } catch (e) { console.error(e); alert('Failed to save.') }
    setSaving(false)
  }

  async function toggleTodo(postId, index) {
    const post = posts.find(p => p.id === postId)
    if (!post) return
    const updatedTodos = post.todos.map((todo, i) => i === index ? { ...todo, done: !todo.done } : todo)
    await updateDoc(postDoc(postId), { todos: updatedTodos })
    setPosts(prev => prev.map(p => p.id === postId ? { ...p, todos: updatedTodos } : p))
  }

  async function addTodoToPost(postId) {
    if (!newTodoText.trim()) return
    const post = posts.find(p => p.id === postId)
    if (!post) return
    const updatedTodos = [...post.todos, { text: newTodoText.trim(), done: false }]
    await updateDoc(postDoc(postId), { todos: updatedTodos })
    setPosts(prev => prev.map(p => p.id === postId ? { ...p, todos: updatedTodos } : p))
    setNewTodoText(''); setAddingTodoTo(null)
  }

  async function saveActuallyDid(postId) {
    const trimmed = actuallyDid.trim()
    await updateDoc(postDoc(postId), { actuallyDid: trimmed })
    setPosts(prev => prev.map(p => p.id === postId ? { ...p, actuallyDid: trimmed } : p))
    setEditingDay(null); setActuallyDid('')
  }

  async function handleReply(postId) {
    if (!replyText.trim()) return
    setReplySaving(true)
    const reply = { text: replyText.trim(), createdAt: new Date().toISOString() }
    try {
      await updateDoc(postDoc(postId), { replies: arrayUnion(reply) })
      setPosts(prev => prev.map(p => p.id === postId ? { ...p, replies: [...(p.replies || []), reply] } : p))
      setReplyText(''); setReplyingTo(null)
    } catch (e) { console.error(e) }
    setReplySaving(false)
  }

  async function handleDelete(id) {
    if (!confirm('Delete this post?')) return
    await deleteDoc(postDoc(id))
    setPosts(prev => prev.filter(p => p.id !== id))
  }

  function resetCompose() {
    setComposing(false)
    setCaption(''); setThought(''); setSpotifyUrl(''); setGrateful(''); setPromptAnswer('')
    setTodos(['', '', '']); setPromptOffset(0)
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

  function extractSpotifyId(input) {
    if (!input) return null
    const match = input.match(/track\/([a-zA-Z0-9]+)/)
    if (match) return match[1]
    if (/^[a-zA-Z0-9]{22}$/.test(input.trim())) return input.trim()
    return null
  }

  const filtered = posts.filter(p => filter === 'All' || p.type === filter)

  function getGroupedPosts() {
    if (groupBy === 'none') return null
    const groups = {}
    filtered.forEach(post => {
      const date = getPostDate(post)
      const key = groupBy === 'day' ? getDayKey(date) : getMonthKey(date)
      if (!groups[key]) groups[key] = []
      groups[key].push(post)
    })
    return Object.entries(groups).sort((a, b) => b[0].localeCompare(a[0]))
  }

  const grouped = getGroupedPosts()

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

  function renderPost(post) {
    return (
      <div key={post.id} style={{ padding: '28px 0', borderBottom: `1px solid ${t.border}` }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 11, color: t.muted, letterSpacing: '0.4px', textTransform: 'uppercase', marginBottom: 10, flexWrap: 'wrap' }}>
          <span>{formatDate(post.createdAt)}</span>
          <span style={{ opacity: 0.4, margin: '0 2px' }}>·</span>
          <span>{post.type}</span>
          <button onClick={() => handleDelete(post.id)} style={{ marginLeft: 'auto', fontSize: 11, background: 'none', border: 'none', color: t.border, cursor: 'pointer', padding: '2px 6px' }}>Delete</button>
        </div>

        <div style={{ filter: blurred ? 'blur(8px)' : 'none', userSelect: blurred ? 'none' : 'auto', transition: 'filter 0.3s ease', pointerEvents: blurred ? 'none' : 'auto', opacity: blurred ? 0.6 : 1 }}>
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

          {post.type === 'Prompt' && <>
            <p style={{ fontSize: 13, color: t.accent, fontStyle: 'italic', marginBottom: 10, lineHeight: 1.5 }}>"{post.prompt}"</p>
            <p style={{ fontSize: 16, lineHeight: 1.8, color: t.bodyText, whiteSpace: 'pre-wrap' }}>{post.answer}</p>
          </>}

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

        </div>
      </div>
    )
  }

  return (
    <div style={{ maxWidth: 680, margin: '0 auto', padding: '0 20px 120px', color: t.ink, background: t.bg, minHeight: '100vh' }}>

{showOnboarding && (
  <Onboarding userId={uid} onDone={() => setShowOnboarding(false)} />
)}

{mobile && !installed && showInstallBanner && (
  <div style={{ background: t.surface2, border: `1px solid ${t.border}`, borderRadius: 10, padding: '12px 16px', margin: '20px 0 0', display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 12 }}>
    <div>
      <p style={{ fontSize: 13, color: t.ink, fontWeight: 500, marginBottom: 4 }}>📱 Add memoiv to your home screen</p>
      <p style={{ fontSize: 12, color: t.muted, lineHeight: 1.6 }}>
        iPhone: Share → <em>Add to Home Screen</em><br />
        Android: Menu (⋮) → <em>Add to Home Screen</em>
      </p>
    </div>
    <button onClick={() => {
      setShowInstallBanner(false)
      localStorage.setItem('installBannerDismissed', 'true')
    }} style={{ background: 'none', border: 'none', color: t.muted, fontSize: 18, cursor: 'pointer', flexShrink: 0, lineHeight: 1 }}>✕</button>
  </div>
)}
      <header style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 0 14px', borderBottom: `1px solid ${t.border}`, flexWrap: 'wrap', gap: 8 }}>
      <span style={{ fontFamily: "'Lora', serif", fontSize: 24, letterSpacing: '-0.3px', color: t.ink }}>
        {firstName ? `${firstName}'s memoiv` : 'memoiv'}
      </span>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div className="header-filters" style={{ display: 'flex', gap: 4 }}>
            {TABS.map(tab => <button key={tab} onClick={() => setFilter(tab)} style={tabBtn(tab)}>{tab}</button>)}
          </div>
          <div style={{ display: 'flex', border: `1px solid ${t.border}`, borderRadius: 8 }}>            {[['none', '—'], ['day', 'D'], ['month', 'M']].map(([val, label]) => (
              <button key={val} onClick={() => setGroupBy(val)} style={{
                fontSize: 12, padding: '6px 10px', background: groupBy === val ? t.ink : 'none',
                border: 'none', color: groupBy === val ? t.bg : t.muted, cursor: 'pointer'
              }}>{label}</button>
            ))}
          </div>
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

      {composing && (
        <div style={{ background: t.surface, border: `1px solid ${t.border}`, borderRadius: 14, margin: '24px 0' }}>
          <div style={{ padding: 20 }}>
            <div style={{ display: 'flex', marginBottom: 18, border: `1px solid ${t.border}`, borderRadius: 8, overflow: 'auto', width: '100%' }}>
              {['Thought', 'Photo', 'Grateful', 'Day', 'Prompt'].map(tab => (
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

            {postType === 'Prompt' && <>
              <div style={{ background: t.surface2, borderRadius: 10, padding: '14px 16px', marginBottom: 16 }}>
                <p style={{ fontSize: 14, color: t.accent, fontStyle: 'italic', lineHeight: 1.6, marginBottom: 10 }}>"{getDailyPrompt(promptOffset)}"</p>
                <button onClick={() => setPromptOffset(o => o + 1)} style={{ fontSize: 11, color: t.muted, background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>↻ different prompt</button>
              </div>
              <textarea value={promptAnswer} onChange={e => setPromptAnswer(e.target.value)} placeholder="Write your answer..." rows={7}
                style={{ width: '100%', border: 'none', outline: 'none', fontSize: 16, lineHeight: 1.75, resize: 'none', background: 'transparent', color: t.ink, display: 'block' }} />
            </>}

            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 10, marginTop: 16, paddingTop: 14, borderTop: `1px solid ${t.border}` }}>
              <button onClick={resetCompose} style={{ fontSize: 13, padding: '9px 18px', background: 'none', border: `1px solid ${t.border}`, borderRadius: 20, color: t.muted }}>Cancel</button>
              <button onClick={handlePublish} disabled={saving} style={{ fontSize: 13, padding: '9px 20px', background: t.ink, color: t.bg, border: 'none', borderRadius: 20 }}>{saving ? 'Saving...' : 'Publish'}</button>
            </div>
          </div>
        </div>
      )}

      <main style={{ marginTop: 36 }}>
        {loading && <p style={{ color: t.muted, fontSize: 14, textAlign: 'center', padding: '60px 0' }}>Loading...</p>}
        {!loading && filtered.length === 0 && (
          <div style={{ textAlign: 'center', padding: '80px 0', color: t.muted }}>
            <p style={{ fontSize: 14 }}>Nothing here yet.</p>
            <p style={{ fontSize: 13, marginTop: 6 }}>Hit + New to write your first post.</p>
          </div>
        )}
        {grouped ? (
          grouped.map(([groupKey, groupPosts]) => (
            <div key={groupKey} style={{ marginBottom: 8 }}>
              <button onClick={() => toggleGroup(groupKey)} style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px 0', background: 'none', border: 'none', cursor: 'pointer', borderBottom: `1px solid ${t.border}` }}>
                <span style={{ fontSize: 13, fontWeight: 500, color: t.ink }}>
                  {groupBy === 'day' ? formatDayGroupLabel(groupKey) : formatMonthLabel(groupKey)}
                </span>
                <span style={{ fontSize: 11, color: t.muted }}>
                  {groupPosts.length} {groupPosts.length === 1 ? 'entry' : 'entries'} {collapsedGroups[groupKey] ? '▸' : '▾'}
                </span>
              </button>
              {!collapsedGroups[groupKey] && groupPosts.map(post => renderPost(post))}
            </div>
          ))
        ) : (
          filtered.map(post => renderPost(post))
        )}
      </main>

      <div className="mobile-bottom-bar" style={{ display: 'none', position: 'fixed', bottom: 0, left: 0, right: 0, background: t.surface, borderTop: `1px solid ${t.border}`, padding: '10px 16px 24px', gap: 6, zIndex: 100, justifyContent: 'center', flexWrap: 'wrap' }}>
        {TABS.map(tab => (
          <button key={tab} onClick={() => setFilter(tab)} style={{ fontSize: 13, padding: '7px 16px', background: filter === tab ? t.ink : t.surface2, border: `1px solid ${t.border}`, borderRadius: 20, color: filter === tab ? t.bg : t.muted }}>{tab}</button>
        ))}
      </div>
    </div>
  )
}