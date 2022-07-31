import {combineReducers} from "redux";

import counterReducer from './models/counter'
import listReducer from './models/list'

export default combineReducers({
  counter: counterReducer,
  list: listReducer
})
