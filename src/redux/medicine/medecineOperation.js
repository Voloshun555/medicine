
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:3100";

export const getAllMedicines = createAsyncThunk(
    "medicine/getAllMedicines",
    async (_, thunkAPI) => {
        try {
            const response = await axios.get("/medicine");
            
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);