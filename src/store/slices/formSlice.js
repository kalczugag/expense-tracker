import { createSlice } from "@reduxjs/toolkit";
import { addIncome, addExpense } from "./transactionSlice";

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
        builder.addCase(addIncome, (state, action) => {
            state.title = "";
            state.amount = 0;
        });
        builder.addCase(addExpense, (state, action) => {
            state.title = "";
            state.amount = 0;
        });
    },
});

export const formReducer = formSlice.reducer;
export const { changeTitle, changeAmount } = formSlice.actions;
