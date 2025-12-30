// src/components/ScrollToTop.jsx
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    // ページ遷移時は瞬時にトップへ移動（UX向上のためsmoothは使わない）
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}