import  './App.css';
import {useDispatch, useSelector} from "react-redux";
import {useRef, useCallback, useState} from "react";
import { add, edit, remove, search } from './redux/slice.js'

let indexEditingItem

const filterList = (list, sub) => {
    const regexp = new RegExp(`^${sub}`)
    return (list.filter(item => {
        if (regexp.test(item.service) || sub === item.price) {
            return item
        }
    }))
}

function App() {

    const dispatch = useDispatch()
    const list = useSelector(store => store.toolkit.list)
    const searchList = useSelector(store => store.toolkit.search)
    const [isEditing, setIsEditing] = useState(false)
    const serviceInp = useRef(null)
    const priceInp = useRef(null)


    const addItem = useCallback(() => {
        if (serviceInp.current.value && priceInp.current.value) {
            if (!isEditing) {
                dispatch(add({service: serviceInp.current.value, price: priceInp.current.value}))
            }
            else {
                dispatch(edit({data: {service: serviceInp.current.value, price: priceInp.current.value}, indexEditingItem: indexEditingItem}))
                setIsEditing(false)
            }
            serviceInp.current.value = ''
            priceInp.current.value = ''
        }
    }, [isEditing])

    const debounce = (fn) => {
        let timer
        return function (value){
            clearTimeout(timer)
            timer = setTimeout(fn.bind(null, value), 500)
        }
    }

    const searchDebounce = debounce((value) => dispatch(search(filterList(list, value))))

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
            {(searchList.length ? searchList : list).map((item, index) =>
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
                            onClick={() => dispatch(remove(index))}
                        >Х</button>
                    </div>
                </li>
            )}
        </ul>
    </div>
  );
}

export default App;
