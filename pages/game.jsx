import React, { useState } from 'react'
import Cruzadinha from '../components/cruzadinha'
import styles from '../styles/game.module.css'

export const getServerSideProps = async (context) => {
    context.res.setHeader('Cache-Control', 's-maxage=1, stale-while-revalidate')
    const query = context.query;
    let time = null
    let erros = null
    return {
        props: {
            time: time,
            error: erros
        },
    }
}

export default function Game({ time, error }) {
    const [quantidadeErros, setQuantidadeErros] = useState(0)
    const [limiteErros, setLimiteErros] = useState(error)

    return (
        <div>
            <div className={styles.container}>
                <navbar className={styles.navbar}>
                    <div>
                        <p>Quantidade de erros {quantidadeErros}/{limiteErros}</p>
                    </div>
                    <div>
                        <button onClick={() => { Reiniciar() }}>Reiniciar</button>
                    </div>
                </navbar>
                <Cruzadinha />
                <div className={styles.informacao}>
                    <h1>Dicas</h1>
                    <div>
                        <div>
                            <p>1. É conhecida como memoria auxiliar.</p>
                            <p>2. Mantém os dados salvos quando a energia acaba.</p>
                            <p>3. É o principal item do hardware do computador.</p>
                            <p>4. Suas informações são gravadas pelo fabricante uma unica vez.</p>
                            <p>5. usada para transferir dados entre os componentes do computador.</p>
                            <p>6. O modelo foi lançado em novembro de 2009.</p>
                            <p>7. oremun o met euq  letni ad rodassecorp.</p>
                        </div>
                        <div>
                            <p>8. Memoria de curto prazo do computador.</p>
                            <p>9. Mecanismo para  permitir  a CPU acessar memórias.</p>
                            <p>10. Circuito combonatorio de funções logicas do processamento</p>
                            <p>11. Disco rígido para armazenar dados do computador.</p>
                            <p>12. Não depende da memória de processamento central.</p>
                            <p>13. Local aonde os processos devem ser extraídos</p>
                            <p>14. tipo de processador que comporta quatro núcleos de processamento de dados.</p>
                            <p>15. tipo de processador que comporta dois núcleos de processamento de dados.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}