import { configureStore } from "@reduxjs/toolkit";
import themeReducer from '@/features/theme/themeSlice'
import carsReducer from '@/features/cars/carsSlice'

export const store = configureStore({
    reducer: {
        cars: carsReducer,
        theme: themeReducer,
    }
})