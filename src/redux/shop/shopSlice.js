import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  shopList: [],
};

const shopSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {
    addShopItem: (state, action) => {
      state.shopList.push(action.payload.item);
    },
    removeShopItem: (state, action) => {
      state.shopList = state.shopList.filter(
        (item) => item.id !== action.payload.id
      );
    },
    countShoppingCart(state, { payload }) {
      const index = state.shopList.findIndex((item) => item.id === payload.id);
      if (index !== -1) {
        state.shopList[index].quantity = payload.quantity;
      }
    },
    removeAllShopItem: (state, _) => {
      state.shopList = [];
    },
  },
});

export const { addShopItem, removeShopItem, removeAllShopItem, countShoppingCart } =
  shopSlice.actions;
export const shopReducer = shopSlice.reducer;
