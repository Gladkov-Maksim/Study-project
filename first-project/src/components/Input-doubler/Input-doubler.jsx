import { useState } from "react"
import styles from "./Input-doubler.module.css"

const installState = ''

const InputDoubler = () => {
    const [state, setState] = useState(installState)
    const submitForm = (event) => {
        event.preventDefault()
        console.log(state)
    }
    return (
        <form onSubmit={submitForm}>
            <div>ДУБЛЕР + ВЫВОД В КОНСОЛЬ</div>
            {/* <label> Зачем в примере здесь label?*/}
            <input type="text" onChange={(e) => setState(e.target.value)}/>
            <input type="submit"></input>
            {/* </label> */}
            <div className={styles.doubler}>{state}</div>
        </form>
    )
}

export default InputDoubler