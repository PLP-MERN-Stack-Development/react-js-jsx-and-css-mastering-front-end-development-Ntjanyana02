import React, { useEffect, useMemo, useState } from 'react'
import useLocalStorage from '../hooks/useLocalStorage.js'
import Card from '../components/Card.jsx'
import Button from '../components/Button.jsx'

const filters = ['All','Active','Completed']

export default function Tasks() {
  const [tasks, setTasks] = useLocalStorage('tasks', [])
  const [title, setTitle] = useState('')
  const [filter, setFilter] = useState('All')

  useEffect(() => {
    if (tasks.length === 0) setTasks([{ id: crypto.randomUUID(), title: 'Try the app', done: false }])
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const visible = useMemo(() => {
    if (filter === 'Active') return tasks.filter(t => !t.done)
    if (filter === 'Completed') return tasks.filter(t => t.done)
    return tasks
  }, [tasks, filter])

  const addTask = e => {
    e.preventDefault()
    if (!title.trim()) return
    setTasks([{ id: crypto.randomUUID(), title: title.trim(), done: false }, ...tasks])
    setTitle('')
  }
  const toggle = id => setTasks(tasks.map(t => t.id===id ? {...t, done:!t.done} : t))
  const remove = id => setTasks(tasks.filter(t => t.id !== id))
  const clearCompleted = () => setTasks(tasks.filter(t => !t.done))

  return (
    <Card title="Task Manager">
      <form onSubmit={addTask} className="mb-4 flex gap-2">
        <input
          className="w-full rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 px-3 py-2"
          placeholder="Add a task..."
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <Button type="submit">Add</Button>
      </form>

      <div className="mb-3 flex flex-wrap items-center gap-2">
        {filters.map(f => (
          <Button key={f} variant={filter===f ? 'primary' : 'secondary'} onClick={() => setFilter(f)}>{f}</Button>
        ))}
        <Button variant="danger" className="ml-auto" onClick={clearCompleted}>Clear completed</Button>
      </div>

      <ul className="space-y-2">
        {visible.map(t => (
          <li key={t.id} className="flex items-center justify-between rounded-lg border border-zinc-200 dark:border-zinc-700 p-2">
            <label className="flex items-center gap-2">
              <input type="checkbox" checked={t.done} onChange={() => toggle(t.id)} />
              <span className={t.done ? 'line-through text-zinc-500' : ''}>{t.title}</span>
            </label>
            <Button variant="secondary" onClick={() => remove(t.id)}>Delete</Button>
          </li>
        ))}
        {visible.length===0 && <p className="text-sm text-zinc-500">No tasks.</p>}
      </ul>
    </Card>
  )
}
