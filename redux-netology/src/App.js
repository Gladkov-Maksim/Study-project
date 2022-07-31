import  './App.css';
import {useDispatch, useSelector} from "react-redux";
import {useRef, useCallback} from "react";

function App() {

    const dispatch = useDispatch()
    const list = useSelector(state => state)
    const serviceInp = useRef(null)
    const priceInp = useRef(null)
    const addItem = useCallback(() => {
        if (serviceInp.current.value && priceInp.current.value) {
            dispatch({type: 'ADD', payload: {service: serviceInp.current.value, price: priceInp.current.value}})
            serviceInp.current.value = ''
            priceInp.current.value = ''
        }
    }, [])

  return (
    <div className='wrapper'>
        <div>
            <input
                ref={serviceInp}
                onKeyDown={(e) => {
                    if (e.code === "Enter") addItem()
                }}
            />
            <input
                ref={priceInp}
                onKeyDown={(e) => {
                    if (e.code === "Enter") addItem()
                }}
            />
            <button onClick={addItem}>Save</button>
        </div>
        <ul>
            {list.map((item, index) =>
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
