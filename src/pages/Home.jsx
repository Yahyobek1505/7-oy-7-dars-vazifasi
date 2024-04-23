import React from 'react'
import Navbar from "../components/Navbar";
import TopHeader from "../components/TopHeader";
import Main from "../components/Main";
function Home() {
  
  return (
    <div className='dark:bg-[#272935] dark:text-white'>
      <TopHeader></TopHeader>
      <Navbar></Navbar>
      <Main></Main>
    </div>
  )
}

export default Home
