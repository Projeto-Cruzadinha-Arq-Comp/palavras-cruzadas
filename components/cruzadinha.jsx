import React, { useState } from 'react';
import styles from '../styles/cruzadinha.module.css'

export default function Cruzadinha() {
    const [p1, setP1] = useState('')
    const [p2, setP2] = useState('')
    const [p3, setP3] = useState('')

    function testeFrase() {
        // frase 1
        const inputP1e1 = document.getElementById('inputP1_1').value;
        const inputP1e2 = document.getElementById('inputP1_2').value;
        const inputP1e3 = document.getElementById('inputP1_3').value;
        const inputP1e4 = document.getElementById('inputP1_4').value;
        const inputP1e5 = document.getElementById('inputP1_5').value;
        const inputP1e6 = document.getElementById('inputP1_6').value;
        const inputP1e7 = document.getElementById('inputP1_7').value;
        const inputP1e8 = document.getElementById('inputP1_8').value;
        const inputP1e9 = document.getElementById('inputP1_9').value;
        const inputP1e10 = document.getElementById('inputP1_10').value;
        const inputP1e11 = document.getElementById('inputP1_11').value;
        const inputP1e12 = document.getElementById('inputP1_12').value;
        const inputP1e13 = document.getElementById('inputP1_13').value;
        const inputP1e14 = document.getElementById('inputP1_14').value;

        if (inputP1e1.toUpperCase() == '' || inputP1e2.toUpperCase() == '' || inputP1e3.toUpperCase() == '' || inputP1e4.toUpperCase() == ''
            || inputP1e5.toUpperCase() == '' || inputP1e6.toUpperCase() == '' || inputP1e7.toUpperCase() == '' || inputP1e8.toUpperCase() == ''
            || inputP1e9.toUpperCase() == '' || inputP1e10.toUpperCase() == '' || inputP1e11.toUpperCase() == '' || inputP1e12.toUpperCase() == ''
            || inputP1e13.toUpperCase() == '' || inputP1e14.toUpperCase() == '') {
            inputP1_1.style.border = '1px solid #B7B7B7'
            inputP1_2.style.border = '1px solid #B7B7B7'
            inputP1_3.style.border = '1px solid #B7B7B7'
            inputP1_4.style.border = '1px solid #B7B7B7'
            inputP1_5.style.border = '1px solid #B7B7B7'
            inputP1_6.style.border = '1px solid #B7B7B7'
            inputP1_7.style.border = '1px solid #B7B7B7'
            inputP1_8.style.border = '1px solid #B7B7B7'
            inputP1_9.style.border = '1px solid #B7B7B7'
            inputP1_10.style.border = '1px solid #B7B7B7'
            inputP1_11.style.border = '1px solid #B7B7B7'
            inputP1_12.style.border = '1px solid #B7B7B7'
            inputP1_13.style.border = '1px solid #B7B7B7'
            inputP1_14.style.border = '1px solid #B7B7B7'
        } else {
            var frase1 = [inputP1e1, inputP1e2, inputP1e3, inputP1e4, inputP1e5, inputP1e6, inputP1e7, inputP1e8, inputP1e9, inputP1e10, inputP1e11,
                inputP1e12, inputP1e13, inputP1e14]

            var verificarFrase1 = '';
            if (frase1.length == 14) {
                for (let pos = 0; pos < 14; pos++) {
                    verificarFrase1 += frase1[pos]
                    console.log(verificarFrase1)
                    if (verificarFrase1.toUpperCase() == 'MEMORIADEMASSA') {
                        inputP1_1.style.border = '2px solid green'
                        inputP1_2.style.border = '2px solid green'
                        inputP1_3.style.border = '2px solid green'
                        inputP1_4.style.border = '2px solid green'
                        inputP1_5.style.border = '2px solid green'
                        inputP1_6.style.border = '2px solid green'
                        inputP1_7.style.border = '2px solid green'
                        inputP1_8.style.border = '2px solid green'
                        inputP1_9.style.border = '2px solid green'
                        inputP1_10.style.border = '2px solid green'
                        inputP1_11.style.border = '2px solid green'
                        inputP1_12.style.border = '2px solid green'
                        inputP1_13.style.border = '2px solid green'
                        inputP1_14.style.border = '2px solid green'
                    } else {
                        inputP1_1.style.border = '2px solid red'
                        inputP1_2.style.border = '2px solid red'
                        inputP1_3.style.border = '2px solid red'
                        inputP1_4.style.border = '2px solid red'
                        inputP1_5.style.border = '2px solid red'
                        inputP1_6.style.border = '2px solid red'
                        inputP1_7.style.border = '2px solid red'
                        inputP1_8.style.border = '2px solid red'
                        inputP1_9.style.border = '2px solid red'
                        inputP1_10.style.border = '2px solid red'
                        inputP1_11.style.border = '2px solid red'
                        inputP1_12.style.border = '2px solid red'
                        inputP1_13.style.border = '2px solid red'
                        inputP1_14.style.border = '2px solid red'
                    }
                }
            }
        }

        //Frase 2
        const inputP1e2I = document.getElementById('inputP1_2').value;
        const inputP2e2 = document.getElementById('inputP2_2').value;
        const inputP2e3 = document.getElementById('inputP2_3').value;
        const inputP2e4 = document.getElementById('inputP2_4').value;
        const inputP2e5 = document.getElementById('inputP2_5').value;

        if (inputP2e2.toUpperCase() == '' || inputP2e3.toUpperCase() == '' || inputP2e4.toUpperCase() == ''
            || inputP2e5.toUpperCase() == '' || inputP1e2I.toUpperCase() == '') {

            inputP1_2.style.border = '1px solid #B7B7B7'
            inputP2_2.style.border = '1px solid #B7B7B7'
            inputP2_3.style.border = '1px solid #B7B7B7'
            inputP2_4.style.border = '1px solid #B7B7B7'
            inputP2_5.style.border = '1px solid #B7B7B7'

        } else {
            var frase2 = [inputP1e2I, inputP2e2, inputP2e3, inputP2e4, inputP2e5]

            var verificarFrase2 = '';
            if (frase2.length == 5) {
                for (let pos = 0; pos < 5; pos++) {
                    verificarFrase2 += frase2[pos]
                    console.log(verificarFrase2)
                    if (verificarFrase2.toUpperCase() == 'EPROM') {
                        inputP1_2.style.border = '2px solid green'
                        inputP2_2.style.border = '2px solid green'
                        inputP2_3.style.border = '2px solid green'
                        inputP2_4.style.border = '2px solid green'
                        inputP2_5.style.border = '2px solid green'
                    } else {
                        inputP1_2.style.border = '2px solid red'
                        inputP2_2.style.border = '2px solid red'
                        inputP2_3.style.border = '2px solid red'
                        inputP2_4.style.border = '2px solid red'
                        inputP2_5.style.border = '2px solid red'
                    }
                }
            }
        }


        //Frase 3
        const p1 = document.getElementById('input_P1').value;
        const p2 = document.getElementById('input_P2').value;
        const p3 = document.getElementById('input_P3').value;

        if (p1.toUpperCase() == '' || p2.toUpperCase() == '' || p3.toUpperCase() == '') {
            input_P1.style.border = '1px solid #B7B7B7'
            input_P2.style.border = '1px solid #B7B7B7'
            input_P3.style.border = '1px solid #B7B7B7'
        } else {
            var frase3 = [p1, p2, p3]

            var verificarFrase3 = '';
            if (frase3.length == 3) {
                for (let pos = 0; pos < 3; pos++) {
                    verificarFrase3 += frase3[pos]
                    console.log(verificarFrase3)
                    if (verificarFrase3.toUpperCase() == 'CPU') {
                        input_P1.style.border = '2px solid green'
                        input_P2.style.border = '2px solid green'
                        input_P3.style.border = '2px solid green'
                    } else {
                        input_P1.style.border = '2px solid red'
                        input_P2.style.border = '2px solid red'
                        input_P3.style.border = '2px solid red'
                    }
                }
            }
        }

        // frase 4
        const inputP4e1 = document.getElementById('inputP4_1').value;
        const inputP4e2 = document.getElementById('inputP4_2').value;
        const inputP2e5I = document.getElementById('inputP2_5').value;


        if (inputP4e1.toUpperCase() == '' || inputP4e2.toUpperCase() == '' || inputP2e5I.toUpperCase() == '') {

            inputP4_1.style.border = '1px solid #B7B7B7'
            inputP4_2.style.border = '1px solid #B7B7B7'
            inputP2_5.style.border = '1px solid #B7B7B7'

        } else {
            var frase4 = [inputP4e1, inputP4e2, inputP2e5I]

            var verificarFrase4 = '';
            if (frase4.length == 3) {
                for (let pos = 0; pos < 3; pos++) {
                    verificarFrase4 += frase4[pos]
                    console.log(verificarFrase4)
                    if (verificarFrase4.toUpperCase() == 'ROM') {
                        inputP4_1.style.border = '2px solid green'
                        inputP4_2.style.border = '2px solid green'
                        inputP2_5.style.border = '2px solid green'
                    } else {
                        inputP4_1.style.border = '2px solid red'
                        inputP4_2.style.border = '2px solid red'
                        inputP2_5.style.border = '2px solid red'
                    }
                }
            }
        }
        //frase 5

        const inputP5e1 = document.getElementById('inputP5_1').value;
        const inputP5e2 = document.getElementById('inputP5_2').value;
        const inputP5e3 = document.getElementById('inputP5_3').value;
        const inputP5e4 = document.getElementById('inputP5_4').value;
        const inputP5e5 = document.getElementById('inputP5_5').value;
        const inputP5e6 = document.getElementById('inputP5_6').value;
        const inputP5e7 = document.getElementById('inputP5_7').value;

        if (inputP5e1.toUpperCase() == '' || inputP5e2.toUpperCase() == '' || inputP5e3.toUpperCase() == '' || inputP5e4.toUpperCase() == ''
            || inputP5e5.toUpperCase() == '' || inputP5e6.toUpperCase() == '' || inputP5e7.toUpperCase() == '') {
            inputP5_1.style.border = '1px solid #B7B7B7'
            inputP5_2.style.border = '1px solid #B7B7B7'
            inputP5_3.style.border = '1px solid #B7B7B7'
            inputP5_4.style.border = '1px solid #B7B7B7'
            inputP5_5.style.border = '1px solid #B7B7B7'
            inputP5_6.style.border = '1px solid #B7B7B7'
            inputP5_7.style.border = '1px solid #B7B7B7'
        } else {
            var frase5 = [inputP5e1, inputP5e2, inputP5e3, inputP5e4, inputP5e5, inputP5e6, inputP5e7]

            var verificarFrase5 = '';
            if (frase5.length == 7) {
                for (let pos = 0; pos < 7; pos++) {
                    verificarFrase5 += frase5[pos]
                    console.log(verificarFrase5)
                    if (verificarFrase5.toUpperCase() == 'DATABUS') {
                        inputP5_1.style.border = '2px solid green'
                        inputP5_2.style.border = '2px solid green'
                        inputP5_3.style.border = '2px solid green'
                        inputP5_4.style.border = '2px solid green'
                        inputP5_5.style.border = '2px solid green'
                        inputP5_6.style.border = '2px solid green'
                        inputP5_7.style.border = '2px solid green'
                    } else {
                        inputP5_1.style.border = '2px solid red'
                        inputP5_2.style.border = '2px solid red'
                        inputP5_3.style.border = '2px solid red'
                        inputP5_4.style.border = '2px solid red'
                        inputP5_5.style.border = '2px solid red'
                        inputP5_6.style.border = '2px solid red'
                        inputP5_7.style.border = '2px solid red'
                    }
                }
            }
        }
        // frase 6
        const ido5 = document.getElementById('inputP1_6').value;
        const inputP6e2 = document.getElementById('inputP6_2').value;

        if (inputP6e2.toUpperCase() == '' || ido5.toUpperCase() == '') {
            inputP1_6.style.border = '1px solid #B7B7B7'
            inputP6_2.style.border = '1px solid #B7B7B7'
        } else {
            var frase6 = [ido5, inputP6e2]

            var verificarFrase6 = '';
            if (frase6.length == 2) {
                for (let pos = 0; pos < 2; pos++) {
                    verificarFrase6 += frase6[pos]
                    console.log(verificarFrase6)
                    if (verificarFrase6.toUpperCase() == 'I5') {
                        inputP6_2.style.border = '2px solid green'
                        inputP1_6.style.border = '2px solid green'
                    } else {
                        inputP6_2.style.border = '2px solid red'
                        inputP1_6.style.border = '2px solid red'
                    }
                }
            }
        }
        // frase 7

        const inputP7e1 = document.getElementById('inputP7_1').value;
        const inputP7e2 = document.getElementById('inputP7_2').value;

        if (inputP7e1.toUpperCase() == '' || inputP7e2.toUpperCase() == '') {

            inputP7_1.style.border = '1px solid #B7B7B7'
            inputP7_2.style.border = '1px solid #B7B7B7'

        } else {
            var frase7 = [inputP7e1, inputP7e2]

            var verificarFrase7 = '';
            if (frase7.length == 2) {
                for (let pos = 0; pos < 2; pos++) {
                    verificarFrase7 += frase7[pos]
                    console.log(verificarFrase7)
                    if (verificarFrase7.toUpperCase() == 'I7') {
                        inputP7_1.style.border = '2px solid green'
                        inputP7_2.style.border = '2px solid green'
                    } else {
                        inputP7_1.style.border = '2px solid red'
                        inputP7_2.style.border = '2px solid red'
                    }
                }
            }
        }
        // frase 8
        const inputP8e1 = document.getElementById('inputP8_1').value;
        const inputP16e1I = document.getElementById('inputP16_1').value;
        const inputP8e3 = document.getElementById('inputP8_3').value;


        if (inputP8e1.toUpperCase() == '' || inputP16e1I.toUpperCase() == '' || inputP8e3.toUpperCase() == '') {

            inputP8_1.style.border = '1px solid #B7B7B7'
            inputP16_1.style.border = '1px solid #B7B7B7'
            inputP8_3.style.border = '1px solid #B7B7B7'

        } else {
            var frase8 = [inputP8e1, inputP16e1I, inputP8e3]
            console.log(frase8)
            var verificarFrase8 = '';
            if (frase8.length == 3) {
                for (let pos = 0; pos < 3; pos++) {
                    verificarFrase8 += frase8[pos]
                    console.log(verificarFrase8)
                    if (verificarFrase8.toUpperCase() == 'RAM') {
                        inputP8_1.style.border = '2px solid green'
                        inputP16_1.style.border = '2px solid green'
                        inputP8_3.style.border = '2px solid green'
                    } else {
                        inputP8_1.style.border = '2px solid red'
                        inputP16_1.style.border = '2px solid red'
                        inputP8_3.style.border = '2px solid red'
                    }
                }
            }
        }
        // frase 9

        const inputP9e1 = document.getElementById('inputP9_1').value;
        const inputP13e5I = document.getElementById('inputP13_5').value;

        if (inputP9e1.toUpperCase() == '' || inputP13e5I.toUpperCase() == '') {

            inputP9_1.style.border = '1px solid #B7B7B7'
            inputP13_5.style.border = '1px solid #B7B7B7'

        } else {
            var frase9 = [inputP9e1, inputP13e5I]

            var verificarFrase9 = '';
            if (frase9.length == 2) {
                for (let pos = 0; pos < 2; pos++) {
                    verificarFrase9 += frase9[pos]
                    console.log(verificarFrase9)
                    if (verificarFrase9.toUpperCase() == 'CS') {
                        inputP9_1.style.border = '2px solid green'
                        inputP13_5.style.border = '2px solid green'
                    } else {
                        inputP9_1.style.border = '2px solid red'
                        inputP13_5.style.border = '2px solid red'
                    }
                }
            }
        }
        // frase 10

        const inputP5e2I = document.getElementById('inputP5_6').value;
        const inputP10e2 = document.getElementById('inputP10_2').value;
        const inputP16e8I = document.getElementById('inputP16_8').value;


        if (inputP5e2I.toUpperCase() == '' || inputP10e2.toUpperCase() == '' || inputP16e8I.toUpperCase() == '') {

            inputP5_6.style.border = '1px solid #B7B7B7'
            inputP10_2.style.border = '1px solid #B7B7B7'
            inputP16_8.style.border = '1px solid #B7B7B7'

        } else {
            var frase10 = [inputP5e2I, inputP10e2, inputP16e8I]
            console.log(frase10)
            var verificarFrase10 = '';
            if (frase10.length == 3) {
                for (let pos = 0; pos < 3; pos++) {
                    verificarFrase10 += frase10[pos]
                    console.log(verificarFrase10)
                    if (verificarFrase10.toUpperCase() == 'ULA') {
                        inputP5_6.style.border = '2px solid green'
                        inputP10_2.style.border = '2px solid green'
                        inputP16_8.style.border = '2px solid green'
                    } else {
                        inputP5_6.style.border = '2px solid red'
                        inputP10_2.style.border = '2px solid red'
                        inputP16_8.style.border = '2px solid red'
                    }
                }
            }
        }
    }

    return (
        <>
            <div className={styles.container}>
                <div>
                    <div style={{marginLeft: '109px'}}>
                        <div className={styles.coupleinput3e9}>
                            <div className={styles.input3}>
                                <input maxLength={1} max={1} id="input_P1" onChange={() => { testeFrase() }} placeholder={'3'} />
                                <input maxLength={1} max={1} id="input_P2" onChange={() => { testeFrase() }} />
                                {/* apaguei a input_P3 para ser usada na U da inputP13_8*/}
                            </div>

                            <div className={styles.input9}>
                                <input maxLength={1} max={1} id="inputP9_1" onChange={() => { testeFrase() }} placeholder={'9'} />
                                {/* apaguei a input 9 do CS para usar o 'S' da inputP13_5*/}
                            </div>
                        </div>

                        <div className={styles.input13}>
                            <input maxLength={1} max={1} id="inputP13_1" onChange={() => { testeFrase() }} placeholder={'13'} />
                            <input maxLength={1} max={1} id="inputP13_2" onChange={() => { testeFrase() }} placeholder={'15'} />
                            <input maxLength={1} max={1} id="inputP13_3" onChange={() => { testeFrase() }} />
                            <input maxLength={1} max={1} id="inputP13_4" onChange={() => { testeFrase() }} />
                            <input maxLength={1} max={1} id="inputP13_5" onChange={() => { testeFrase() }} />
                            <input maxLength={1} max={1} id="inputP13_6" onChange={() => { testeFrase() }} />
                            <input maxLength={1} max={1} id="inputP13_7" onChange={() => { testeFrase() }} />
                            <input maxLength={1} max={1} id="inputP13_8" onChange={() => { testeFrase() }} />
                            <input maxLength={1} max={1} id="inputP13_9" onChange={() => { testeFrase() }} />
                        </div>

                        <div className={styles.input15}>
                            {/*<input maxLength={1} max={1} id="inputP15_1" onChange={() => { testeFrase() }}  />*/}
                            <input maxLength={1} max={1} id="inputP15_2" onChange={() => { testeFrase() }} />
                            <input maxLength={1} max={1} id="inputP15_3" onChange={() => { testeFrase() }} />
                            <input maxLength={1} max={1} id="inputP15_4" onChange={() => { testeFrase() }} />
                            <input maxLength={1} max={1} id="inputP15_5" onChange={() => { testeFrase() }} />
                            <input maxLength={1} max={1} id="inputP15_6" onChange={() => { testeFrase() }} />
                            <input maxLength={1} max={1} id="inputP15_7" onChange={() => { testeFrase() }} />
                            <input maxLength={1} max={1} id="inputP15_8" onChange={() => { testeFrase() }} />
                        </div>
                    </div>

                    <div className={styles.input1}>
                        <input maxLength={1} max={1} id="inputP1_1" onChange={() => { testeFrase() }} placeholder={'1'} />
                        <input maxLength={1} max={1} id="inputP1_2" onChange={() => { testeFrase() }} placeholder={'2'} />
                        <input maxLength={1} max={1} id="inputP1_3" onChange={() => { testeFrase() }} style={{marginRight: '54px'}}/>

                        <input maxLength={1} max={1} id="inputP1_5" onChange={() => { testeFrase() }} />
                        <input maxLength={1} max={1} id="inputP1_6" onChange={() => { testeFrase() }} placeholder={'6'} />
                        <input maxLength={1} max={1} id="inputP1_7" onChange={() => { testeFrase() }} />
                        <input maxLength={1} max={1} id="inputP1_8" onChange={() => { testeFrase() }} />
                        <input maxLength={1} max={1} id="inputP1_9" onChange={() => { testeFrase() }} />
                        <input maxLength={1} max={1} id="inputP1_10" onChange={() => { testeFrase() }} />
                        <input maxLength={1} max={1} id="inputP1_11" onChange={() => { testeFrase() }} />
                        <input maxLength={1} max={1} id="inputP1_12" onChange={() => { testeFrase() }} />
                        <input maxLength={1} max={1} id="inputP1_13" onChange={() => { testeFrase() }} />
                        <input maxLength={1} max={1} id="inputP1_14" onChange={() => { testeFrase() }} />
                    </div>

                    <div className={styles.couple2e6}>
                    <div className={styles.input2}>
                        <input maxLength={1} max={1} id="inputP2_2" onChange={() => { testeFrase() }} />
                        <input maxLength={1} max={1} id="inputP2_3" onChange={() => { testeFrase() }} />
                        <input maxLength={1} max={1} id="inputP2_4" onChange={() => { testeFrase() }} />
                        <input maxLength={1} max={1} id="inputP2_5" onChange={() => { testeFrase() }} />
                    </div>

                    <div className={styles.input6}>
                        <input maxLength={1} max={1} id="inputP6_2" onChange={() => { testeFrase() }} />
                    </div>
                    </div>

                    <div className={styles.input5}>
                        <input maxLength={1} max={1} id="inputP5_1" onChange={() => { testeFrase() }} />
                        <input maxLength={1} max={1} id="inputP5_2" onChange={() => { testeFrase() }} />
                        <input maxLength={1} max={1} id="inputP5_3" onChange={() => { testeFrase() }} />
                        <input maxLength={1} max={1} id="inputP5_4" onChange={() => { testeFrase() }} />
                        <input maxLength={1} max={1} id="inputP5_5" onChange={() => { testeFrase() }} />
                        <input maxLength={1} max={1} id="inputP5_6" onChange={() => { testeFrase() }} />
                        <input maxLength={1} max={1} id="inputP5_7" onChange={() => { testeFrase() }} placeholder={'5'} />
                    </div>

                    <div className={styles.input7}>
                        <input maxLength={1} max={1} id="inputP7_1" onChange={() => { testeFrase() }} placeholder={'7'} />
                        <input maxLength={1} max={1} id="inputP7_2" onChange={() => { testeFrase() }} />
                    </div>

                    <div className={styles.input8}>
                        <input maxLength={1} max={1} id="inputP8_1" onChange={() => { testeFrase() }} placeholder={'8'} />
                        {/* apaguei a input 2 da RAM para usar o 'A' da inputP16_1*/}
                        <input maxLength={1} max={1} id="inputP8_3" onChange={() => { testeFrase() }} />

                    </div>

                    <div className={styles.input10}>
                        {/* apaguei a input 10 da ULA para usar o 'U' da inputP5_6*/}
                        <input maxLength={1} max={1} id="inputP10_2" onChange={() => { testeFrase() }} placeholder={'10'} />
                        {/* apaguei a input 10 da ULA para usar o 'A' da inputP16_8*/}
                    </div>

                    <div className={styles.input11}>
                        <input maxLength={1} max={1} id="inputP11_1" onChange={() => { testeFrase() }} placeholder={'11'} />
                        <input maxLength={1} max={1} id="inputP11_2" onChange={() => { testeFrase() }} />
                        <input maxLength={1} max={1} id="inputP11_3" onChange={() => { testeFrase() }} />
                        <input maxLength={1} max={1} id="inputP11_4" onChange={() => { testeFrase() }} />
                        <input maxLength={1} max={1} id="inputP11_5" onChange={() => { testeFrase() }} />
                    </div>

                    <div className={styles.input12}>
                        <input maxLength={1} max={1} id="inputP12_1" onChange={() => { testeFrase() }} placeholder={'12'} />
                        <input maxLength={1} max={1} id="inputP12_2" onChange={() => { testeFrase() }} />
                        <input maxLength={1} max={1} id="inputP12_3" onChange={() => { testeFrase() }} />
                    </div>

                    <div className={styles.input14}>
                        <input maxLength={1} max={1} id="inputP14_1" onChange={() => { testeFrase() }} placeholder={'14'} />
                        <input maxLength={1} max={1} id="inputP14_2" onChange={() => { testeFrase() }} />
                        <input maxLength={1} max={1} id="inputP14_3" onChange={() => { testeFrase() }} />
                        <input maxLength={1} max={1} id="inputP14_4" onChange={() => { testeFrase() }} />
                        <input maxLength={1} max={1} id="inputP14_5" onChange={() => { testeFrase() }} />
                        <input maxLength={1} max={1} id="inputP14_6" onChange={() => { testeFrase() }} />
                        <input maxLength={1} max={1} id="inputP14_7" onChange={() => { testeFrase() }} />
                        <input maxLength={1} max={1} id="inputP14_8" onChange={() => { testeFrase() }} />
                    </div>

                    <div className={styles.input16}>
                        <input maxLength={1} max={1} id="inputP16_1" onChange={() => { testeFrase() }} placeholder={'16'} />
                        <input maxLength={1} max={1} id="inputP16_2" onChange={() => { testeFrase() }} />
                        <input maxLength={1} max={1} id="inputP16_3" onChange={() => { testeFrase() }} />
                        <input maxLength={1} max={1} id="inputP16_4" onChange={() => { testeFrase() }} />
                        <input maxLength={1} max={1} id="inputP16_5" onChange={() => { testeFrase() }} />
                        <input maxLength={1} max={1} id="inputP16_6" onChange={() => { testeFrase() }} />
                        <input maxLength={1} max={1} id="inputP16_7" onChange={() => { testeFrase() }} />
                        <input maxLength={1} max={1} id="inputP16_8" onChange={() => { testeFrase() }} />
                        <input maxLength={1} max={1} id="inputP16_9" onChange={() => { testeFrase() }} />
                        <input maxLength={1} max={1} id="inputP16_10" onChange={() => { testeFrase() }} />
                        <input maxLength={1} max={1} id="inputP16_11" onChange={() => { testeFrase() }} />
                        <input maxLength={1} max={1} id="inputP16_12" onChange={() => { testeFrase() }} />
                    </div>

                    <div className={styles.input4}>
                        <input maxLength={1} max={1} id="inputP4_1" onChange={() => { testeFrase() }} placeholder={'4'} />
                        <input maxLength={1} max={1} id="inputP4_2" onChange={() => { testeFrase() }} />
                    </div>
                </div>
            </div>
        </>
    )
}