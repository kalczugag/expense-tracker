import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";

const transactionSlice = createSlice({
    name: "transaction",
    initialState: {
        data: [
            {
                title: "xd",
                amount: 1200,
                id: "a94ht98",
            },
            {
                title: "xd1",
                amount: 100,
                id: "1093u",
            },
        ],
        balance: 0,
    },
    reducers: {
        addTransaction(state, action) {
            state.data.push({
                title: action.payload.title,
                amount: action.payload.amount,
                id: nanoid(),
            });
            setBalance();
        },
        setBalance(state, action) {
            state.balance = state.data.reduce((a, v) => (a += v.amount), 0);
        },
    },
});

export const transactionReducer = transactionSlice.reducer;
export const { addTransaction, setBalance } = transactionSlice.actions;
