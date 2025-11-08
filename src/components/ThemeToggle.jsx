import React from 'react'
import { useTheme } from '../context/ThemeContext.jsx'
import Button from './Button.jsx'

export default function ThemeToggle() {
  const { theme, toggle } = useTheme()
  return <Button variant="secondary" onClick={toggle}>{theme === 'dark' ? '🌙 Dark' : '☀️ Light'}</Button>
}
