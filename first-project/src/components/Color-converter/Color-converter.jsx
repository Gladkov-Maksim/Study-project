import { useState } from 'react'
import styles from './Color-converter.module.css'
// const handleInput = (e) => {
//     if (e.target.value.length === 7)
// }
const ColorConverter = () => {

    const [ hexState, setHexState ] = useState({ value: '', fullColorName: false })
    const [ rgbState, rgbHexState ] = useState({ red: '', green: '', blue: '' })

    return (
        <div className={styles.wrapper}>
            <div className={styles.inputContainer}>
                <input
                    type="text"
                    onChange={}

                />
                <div></div>
            </div>
        </div>
    )
}

export default ColorConverter
