import React from 'react'
export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800">
      <div className="container mx-auto px-4 py-6 text-sm text-zinc-600 dark:text-zinc-400">
        © {new Date().getFullYear()} Amohelang Ntjanyana
      </div>
    </footer>
  )
}
