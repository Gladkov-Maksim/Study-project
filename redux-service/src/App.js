import  './App.css';
import {useDispatch, useSelector} from "react-redux";
import {useRef, useCallback, useState} from "react";

function App() {

    const dispatch = useDispatch()
    const list = useSelector(store => store.list)
    const searchList = useSelector(store => store.search)
    const [searchToggle, setSearchToggle] = useState(false)
    const serviceInp = useRef(null)
    const priceInp = useRef(null)
    const addItem = useCallback(() => {
        if (serviceInp.current.value && priceInp.current.value) {
            dispatch({type: 'ADD', payload: {service: serviceInp.current.value, price: priceInp.current.value}})
            serviceInp.current.value = ''
            priceInp.current.value = ''
        }
    }, [])

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
            }}>Cancel</button>
            <input placeholder='🔎Search' onChange={(e) => {
                searchDebounce(e.target.value)
            }}/>
        </div>
        <ul>
            {(searchToggle ? searchList : list).map((item, index) =>
                <li key={item.price}>
                    <div className='itemContainer'>
                        <span>{item.service} {item.price}</span>
                        <button>✎</button>
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
