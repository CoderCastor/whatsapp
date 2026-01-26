import { createSlice } from "@reduxjs/toolkit";

type MenuState = {
  activeTab: "chats" | "calls" | "updates" | "archived" | "starred";
};

const initialState = {
  activeTab: "chats",
} as MenuState;

export const menu = createSlice({
  name: "menu",
  initialState,
  reducers: {
    reset: () => initialState,
    setTab: (state,action) => {
      state.activeTab = action.payload;
      
    },
  }
});

export const {
  setTab,
  reset,
} = menu.actions;
export default menu.reducer;