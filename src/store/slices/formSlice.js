import { createSlice } from "@reduxjs/toolkit";
import { addTransaction } from "../thunks/addTransaction";

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
    extraReducers(builder) {
        builder.addCase(addTransaction.pending, (state, action) => {
            state.title = "";
            state.amount = 0;
        });
    },
});

export const formReducer = formSlice.reducer;
export const { changeTitle, changeAmount } = formSlice.actions;
