import {createSlice} from '@reduxjs/toolkit'


const initialState = {
    activeCategory: 0,
    activeType: '',
    sortList: [
        {
            sortType: 'Show All',
            sortProp: ''
        },
        {
            sortType: 'Design',
            sortProp: 'Design'
        },
        {
            sortType: 'Branding',
            sortProp: 'Branding'
        },
        {
            sortType: 'Illustration',
            sortProp: 'Illustration'
        },
        {
            sortType: 'Motion',
            sortProp: 'Motion'
        },
    ],
};

export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setActiveCategory(state, action) {
            state.activeCategory = action.payload;
        },
        setType(state, action) {
            state.activeType = state.sortList[action.payload].sortType;
        }
    },
})

// Action creators are generated for each case reducer function
export const { setActiveCategory, setType } = filterSlice.actions;

export default filterSlice.reducer;