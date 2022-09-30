import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from 'axios'

export const getUser = createAsyncThunk(
    'slice/get',
    async (userId, thunkAPI) => {
        const result = await axios.get('https://jsonplaceholder.typicode.com/users')
        console.log(result.data)
        return result.data
    }
)

export const deleteUser = createAsyncThunk(
    'slice/delete',
    async (userId) => {
        await axios.delete(`https://jsonplaceholder.typicode.com/users/${userId}`)
        return userId
        // console.log(userId)
        // getUser()
    }
)

const slice = createSlice({
    name: 'response',
    initialState: {
        data: '',
        getPending: false,
        // editDelPending: false,
        // error: false
    },
    reducers: {
        // increment(state, action) {
        //     ++state.counter
        // },
        // decrement(state, action) {
        //     --state.counter
        // }
    },
    extraReducers: {
        // builder.addCase(fetchUser.fulfilled, (state, action) => {
        //     state.counter = action.payload
        //     console.log(action.payload)
        // })
        // builder.addCase(fetchUser.pending, (state, action) => {
        //     // state.counter = action.payload
        // })
        [getUser.pending]: (state) => {
            state.getPending = true
            state.error = false
        },
        [getUser.fulfilled]: (state, action) => {
            state.getPending = false
            state.error = false
            state.data = action.payload
        },
        [getUser.rejected]: (state) => {
            state.error = true
            state.getPending = false
        },
        [deleteUser.pending]: (state) => {
            state.editDelPending = true
        },
        [deleteUser.fulfilled]: (state, action) => {
            // state.error = true
            console.log(action.payload)
            state.editDelPending = false
            state.data = state.data.filter(user => user.id !== action.payload)

        },
        [deleteUser.rejected]: (state) => {
            // state.error = true
            console.log('не по плану')
        },
    }
})

export default slice.reducer

// export const {increment, decrement} = slice.actions
const r = 0

const x = (c, b = r) => console.log(b)