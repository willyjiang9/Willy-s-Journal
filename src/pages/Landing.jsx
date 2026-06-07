import { useState, useEffect } from 'react'

const MOMENTS = [
  "For when you need to get something out of your head.",
  "For when you want to stay intentional about your days.",
  "For when you just want to remember this moment.",
  "For when you're figuring out who you are.",
]

const FEATURES = [
  { icon: "✦", title: "Thoughts & Ideas", desc: "Had something on your mind at 2am? Write it down. No audience, no likes — just you." },
  { icon: "◎", title: "Daily Prompts", desc: "Not sure what to write? We'll ask you something worth thinking about." },
  { icon: "◇", title: "Gratitude", desc: "End the day noticing what went right. Small or big." },
  { icon: "□", title: "Plan Your Day", desc: "Set intentions in the morning. Be honest about how it actually went." },
  { icon: "▢", title: "Photo Memories", desc: "Some moments deserve more than a caption. Keep them here, privately." },
]

const STEPS = [
  {
    label: "Write a thought",
    preview: {
      meta: "Just now · Thought",
      content: "I've been overthinking this decision for weeks. Writing it out helps me realize I already know the answer.",
    }
  },
  {
    label: "Answer a prompt",
    preview: {
      meta: "Today · Prompt",
      prompt: "What fear has quietly been running your life?",
      content: "Honestly? The fear of being average. I've been chasing things not because I love them but because...",
    }
  },
  {
    label: "Plan your day",
    preview: {
      meta: "Today · Day",
      todos: [
        { text: "Finish the project proposal", done: true },
        { text: "Call mom back", done: true },
        { text: "Go for a walk", done: false },
        { text: "Read for 20 minutes", done: false },
      ],
    }
  },
  {
    label: "Add a memory",
    preview: {
      meta: "Today · Photo",
      photo: true,
      content: "Golden hour from the rooftop. One of those evenings you want to hold onto.",
    }
  },
  {
    label: "Look back",
    preview: {
      meta: "June 1, 2026 · Thought",
      content: "tired and its late. i think this is done for now. probably my fav project so far.",
      revisit: "May 15 · You wrote: 'Still not sure about this.' Look how far you've come.",
    }
  },
]

