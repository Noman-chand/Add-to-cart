import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    user: [],
    isLoading: false,
    error: null,
    searchData: []
};

export const postApiUser = createAsyncThunk('postDataApi', async (data) => {
    const response = await axios.post('https://65b0de4ad16d31d11bdd726a.mockapi.io/crud-app', data);
    return response.data;
});

export const getApiUser = createAsyncThunk('getApiUser', async () => {
    const response = await axios.get('https://65b0de4ad16d31d11bdd726a.mockapi.io/crud-app');
    return response.data;
});

export const deleteApiData = createAsyncThunk('deleteDataApi', async (id) => {
    return await axios.delete(`https://65b0de4ad16d31d11bdd726a.mockapi.io/crud-app/${id}`)
        .then(() => {
            return id;
        })
})

export const UpdateApi = createAsyncThunk('updateDataApi', async (data) => {
    const response = await axios.put(`https://65b0de4ad16d31d11bdd726a.mockapi.io/crud-app/${data.id}`, data);
    return response.data;
});

const apiSlice = createSlice({
    name: 'apiProject',
    initialState,
    reducers: {
        searchAction: (state, action) => {
            state.searchData = action.payload;
        }
    },
    extraReducers: (builder) => {

        // post user info 

        builder.addCase(postApiUser.pending, (state) => {
            state.isLoading = true;
        })
        builder.addCase(postApiUser.fulfilled, (state, action) => {
            state.isLoading = false;
            state.user.push(action.payload);
        })
        builder.addCase(postApiUser.rejected, (state) => {
            state.isLoading = false;
            state.error = true;
        })

        // get data from api
        builder.addCase(getApiUser.pending, (state) => {
            state.isLoading = true;
        })

        builder.addCase(getApiUser.fulfilled, (state, action) => {
            state.isLoading = false;
            state.user = action.payload;
        })

        builder.addCase(getApiUser.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message;
        });

        // delete api with help of ID
        builder.addCase(deleteApiData.fulfilled, (state, action) => {
            state.isLoading = true;
            state.user = state.user.filter((userid) => userid.id !== action.payload)
        });
        builder.addCase(deleteApiData.rejected, (state) => {
            state.error = true;
            state.isLoading = false
        })
        builder.addCase(deleteApiData.pending, (state) => {
            state.isLoading = true
        })

        // update data from api
        builder.addCase(UpdateApi.fulfilled, (state, action) => {
            state.isLoading = false;

            const updatedIndex = state.user.findIndex(item => item.id === action.payload.id);
            if (updatedIndex !== -1) {
                state.user[updatedIndex] = action.payload;
            }
            
        });
        builder.addCase(UpdateApi.pending, (state) => {
            state.isLoading = true;
            state.error = false;
        })
        builder.addCase(UpdateApi.rejected, (state) => {
            state.isLoading = false;
            state.error = true;
        })
    },
});

export default apiSlice.reducer;

export const { searchAction } = apiSlice.actions;
