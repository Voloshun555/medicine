import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    items: [{
        pharmacy: '',
        medications: [{
            id: '',
            price: '',
            image: '',
            name: '',
        }]
    }],
    isLoading: false,
    error: null,
};


export const filterSlice = createSlice({
  name: "filter",
  initialState: initialState,
  reducers: {
    filterMedicine(state, action) {
      state.items = action.payload;
    },
    setFilters: (state, action) => {
      state.selectedName = action.payload.name;
      state.selectedPrice = action.payload.price;
    },
  },
});

export const filterReducer = filterSlice.reducer;

export const { filterMedicine, setFilters } = filterSlice.actions;