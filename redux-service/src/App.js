import  './App.css';
import {useDispatch, useSelector} from "react-redux";
import {useRef, useCallback, useState} from "react";

let indexEditingItem

function App() {

    const dispatch = useDispatch()
    const list = useSelector(store => store.list)
    const searchList = useSelector(store => store.search)
    const [searchToggle, setSearchToggle] = useState(false)
    const [isEditing, setIsEditing] = useState(false)
    const serviceInp = useRef(null)
    const priceInp = useRef(null)


    const addItem = useCallback(() => {
        if (serviceInp.current.value && priceInp.current.value) {
            if (!isEditing) {
                dispatch({type: 'ADD', payload: {service: serviceInp.current.value, price: priceInp.current.value}})
            }
            else {
                dispatch({type: 'EDIT', payload: {data: {service: serviceInp.current.value, price: priceInp.current.value}, indexEditingItem: indexEditingItem}})
                setIsEditing(false)
            }
            serviceInp.current.value = ''
            priceInp.current.value = ''
        }
    }, [isEditing])

    const search = (value) => {
        if (value) {
            setSearchToggle(true)
            dispatch({type: 'SEARCH', payload: value})
        }
        else setSearchToggle(false)
    }

    const debounce = (fn) => {
        let timer
        return function (value){
            clearTimeout(timer)
            timer = setTimeout(fn.bind(null, value), 500)
        }
    }

    const searchDebounce = debounce(search)

  return (
    <div className='wrapper'>
        <div>
            <input
                placeholder='🔧Service'
                ref={serviceInp}
                onKeyDown={(e) => {
                    if (e.code === "Enter") addItem()
                }}
            />
            <input
                placeholder='💰Price'
                ref={priceInp}
                onKeyDown={(e) => {
                    if (e.code === "Enter") addItem()
                }}
            />
            <button onClick={addItem}>Save</button>
            <button onClick={() => {
                serviceInp.current.value = ''
                priceInp.current.value = ''
                setIsEditing(false)
                indexEditingItem = null
            }}>Cancel</button>
            <input placeholder='🔎Search' onChange={(e) => {
                searchDebounce(e.target.value)
            }}/>
        </div>
        <ul>
            {(searchToggle ? searchList : list).map((item, index) =>
                <li key={index + item.price}>
                    <div className='itemContainer'>
                        <span>{item.service} {item.price}</span>
                        <button
                            onClick={() => {
                                serviceInp.current.value = item.service
                                priceInp.current.value = item.price
                                setIsEditing(true)
                                console.log(isEditing) // Почему он выводит False?
                                indexEditingItem = index
                            }}
                        >
                            ✎
                        </button>
                        <button
                            onClick={() => dispatch({type: 'REMOVE', payload: index})}
                        >Х</button>
                    </div>
                </li>
            )}
        </ul>
    </div>
  );
}

export default App;
