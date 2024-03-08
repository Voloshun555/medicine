
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// const url = "http://localhost:3100";
const url2 = "https://beckendmedicine.onrender.com";
axios.defaults.baseURL = url2;

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