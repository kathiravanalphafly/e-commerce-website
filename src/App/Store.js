import { configureStore } from "@reduxjs/toolkit"
import productReducer from "../features/products/ProductSlice"
import cartReducer from "../features/cart/cartSlice"
import orderReducer from "../features/orders/orderSlice"
import userReducer from "../features/users/userSlice"
import wishlistReducer from "../features/wishlist/wishlistSlice"
import reviewReducer from "../features/reviews/reviewSlice"

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        product: productReducer,
        orders: orderReducer,
        users: userReducer,
        wishlist: wishlistReducer,
        reviews: reviewReducer,
    },
});