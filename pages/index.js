import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Info from '../public/assets/info.svg'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>Cruzadinha</title>
          <meta name="description" content="Cruzadinha" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className={styles.boxCenter}>
          <h1>PALAVRAS CRUZADAS</h1>
          <p>
            O objetivo do jogo é encontrar todas as palavras usando as dicas disponíveis. Conforme algumas palavra são preenchidas, algumas letras de outras palavras automaticamente aparecem, o que facilita bastante a resolução.
          </p>
          <div className={styles.divBotao}>
            <button>JOGAR</button>
            <span><Image src={Info} /></span>
            <p>VER REGRAS</p>
          </div>
        </div>
      </div>
    </>
  )
}