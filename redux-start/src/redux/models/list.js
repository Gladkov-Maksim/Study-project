import {createSelector} from 'reselect'


const moduleName = 'list'

const ReducerRecord = {
  list: []
}

export default function reducer(state = ReducerRecord, action) {
  const {type, payload} = action

  switch (type) {
    case 'ADD_ITEM':
    case 'REMOVE_ITEM':
      return Object.assign({}, state, {list: payload})
    case 'TRUNCATE_LIST':
      return Object.assign({}, state, {list: []})
    default:
      return state
  }
}


export const addListItem = (list) => ({
  type: 'ADD_ITEM',
  payload: list
})

export const removeListItem = (list) => ({
  type: 'REMOVE_ITEM',
  payload: list
})

export const resetList = () => ({
  type: 'TRUNCATE_LIST',
})

export const Selector = state => state[moduleName]
export const listSelector = createSelector(Selector, state => state.list)