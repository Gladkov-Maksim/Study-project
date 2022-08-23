import {configureStore, combineReducers} from "@reduxjs/toolkit";
import slice from './slice'

const rootReducer = combineReducers({
    toolkit: slice,
})

const store = configureStore({
    reducer: rootReducer
})

export default store
