import { useState } from "react"
import styles from "./Input-doubler.module.css"

const installState = ''

const InputDoubler = () => {
    const [state, setState] = useState(installState)

    const submitForm = (text) => (event) => {
        event.preventDefault()
        console.log(text)
    }

    return (
        <form onSubmit={submitForm(state)}>
            <div className={styles.componentName}>ДУБЛЕР + ВЫВОД В КОНСОЛЬ</div>
            <input className={styles.input} type="text" onChange={(e) => setState(e.target.value)}/>
            <input className={styles.input} type="submit"></input>
            <div className={styles.doubler}>{state}</div>
        </form>
    )
}

export default InputDoubler