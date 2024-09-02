import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Swal from "sweetalert2";

export type CartTypes = {
  _id: string;
  image: string;
  title: string;
  brand: string;
  stock: number;
  quantity: number;
  price: number;
  rating: number;
  totalPrice?: number;
};

export interface cartSlice {
  cartData: CartTypes[];
  totalQuantity: number;
  totalPrice: number;
  stockAll: number;
}

const initialState: cartSlice = {
  cartData: [],
  totalQuantity: 0,
  totalPrice: 0,
  stockAll: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartTypes>) => {
      const productAll = action.payload;
      const existingProductData = state?.cartData?.find(
        (data) => data?._id === productAll?._id
      );

      if (existingProductData) {
        if (existingProductData.stock > 0) {
          existingProductData.quantity++;
          existingProductData.stock--;
          existingProductData.totalPrice =
            (existingProductData.totalPrice ?? 0) + productAll.price;

          state.totalQuantity++;
          state.totalPrice += productAll.price;
        } else {
          Swal.fire({
            position: "top-end",
            icon: "error",
            title: "The product is out of stock!",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      } else if (productAll?.stock > 0) {
        state.cartData.push({
          ...productAll,
          stock: productAll.stock - 1,
          quantity: 1,
          totalPrice: productAll.price,
        });

        state.totalQuantity++;
        state.totalPrice += productAll.price;
      } else {
        console.log("Cannot add product with zero stock.");
      }
    },

    increaseProductQuantity: (state, action: PayloadAction<string>) => {
      const singleitem = state?.cartData.find(
        (data) => data?._id === action?.payload
      );
      if (singleitem && singleitem.stock > 0) {
        singleitem.quantity++;
        singleitem.stock--;
        singleitem.totalPrice = (singleitem.totalPrice ?? 0) + singleitem.price;
        state.totalPrice += singleitem.price;
        state.totalQuantity++;
      }
    },
    decreaseProductQuantity: (state, action: PayloadAction<string>) => {
      const singleitem = state?.cartData.find(
        (data) => data?._id === action?.payload
      );
      if (singleitem && singleitem.quantity > 0) {
        singleitem.quantity--;
        singleitem.stock++;
        singleitem.totalPrice = (singleitem.totalPrice ?? 0) - singleitem.price;
        state.totalPrice -= singleitem.price;
        state.totalQuantity--;
      }
    },

    removeDataFromCart: (state, action: PayloadAction<string>) => {
      const cartId = action.payload;
      const singleCart = state.cartData.find((data) => data._id === cartId);

      if (singleCart) {
        state.totalPrice -=
          singleCart.totalPrice ?? singleCart.price * singleCart.quantity;
        state.totalQuantity -= singleCart.quantity;

        singleCart.stock += singleCart.quantity;
        state.cartData = state.cartData.filter((data) => data._id !== cartId);
      }
    },
    removeAllDataFromCart: (state) => {
      state.cartData = [];
      state.totalQuantity = 0;
      state.totalPrice = 0;
    },
  },
});

export const {
  addToCart,
  increaseProductQuantity,
  decreaseProductQuantity,
  removeDataFromCart,
  removeAllDataFromCart,
} = cartSlice.actions;

export default cartSlice.reducer;
