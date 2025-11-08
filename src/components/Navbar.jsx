import React from 'react'
import { NavLink } from 'react-router-dom'
import ThemeToggle from './ThemeToggle.jsx'

const link = 'px-3 py-2 rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-800'
const active = 'bg-zinc-200 dark:bg-zinc-700'

export default function Navbar() {
  return (
    <header className="border-b border-zinc-200 dark:border-zinc-800 bg-white/60 dark:bg-zinc-900/60 backdrop-blur">
      <nav className="container mx-auto flex items-center justify-between px-4 py-3">
        <div className="font-bold">Week 3 React</div>
        <div className="flex items-center gap-1">
          <NavLink to="/" end className={({isActive}) => `${link} ${isActive ? active : ''}`}>Home</NavLink>
          <NavLink to="/tasks" className={({isActive}) => `${link} ${isActive ? active : ''}`}>Tasks</NavLink>
          <NavLink to="/posts" className={({isActive}) => `${link} ${isActive ? active : ''}`}>Posts</NavLink>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  )
}
