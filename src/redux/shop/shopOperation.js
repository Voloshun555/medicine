import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { Notify } from "notiflix";

axios.defaults.baseURL = "https://649986d079fbe9bcf83f6d9e.mockapi.io";

export const options = {
  width: "400px",
  position: "center-center",
  timeout: 3000,
  fontSize: "20px",
};

export const postOrder = async (order, thunkAPI) => {
  try {
    const response = await axios.post("/medicine", order);
    Notify.success(
      `${response.data.user.name}, your order added successfully`,
      options
    );
    return response.data;
  } catch (e) {
    Notify.failure(
      `Sorry, your order wasn't added. Error: "${e.message}"`,
      options
    );
    return thunkAPI.rejectWithValue(e.message);
  }
};

export const postOrderThunk = createAsyncThunk(
  "shoppingCart/postOrder",
  postOrder
);
