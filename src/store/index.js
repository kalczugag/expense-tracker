import { configureStore } from "@reduxjs/toolkit";
import { formReducer } from "./slices/formSlice";
import { transactionReducer } from "./slices/transactionSlice";

export const store = configureStore({
    reducer: {
        transaction: transactionReducer,
        form: formReducer,
    },
});

export * from "./slices/transactionSlice";
export * from "./slices/formSlice";
