import {RouterProvider} from "react-router-dom"
import router from "./routes/AllRoutes";
import { FilterContextProvider } from "./context/FilterContext";
import { CartContextProvider } from "./context/CartContext";
function App() {
  return(
    <CartContextProvider>
    <FilterContextProvider>
      <RouterProvider router={router}></RouterProvider>
      </FilterContextProvider>
      </CartContextProvider>
  )
  
}

export default App;
