import { configureStore } from "@reduxjs/toolkit";
import { formReducer } from "./slices/formSlice";
import { transactionReducer } from "./slices/transactionSlice";
import { balanceReducer } from "./slices/balanceSlice";

export const store = configureStore({
    reducer: {
        transaction: transactionReducer,
        form: formReducer,
        balance: balanceReducer,
    },
});

export * from "./slices/transactionSlice";
export * from "./slices/formSlice";
export * from "./slices/balanceSlice";
