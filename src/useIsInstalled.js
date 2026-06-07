import { useState, useEffect } from 'react'

export default function useIsInstalled() {
  const [installed, setInstalled] = useState(false)
  const [mobile, setMobile] = useState(false)

  useEffect(() => {
    setInstalled(window.matchMedia('(display-mode: standalone)').matches)
    setMobile(/iPhone|iPad|iPod|Android/i.test(navigator.userAgent))
  }, [])

  return { installed, mobile }
}