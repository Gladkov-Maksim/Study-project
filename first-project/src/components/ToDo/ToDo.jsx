import { useState, useCallback } from "react"
import styles from './ToDo.module.css'

// let inputContainer

const installState = {
    items: [],
    inputContainer: '', 

}


const spliceFunction = (s, i) => {
    s.splice(i, 1)
    return s
}

const ToDo = () => {

    const [state, setState] = useState(installState)

    const handleRemove = useCallback((items, i) => items.filter((__, index) => i !== index), [])

    const handleAdd = useCallback((state) => {
        if (state.inputContainer) {
            setState(prev => ({items: [prev.inputContainer, ...prev.items], inputContainer: ''}))
        }
    }, [])

    return (
        <div className={styles.toDoWrapper}>
            <div>
                <input 
                    value={state.inputContainer}
                    onKeyDown={e => {
                        if (e.key === 'Enter') handleAdd(state)
                    }}
                    onChange={(e) => {
                        setState(prev => ({...prev, inputContainer: e.target.value}))
                        // console.log(state)
                    }}
                />
                <button onClick={() => handleAdd(state)}>+</button>
            </div>
            <ul>
                {state.items.map((item, index) => <li 
                    onClick={()=> setState(prev => ({...prev, items: handleRemove(prev.items, index)}))} 
                    key={index + item}
                >{item}</li>)}
            </ul>
        </div>
    )
}

export default ToDo