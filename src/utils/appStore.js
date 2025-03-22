import { configureStore } from "@reduxjs/toolkit";
import SideBarSlice from "./sideToggleSlice";
import searchCacheSlice from "./searchCacheSlice";
import chatSlice from "./chatSlice";

const appStore = configureStore({
  reducer: {
    sideBar: SideBarSlice,
    searchCache: searchCacheSlice,
    chat: chatSlice,
  },
});
export default appStore;
