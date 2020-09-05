import React from 'react'
import Head from 'next/head'
import { GetStaticProps, GetServerSideProps } from 'next'

import Logo from '../assets/logo.svg'

import * as S from '../styles/pages/Home'

type HomeProps = {
  prop1: string
  prop2: string
  prop3: string
}

const Home: React.FC<HomeProps> = ({ prop1, prop2, prop3 }) => {
  // Props
  console.log('prop1', prop1)
  console.log('prop2', prop2)
  console.log('prop3', prop3)

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

// Build time and Request time can't work together

// Build time
// https://nextjs.org/docs/basic-features/data-fetching#getstaticprops-static-generation
export const getStaticProps: GetStaticProps = async () => {
  // Aqui podemos buscar dados de uma API externa, de um CMS ou até do file system

  return {
    props: {
      prop1: 'Static Prop 01',
      prop2: 'Static Prop 02',
      prop3: 'Static Prop 03'
    }
  }
}

// Request time
// https://nextjs.org/docs/basic-features/data-fetching#getserversideprops-server-side-rendering
const getServerSideProps: GetServerSideProps = async () => {
  // Aqui podemos buscar dados de uma API externa ou de um CMS

  return {
    props: {
      prop1: 'Server Side Prop 01',
      prop2: 'Server Side Prop 02',
      prop3: 'Server Side Prop 03'
    }
  }
}

export default Home
