import { createSlice } from "@reduxjs/toolkit";
import { fetchTransactions } from "../thunks/fetchTransactions";
import { addTransaction } from "../thunks/addTransaction";
import { removeTransaction } from "../thunks/removeTransaction";

const transactionSlice = createSlice({
    name: "transaction",
    initialState: {
        data: [],
        isLoading: false,
        error: null,
    },
    extraReducers(builder) {
        builder.addCase(fetchTransactions.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(fetchTransactions.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
        });
        builder.addCase(fetchTransactions.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error;
        });

        builder.addCase(addTransaction.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(addTransaction.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data.push(action.payload);
        });
        builder.addCase(addTransaction.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error;
        });

        builder.addCase(removeTransaction.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(removeTransaction.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = state.data.filter((transaction) => {
                return transaction.id !== action.payload.id;
            });
        });
        builder.addCase(removeTransaction.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error;
        });
    },
});

export const transactionReducer = transactionSlice.reducer;
