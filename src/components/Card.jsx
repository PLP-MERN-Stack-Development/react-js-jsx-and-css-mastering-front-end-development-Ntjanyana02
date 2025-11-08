import React from 'react'
export default function Card({ title, children, className='' }) {
  return (
    <div className={`rounded-xl border border-zinc-200 dark:border-zinc-700 bg-white/70 dark:bg-zinc-800/70 p-4 shadow-sm ${className}`}>
      {title && <h3 className="mb-2 text-lg font-semibold">{title}</h3>}
      {children}
    </div>
  )
}
