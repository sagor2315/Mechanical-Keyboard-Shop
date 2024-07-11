import { createSlice } from "@reduxjs/toolkit";

export interface ShopState {
  shop: [];
}

const initialState: ShopState = {
  shop: [],
};

export const shopSlice = createSlice({
  name: "shopSlice",
  initialState,
  reducers: {},
});

// export const {} = shopSlice.actions;

export default shopSlice.reducer;
