import { configureStore } from "@reduxjs/toolkit";
import { wishlistSlice } from "./slices/WishlistSlice";
import { cartSlice } from "./slices/CartSlice";
const store = configureStore({
    reducer:{
        wishlist: wishlistSlice.reducer,
        cart: cartSlice.reducer
    }
})
export default store