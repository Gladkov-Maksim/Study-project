import {createSelector} from 'reselect'

const moduleName = 'counter'
const ReducerRecord = {
  counter: 0
}

export default function reducer(state = ReducerRecord, action) {
  const {type, payload} = action

  switch (type) {
    case 'CHANGE_COUNTER':
      return Object.assign({}, state, {counter: payload})
    case 'RESET_COUNTER':
      return Object.assign({}, state, {counter: 0})
    default:
      return state
  }
}


export const changeCounter = (counter) => ({
  type: 'CHANGE_COUNTER',
  payload: counter
})

export const resetCounter = () => ({
  type: 'RESET_COUNTER',
})

export const Selector = state => state[moduleName]
export const CounterSelector = createSelector(Selector, state => state.counter)