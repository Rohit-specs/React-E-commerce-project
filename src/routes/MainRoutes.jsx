import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import RootLayout from '../layout/RootLayout'
import Home from "./../pages/Home"
import Shop from '../pages/shop'
import ProductDetails from '../pages/ProductDetails'
import Cart from '../pages/Cart'
import Wishlist from '../pages/Wishlist'
import Checkout from '../pages/Checkout'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import MyAccount from '../pages/MyAccount'
import ProtectedRoutes from "./../components/ProtectedRoutes"

export const MainRoutes = createBrowserRouter([
    // {path:"*",element:},
    {
        path: "/", element: <RootLayout />,

        children: [
            { path: "/", element: <Home /> },
            { path: "/shop", element: <Shop /> },
            { path: "/shop/:category", element: <Shop /> },
            { path: "/product-details/:id", element: <ProductDetails /> },
            { path: "/cart", element: <Cart /> },
            { path: "/wishlist", element: <Wishlist /> },
            { path: "/checkout", element: <Checkout /> },
            { path: "/login", element: <Login /> },
            { path: "/signup", element: <Signup /> },
            {
                element: <ProtectedRoutes />,
                children: [
                    { path: "/my-account", element: <MyAccount /> }
                ]
            },


        ]
    }
])

