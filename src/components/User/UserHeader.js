import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import styles from './UserHeader.module.css'

import UserHeaderNav from './UserHeaderNav'

const UserHeader = () => {
  const[titulo, setTitulo] = useState('');
  const location = useLocation();
  console.log(location);

  useEffect(() => {
    if (location.pathname === '/conta') setTitulo('Minha Conta')
    if (location.pathname === '/conta/estatisticas') setTitulo('Estatísticas')
    if (location.pathname === '/conta/postar') setTitulo('Poste sua Foto')


  }, [location]);

  return (
    <header className={styles.header}>
      <h1 className='titulo'>{titulo}</h1>
      <UserHeaderNav/>

    </header>
  )
}

export default UserHeader