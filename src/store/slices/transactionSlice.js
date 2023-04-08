import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";

const transactionSlice = createSlice({
    name: "transaction",
    initialState: {
        data: {
            income: [{ title: "xd", amount: 10, id: "aw4j0rt" }],
            expense: [{ title: "xd1", amount: -12, id: "a8h4t890" }],
        },
    },
    reducers: {
        addIncome(state, action) {
            state.data.income.push({
                title: action.payload.title,
                amount: action.payload.amount,
                id: nanoid(),
            });
        },

        addExpense(state, action) {
            state.data.expense.push({
                title: action.payload.title,
                amount: action.payload.amount,
                id: nanoid(),
            });
        },
    },
});

export const transactionReducer = transactionSlice.reducer;
export const { addIncome, addExpense } = transactionSlice.actions;
