import {createStore, applyMiddleware} from "redux";
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import slice from './reducers'
// import reducer from "./reducers";
import logger from "redux-logger";

const rootReducer = combineReducers({
        toolkit: slice
})

// const store = createStore(reducer, applyMiddleware(logger))
const store = configureStore({
    reducer: rootReducer
}, applyMiddleware(logger)) // так не работает?
export default store