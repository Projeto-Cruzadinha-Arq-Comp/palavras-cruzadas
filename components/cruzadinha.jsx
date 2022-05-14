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
        const p1 = document.getElementById('inputP1').value
        const p2 = document.getElementById('inputP2').value
        const p3 = document.getElementById('inputP3').value

        var frase3 = p1 + p2 + p3;
        
        console.log(frase3)

        if(frase3.toUpperCase() == 'CPU') {
            inputP1.style.border = '2px solid green'
            inputP2.style.border = '2px solid green'
            inputP3.style.border = '2px solid green'
        }else{
            if(frase3.length == 3) {
                inputP1.style.border = '2px solid red'
                inputP2.style.border = '2px solid red'
                inputP3.style.border = '2px solid red'
            }else {
                inputP1.style.border = '1px solid #B7B7B7'
                inputP2.style.border = '1px solid #B7B7B7'
                inputP3.style.border = '1px solid #B7B7B7'
            }
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