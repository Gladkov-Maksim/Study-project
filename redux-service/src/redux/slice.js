import {createSlice} from "@reduxjs/toolkit";

const slice = createSlice({
    name: 'toolkit',
    initialState: {list:[], search: []},
    reducers: {
        add(store, action) {
            // console.log(store)
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