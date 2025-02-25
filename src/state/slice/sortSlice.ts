import { createSlice } from "@reduxjs/toolkit";

export const sortSlice = createSlice({
    name: "sort",
    initialState: {
        sortValue: true
    },
    reducers: {
        sortAction: (state) => {
            state.sortValue = !state.sortValue
        }
    }
});

export const { sortAction } = sortSlice.actions; 