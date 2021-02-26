import {useState, useEffect, useContext} from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'
import { CountdownContext } from '../contexts/CountdownContext'

import styles from '../styles/components/Countdown.module.css'


export function Countdown(){
    const {minutes, seconds, hasFinished, isActive, startCounterdown, resetCountdown} = useContext(CountdownContext)


    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('')
    const [secondsLeft, secondsRight] = String(seconds).padStart(2, '0').split('')

  


    return(
        <div>
            <div className={styles.countdownContainer}>
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRight}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{secondsLeft}</span>
                    <span>{secondsRight}</span>
                </div>
            </div>


            {hasFinished ? (
                <button disabled className={styles.CountdownButton}>
                    Ciclo encerrado               
                </button>
            ): (
                <>
                 {isActive ? ( 
                <button onClick={resetCountdown} type="button" className={`${styles.CountdownButton} 
                ${styles.countdownButtonActive}`}>
                    Abandonar um ciclo               
                </button>
                ): (
                <button onClick={startCounterdown} type="button" className={styles.CountdownButton}>
                    Iniciar um Ciclo      
                </button>) }
                </>
            )}


           
        </div>


        
            

    );
}