import { useState, useCallback, useEffect, useMemo, useRef } from 'react'
import styles from './Color-converter.module.css'
import background from './background.jpg'

const ColorConverter = () => {
    const [ touched, setTouched ] = useState(false)
    const [ valid , setValid ] = useState(false)
    const [ hexState, setHexState ] = useState('')
    const [ rgbState, setRgbState ] = useState({})
    const hexInputRef = useRef(null) // {current: null}

    useEffect( () => {
        if (valid) { // - костыль, но сам запутался и  не знаю как по-другому
            const red = parseInt(hexState.slice(1,3), 16)
            const green = parseInt(hexState.slice(3,5), 16)
            const blue = parseInt(hexState.slice(5,7), 16)
            setRgbState({r: red, g: green, b: blue})
        }
    }, [valid])

    useEffect(() => {
        hexInputRef.current.focus()
    }, [])

    useEffect(() => {
        setValid(/^#[\da-f]{6}$/.test(hexState))
    }, [hexState])

    const handleInputChange = useCallback((e)=> setHexState(e.target.value), [])

    const containerStyle = useMemo( ()=> valid ? {backgroundColor: `rgb(${rgbState.r},${rgbState.g},${rgbState.b})`} : {backgroundImage: `url(${background}`}, [valid, rgbState])
     /***
            TODO: Сделать валидацию hexState
            первый символ = #,
            всего 7 симвоов,
            символы, кроме # имеют диапазон от 0 до f
      */

    return (
        <div
            className={styles.wrapper}
            style={containerStyle}
        >
                <input
                    type="text"
                    ref={hexInputRef}
                    maxLength={7}
                    onChange={handleInputChange}
                    onBlur={ () => setTouched(true)}
                />
                {!valid && touched && <div className={styles.error}>Название цвета должно начинаться с # и содержать цифры или буквы от a до f</div>}
                <div className={styles.rgb}>
                    <span>
                        {valid && `rgb(${rgbState.r},${rgbState.g},${rgbState.b})`}
                    </span>

                </div>
        </div>
    )
}

export default ColorConverter


