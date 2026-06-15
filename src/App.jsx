import { RouterProvider } from "react-router-dom"
import './assets/sass/style.scss'
import './assets/css/style.css'
import { MainRoutes } from "./routes/MainRoutes"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css";
import { Provider } from "react-redux"
import store from "./store/store"
function App() {
  return (<>

    <Provider store={store}>
      <RouterProvider router={MainRoutes} /></Provider>
    <ToastContainer
      position="top-right"
      autoClose={2000}
    />
  </>
  )
}

export default App
