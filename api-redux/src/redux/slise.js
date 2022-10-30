import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from 'axios'

export const getUser = createAsyncThunk(
    'slice/get',
    async (userId, thunkAPI) => {
        const result = await axios.get('https://jsonplaceholder.typicode.com/users')
        return result.data
    }
)

export const deleteUser = createAsyncThunk(
    'slice/delete',
    async (userId) => {
        await axios.delete(`https://jsonplaceholder.typicode.com/users/${userId}`)
        return userId
    }
)

const slice = createSlice({
    name: 'response',
    initialState: {
        data: '',
        getPending: false,
    },
    extraReducers: {
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
            state.editDelPending = false
            state.data = state.data.filter(user => user.id !== action.payload)

        }
    }
})

export default slice.reducer
