import React, { createContext, useContext, useEffect } from 'react'
import useLocalStorage from '../hooks/useLocalStorage.js'

const ThemeCtx = createContext()
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useLocalStorage('theme', 'light')
  useEffect(() => {
    const root = document.documentElement
    if (theme === 'dark') root.classList.add('dark')
    else root.classList.remove('dark')
  }, [theme])
  const toggle = () => setTheme(prev => (prev === 'light' ? 'dark' : 'light'))
  return <ThemeCtx.Provider value={{ theme, toggle }}>{children}</ThemeCtx.Provider>
}
export const useTheme = () => useContext(ThemeCtx)
