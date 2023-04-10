import { createSlice, nanoid } from "@reduxjs/toolkit";

const transactionSlice = createSlice({
    name: "transaction",
    initialState: {
        data: {
            income: [{ title: "Store", amount: 100, id: "xdf3i8j" }],
            expense: [{ title: "Withdraw", amount: -50, id: "0ase4jt0" }],
        },
    },
    reducers: {
        addTransaction(state, action) {
            const arr = action.payload.amount > 0 ? "income" : "expense";

            state.data[arr].push({
                title: action.payload.title,
                amount: action.payload.amount,
                id: nanoid(),
            });
        },

        removeTransaction(state, action) {
            const arr = action.payload.amount > 0 ? "income" : "expense";
            console.log(arr);

            const updated = state.data[arr].filter((transaction) => {
                return transaction.id !== action.payload.id;
            });
            state.data[arr] = updated;
        },
    },
});

export const transactionReducer = transactionSlice.reducer;
export const { addTransaction, removeTransaction } = transactionSlice.actions;
