import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { api } from "../api/makeRequest";
import { sortSlice } from "./slice/sortSlice";
import { filterSlice } from "./slice/filterSlice";
import { inputSlice } from "./slice/inputSlice";

const reducers = combineReducers({
    sort: sortSlice.reducer,
    filter: filterSlice.reducer,
    input: inputSlice.reducer,
    [api.reducerPath]: api.reducer

})

export const store = configureStore({
    reducer: reducers,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware)
})  