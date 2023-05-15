

import {createBrowserRouter,createRoutesFromElements,Route} from 'react-router-dom'

import { Homepage, ProductList,ProductDetails, Login, Register, CartPage, Order, Dashboard, PageNotFound  } from '../pages'
import { MainLayout } from '../components'
import Protected from './Protected'



 const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<MainLayout/>}>
        <Route index element={<Homepage/>}/>
        <Route path='products' element={<ProductList/>}/>
        <Route path='products/:id' element={<ProductDetails/>}/>

        <Route path="login" element={<Login />}/>
        <Route path="register" element={<Register/>} />

        <Route path="cart" element={<Protected><CartPage/></Protected>}/>
        <Route path="order-summary" element={<Protected> <Order/> </Protected>}/>
        <Route path="dashboard" element={<Protected> <Dashboard/> </Protected>}/>
        <Route path="*" element={<PageNotFound/>} />
    </Route>
 ))
 export default router