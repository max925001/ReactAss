import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Signup from './pages/Signup'
import UserDetail from './pages/UserDetail'
import Login from './pages/Login'

function App() {
 

  return (
   <Routes>

<Route path='/' element={<Home/>}/>
<Route path='/signup' element={<Signup/>}/>
<Route path='/user-detail' element={<UserDetail/>}/>
<Route path='/login' element={<Login/>}/>



   </Routes>
  )
}

export default App
