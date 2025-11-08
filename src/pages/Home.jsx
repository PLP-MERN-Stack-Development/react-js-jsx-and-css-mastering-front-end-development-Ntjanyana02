import React from 'react'
import Card from '../components/Card.jsx'
import Button from '../components/Button.jsx'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <Card title="Welcome">
        <p className="mb-3">
          This app demonstrates component architecture, hooks, Tailwind theming, API integration, and routing.
        </p>
        <div className="flex gap-2">
          <Button as="div"><Link to="/tasks">Go to Tasks</Link></Button>
          <Button variant="secondary" as="div"><Link to="/posts">Explore Posts</Link></Button>
        </div>
      </Card>
      <Card title="Dark Mode">
        <p>Use the toggle in the navbar to switch light/dark themes.</p>
      </Card>
    </div>
  )
}
