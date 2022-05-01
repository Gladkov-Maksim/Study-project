import {useState} from "react"
import styles from "./Input-number.module.css"

const redSquare = (st) => {
    const arr = []
    for (let i = st; i > 0; i--) {
        arr.push(<div className={styles.square}></div>)
    }
    return arr
}

const InputNumber = () => {
    const [state, setState] = useState('')
    return (
        <>
            <div>КВАДРАТЫ</div>
            <input type="number" onChange={(e) => setState(e.target.value)}/>
            {redSquare(state)}
        </>
    )
}

export default InputNumber