import React from 'react'
import { useRouter } from 'next/router'
import Cruzadinha from '../components/cruzadinha'
import styles from '../styles/game.module.css'

export default function Game() {
    const router = useRouter();
    function Reiniciar() {
        router.push('/');
    }

    return (
        <div>
            <div className={styles.container}>
                <nav className={styles.navbar}>
                    <div>
                        <h1>PALAVRA CRUZADA</h1>
                    </div>
                    <div>
                        <button onClick={() => { Reiniciar() }}>Sair</button>
                    </div>
                </nav>
                <div>
                    <Cruzadinha />
                </div>
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