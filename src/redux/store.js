import {configureStore} from "@reduxjs/toolkit";
import itemsReducer from './slices/itemsSlice';
import filterSlice from "./slices/filterSlice";


export const store = configureStore({
    reducer: {
        items: itemsReducer,
        filter: filterSlice,
    }
});