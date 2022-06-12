import { useState, useCallback, useEffect, useMemo, useRef } from 'react'
import styles from './Color-converter.module.css'
import background from './background.jpg'

const ColorConverter = () => {
    const [ hexTouched, setHexTouched ] = useState(false)
    const [ rgbTouched, setRgbTouched ] = useState(false)
    const [ hexValid , setHexValid ] = useState(false)
    const [ rgbValid , setRgbValid ] = useState(false)
    const [ hexState, setHexState ] = useState('')
    const [ rgbState, setRgbState ] = useState({})

    const hexInputRef = useRef(null)
    const rgbInputRef = useRef(null)

    useEffect( () => {
        if (hexValid) { // - костыль, но сам запутался и  не знаю как по-другому
            const red = parseInt(hexState.slice(1,3), 16)
            const green = parseInt(hexState.slice(3,5), 16)
            const blue = parseInt(hexState.slice(5,7), 16)
            setRgbState({r: red, g: green, b: blue})
        }
    }, [hexValid])

    useEffect(() => {
        hexInputRef.current.focus()
        hexInputRef.current.value = '#'
        rgbInputRef.current.value = 'rgb()'
    }, [])

    useEffect(() => {
        setHexValid(/^#[\da-f]{6}$/.test(hexState))
    }, [hexState])

    useEffect(() => {
        setRgbValid(/^rgb([0-255],[0-255],[0-255])$/.test(hexState))
    }, [rgbState])

    // const hexInput = useRef()

    const handleInputChange = useCallback((ref) => ()=> {
        if (ref.current.dataset.type === 'hex' ) {
            if (ref.current.value[0] !== '#') {
                ref.current.value = '#' + ref.current.value
            }
            setHexState(ref.current.value)
        }
        else if (ref.current.dataset.type === 'rgb') {
            setHexState(ref.current.value)
        }
        }, [])

    const containerStyle = useMemo( ()=> hexValid ? {backgroundColor: `rgb(${rgbState.r},${rgbState.g},${rgbState.b})`} : {backgroundImage: `url(${background}`}, [hexValid, rgbState])
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
            <div>
                <input
                    type="text"
                    data-type="hex"
                    ref={hexInputRef}
                    maxLength={7}
                    onChange={handleInputChange(hexInputRef)}
                    onBlur={ () => setHexTouched(true)}
                />
                {!hexValid && hexTouched && <div className={styles.error}>Название цвета должно начинаться с # и содержать цифры или буквы от a до f</div>}
                <input
                    type="text"
                    data-type="rgb"
                    ref={rgbInputRef}
                    maxLength={16}
                    onBlur={ () => setRgbTouched(true)}
                    onChange={handleInputChange(rgbInputRef)}
                />
                {!rgbValid && rgbTouched && <div className={styles.error}>Название цвета должно иметь вид rgb(0-255,0-255,0-255)</div>}
                {/*<div className={styles.rgb}>*/}
                {/*    <span>*/}
                {/*        {valid && `rgb(${rgbState.r},${rgbState.g},${rgbState.b})`}*/}
                {/*    </span>*/}

                {/*</div>*/}
            </div>
        </div>
    )
}

export default ColorConverter


