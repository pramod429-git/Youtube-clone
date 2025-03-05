import { createSlice } from "@reduxjs/toolkit";

const sideToggleSlice = createSlice({
  name: "sideBar",
  initialState: {
    isToggle: true,
  },
  reducers: {
    showSideBar: (state) => {
      console.log("cl");
      state.isToggle = !state.isToggle;
    },
    closeSideBar: (state) => {
      state.isToggle = false;
    },
  },
});

export default sideToggleSlice.reducer;
export const { showSideBar, closeSideBar } = sideToggleSlice.actions;
