import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import RootLayout from '../layout/RootLayout'
import Home from "./../pages/Home"
import Shop from '../pages/shop'
import ProductDetails from '../pages/ProductDetails'
import Cart from '../pages/Cart'

export const MainRoutes = createBrowserRouter([
    // {path:"*",element:},
    {path:"/",element:<RootLayout/>,
        
        children:[
            {path:"/",element:<Home/>},
            {path:"/shop",element:<Shop/>},
            {path:"/product-details/:id",element:<ProductDetails/>},
            {path:"/cart",element:<Cart/>},

        ]
    }
])

