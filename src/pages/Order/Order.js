
import { OrderSuccess } from "./components/OrderSucces"
import { OrderFailure } from "./components/OrderFailure"
import { useLocation } from "react-router-dom"
import useTitle from "../../hooks/useTitle"

export const Order = () => {
   useTitle('Order')
    const { state } = useLocation();
  return (
    <main>
        {state.status ? <OrderSuccess data={state.data}/> : <OrderFailure/>}
    </main>
  )
}

