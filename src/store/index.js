import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlices";
import shopReducer from '../features/shop/shopSlice'
import authReducer from "../features/auth/authSlice";
import { shopApi } from "../services/shopService";
import { setupListeners } from "@reduxjs/toolkit/query";
import cartReducer from "../features/shop/cartSilce";
import { authApi } from "../services/authService";
export default configureStore({
  reducer: {
    counterReducer,
    shopReducer,
    cartReducer,
    authReducer,
    [shopApi.reducerPath]: shopApi.reducer,
    [authApi.reducerPath]: authApi.reducer


  },
  middleware: (getDefaultMiddleware)=> getDefaultMiddleware().concat(shopApi.middleware).concat(authApi.middleware)
});

setupListeners(configureStore.dispatch)