
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const url = "https://beckendmedicine.onrender.com";
axios.defaults.baseURL = url;

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