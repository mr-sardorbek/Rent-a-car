import { createSlice } from "@reduxjs/toolkit";
import { carsData } from "@/data/carsData";

const initialState = {
  cars: carsData,
  category: "All",
  sort: "default",
  search: "",
  minPrice: "0",
  maxPrice: "1000",
  loading: false,
};

const carsSlice = createSlice({
  name: "cars",
  initialState,
  reducers: {
    setCategory: (state, action) => {
      state.category = action.payload;
    },

    setSort: (state, action) => {
      state.sort = action.payload;
    },

    setSearch: (state, action) => {
        state.search = action.payload
    },

    setPriceRange: (state,action) => {
        state.minPrice = action.payload.min
        state.maxPrice = action.payload.max
    },

    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { setCategory, setSort, setLoading , setSearch, setPriceRange} = carsSlice.actions;
export default carsSlice.reducer;