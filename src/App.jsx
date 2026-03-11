import React from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Footer from './components/Footer'
import BackgroundDecor from './components/BackgroundDecor'
import './index.css'
import { projects } from './data/projects'

export default function App(){
  return (
    <>
      {/* noise texture */}
      <div className="site-noise" aria-hidden />

      <Nav />

      {/* background stars */}
      <BackgroundDecor />

      <main className="pt-24">
        <Hero />
        <Experience />
        <Projects />
        
        <section
        id="contact"
        className="relative max-w-6xl mx-auto px-6 py-20 text-center"
        >
          
          {/* structural divider */}
          <div
          aria-hidden
          className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent"
          />
          
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white/90">
          Let’s Connect
          </h2>
          
          <p className="mt-3 text-sm text-white/60">
          Open to conversations and opportunities.
          </p>
          
          <div className="mt-6">
            <a
            href="mailto:niravkpatel36@gmail.com"
            className="
            inline-flex items-center
            rounded-full px-5 py-2
            text-sm font-normal
            text-white/75
            bg-white/5 backdrop-blur
            border border-white/10
            hover:bg-white/10 hover:text-white/90
            transition-all duration-300
            "
            >
              niravkpatel36@gmail.com
            </a>
          </div>
        </section>

        <Footer />
      </main>
    </>
  )
}



