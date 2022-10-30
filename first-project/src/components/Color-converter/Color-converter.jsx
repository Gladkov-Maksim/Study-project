import { useState, useCallback, useEffect, useMemo, useRef } from 'react'
import styles from './Color-converter.module.css'
import background from './background.jpg'

const ColorConverter = () => {

    const initialState = { hex: '#', rgb: 'rgb()'}

    const regExps = {
        hex: /^#[\da-f]{6}$/,
        rgb: /^(rgb)?\(?([01]?\d\d?|2[0-4]\d|25[0-5])(\W+)([01]?\d\d?|2[0-4]\d|25[0-5])\W+(([01]?\d\d?|2[0-4]\d|25[0-5])\)?)$/
    }

    const [ touched, setTouched ] = useState({hex: false, rgb: false})
    const [ valid , setValid ] = useState({hex: false, rgb: false})
    const [ values , setValues ] = useState(initialState)
    const [ inputsOrder, setInputsOrder] = useState({ first: 'hex', second: 'rgb'})

    const hexInputRef = useRef(null)
    const rgbInputRef = useRef(null)

    useEffect(() => {
        hexInputRef.current.focus()
    }, [])

    const handleInputValueChange = useCallback((ref) => {
        if (ref.current) setValues(prev => ({...prev, [ref.current.dataset.type]: ref.current.value}))
        const isValid = regExps[ref.current.dataset.type].test(ref.current.value)
        setValid(prev => ({...prev, [ref.current.dataset.type]:isValid}))
    }, [])

    const backgroundColor = () => {
        if (inputsOrder.first === 'hex') {
            const red = parseInt(values.hex.slice(1,3), 16)
            const green = parseInt(values.hex.slice(3,5), 16)
            const blue = parseInt(values.hex.slice(5,7), 16)
            return `rgb(${red},${green},${blue})`
        }
        else {
            return values.rgb
        }
    }

    const handleChangeOrder = () => {
        setInputsOrder(prev => ({ first: prev.second, second: prev.first }))
        setValues(prev => ({...prev, [inputsOrder.first]: initialState[inputsOrder.first]}))
        setValid(prev => ({...prev, [inputsOrder.first]: false}))
        setTouched({hex: false, rgb: false})
    }

    const warning = (order) => {
        if (!valid[inputsOrder[order]] && touched[inputsOrder[order]] && order === 'first') {
            return <div className={styles.error}>{inputsOrder[order] === 'hex' ? 'Название цвета должно начинаться с # и содержать цифры или буквы от a до f' : 'Название цвета должно иметь вид rgb(0-255,0-255,0-255)'}</div>
        }
    }

    const containerStyle =  valid[inputsOrder.first] ? {backgroundColor: backgroundColor()} : {backgroundImage: `url(${background}`}

    const input = (order) => {
        return (
            <div className={styles.inputContainer}>
                <input
                    type="text"
                    data-type={inputsOrder[order]}
                    value={inputsOrder[order] === 'rgb' ? values.rgb : values.hex}
                    ref={inputsOrder[order] === 'rgb' ? rgbInputRef : hexInputRef}
                    maxLength={inputsOrder[order] === 'rgb' ? 16 : 7}
                    onBlur={ () => setTouched(prev => ({...prev, [inputsOrder[order]]: true}))}
                    onChange={() => handleInputValueChange(inputsOrder[order] === 'rgb' ? rgbInputRef : hexInputRef)}
                    readOnly={order === 'second'}
                />
                {warning(order)}
            </div>
        )
    }

    return (
        <>
            <div className={styles.componentName}>КОНВЕРТЕР ЦВЕТОВ</div>
            <div
                className={styles.wrapper}
                style={containerStyle}
            >
                <div>
                    {input('first')}
                    {input('second')}
                </div>
                <span
                    className={styles.changeInput}
                    onClick={handleChangeOrder}
                >⇅</span>
            </div>
        </>
    )
}

export default ColorConverter
