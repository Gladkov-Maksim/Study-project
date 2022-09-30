import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from 'axios'

export const getData = createAsyncThunk(
    'slice/get',
    async (userId, thunkAPI) => {
        const result = await axios.get('https://limehd.online/playlist/channels.json')
        return result.data
    }
)

const slice = createSlice({
    name: 'response',
    initialState: {
        data: '',
        search: [],
    },
    reducers: {
        search(store, action) {
            store.search = action.payload
        }
    },
    extraReducers: {
        [getData.fulfilled]: (state, action) => {
            state.data = action.payload
        },
    }
})

export default slice.reducer

export const { search } = slice.actions