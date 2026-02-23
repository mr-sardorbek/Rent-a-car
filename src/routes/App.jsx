import {  Navbar } from '@/components'
import { About, Cars, Home } from '@/pages'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'

const App = () => {
 const mode = useSelector(state => state.theme.mode)

 useEffect(()=> {
  const root = window.document.documentElement
  root.classList.remove("light", "dark")
  root.classList.add(mode)
 }, [mode])
  return (
    <div className={`min-h-screen bg-background text-foreground font-montserrat transition-colors duration-300`}>
      <Navbar />

      <div className='pt-24'>
          <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/cars' element={<Cars/>} />
          <Route path='/about' element={<About/>} />
        </Routes>
      </div>
  
    </div>
  )
}

export default App
