import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    isLoading: false,
    products: [],
    isError: false,
    allItem: [],
    totalPrice:0,
    totalQuantity:0
};

export const getStoreData = createAsyncThunk('getData', async () => {
    try {
        const response = await axios.get('https://fakestoreapi.com/products');
        return response.data;
    } catch (error) {
        throw error;
    }
});

const comSlice = createSlice({
    name: 'storeData',
    initialState,
    reducers: {
           addToCart: (state, action) => {
            const find = state.allItem.findIndex((val) => val.id === action.payload.id);
            if (find >= 0) {
                state.allItem[find].quantity += 1;
            } else {
                state.allItem.push({ ...action.payload, quantity: 1 }); // Add quantity field
            }
            state.totalPrice += action.payload.price; // Increment total price
            state.totalQuantity += 1; // Increment total quantity
        },
        deleteData:(state,action)=>{

            state.allItem = state.allItem.filter( (val)=>val.id !== action.payload)

        },
    },
    extraReducers: (builder) => {
        builder.addCase(getStoreData.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(getStoreData.fulfilled, (state, action) => {
            state.isLoading = false;
            state.products = action.payload;
        });
        builder.addCase(getStoreData.rejected, (state, action) => {
            state.isError = true;
            state.isLoading = false;
        });
    }
});

export default comSlice.reducer;
export const { addToCart,deleteData } = comSlice.actions;
