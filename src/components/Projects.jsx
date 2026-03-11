// src/components/Projects.jsx
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { projects as initialProjects } from '../data/projects'
import ProjectModal from './ProjectModal'

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } }
}

const item = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.42 }
  }
}

export default function Projects() {
  const [open, setOpen] = useState(null)

  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 py-20">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold">Selected projects</h2>
          <p className="subtle mt-1">
            A curated selection of recent work.
          </p>
        </div>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {initialProjects.map((p) => (
          <motion.article
            key={p.id}
            variants={item}
            className="project-card group"
            role="article"
            aria-labelledby={`title-${p.id}`}
          >
            {/* Media */}
            <div className="project-media" aria-hidden>
              <img
                src={p.images?.[0] || '/assets/placeholder.jpg'}
                alt=""
                className="project-thumb"
                loading="lazy"
              />
              <div className="project-overlay" />
            </div>

            {/* Body */}
            <div className="project-body">
              {/* Header */}
              <div>
                <h3
                  id={`title-${p.id}`}
                  className="font-semibold leading-snug"
                >
                  {p.title}
                </h3>
                <div className="subtle text-sm mt-1">{p.stack}</div>
              </div>

              {/* Description */}
              <p className="subtle mt-4 mb-4 project-excerpt leading-relaxed">
                {p.short}
              </p>

              {/* Actions */}
              <div className="project-actions" aria-hidden>
                <div className="project-details">
                  {/* Highlights */}
                  <div
                    style={{
                      display: 'flex',
                      gap: 8,
                      flexWrap: 'wrap'
                    }}
                  >
                    {p.highlights?.map((h) => (
                      <span
                        key={h}
                        className="chip"
                        style={{
                          padding: '5px 9px',
                          fontSize: 12,
                          opacity: 0.85
                        }}
                      >
                        {h}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <div
                    style={{
                      marginTop: 12,
                      display: 'flex',
                      gap: 8,
                      alignItems: 'center'
                    }}
                  >
                    <button
                      onClick={() => setOpen(p)}
                      className="cta-outline"
                    >
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>

      {open && (
        <ProjectModal
          project={open}
          onClose={() => setOpen(null)}
        />
      )}
    </section>
  )
}




