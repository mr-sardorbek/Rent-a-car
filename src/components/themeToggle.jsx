import React from 'react'
import { Button } from './ui/button'
import { useDispatch, useSelector } from 'react-redux'
import { toggleTheme } from '@/features/theme/themeSlice'
import { MdDarkMode, MdLightMode } from "react-icons/md";

const ThemeToggle = () => {
    const dispatch = useDispatch()
    const mode = useSelector(state => state.theme.mode)
  return (
    <Button onClick={() => dispatch(toggleTheme())}
    className={`cursor-pointer p-2 rounded-xl bg-background text-foreground hover:scale-105 hover:bg-hover transition-all duration-300`}>
        {mode === "dark" ? <MdLightMode /> : <MdDarkMode/>}
    </Button>
  )
}

export default ThemeToggle