export default function Landing({ onSignup, onLogin }) {
  const [momentIdx, setMomentIdx] = useState(0)
  const [momentVisible, setMomentVisible] = useState(true)
  const [step, setStep] = useState(0)
  const [stepVisible, setStepVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setMomentVisible(false)
      setTimeout(() => {
        setMomentIdx(i => (i + 1) % MOMENTS.length)
        setMomentVisible(true)
      }, 400)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  function goStep(n) {
    setStepVisible(false)
    setTimeout(() => {
      setStep(n)
      setStepVisible(true)
    }, 200)
  }

  const current = STEPS[step]

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", background: '#faf9f7', color: '#1a1a18', minHeight: '100vh' }}>

      {/* Nav */}
      <nav style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20px 48px', borderBottom: '1px solid #e8e6e0', position: 'sticky', top: 0, background: '#faf9f7', zIndex: 100 }}>
        <span style={{ fontFamily: "'Lora', serif", fontSize: 22, letterSpacing: '-0.3px' }}>Folio</span>
        <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
          <button onClick={onLogin} style={{ fontSize: 14, background: 'none', border: 'none', color: '#888', cursor: 'pointer', fontFamily: "'DM Sans', sans-serif" }}>Sign in</button>
          <button onClick={onSignup} style={{ fontSize: 14, background: '#1a1a18', color: '#faf9f7', border: 'none', borderRadius: 20, padding: '8px 20px', cursor: 'pointer', fontFamily: "'DM Sans', sans-serif" }}>Try for free</button>
        </div>
      </nav>

      {/* Hero */}
      <section style={{ maxWidth: 760, margin: '0 auto', padding: '100px 24px 80px', textAlign: 'center' }}>
        <div style={{ display: 'inline-block', fontSize: 11, letterSpacing: '2px', textTransform: 'uppercase', color: '#888', border: '1px solid #e8e6e0', borderRadius: 20, padding: '5px 14px', marginBottom: 32 }}>
          Free during pilot
        </div>
        <h1 style={{ fontFamily: "'Lora', serif", fontSize: 'clamp(36px, 6vw, 64px)', lineHeight: 1.15, letterSpacing: '-1px', marginBottom: 24, fontWeight: 400 }}>
          Write freely.<br />Live intentionally.
        </h1>
        <p style={{ fontSize: 18, color: '#555', lineHeight: 1.7, marginBottom: 16, maxWidth: 520, margin: '0 auto 16px' }}>
          Social media took away your private space.<br />
          <strong style={{ color: '#1a1a18' }}>Folio gives it back.</strong>
        </p>

        <div style={{ height: 32, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 48, marginTop: 32 }}>
          <p style={{
            fontSize: 15, color: '#888', fontStyle: 'italic',
            opacity: momentVisible ? 1 : 0,
            transform: momentVisible ? 'translateY(0)' : 'translateY(6px)',
            transition: 'opacity 0.4s ease, transform 0.4s ease',
          }}>
            {MOMENTS[momentIdx]}
          </p>
        </div>

        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
          <button onClick={onSignup} style={{ fontSize: 15, background: '#1a1a18', color: '#faf9f7', border: 'none', borderRadius: 24, padding: '14px 32px', cursor: 'pointer', fontFamily: "'DM Sans', sans-serif", fontWeight: 500 }}>
            Try for free
          </button>
          <button onClick={onLogin} style={{ fontSize: 15, background: 'none', color: '#1a1a18', border: '1px solid #e8e6e0', borderRadius: 24, padding: '14px 32px', cursor: 'pointer', fontFamily: "'DM Sans', sans-serif" }}>
            Sign in
          </button>
        </div>
      </section>

      <div style={{ maxWidth: 680, margin: '0 auto', height: 1, background: '#e8e6e0' }} />

      {/* What it is */}
      <section style={{ maxWidth: 840, margin: '0 auto', padding: '80px 24px' }}>
        <p style={{ fontSize: 11, letterSpacing: '2px', textTransform: 'uppercase', color: '#aaa', marginBottom: 16, textAlign: 'center' }}>What it is</p>
        <h2 style={{ fontFamily: "'Lora', serif", fontSize: 'clamp(24px, 4vw, 38px)', textAlign: 'center', fontWeight: 400, marginBottom: 56, letterSpacing: '-0.5px' }}>
          One space for everything<br />that matters to you
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 24 }}>
          {FEATURES.map((f, i) => (
            <div key={i} style={{ background: '#fff', border: '1px solid #e8e6e0', borderRadius: 14, padding: '28px 24px' }}>
              <div style={{ fontSize: 20, marginBottom: 14, color: '#1a1a18' }}>{f.icon}</div>
              <h3 style={{ fontFamily: "'Lora', serif", fontSize: 17, fontWeight: 400, marginBottom: 8 }}>{f.title}</h3>
              <p style={{ fontSize: 13, color: '#888', lineHeight: 1.65 }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <div style={{ maxWidth: 680, margin: '0 auto', height: 1, background: '#e8e6e0' }} />

      {/* How it works */}
      <section style={{ maxWidth: 900, margin: '0 auto', padding: '80px 24px' }}>
        <p style={{ fontSize: 11, letterSpacing: '2px', textTransform: 'uppercase', color: '#aaa', marginBottom: 16, textAlign: 'center' }}>How it works</p>
        <h2 style={{ fontFamily: "'Lora', serif", fontSize: 'clamp(24px, 4vw, 38px)', textAlign: 'center', fontWeight: 400, marginBottom: 56, letterSpacing: '-0.5px' }}>
          See it in action
        </h2>

        <div style={{ display: 'flex', gap: 48, alignItems: 'flex-start', flexWrap: 'wrap', justifyContent: 'center' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8, minWidth: 200 }}>
            {STEPS.map((s, i) => (
              <button key={i} onClick={() => goStep(i)} style={{
                textAlign: 'left', padding: '12px 16px', borderRadius: 10, border: 'none',
                background: step === i ? '#1a1a18' : 'transparent',
                color: step === i ? '#faf9f7' : '#888',
                fontSize: 14, cursor: 'pointer', fontFamily: "'DM Sans', sans-serif",
                transition: 'all 0.2s',
              }}>
                <span style={{ fontSize: 11, opacity: 0.5, marginRight: 8 }}>0{i + 1}</span>
                {s.label}
              </button>
            ))}
          </div>

          {/* Phone mockup */}
          <div style={{ width: 260, flexShrink: 0, background: '#1a1a18', borderRadius: 36, padding: '12px', boxShadow: '0 40px 80px rgba(0,0,0,0.15)' }}>
            <div style={{ background: '#faf9f7', borderRadius: 26, overflow: 'hidden', minHeight: 460 }}>
              <div style={{ background: '#1a1a18', height: 28, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ width: 60, height: 6, background: '#333', borderRadius: 3 }} />
              </div>
              <div style={{
                padding: '20px 16px',
                opacity: stepVisible ? 1 : 0,
                transform: stepVisible ? 'translateY(0)' : 'translateY(8px)',
                transition: 'opacity 0.2s ease, transform 0.2s ease',
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20, paddingBottom: 12, borderBottom: '1px solid #e8e6e0' }}>
                  <span style={{ fontFamily: "'Lora', serif", fontSize: 14 }}>Folio</span>
                  <span style={{ fontSize: 10, background: '#1a1a18', color: '#fff', borderRadius: 10, padding: '3px 8px' }}>+ New</span>
                </div>

                <p style={{ fontSize: 9, color: '#aaa', letterSpacing: '0.5px', textTransform: 'uppercase', marginBottom: 10 }}>{current.preview.meta}</p>

                {current.preview.prompt && (
                  <p style={{ fontSize: 11, color: '#2d5a3d', fontStyle: 'italic', marginBottom: 10, lineHeight: 1.5, background: '#f4f2ef', borderRadius: 8, padding: '8px 10px' }}>
                    "{current.preview.prompt}"
                  </p>
                )}

                {current.preview.photo && (
                  <div style={{ width: '100%', height: 120, background: 'linear-gradient(135deg, #d4c5b0 0%, #c4b59e 50%, #b8a88e 100%)', borderRadius: 10, marginBottom: 10, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <span style={{ fontSize: 24 }}>🌅</span>
                  </div>
                )}

                {current.preview.todos && (
                  <div style={{ marginBottom: 10 }}>
                    {current.preview.todos.map((todo, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
                        <div style={{ width: 14, height: 14, borderRadius: 3, flexShrink: 0, border: `1.5px solid ${todo.done ? '#2d5a3d' : '#e8e6e0'}`, background: todo.done ? '#2d5a3d' : 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          {todo.done && <svg width="8" height="8" viewBox="0 0 12 12" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="2 6 5 9 10 3"/></svg>}
                        </div>
                        <span style={{ fontSize: 11, color: todo.done ? '#aaa' : '#1a1a18', textDecoration: todo.done ? 'line-through' : 'none', lineHeight: 1.4 }}>{todo.text}</span>
                      </div>
                    ))}
                  </div>
                )}

                {current.preview.content && (
                  <p style={{ fontSize: 12, color: '#444', lineHeight: 1.65, marginBottom: 10 }}>{current.preview.content}</p>
                )}

                {current.preview.revisit && (
                  <div style={{ background: '#f4f2ef', borderRadius: 8, padding: '10px 12px', marginTop: 12, borderLeft: '2px solid #e8e6e0' }}>
                    <p style={{ fontSize: 10, color: '#888', lineHeight: 1.6 }}>{current.preview.revisit}</p>
                  </div>
                )}

                <div style={{ display: 'flex', gap: 4, justifyContent: 'center', marginTop: 24 }}>
                  {STEPS.map((_, i) => (
                    <div key={i} style={{ width: i === step ? 16 : 5, height: 5, borderRadius: 3, background: i === step ? '#1a1a18' : '#e8e6e0', transition: 'width 0.3s ease' }} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', gap: 10, marginTop: 32 }}>
          <button onClick={() => goStep(Math.max(0, step - 1))} disabled={step === 0} style={{ fontSize: 13, padding: '8px 18px', border: '1px solid #e8e6e0', borderRadius: 20, background: 'none', color: step === 0 ? '#ccc' : '#888', cursor: step === 0 ? 'default' : 'pointer', fontFamily: "'DM Sans', sans-serif" }}>← Prev</button>
          <button onClick={() => goStep(Math.min(STEPS.length - 1, step + 1))} disabled={step === STEPS.length - 1} style={{ fontSize: 13, padding: '8px 18px', border: '1px solid #e8e6e0', borderRadius: 20, background: 'none', color: step === STEPS.length - 1 ? '#ccc' : '#888', cursor: step === STEPS.length - 1 ? 'default' : 'pointer', fontFamily: "'DM Sans', sans-serif" }}>Next →</button>
        </div>
      </section>

      <div style={{ maxWidth: 680, margin: '0 auto', height: 1, background: '#e8e6e0' }} />

      {/* Pricing */}
      <section style={{ maxWidth: 480, margin: '0 auto', padding: '80px 24px', textAlign: 'center' }}>
        <p style={{ fontSize: 11, letterSpacing: '2px', textTransform: 'uppercase', color: '#aaa', marginBottom: 16 }}>Pricing</p>
        <h2 style={{ fontFamily: "'Lora', serif", fontSize: 'clamp(24px, 4vw, 38px)', fontWeight: 400, marginBottom: 48, letterSpacing: '-0.5px' }}>Free, for now.</h2>
        <div style={{ background: '#fff', border: '1px solid #e8e6e0', borderRadius: 20, padding: '40px 36px', textAlign: 'left' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
            <div>
              <p style={{ fontFamily: "'Lora', serif", fontSize: 22 }}>Pilot</p>
              <p style={{ fontSize: 28, fontWeight: 500, marginTop: 4 }}>$0<span style={{ fontSize: 14, color: '#888', fontWeight: 400 }}>/mo</span></p>
            </div>
            <div style={{ fontSize: 11, background: '#f4f2ef', color: '#888', padding: '5px 12px', borderRadius: 20, letterSpacing: '0.5px' }}>FREE DURING PILOT</div>
          </div>
          <div style={{ borderTop: '1px solid #e8e6e0', paddingTop: 20, display: 'flex', flexDirection: 'column', gap: 12 }}>
            {[
              'All post types — thoughts, prompts, gratitude, day, photos',
              'Daily rotating reflection prompts',
              'Up to 5 photo uploads per day',
              'Day & month grouping',
              'Privacy blur mode',
              'Dark mode',
              'Mobile app (add to home screen)',
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                <svg width="16" height="16" viewBox="0 0 12 12" fill="none" stroke="#2d5a3d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: 2 }}><polyline points="2 6 5 9 10 3"/></svg>
                <span style={{ fontSize: 14, color: '#444', lineHeight: 1.5 }}>{item}</span>
              </div>
            ))}
          </div>
          <button onClick={onSignup} style={{ marginTop: 28, width: '100%', padding: '14px', background: '#1a1a18', color: '#faf9f7', border: 'none', borderRadius: 12, fontSize: 15, cursor: 'pointer', fontFamily: "'DM Sans', sans-serif", fontWeight: 500 }}>
            Get started free
          </button>
        </div>
      </section>

      <div style={{ maxWidth: 680, margin: '0 auto', height: 1, background: '#e8e6e0' }} />

      {/* Footer */}
      <footer style={{ maxWidth: 680, margin: '0 auto', padding: '40px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
        <span style={{ fontFamily: "'Lora', serif", fontSize: 18 }}>Folio</span>
        <div style={{ display: 'flex', gap: 20 }}>
          {['About', 'Privacy', 'Contact'].map(link => (
            <a key={link} href="#" style={{ fontSize: 13, color: '#aaa', textDecoration: 'none' }}>{link}</a>
          ))}
        </div>
        <p style={{ fontSize: 12, color: '#ccc', width: '100%', textAlign: 'center', marginTop: 8 }}>Built with intention.</p>
      </footer>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;1,400&family=DM+Sans:wght@300;400;500&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        button { cursor: pointer; }
        @media (max-width: 600px) {
          nav { padding: 16px 20px !important; }
        }
      `}</style>
    </div>
  )
}