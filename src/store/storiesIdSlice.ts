import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {API} from "../api/api";

export const fetchNewsIDList = createAsyncThunk(
    'storiesId/fetchNewsIDList',
    async (_, thunkAPI) => {
        try {
            const promise = await API.getNewsId();
            return promise.data
        } catch (e) {
            return thunkAPI.rejectWithValue(e)
        }
    })
const initialState: Array<number> = [1252752]

export const storiesIdSlice = createSlice({
    name: 'storiesId',
    initialState,
    reducers: {
    },
    extraReducers: {
        [fetchNewsIDList.fulfilled.type]: (state, action: PayloadAction<Array<number>>) => {

            state= action.payload
            console.log(state)
             return state
        }
    }
})

export default storiesIdSlice.reducer
