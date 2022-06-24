import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from "axios";

export const fetchItems = createAsyncThunk(
    'items/fetchItemsStatus', async (params) => {
        const { page, type } = params;
        const { data } = await axios.get(`https://62b2aee3c7e53744afcff25a.mockapi.io/images?p=${page}&l=9&type=${type}`)
        return data;
    }
);


const initialState = {
    data: [],
    page: 1,
    isLoading: true,
    isFetching: true,
    loadMore: false,
}



export const itemsSlice = createSlice({
    name: 'items',
    initialState,
    reducers: {
        pagePlus: (state, action) => {
            action.payload === 3 ? state.page = 1 : state.page = action.payload + 1;
            state.loadMore = true;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchItems.fulfilled, (state, action) => {
            if (state.loadMore) {
                state.data = [...state.data, ...action.payload]
            } else {
                state.page = 1;
                state.data = action.payload;
            }
            state.isLoading = false;
            state.isFetching = false;
            state.loadMore = false;
        });
        builder.addCase(fetchItems.pending, (state, action) => {
            state.isLoading = !state.loadMore;
            state.isFetching = true;
        });
        builder.addCase(fetchItems.rejected, (state, action) => {
            state.isLoading = false;
            state.isFetching = false;
            state.loadMore = false;
            console.error('error');
        });
    }
});


// Action creators are generated for each case reducer function
export const { pagePlus } = itemsSlice.actions

export default itemsSlice.reducer