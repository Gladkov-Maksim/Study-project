import {configureStore, combineReducers} from "@reduxjs/toolkit";
import slice from './slice'
import {logger} from './middleware'

const rootReducer = combineReducers({
    toolkit: slice,
})

const store = configureStore({
    reducer: rootReducer,
    middleware: [logger]
})

export default store
