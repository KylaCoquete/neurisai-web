import { NavLink } from 'react-router-dom'
import { useState } from 'react'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/technology', label: 'Technology' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#08080d]/80 backdrop-blur-xl border-b border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <NavLink to="/" className="flex items-center gap-2 group">
          <span className="text-neuris-light text-xl font-bold tracking-tight">&#9672;</span>
          <span className="text-white font-semibold text-lg tracking-tight">NeurisAI</span>
        </NavLink>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-zinc-400 hover:text-white p-2"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
            {open
              ? <path d="M4 4l12 12M16 4L4 16" />
              : <path d="M3 6h14M3 10h14M3 14h14" />
            }
          </svg>
        </button>

        <div className={`${open ? 'flex' : 'hidden'} md:flex flex-col md:flex-row absolute md:relative top-16 md:top-0 left-0 right-0 bg-[#08080d]/95 md:bg-transparent border-b md:border-0 border-white/[0.06] p-6 md:p-0 gap-1 md:gap-8`}>
          {links.map(l => (
            <NavLink
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors py-2 md:py-0 ${
                  isActive ? 'text-white' : 'text-zinc-500 hover:text-zinc-300'
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  )
}
