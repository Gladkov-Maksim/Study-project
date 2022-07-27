import {createStore, applyMiddleware} from "redux";
import logger from "redux-logger";
import thunk from 'redux-logger'
import reducer from './reducers'

const enhancer = applyMiddleware(thunk, logger)
const store = createStore(reducer, enhancer)

export default store