// src/components/Nav.jsx
import React from "react";

export default function Nav() {
  return (
    <>
      <header
        className="site-nav glass"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          backdropFilter: "blur(14px)",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <div
          className="max-w-6xl mx-auto px-6"
          style={{
            display: "flex",
            alignItems: "center",
            height: 74,
            gap: 12,
          }}
        >
          {/* Logo / Name */}
          <a
            href="#"
            aria-label="Home"
            className="text-white font-semibold text-lg tracking-tight"
            style={{
              paddingTop: 6,
              paddingBottom: 6,
              display: "inline-flex",
              alignItems: "center",
            }}
          >
            Nirav Patel
          </a>

          {/* Right navigation */}
          <nav
            style={{
              marginLeft: "auto",
              display: "flex",
              gap: 20,
              alignItems: "center",
            }}
          >

            <a className="nav-link" href="#experience">
              Experience
            </a>

            <a className="nav-link" href="#projects">
              Projects
            </a>

            <a className="nav-cta" href="#contact">
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* spacing to avoid content passing under fixed nav */}
      <div style={{ height: 74 }} aria-hidden />
    </>
  );
}
