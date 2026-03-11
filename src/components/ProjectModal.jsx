import React, { useEffect, useRef, useState } from 'react'

export default function ProjectModal({ project, onClose }) {
  const ref = useRef();
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') setIdx((i) => Math.max(0, i - 1));
      if (e.key === 'ArrowRight') setIdx((i) => Math.min(project.images.length - 1, i + 1));
    };
    document.addEventListener('keydown', onKey);

    // trap focus
    const previously = document.activeElement;
    ref.current?.focus();
    return () => {
      document.removeEventListener('keydown', onKey);
      previously?.focus();
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} />
      <div className="relative z-10 max-w-5xl w-full mx-4" role="dialog" aria-modal="true" aria-label={`${project.title} case study`}>
        <div className="glass p-6 rounded-2xl">
          <div className="flex gap-6">
            <div className="flex-1">
              <div className="kicker">{project.stack}</div>
              <h3 className="text-2xl font-bold mt-2">{project.title}</h3>
              <p className="subtle mt-3">{project.description}</p>

              <div className="mt-4 flex gap-2 flex-wrap">
                {project.highlights.map((h) => (
                  <div key={h} className="px-3 py-1 bg-white/6 rounded-full text-xs subtle">
                    {h}
                  </div>
                ))}
              </div>

              <div className="mt-6 flex gap-3">
                {/* Demo button */}
                {project.demo && (
                  <a
                    className="btn-common"
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </a>
                )}
                {/* Repo button */}
                {project.repo && (
                  <a
                    className="btn-common"
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Repository
                  </a>
                )}
                <button className="ml-auto subtle" onClick={onClose}>
                  Close
                </button>
              </div>
            </div>

            <div className="w-64 shrink-0 rounded-lg overflow-hidden" aria-hidden>
              <img src={project.images[idx] || '/assets/placeholder.jpg'} alt="" className="w-full h-40 object-cover" loading="lazy" />
              <div className="flex gap-2 mt-2">
                {project.images.map((im, i) => (
                  <button
                    key={i}
                    onClick={() => setIdx(i)}
                    className={`w-10 h-8 rounded ${i === idx ? 'border-2 border-indigo-500' : ''}`}
                  >
                    <img src={im} alt="" className="w-full h-full object-cover" loading="lazy" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
