// src/components/FeaturedProject.jsx
import React from "react"
import { motion } from "framer-motion"

function Metric({ label, value }) {
  return (
    <div
      style={{
        padding: "8px 14px",
        borderRadius: 10,
        background: "rgba(255,255,255,0.04)",
        backdropFilter: "blur(4px)",
        fontSize: 13,
        lineHeight: "1.25",
        minWidth: 110,
      }}
    >
      <div style={{ opacity: 0.65, fontSize: 11, letterSpacing: 0.4 }}>
        {label}
      </div>
      <div style={{ fontSize: 16, fontWeight: 800 }}>
        {value}
      </div>
    </div>
  )
}

export default function FeaturedProject({ project }) {
  if (!project) return null

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.25, 0.9, 0.2, 1] }}
      className="fp-static-card"
    >
      <div className="fp-static-bg" aria-hidden="true" />

      <div className="fp-content">
        {/* TOP */}
        <div className="fp-row">
          <div className="fp-text">
            <div className="fp-kicker">ABOUT ME</div>
            <div className="fp-title">{project.title}</div>
            <div className="fp-desc">{project.short}</div>
          </div>

          <div className="fp-thumb">
            <img
              src={project.images?.[0] || "/assets/placeholder.jpg"}
              alt=""
            />
          </div>
        </div>

        {/* METRICS + CTA */}
        <div className="fp-bottom">
          {project.metrics?.users && (
            <Metric label="Users" value={project.metrics.users} />
          )}
          {project.metrics?.records && (
            <Metric label="Data Scale" value={project.metrics.records} />
          )}
          {project.metrics?.performance && (
            <Metric label="Performance" value={project.metrics.performance} />
          )}
          {project.metrics?.retention && (
            <Metric label="Product Impact" value={project.metrics.retention} />
          )}
        </div>
        
      </div>
    </motion.div>
  )
}



