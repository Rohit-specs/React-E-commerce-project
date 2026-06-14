import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
export const wishlistSlice = createSlice({
    name: "wishlist",
    initialState: {
        userId: 1,
        wishlistItems: []
    },
    reducers: {

        addToWishlist: (state, action) => {
            const exists = state.wishlistItems.find(
                item => item.id === action.payload.id
            );

            if (!exists) {
                state.wishlistItems.push({
                    id: action.payload.id,
                    title: action.payload.title,
                    thumbnail: action.payload.thumbnail,
                    stock: action.payload.stock,
                    price: action.payload.price
                });
                toast.success("Product added to wishlist")
            }
            else{
                toast.info("Product already in wishlist");
            }
        },

        removeFromWishlist: (state, action) => {

            state.wishlistItems = state.wishlistItems.filter((item) => item.id !== action.payload)
        },
    }
})
export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions
export default wishlistSlice.reducer