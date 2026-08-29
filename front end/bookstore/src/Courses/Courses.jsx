import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/Footer'
import Course from '../components/Course'
import listItems from "../../public/listItems.json"

const courses = () => {
    console.log(listItems)
   
  return (
    <>
    <div className='dark:bg-slate-900 dark:text-white'>
      <Navbar />
    <div className='min-h-screen dark:bg-slate-900 dark:text-white'>
        <Course />
    </div>
    <Footer />
    </div>
    </>
  )
}

export default courses
