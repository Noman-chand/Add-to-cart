import { configureStore } from "@reduxjs/toolkit";
import  fetchSlice from '../Features/apiSlice'
import sliderSlice from "./sliderSlice";
const store = configureStore({
    reducer:{
        apiData:fetchSlice,
        slider:sliderSlice,

    }
    
})

export default store