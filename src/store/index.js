import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlices";
import shopReducer from '../features/shop/shopSlice'

export default configureStore({
  reducer: {
    counterReducer,
    shopReducer
  },
});