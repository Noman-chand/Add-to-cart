import { configureStore } from '@reduxjs/toolkit'
import apiSlice from '../ProjectOfApi/SliceApi'

const apiStore = configureStore({
    reducer:{
        userDetail:apiSlice,

    }
})

export default apiStore;