// const reducer = (store = {data: []}, action) => {
//     switch (action.type) {
//         case 'ADD':
//             return {data: [...store.data, action.payload]}
//         default:
//             return store
//     }
// }

import {createSlice} from "@reduxjs/toolkit";

const slice = createSlice({
    name: 'toolkit',
    initialState: {data:[]},
    reducers: {
        add(state, action) {
            state.data.push(action.payload)
        }
    }
})

export const addCard = (name, currentPrice, initialPrice, photo) => ({
            name: name.current.value,
            currentPrice: currentPrice.current.value,
            initialPrice: initialPrice.current.value,
            photo: photo.current.files[0]
    })


export default slice.reducer

export const {  add } = slice.actions