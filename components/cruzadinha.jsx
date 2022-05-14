import React, { useState } from 'react';
import styles from '../styles/cruzadinha.module.css'

export default function Cruzadinha() {
    const [p1, setP1] = useState('')
    const [p2, setP2] = useState('')
    const [p3, setP3] = useState('')

    function teste(props) {
        console.log(props)
        if (props == 'A' || props == 'a') {
            console.log('correto')
        } else {
            console.log('incorreto')
        }
    }

    function testeFrase() {
        var frase3 = p1 + p2 + p3;
        
        console.log(frase3)

        if(frase3.toUpperCase() == 'CPU') {
            console.log('correto')
        }else {
            console.log('incorreto')
        }
    }

    return (
        <>
            <div className={styles.container}>
                <div>
                    <h1>3</h1>
                    <input maxLength={1} max={1}  id="inputP1" onChange={() => {testeFrase()}} />
                    <input maxLength={1} max={1}  id="inputP2" onChange={() => {testeFrase()}} />
                    <input maxLength={1} max={1}  id="inputP3" onChange={() => {testeFrase()}} />
                </div>
            </div>
        </>
    )
}