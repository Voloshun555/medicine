import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Notify } from "notiflix";

const options = {
  width: "450px",
  position: "center-center",
  timeout: 3000,
  fontSize: "25px",
};

export const createNewShopItem = createAsyncThunk(
  "shop/createNewShopItem",
    async (shopDto, thunkAPI) => {
    try {
        const response = await axios.post("/shop", shopDto); 
        console.log("response", response);
        Notify.success(
          `${response.data.user.name}, your order added successfully`,
          options
        );
      return response.data; 
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
