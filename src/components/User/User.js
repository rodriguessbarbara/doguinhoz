import React from 'react'
import { Route, Routes } from 'react-router-dom'
import UserHeader from './UserHeader'
import Feed from '../Feed/Feed'
import UserPostPhoto from './UserPostPhoto'
import UserStats from './UserStats';

const User = () => {
  return (
    <section className='container'>
      <UserHeader/>
      <Routes>
        <Route path='/' element={<Feed/>}/>
        <Route path='/postar' element={<UserPostPhoto/>}/>
        <Route path='/estatisticas' element={<UserStats/>}/>

      </Routes>
    </section>
  )
}

export default User