// src/components/BackgroundDecor.jsx
import React, { useEffect, useState, useRef } from 'react'

/*
  BackgroundDecor
  - Renders subtle geometric ribbons + twinkling stars
  - Fades out when the user scrolls past the hero height
  - Respects prefers-reduced-motion
*/

export default function BackgroundDecor({ fadeTriggerSelector = '#projects' }) {
  const [faded, setFaded] = useState(false)
  const [stars] = useState(() => {
    const arr = []
    for (let i = 0; i < 36; i++) {
      arr.push({
        id: i,
        left: Math.round(Math.random() * 100),
        top: Math.round(Math.random() * 45),
      })
    }
    return arr
  })

  const prefersReduced =
    typeof window !== 'undefined' &&
    window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches

  const root = useRef(null)

  useEffect(() => {
    if (!fadeTriggerSelector || typeof window === 'undefined') return
    const target = document.querySelector(fadeTriggerSelector)
    if (!target) return

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) setFaded(true)
          else setFaded(false)
        })
      },
      { root: null, threshold: 0.06 }
    )

    obs.observe(target)
    return () => obs.disconnect()
  }, [fadeTriggerSelector])

  // slight slow parallax on mouse move (subtle)
  useEffect(() => {
    if (prefersReduced) return
    const el = root.current
    if (!el) return
    let raf = null
    const onMove = (e) => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        const x = (e.clientX / window.innerWidth - 0.5) * 8
        const y = (e.clientY / window.innerHeight - 0.5) * 6
        el.style.transform = `translate3d(${x}px, ${y}px, 0)`
      })
    }
    window.addEventListener('mousemove', onMove)
    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
    }
  }, [prefersReduced])

  return (
    <div
      ref={root}
      className={`decor-root ${faded ? 'decor-faded' : ''} ${
        prefersReduced ? 'reduced-motion' : ''
      }`}
      aria-hidden="true"
    >
      {/* Ribbons — SVG for crispness */}
      <svg className="decor-ribbons" viewBox="0 0 1200 600" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id="ribbonA" x1="0" x2="1">
            <stop offset="0" stopColor="rgba(99,102,241,0.14)" />
            <stop offset="1" stopColor="rgba(14,165,233,0.10)" />
          </linearGradient>
          <linearGradient id="ribbonB" x1="0" x2="1">
            <stop offset="0" stopColor="rgba(236,72,153,0.06)" />
            <stop offset="1" stopColor="rgba(250,204,21,0.04)" />
          </linearGradient>
        </defs>

        <g transform="translate(0,40) rotate(-6 600 300)">
          <rect x="-120" y="60" width="1400" height="200" rx="24" fill="url(#ribbonA)" />
          <rect x="-80" y="40" width="1400" height="14" rx="8" fill="rgba(255,255,255,0.02)" />
        </g>

        <g transform="translate(0,10) rotate(-12 600 300)">
          <rect x="280" y="0" width="760" height="120" rx="36" fill="url(#ribbonB)" />
        </g>
      </svg>
      </div>
  )
}
