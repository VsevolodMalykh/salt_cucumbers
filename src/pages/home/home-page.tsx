import { useNavigate } from 'react-router'
import styles from './home.module.css'

export const HomePage = () => {
    const navigate = useNavigate()

    return (
        <>
            <h1 className={styles.title}>Home</h1>
            
            <div className={styles.container}>
                <button className={styles.container_button} onClick={() => navigate('/register')}>Register</button>
                <button className={styles.container_button} onClick={() => navigate('/login')}>Authorization</button>
            </div>
        </>
    )
}