import { createSlice } from "@reduxjs/toolkit";

const formSlice = createSlice({
    name: "form",
    initialState: {
        title: "",
        amount: 0,
    },
    reducers: {
        changeTitle(state, action) {
            state.title = action.payload;
        },

        changeAmount(state, action) {
            state.amount = action.payload;
        },
    },
});

export const formReducer = formSlice.reducer;
export const { changeTitle, changeAmount } = formSlice.actions;
