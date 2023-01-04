import React from 'react'
import styles from './UserHeader.module.css'

import UserHeaderNav from './UserHeaderNav'

const UserHeader = () => {
  return (
    <header className={styles.header}>
      <h1 className='titulo'>Título</h1>
      <UserHeaderNav/>

    </header>
  )
}

export default UserHeader