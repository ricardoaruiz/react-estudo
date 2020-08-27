import React from 'react'
import Head from 'next/head'

import Logo from '../assets/logo.svg'

import * as S from '../styles/pages/Home'

const Home: React.FC = () => {
  return (
    <S.Container>
      <Head>
        <title>Home Page</title>
      </Head>

      <Logo />
      <h1>React JS + Next JS Estrutura</h1>
      <p>Só usar</p>
    </S.Container>
  )
}

export default Home
