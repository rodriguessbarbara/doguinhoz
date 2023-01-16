import React from 'react'
import Head from './Head';

const Page404 = () => {
  return (
    <div className='container containerMain'>
      <Head title="404" description="Página não encontrada" />

      <h1 className='titulo'>Error 404</h1>
      <p>Página não encontrada.</p>
      </div>
  )
}

export default Page404;