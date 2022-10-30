import {useState} from "react"
import styles from "./Input-number.module.css"

const redSquare = (st) => {
    const arr = []
    for (let i = st; i > 0; i--) {
        arr.push(<div className={styles.square} key={i}/>)
    }
    return arr
}

const InputNumber = () => {
    const [state, setState] = useState('')

    const handleChange = (e) => setState(Number(e.target.value))

    return (
        <>
            <div className={styles.componentName}>КВАДРАТЫ</div>
            <input type="number" onChange={handleChange}/>
            {redSquare(state)}
        </>
    )
}

export default InputNumber