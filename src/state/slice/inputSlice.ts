import { createSlice } from "@reduxjs/toolkit";

export const inputSlice = createSlice({
    name: 'input',
    initialState: {
        inputText: ''
    },
    reducers: {
        inputTextAction: (state, action) => {
            state.inputText = action.payload;
        }
    }
});

export const { inputTextAction } = inputSlice.actions;
export default inputSlice.reducer;