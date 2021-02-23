import styles from '../styles/components/Profile.module.css';


export function Profile(){
    return(
        <div className={styles.profileContainer}>
            <img src='https://github.com/gabrielqoliveiraa.png' alt='Gabriel Queiroz'/>
            <div>
                <strong>Gabriel Queiroz</strong>
                <p>
                    <img src='icons/level.svg' alt='Level'/>
                    Level 1
                </p>
            </div>
        </div>
    );
}