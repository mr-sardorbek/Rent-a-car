import {  Navbar } from '@/components'
import { login } from '@/features/auth/authSlice'
import { About, Cars, Home, Login } from '@/pages'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'

const App = () => {
 const mode = useSelector(state => state.theme.mode)
 const dispatch = useDispatch()

 useEffect(()=> {
  const root = window.document.documentElement
  root.classList.remove("light", "dark")
  root.classList.add(mode)
 }, [mode])

 useEffect(()=> {
  const savedUser = localStorage.getItem("user")

  if (savedUser) {
    dispatch(login(JSON.parse(savedUser)))
  }
 }, [])
  return (
    <div className={`min-h-screen bg-background text-foreground font-montserrat transition-colors duration-300`}>
      <Navbar />

      <div className='pt-24'>
          <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/cars' element={<Cars/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/login' element={<Login/>} />
        </Routes>
      </div>
  
    </div>
  )
}

export default App



{/* <Route
  path="/wishlist"
  element={
    <ProtectedRoute>
      <Wishlist />
    </ProtectedRoute>
  }
/> */}
