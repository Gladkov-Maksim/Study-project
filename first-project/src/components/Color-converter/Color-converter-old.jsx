// import { useState, useCallback, useEffect, useMemo, useRef } from 'react'
// import styles from './Color-converter.module.css'
// import background from './background.jpg'
//
// const ColorConverterOld = () => {
//
//     const [ hexTouched, setHexTouched ] = useState(false)
//     const [ rgbTouched, setRgbTouched ] = useState(false)
//     const [ hexValid , setHexValid ] = useState(false)
//     const [ rgbValid , setRgbValid ] = useState(false)
//     const [ hexState, setHexState ] = useState('#')
//     const [ rgbState, setRgbState ] = useState('rgb()')
//     const [ rgbColors, setRgbColors ] = useState({})
//
//     const hexInputRef = useRef(null)
//     const rgbInputRef = useRef(null)
//
//     useEffect(() => {
//         hexInputRef.current.focus()
//     }, [])
//
//     // useEffect( () => {
//     //     if (hexValid) {
//     //         const red = parseInt(hexState.slice(1,3), 16)
//     //         const green = parseInt(hexState.slice(3,5), 16)
//     //         const blue = parseInt(hexState.slice(5,7), 16)
//     //         setRgbState(prev => ({ value: `rgb(${red},${green},${blue})`, r: red, g: green, b: blue}))
//     //     }
//     // }, [hexValid])
//
//     useEffect( () => {
//         if (rgbValid) {
//             const rgbArr = rgbState.slice(4, rgbState.length - 1)
//             // console.log(rgbArr)
//             // const red = parseInt(rgbState.slice(1,3), 16)
//             // const green = parseInt(rgbState.slice(3,5), 16)
//             // const blue = parseInt(rgbState.slice(5,7), 16)
//             // setRgbState(prev => ({ value: `rgb(${red},${green},${blue})`, r: red, g: green, b: blue}))
//         }
//     }, [rgbValid])
//
//     const x = () => {
//         const localVarValid = /^#[\da-f]{6}$/.test(hexState)
//         setHexValid(/^#[\da-f]{6}$/.test(hexState))
//         if (localVarValid) {
//             console.log('зашли в hex')
//             const red = parseInt(hexState.slice(1,3), 16)
//             const green = parseInt(hexState.slice(3,5), 16)
//             const blue = parseInt(hexState.slice(5,7), 16)
//             setRgbColors({r: red, g: green, b: blue})
//             setRgbState(`rgb(${red},${green},${blue})`)
//         }
//     }
//
//     // useEffect(() => {
//     //     const localVarValid = /^#[\da-f]{6}$/.test(hexState)
//     //     setHexValid(/^#[\da-f]{6}$/.test(hexState))
//     //     if (localVarValid) {
//     //         console.log('зашли в hex')
//     //         const red = parseInt(hexState.slice(1,3), 16)
//     //         const green = parseInt(hexState.slice(3,5), 16)
//     //         const blue = parseInt(hexState.slice(5,7), 16)
//     //         setRgbColors({r: red, g: green, b: blue})
//     //         setRgbState(`rgb(${red},${green},${blue})`)
//     //     }
//     // }, [hexState])
//
//     // useEffect(() => {
//     //     const localVarValid = /^(rgb)?\(?([01]?\d\d?|2[0-4]\d|25[0-5])(\W+)([01]?\d\d?|2[0-4]\d|25[0-5])\W+(([01]?\d\d?|2[0-4]\d|25[0-5])\)?)$/.test(rgbState)
//     //     setRgbValid(localVarValid)
//     //     if (localVarValid) {
//     //         console.log('зашли в rgb')
//     //         const rgbColorSting = rgbState.slice(4, rgbState.length - 1)
//     //         const [red, green, blue] = rgbColorSting.split(',')
//     //         setRgbColors({r: red, g: green, b: blue})
//     //         setHexState(`#${red.toString(16)}${red.toString(16)}${red.toString(16)}`)
//     //     }
//     // }, [rgbState])
//
//     const handleInputChange = useCallback((ref) => () => {
//         if (ref.current.dataset.type === 'hex' ) {
//             if (ref.current.value[0] !== '#') {
//                 ref.current.value = '#' + ref.current.value
//             }
//             setHexState(ref.current.value)
//             // x()
//         }
//         else if (ref.current.dataset.type === 'rgb') {
//             if (!/^rgb\(.*\)$/.test(ref.current.value)) {
//                 ref.current.value = 'rgb()'
//             }
//             setRgbState(ref.current.value)
//         }
//         }, [])
//
//     const containerStyle =  hexValid || rgbValid ? {backgroundColor: `rgb(${rgbColors.r},${rgbColors.g},${rgbColors.b})`} : {backgroundImage: `url(${background}`}
//     // console.log(containerStyle, hexState, hexValid)
//     return (
//         <div
//             className={styles.wrapper}
//             style={containerStyle}
//         >
//             <div>
//                 <input
//                     type="text"
//                     data-type="hex"
//                     ref={hexInputRef}
//                     // value={values.hexValue}
//                     maxLength={7}
//                     onChange={handleInputChange(hexInputRef)}
//                     onBlur={ () => setHexTouched(true)}
//                 />
//                 {!hexValid && hexTouched && <div className={styles.error}>Название цвета должно начинаться с # и содержать цифры или буквы от a до f</div>}
//                 <div className={styles.changeInput}>⇅</div>
//                 <input
//                     type="text"
//                     data-type="rgb"
//                     // value={values.rgbValue}
//                     ref={rgbInputRef}
//                     maxLength={16}
//                     onBlur={ () => setRgbTouched(true)}
//                     onChange={handleInputChange(rgbInputRef)}
//                     // readOnly={true}
//                 />
//                 {!rgbValid && rgbTouched && <div className={styles.error}>Название цвета должно иметь вид rgb(0-255,0-255,0-255)</div>}
//             </div>
//         </div>
//     )
// }
//
// export default ColorConverterOld
//
//
