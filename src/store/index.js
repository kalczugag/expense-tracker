import { configureStore } from "@reduxjs/toolkit";
import { changeTitle, changeAmount, formReducer } from "./slices/formSlice";
import { transactionReducer } from "./slices/transactionSlice";

export const store = configureStore({
    reducer: {
        transaction: transactionReducer,
        form: formReducer,
    },
});

export { changeTitle, changeAmount };
export * from "./thunks/fetchTransactions";
export * from "./thunks/addTransaction";
export * from "./thunks/removeTransaction";
