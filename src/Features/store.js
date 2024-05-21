import { configureStore } from '@reduxjs/toolkit'
import ApiSlice from './ApiSlice'
const store = configureStore({
    reducer:{
        apiData:ApiSlice,

    }
})
export default store