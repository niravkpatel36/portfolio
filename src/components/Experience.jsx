// src/components/Experience.jsx
import React from 'react'
import { experience } from '../data/experience'

export default function Experience(){
  return (
    <section id="experience" className="max-w-6xl mx-auto px-6 py-20">
      <h2 className="text-3xl font-bold">Professional experience</h2>
      <p className="subtle mt-2">Work, internships, and impact.</p>

      <div style={{ marginTop: 18, display:'grid', gap: 18 }}>
        {experience.map((e) => (
          <div key={e.id} className="glass p-5 rounded-2xl">
            <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center' }}>
              <div>
                <div style={{ fontSize:16, fontWeight:700 }}>{e.role}</div>
                <div className="subtle" style={{ marginTop:4 }}>{e.company} • {e.location}</div>
              </div>
              <div className="subtle">{e.period}</div>
            </div>

            <ul style={{ marginTop:12 }}>
              {e.bullets.map((b,i)=> <li key={i} style={{ marginTop:6 }} className="subtle">• {b}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
