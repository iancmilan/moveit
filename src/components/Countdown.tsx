import { useState, useEffect } from 'react';
import styles from '../styles/components/Countdown.module.css';

export function Countdown() {
    const [ time, setTime ] = useState(25 * 60);
    const [ active, setActive ] = useState(false);

    const minutes = Math.floor(time / 60); // sempre vai arredondar os minutos para baixo, ex: se o resultado de time/60 for 24.5 a const minutes será 24
    const seconds = time % 60; // resto da divisão

    //string(minutes) tranformará o numero em string. Ex: 25 = '25'
    // padStart vai verificar se nossa string tem 2 caracteres e caso não tenha preencherá a esquerda com 0. Ex: 5 minutos na função String(minutes) será '5', o padStart vai verificar se a lenght é menor 2, vai ser true, o resultado disso será '05', e no final o split fará isso ficar ['0', '5']
    // split trasnformará a string em um array de strings. Ex: 25 = ['2','5']

    const [ minuteLeft, minuteRight ] = String(minutes).padStart(2, '0').split('');
    const [ secondLeft, secondRight ] = String(seconds).padStart(2, '0').split('');

    function startCountdown() {
        setActive(true);
    }

    useEffect(() => {
        if (active && time > 0) {
            setTimeout(() => {
                setTime(time - 1);
            }, 1000);
        }
    }, [active, time]);

    return(
        <div>
            <div className={styles.countdownContainer}>
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRight}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{secondLeft}</span>
                    <span>{secondRight}</span>
                </div>
            </div>
            
            <button type="button" className={styles.countdownButton} onClick={startCountdown}>
                Iniciar um ciclo
            </button>
        </div>
    );
}