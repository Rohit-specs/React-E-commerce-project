import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import RootLayout from '../layout/RootLayout'
import Home from "./../pages/Home"

export const MainRoutes = createBrowserRouter([
    // {path:"*",element:},
    {path:"/",element:<RootLayout/>,
        
        children:[
            {path:"/",element:<Home/>}
        ]
    }
])

