import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore} from "redux";
import {Provider} from 'react-redux'


const reducer = (store = {list:[], search: []}, action) => {
    switch (action.type) {
        case 'ADD': return {...store, list: [...store.list, action.payload]}
        case 'REMOVE':
            const newList = [...store.list]
            newList.splice(action.payload, 1)
            return {...store, list: newList}
        default: return store
        case 'SEARCH':
            return {...store, search: filterList(store, action.payload)}
    }
}

const filterList = (store, sub) => {
    const regexp = new RegExp(`^${sub}`)
    return (store.list.filter(item => {
        if (regexp.test(item.service) || regexp.test(item.price)) {
            return item
        }
    }))
}

const store = createStore(reducer)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Provider store={store}>
          <App />
      </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
