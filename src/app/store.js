import { configureStore } from "@reduxjs/toolkit";
import themeReducer from '@/features/theme/themeSlice'
import carsReducer from '@/features/cars/carsSlice'
import authReducer from '@/features/auth/authSlice'

export const store = configureStore({
    reducer: {
        cars: carsReducer,
        theme: themeReducer,
        auth: authReducer,
    }
})