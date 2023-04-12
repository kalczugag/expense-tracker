import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const addTransaction = createAsyncThunk(
    "transaction/add",
    async (transaction) => {
        const response = await axios.post(
            "http://localhost:3005/transactions",
            {
                title: transaction.title,
                amount: transaction.amount,
            }
        );

        return response.data;
    }
);

export { addTransaction };
