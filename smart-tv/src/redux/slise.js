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
        player: { isPlaying: false, src: '' },
    },
    reducers: {
        search(state, action) {
            state.search = action.payload
        },
        play(state, action) {
            state.player.isPlaying = true
            state.player.src = action.payload
        },
        stop(state, action) {
            state.player.isPlaying = false
            state.player.src = ''
        }
    },
    extraReducers: {
        [getData.fulfilled]: (state, action) => {
            state.data = action.payload
        },
    }
})

export default slice.reducer

export const { search, play, stop } = slice.actions