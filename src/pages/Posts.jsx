import React, { useEffect, useMemo, useState } from 'react'
import axios from 'axios'
import Card from '../components/Card.jsx'
import Button from '../components/Button.jsx'

const PAGE_SIZE = 10

export default function Posts() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [search, setSearch] = useState('')
  const [page, setPage] = useState(1)

  useEffect(() => {
    let cancelled = false
    setLoading(true)
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(res => { if (!cancelled) setData(res.data) })
      .catch(err => { if (!cancelled) setError(err.message || 'Error fetching') })
      .finally(() => { if (!cancelled) setLoading(false) })
    return () => { cancelled = true }
  }, [])

  const filtered = useMemo(
    () => data.filter(p => p.title.toLowerCase().includes(search.toLowerCase())),
    [data, search]
  )

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE))
  const start = (page - 1) * PAGE_SIZE
  const items = filtered.slice(start, start + PAGE_SIZE)

  useEffect(() => { if (page > totalPages) setPage(1) }, [totalPages, page])

  if (loading) return <Card title="Posts">Loading…</Card>
  if (error) return <Card title="Posts">Error: {error}</Card>

  return (
    <Card title="Posts">
      <div className="mb-4 flex items-center gap-2">
        <input
          className="w-full rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 px-3 py-2"
          placeholder="Search posts by title…"
          value={search}
          onChange={e => { setSearch(e.target.value); setPage(1) }}
        />
      </div>

      <ul className="grid gap-3 md:grid-cols-2">
        {items.map(p => (
          <li key={p.id} className="rounded-lg border border-zinc-200 dark:border-zinc-700 p-3">
            <h4 className="font-semibold mb-1">{p.title}</h4>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">{p.body}</p>
          </li>
        ))}
      </ul>

      <div className="mt-4 flex items-center justify-center gap-2">
        <Button variant="secondary" onClick={() => setPage(p => Math.max(1, p-1))} disabled={page===1}>Prev</Button>
        <span className="text-sm">Page {page} / {totalPages}</span>
        <Button variant="secondary" onClick={() => setPage(p => Math.min(totalPages, p+1))} disabled={page===totalPages}>Next</Button>
      </div>
    </Card>
  )
}
