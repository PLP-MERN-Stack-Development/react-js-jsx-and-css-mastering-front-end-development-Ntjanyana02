import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'

export default function AppLayout() {
  return (
    <div className="min-h-dvh flex flex-col">
      <Navbar />
      <main className="container mx-auto px-4 py-6 flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
