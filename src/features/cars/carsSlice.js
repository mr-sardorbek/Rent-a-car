import { carsData } from "@/data/carsData";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
 cars: carsData,
 filteredCars: carsData,
 category: "All",
 sort: "default",
 loading: false
}

const carsSlice = createSlice({
    name: "cars",
    initialState,
    reducers: {
        setCategory: (state, action) => {
            state.category = action.payload

            if(action.payload === "All"){
                state.filteredCars = state.cars
            } else {
                state.filteredCars = state.filteredCars.filter(
                    car => car.category === action.payload
                )
            }
        },

        setSort: (state, action) => {
            state.sort = action.payload

            if(action.payload === "low") {
              state.filteredCars = [...state.filteredCars].sort(
              (a,b) => a.price - b.price
              )
            }

            if(action.payload === "high") {
                state.filteredCars = [...state.filteredCars].sort(
                    (a,b) => b.price - a.price
                )
            }
        },


        setLoading: (state, action) => {
            state.loading = action.payload
        }
    }
})

export const {setCategory, setSort, setLoading} = carsSlice.actions
export default carsSlice.reducer