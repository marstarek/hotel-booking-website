import { configureStore } from "@reduxjs/toolkit";
import hotels from "./hotelSlice";
export default configureStore({
  reducer: {
    hotels,
  
  },
});
