import React from 'react'
import { Route, Routes } from 'react-router-dom'
// import UserHeader from './UserHeader'

const User = () => {
  return (
    <section className='container'>
      {/* <UserHeader/> */}
      <Routes>
        <Route path='/'/>
      </Routes>
    </section>
  )
}

export default User