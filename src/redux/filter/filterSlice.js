import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    items: [{
        pharmacy: '',
        medications: [{
            id: '',
            price: NaN,
            image: '',
            name: ''
        }]
    }],
    isLoading: false,
    error: null,
};


export const filterSlice = createSlice({
    name: 'filter',
    initialState: initialState,
    reducers: {
        filterMedicine(state, action) {
            state.items = action.payload
        }
    }
})

export const filterReducer = filterSlice.reducer;

export const { filterMedicine } = filterSlice.actions;