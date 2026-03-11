import React, { useRef, useEffect } from 'react'
import { featured } from '../data/featured'
import FeaturedProject from './FeaturedProject'

export default function Hero(){
  const wrap = useRef()
  const card = useRef()

  useEffect(()=>{
    const wrapEl = wrap.current
    const cardEl = card.current
    if(!wrapEl || !cardEl) return

    const onMove = (e) => {
      const rect = wrapEl.getBoundingClientRect()
      const cx = rect.left + rect.width/2
      const cy = rect.top + rect.height/2
      const dx = (e.clientX - cx) / rect.width
      const dy = (e.clientY - cy) / rect.height

      // tilt
      const rx = dy * 10
      const ry = dx * -10
      cardEl.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg) translateZ(10px)`

      // subtle interior parallax
      const inner = cardEl.querySelector('.card-inner')
      if(inner) inner.style.transform = `translate3d(${dx * 10}px, ${dy * 10}px, 0)`
    }

    const onLeave = () => { 
      card.current.style.transform = `rotateX(0deg) rotateY(0deg) translateZ(0)`; 
      const inner = card.current.querySelector('.card-inner'); 
      if(inner) inner.style.transform = '' 
    }

    window.addEventListener('mousemove', onMove)
    wrapEl.addEventListener('mouseleave', onLeave)

    return ()=>{
      window.removeEventListener('mousemove', onMove)
      wrapEl.removeEventListener('mouseleave', onLeave)
    }
  },[])

  const featuredProject = featured

  return (
    <section className="min-h-[88vh] flex items-center">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT SIDE */}
        <div>
          <div className="kicker">Software Engineer</div>
          
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mt-4">
            Building production-ready systems across APIs, data pipelines, and user-facing products.
          </h1>
          
          <p className="subtle mt-4 max-w-xl">
            I design, build, and operate software used by thousands of users, spanning backend APIs, data infrastructure, and user-facing applications. My work focuses on performance, reliability, and measurable business impact.
          </p>
          
          <div className="mt-6 flex gap-3 items-center">
            <a
            href="/Nirav_Patel_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-primary"
            aria-label="View resume"
            >
              View Resume
              </a>
            </div>

        <div className="mt-6 flex gap-4 text-sm subtle">

          <div>Toronto, Canada</div>
          <div>•</div>
          <div>Open to internships & co-ops</div>
          </div>
          
        </div>

        {/* RIGHT SIDE — FEATURED PROJECT CARD */}
        <div ref={wrap} className="perspective-3d">
          <div 
            ref={card} 
            className="scene glass p-6 w-full max-w-[520px] mx-auto"
            style={{ borderRadius: 20 }}
          >
            <div className="card-inner" style={{ transition: 'transform 150ms linear' }}>
              <FeaturedProject 
                project={featuredProject}
                onOpen={(proj)=>{
                  window.alert(`Open case study: ${proj.title}`)
                }} 
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}




