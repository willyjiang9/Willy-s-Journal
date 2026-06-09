import { useState } from 'react'
import { doc, setDoc } from 'firebase/firestore'
import { db } from '../firebase'

const STEPS = [
  {
    emoji: '🔒',
    title: 'Your private space',
    desc: 'Everything you write in Memoiv is completely private. No followers, no likes, no judgment. Just you.',
  },
  {
    emoji: '✦',
    title: 'Create a post',
    desc: 'Tap + New to write a thought, answer a daily prompt, plan your day, log gratitude, or upload a photo memory.',
  },
  {
    emoji: '◎',
    title: 'Five ways to reflect',
    desc: 'Thought, Photo, Grateful, Day, and Prompt — each one is built for a different kind of moment in your life.',
  },
  {
    emoji: '↩',
    title: 'Come back to it',
    desc: "You can revisit old thoughts, add to your day, and look back on how far you've come. Memoiv grows with you.",
  },
]

export default function Onboarding({ userId, onDone }) {
  const [step, setStep] = useState(0)
  const [leaving, setLeaving] = useState(false)

  async function finish() {
    setLeaving(true)
    try {
      await setDoc(doc(db, 'users', userId, 'meta', 'onboarding'), { completed: true })
    } catch (e) { console.error(e) }
    setTimeout(() => onDone(), 300)
  }

  function next() {
    if (step < STEPS.length - 1) {
      setStep(s => s + 1)
    } else {
      finish()
    }
  }

  const current = STEPS[step]
  const isLast = step === STEPS.length - 1

  return (
    <div style={{
      position: 'fixed', inset: 0, zIndex: 1000,
      background: 'rgba(0,0,0,0.5)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      padding: 24,
      opacity: leaving ? 0 : 1,
      transition: 'opacity 0.3s ease',
    }}>
      <div style={{
        background: '#faf9f7', borderRadius: 20, padding: '40px 36px',
        maxWidth: 400, width: '100%', textAlign: 'center',
        boxShadow: '0 24px 60px rgba(0,0,0,0.2)',
      }}>
        <div style={{ fontSize: 36, marginBottom: 20 }}>{current.emoji}</div>
        <h2 style={{ fontFamily: "'Lora', serif", fontSize: 22, fontWeight: 400, marginBottom: 12, color: '#1a1a18', letterSpacing: '-0.3px' }}>
          {current.title}
        </h2>
        <p style={{ fontSize: 15, color: '#666', lineHeight: 1.7, marginBottom: 36 }}>
          {current.desc}
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 6, marginBottom: 28 }}>
          {STEPS.map((_, i) => (
            <div key={i} style={{
              width: i === step ? 20 : 6, height: 6, borderRadius: 3,
              background: i === step ? '#1a1a18' : '#e8e6e0',
              transition: 'width 0.3s ease, background 0.3s ease',
            }} />
          ))}
        </div>
        <div style={{ display: 'flex', gap: 10, justifyContent: 'center' }}>
          <button onClick={finish} style={{
            fontSize: 13, padding: '10px 18px', background: 'none',
            border: '1px solid #e8e6e0', borderRadius: 20, color: '#aaa', cursor: 'pointer',
            fontFamily: "'DM Sans', sans-serif",
          }}>Skip</button>
          <button onClick={next} style={{
            fontSize: 14, padding: '10px 24px', background: '#1a1a18',
            border: 'none', borderRadius: 20, color: '#faf9f7', cursor: 'pointer',
            fontFamily: "'DM Sans', sans-serif", fontWeight: 500,
          }}>{isLast ? "Let's go" : 'Next →'}</button>
        </div>
      </div>
    </div>
  )
}