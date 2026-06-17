import { createSlice } from "@reduxjs/toolkit";



const calculateTotals = (state) => {
    state.totalQuantities = state.cartItems.reduce(
        (total, item) => total + item.quantity,
        0
    )
    state.cartTotal = state.cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    )
    state.discoutAmount =
        (state.cartTotal * state.discountPercent) / 100;
    const taxableAmount =
        state.cartTotal - state.discoutAmount;
    const taxAmount =
        (taxableAmount * state.tax) / 100;
    state.orderTotal =
        taxableAmount +
        taxAmount +
        state.shippingCost;
    state.totalQuantities = state.cartItems.reduce(
        (total, item) => total + item.quantity,
        0
    );
};

export const cartSlice = createSlice({
    name: "cart",

    initialState: {
        userId: 1,
        cartItems: [],
        totalQuantities: 0,
        cartTotal: 0,
        shippingCost: 100,
        tax: 18,
        appliedCouponCode: "",
        discountPercent: 0,
        discoutAmount: 0,
        orderTotal: 0,

        couponCodes: [
            {
                code: "DIS5",
                percent: 5
            },
            {
                code: "DIS10",
                percent: 10
            }
        ]
    },

    reducers: {
        addToCart: (state, action) => {
            const existingItem = state.cartItems.find(
                (item) => item.id === action.payload.id
            );

            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.cartItems.push({
                    id: action.payload.id,
                    title: action.payload.title,
                    thumbnail: action.payload.thumbnail,
                    price: action.payload.price,
                    stock: action.payload.stock,
                    quantity: 1
                });
            }

            calculateTotals(state);
        },

        removeFromCart: (state, action) => {
            state.cartItems = state.cartItems.filter(
                (item) => item.id !== action.payload
            );

            calculateTotals(state);
        },
        increament: (state, action) => {
            const cartitem = state.cartItems.find((item) => item.id === action.payload.id)
            if (cartitem) cartitem.quantity += 1

            calculateTotals(state)

        },
        decrement: (state, action) => {
            const cartitem = state.cartItems.find((item) => item.id === action.payload.id)
            if (cartitem) {
                cartitem.quantity = Math.max(cartitem.quantity - 1, 1)
            }

            calculateTotals(state)

        },

        updateQuantity: (state, action) => {
            const { id, quantity } = action.payload;

            const item = state.cartItems.find(
                (item) => item.id === id
            );

            if (item) {
                item.quantity =
                    quantity > 0 ? quantity : 1;
            }

            calculateTotals(state);
        },

        applyCoupon: (state, action) => {
            const coupon = state.couponCodes.find(
                (coupon) =>
                    coupon.code.toLowerCase() ===
                    action.payload.toLowerCase()
            );

            if (coupon) {
                state.appliedCouponCode =
                    coupon.code;

                state.discountPercent =
                    coupon.percent;
            } else {
                state.appliedCouponCode = "";

                state.discountPercent = 0;
            }

            calculateTotals(state);
        },

        clearCart: (state) => {
            state.cartItems = [];
            state.totalQuantities = 0;
            state.cartTotal = 0;
            state.discountPercent = 0;
            state.discoutAmount = 0;
            state.orderTotal = 0;
            state.appliedCouponCode = "";
        }
    }
});

export const { addToCart, removeFromCart, updateQuantity, applyCoupon, clearCart, increament, decrement } = cartSlice.actions;

export default cartSlice.reducer;