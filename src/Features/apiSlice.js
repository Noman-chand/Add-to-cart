import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    isLoading: false,
    products: [],
    isError: false,
    cartItem:[],
};



export const fetchProduct = createAsyncThunk(
  'products/fetchProduct',
  async () => {
    try {
      const response = await axios.get('https://fakestoreapi.com/products');
      return response.data; 
    } catch (error) {
      throw error; 
    }
  }
);

const fetchSlice =  createSlice({
    name:'products',
    initialState,
    reducers:{
      
      addToCart: (state, action) => {
        const existingItemIndex = state.cartItem.findIndex((val) => val.id === action.payload.id);
        if (existingItemIndex >= 0) {
          state.cartItem[existingItemIndex].quantity += 1;
        } else {
          state.cartItem.push({ ...action.payload, quantity: 1 }); // Add quantity field
        }
        state.totalPrice += action.payload.price; // Increment total price
        state.totalQuantity += 1;
      }
      

    },
    extraReducers:(builder)=>{
        builder.addCase(fetchProduct.pending,(state,action)=>{
            state.isLoading = true;
            state.isError = false

        });
    builder.addCase(fetchProduct.rejected,(state)=>{
        state.isError = true;
        state.isLoading = false;

    })
    builder.addCase(fetchProduct.fulfilled,(state,action)=>{
        state.products = action.payload
        state.isLoading = false;
        state.isError = false
    })

    }
})

export const {addToCart} = fetchSlice.actions;
export default fetchSlice.reducer;