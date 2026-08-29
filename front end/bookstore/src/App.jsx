import React from 'react'
import "./App.css"
import Home from './home/Home'
import {Navigate, Route, Routes } from 'react-router-dom'
import Courses from './Courses/courses'
import SignUp from './components/SignUp'
import Contact from './components/Contact'
import About from './components/About'
import { Toaster } from 'react-hot-toast';
import {useAuth} from "./context/contextProvider"
import LogIn from './components/LogIn'


const App = () => {
  const [getUser, setUser] = useAuth()
  console.log(getUser)
  return (
   <>
  <div className='dark:bg-slate-900 dark:text-white'>
     <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/courses" element={getUser ? <Courses /> : <Navigate to={"/signup"} />} />
    <Route path='/signUp' element={<SignUp/>} />
    <Route path='/contact' element={<Contact />} />
    <Route path='/about' element={<About />} />
   </Routes>
   <Toaster />
  </div>
   </>
  )
}

export default App
