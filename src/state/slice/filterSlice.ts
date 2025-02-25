import { createSlice } from "@reduxjs/toolkit";

export const filterSlice = createSlice({
    name: "filter",
    initialState: {
        region: {
            name: "Все",
            value: ""
        }
    },
    reducers: {
        filterAction: (state, action) => {
            state.region = action.payload
        }
    }
});

export const { filterAction } = filterSlice.actions; 