import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    shopList: [],
};

const shopSlice = createSlice({
    name: 'shop',
    initialState,
    reducers: {
        addShopItem: (state, action) => {
            state.shopList.push(action.payload.item);
        },
        removeShopItem: (state, action) => {
            state.shopList = state.shopList.filter(item => item.id !== action.payload.id);
        },
    },
});

export const { addShopItem, removeShopItem } = shopSlice.actions;
export const shopReducer = shopSlice.reducer;