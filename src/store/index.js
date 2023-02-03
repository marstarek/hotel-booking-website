import { configureStore } from "@reduxjs/toolkit";
import hotels from "./hotelSlice";
import cart from "./cartSlice";

export default configureStore({
  reducer: {
    hotels,
    cart
  },
});
