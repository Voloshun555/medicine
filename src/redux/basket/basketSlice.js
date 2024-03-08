import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  basket: [],
};

const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      state.basket.push(action.payload.item);
    },
    removeFromBasket: (state, action) => {
      state.basket = state.basket.filter(
        (item) => item.id !== action.payload.id
      );
    },
   
  },
});

export const { addToBasket, removeFromBasket } =
  basketSlice.actions;
export const basketReducer = basketSlice.reducer;

//  extraReducers: (builder) => {
//     builder
//       .addCase(postOrderThunk.pending, (state) => {
//         state.isLoading = true;
//         state.error = null;
//       })
//       .addCase(postOrderThunk.fulfilled, (state, { payload }) => {
//         state.isLoading = false;
//         state.order = [...state.order, payload];
//         state.error = null;
//       })
//       .addCase(postOrderThunk.rejected, (state, { payload }) => {
//         state.isLoading = false;
//         state.error = payload;
//       });
//   },
