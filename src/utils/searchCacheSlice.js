import { createSlice } from "@reduxjs/toolkit";

const searchCacheSlice = createSlice({
  name: "searchCache",
  initialState: {},
  reducers: {
    cacheResult: (state, action) => {
      state = Object.assign(state, { ...action.payload, ...state });
      //return { ...state, ...action.payload };
      // Object.assign(state, action.payload);
    },
  },
});

export default searchCacheSlice.reducer;
export const { cacheResult } = searchCacheSlice.actions;
