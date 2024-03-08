
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = 'https://649986d079fbe9bcf83f6d9e.mockapi.io';

export const getAllMedicines = createAsyncThunk(
    "medicine/getAllMedicines",
    async (_, thunkAPI) => {
        try {
            const response = await axios.get("/medicine");
            console.log(response.data)
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);