import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const fetchTransactions = createAsyncThunk("transactions/fetch", async () => {
    const response = await axios.get("http://localhost:3005/transactions");

    return response.data;
});

export { fetchTransactions };
