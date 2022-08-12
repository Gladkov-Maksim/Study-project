import {createSlice} from "@reduxjs/toolkit";
// const reducer = (store = {list:[], search: []}, action) => {
//     switch (action.type) {
//         case 'ADD': return {...store, list: [...store.list, action.payload]}
//         case 'EDIT':
//             const editList = [...store.list]
//             editList.splice(action.payload.indexEditingItem, 1, action.payload.data)
//             console.log(editList)
//             return {...store, list: editList}
//         case 'REMOVE':
//             const newList = [...store.list]
//             newList.splice(action.payload, 1)
//             return {...store, list: newList}
//         default: return store
//         case 'SEARCH':
//             return {...store, search: filterList(store, action.payload)}
//     }
// }

const slice = createSlice({
    name: 'toolkit',
    initialState: {list:[], search: []},
    reducers: {
        add(store, action) {
            store.list.push(action.payload)
        },
        edit(store, action) {
            store.list.splice(action.payload.indexEditingItem, 1, action.payload.data)
        },
        remove(store, action) {
            store.list.splice(action.payload, 1)
        },
        search(store, action) {
            store.search = action.payload}
    }
})

export default slice.reducer

export const {  add, edit, remove, search } = slice.actions