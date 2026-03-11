import React from 'react'

export default function Footer(){
  return (
    <footer className="border-t border-white/6 mt-16">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm subtle">
        <div>© {new Date().getFullYear()} Nirav Patel</div>
        <div>
          <a href="https://github.com/niravkpatel36" target="_blank" rel="noopener noreferrer" className="hover:underline">
            GitHub
          </a>
        </div>
      </div>
    </footer>
  )
}

