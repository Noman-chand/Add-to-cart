import {configureStore} from'@reduxjs/toolkit'
import comSlice from '../Ecom/EcomSlice'

const store = configureStore({
    reducer:{
        product:comSlice

    }
})

export default store