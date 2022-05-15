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
        
        if(p1.toUpperCase() == '' || p2.toUpperCase() == '' || p3.toUpperCase() == '') {
            inputP1.style.border = '1px solid #B7B7B7'
            inputP2.style.border = '1px solid #B7B7B7'
            inputP3.style.border = '1px solid #B7B7B7'
        }else {
            var frase1 = [p1, p2, p3]

            var verificarFrase1 = '';
            if (frase1.length == 3) {
                for (let pos = 0; pos < 3; pos++) {
                    verificarFrase1 += frase1[pos]
                    console.log(verificarFrase1)
                        if(verificarFrase1.toUpperCase() == 'CPU') {
                        inputP1.style.border = '2px solid green'
                        inputP2.style.border = '2px solid green'
                        inputP3.style.border = '2px solid green'
                    }else{
                            inputP1.style.border = '2px solid red'
                            inputP2.style.border = '2px solid red'
                            inputP3.style.border = '2px solid red'
                    }
                }
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

                    <h1>4</h1>
                    <input maxLength={1} max={1}   onChange={() => {testeFrase()}} />
                    <input maxLength={1} max={1}   onChange={() => {testeFrase()}} />
                    <input maxLength={1} max={1}   onChange={() => {testeFrase()}} />
                    <input maxLength={1} max={1}   onChange={() => {testeFrase()}} />
                    <input maxLength={1} max={1}   onChange={() => {testeFrase()}} />
                    <input maxLength={1} max={1}   onChange={() => {testeFrase()}} />
                    <input maxLength={1} max={1}   onChange={() => {testeFrase()}} />
                    <input maxLength={1} max={1}   onChange={() => {testeFrase()}} />
                    <input maxLength={1} max={1}   onChange={() => {testeFrase()}} />
                    <input maxLength={1} max={1}   onChange={() => {testeFrase()}} />
                    <input maxLength={1} max={1}   onChange={() => {testeFrase()}} />
                    <input maxLength={1} max={1}   onChange={() => {testeFrase()}} />
                    <input maxLength={1} max={1}   onChange={() => {testeFrase()}} />

                    <h1>5</h1>
                    <input maxLength={1} max={1}   onChange={() => {testeFrase()}} />
                    <input maxLength={1} max={1}   onChange={() => {testeFrase()}} />
                    <input maxLength={1} max={1}   onChange={() => {testeFrase()}} />

                    <h1>6</h1>
                    <input maxLength={1} max={1}   onChange={() => {testeFrase()}} />
                    <input maxLength={1} max={1}   onChange={() => {testeFrase()}} />
                    <input maxLength={1} max={1}   onChange={() => {testeFrase()}} />

                    <h1>7</h1>
                    <input maxLength={1} max={1}   onChange={() => {testeFrase()}} />
                    <input maxLength={1} max={1}   onChange={() => {testeFrase()}} />
                    <input maxLength={1} max={1}   onChange={() => {testeFrase()}} />
                    <input maxLength={1} max={1}   onChange={() => {testeFrase()}} />
                    <input maxLength={1} max={1}   onChange={() => {testeFrase()}} />

                    <h1>8</h1>
                    <input maxLength={1} max={1}   onChange={() => {testeFrase()}} />
                    <input maxLength={1} max={1}   onChange={() => {testeFrase()}} />
                    <input maxLength={1} max={1}   onChange={() => {testeFrase()}} />
                    <input maxLength={1} max={1}   onChange={() => {testeFrase()}} />
                    <input maxLength={1} max={1}   onChange={() => {testeFrase()}} />

                    <h1>9</h1>
                    <input maxLength={1} max={1}   onChange={() => {testeFrase()}} />
                    <input maxLength={1} max={1}   onChange={() => {testeFrase()}} />
                    <input maxLength={1} max={1}   onChange={() => {testeFrase()}} />
                    <input maxLength={1} max={1}   onChange={() => {testeFrase()}} />
                    <input maxLength={1} max={1}   onChange={() => {testeFrase()}} />
                    <input maxLength={1} max={1}   onChange={() => {testeFrase()}} />
                    <input maxLength={1} max={1}   onChange={() => {testeFrase()}} />
                    <input maxLength={1} max={1}   onChange={() => {testeFrase()}} />
                    <input maxLength={1} max={1}   onChange={() => {testeFrase()}} />
                    <input maxLength={1} max={1}   onChange={() => {testeFrase()}} />
                    <input maxLength={1} max={1}   onChange={() => {testeFrase()}} />
                    <input maxLength={1} max={1}   onChange={() => {testeFrase()}} />
                    <input maxLength={1} max={1}   onChange={() => {testeFrase()}} />
                    <input maxLength={1} max={1}   onChange={() => {testeFrase()}} />
                    <input maxLength={1} max={1}   onChange={() => {testeFrase()}} />
                    <input maxLength={1} max={1}   onChange={() => {testeFrase()}} />

                    
                    <h1>10</h1>
                    <input maxLength={1} max={1}   onChange={() => {testeFrase()}} />
                    <input maxLength={1} max={1}   onChange={() => {testeFrase()}} />
                    <input maxLength={1} max={1}   onChange={() => {testeFrase()}} />

                    <h1>11</h1>
                    <input maxLength={1} max={1}   onChange={() => {testeFrase()}} />
                    <input maxLength={1} max={1}   onChange={() => {testeFrase()}} />

                    <h1>12</h1>
                    <input maxLength={1} max={1}   onChange={() => {testeFrase()}} />
                    <input maxLength={1} max={1}   onChange={() => {testeFrase()}} />
                    <input maxLength={1} max={1}   onChange={() => {testeFrase()}} />
                    <input maxLength={1} max={1}   onChange={() => {testeFrase()}} />
                    <input maxLength={1} max={1}   onChange={() => {testeFrase()}} />
                    <input maxLength={1} max={1}   onChange={() => {testeFrase()}} />
                    <input maxLength={1} max={1}   onChange={() => {testeFrase()}} />
                    <input maxLength={1} max={1}   onChange={() => {testeFrase()}} />
                    <input maxLength={1} max={1}   onChange={() => {testeFrase()}} />
                    <input maxLength={1} max={1}   onChange={() => {testeFrase()}} />


                    <h1>13</h1>
                    <input maxLength={1} max={1}   onChange={() => {testeFrase()}} />
                    <input maxLength={1} max={1}   onChange={() => {testeFrase()}} />
                    <input maxLength={1} max={1}   onChange={() => {testeFrase()}} />
                    <input maxLength={1} max={1}   onChange={() => {testeFrase()}} />
                    <input maxLength={1} max={1}   onChange={() => {testeFrase()}} />
                    <input maxLength={1} max={1}   onChange={() => {testeFrase()}} />
                    <input maxLength={1} max={1}   onChange={() => {testeFrase()}} />
                    <input maxLength={1} max={1}   onChange={() => {testeFrase()}} />

                    <h1>14</h1>
                    <input maxLength={1} max={1}   onChange={() => {testeFrase()}} />
                    <input maxLength={1} max={1}   onChange={() => {testeFrase()}} />

                    <h1>15</h1>
                    <input maxLength={1} max={1}   onChange={() => {testeFrase()}} />
                    <input maxLength={1} max={1}   onChange={() => {testeFrase()}} />

                </div>
            </div>

            
        </>
    )
}