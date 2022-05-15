import {useState} from "react"
import styles from "./Input-number.module.css"

const redSquare = (st) => {
    const arr = []
    for (let i = st; i > 0; i--) {
        arr.push(<div className={styles.square}/>)
    }
    return arr
}

const InputNumber = () => {
    const [state, setState] = useState('')

    const handleChange = (a) => e => setState(a + Number(e.target.value))

    return (
        <>
            <div>КВАДРАТЫ</div>
            <input type="number" onChange={handleChange(4)}/>
            {redSquare(state)}
        </>
    )
}

export default InputNumber