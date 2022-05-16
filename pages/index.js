import React, { useState } from 'react';
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import Info from '../public/assets/info.svg'
import styles from '../styles/Home.module.css'
import { Modal, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const [time, setTime] = useState(0);
  const [erros, setErros] = useState(0);
  const router = useRouter();

  function redirect() {
    router.push({ pathname: "/game", query: { time: time, erros: erros} });
  }

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
            <button onClick={() => { redirect() }}>JOGAR</button>
            <div style={{ display: 'flex' }} onClick={() => { setShow(true) }}>
              <span><Image src={Info} /></span>
              <p>VER REGRAS</p>
            </div>
          </div>
        </div>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Regras</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            As palavras podem ser escritas da esquerda para direita, da direita para esquerda, de cima para baixo ou de baixo para cima. Fique atento ao tempo!
          </p>
          <p>
            Se guie pelas dicas que estão no final da tela.
          </p>
          <div>
            <p>Defina suas configurações</p>
            <div>
              <p>Limite de erros</p>
              <input style={{width: '100px'}} type={'number'} value={erros} onChange={(e) => { setErros(e.target.value)}}/>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Fechar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}