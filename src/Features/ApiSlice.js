import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  isLoading: false,
  isError: false,
  productsData: [],
};

export const fetchData = createAsyncThunk('fetchData', async () => {
    try {
      const response = await axios.get('https://fakestoreapi.com/products');
      return response.data; 
      console.log(response)
    } catch (error) {
      throw error; 
    }
  }
)



const apiSlice = createSlice({
  name: 'apiData',
  initialState,
  extraReducers: (builder) => {
    // pending State
    builder.addCase(fetchData.pending, (state, action) => {
      state.isLoading = true;
      state.isError = false;
    });
    // fulfilled state
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.isLoading = false;
      state.productsData = action.payload;
      state.isError = false;
    });
    // rejected
    builder.addCase(fetchData.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
    });
  },
});

export default apiSlice.reducer;
