import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const removeTransaction = createAsyncThunk(
    "transaction/remove",
    async (transaction) => {
        await axios.delete(
            `http://localhost:3005/transactions/${transaction.id}`
        );

        return transaction;
    }
);

export { removeTransaction };
