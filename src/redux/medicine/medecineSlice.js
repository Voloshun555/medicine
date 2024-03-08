import { createSlice } from "@reduxjs/toolkit";
import { getAllMedicines } from "./medecineOperation";


const initialState= {
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
const handlePending = (state) => {
    state.isLoading = true;
};

const handleFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.items = action.payload;
};

const medicineSlice = createSlice({
    name: "medicine",
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAllMedicines.pending, handlePending)
            .addCase(getAllMedicines.fulfilled, handleFulfilled)

    },
});

export const medicineReducer = medicineSlice.reducer;