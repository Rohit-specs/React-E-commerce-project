import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import RootLayout from '../layout/RootLayout'
import Home from "./../pages/Home"
import Shop from '../pages/shop'

export const MainRoutes = createBrowserRouter([
    // {path:"*",element:},
    {path:"/",element:<RootLayout/>,
        
        children:[
            {path:"/",element:<Home/>},
            {path:"/shop",element:<Shop/>},

        ]
    }
])

