import { createSlice } from "@reduxjs/toolkit";
import { addTransaction } from "./transactionSlice";

const balanceSlice = createSlice({
    name: "balance",
    initialState: {
        income: 0,
        expanse: 0,
    },
    extraReducers(builder) {
        builder.addCase(addTransaction, (state, action) => {
            state.income += action.payload;
        });
    },
});

export const balanceReducer = balanceSlice.reducer;
