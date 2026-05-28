import { RouterProvider } from "react-router-dom"
import './assets/sass/style.scss'
import './assets/css/style.css'
import { MainRoutes } from "./routes/MainRoutes"
function App() {
  return (
    <RouterProvider router={MainRoutes} />
  )
}

export default App
