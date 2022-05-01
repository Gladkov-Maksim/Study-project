import { useState } from "react"
import styles from './Validation.module.css'
// вопрос по верстке. Ширина Input
const Validation = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.header}>Sign up for a free account</div>
            <div>
                <input placeholder="First name"></input>
                <input placeholder="Last name"></input>
            </div>
            <div className={styles.email}>
                <input placeholder="Email address"></input>
            </div>
            <div className={styles.password}>
                <input placeholder="Create password"></input>
            </div>
            <div className={styles.butttonWrapper}>
                <button>Register</button>
            </div>
        </div>
    )
}

export default Validation