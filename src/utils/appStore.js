import { configureStore } from "@reduxjs/toolkit";
import SideBarSlice from "./sideToggleSlice";

const appStore = configureStore({
  reducer: { sideBar: SideBarSlice },
});
export default appStore;
