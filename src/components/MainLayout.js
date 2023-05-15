import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Footer } from "./Layouts/Footer"
import { Header } from "./Layouts/Header"
import {Outlet} from "react-router-dom"
import { ScrollToTop } from "./Other/ScrollToTop"


 export const MainLayout = () => {
  return (
    <div className="dark:bg-dark">
    <ScrollToTop/>
    <ToastContainer closeButton={false} autoClose={3000} position={"bottom-right"} />
      <Header/>
        <Outlet/>
      <Footer/>
    </div>
    
  )
}


