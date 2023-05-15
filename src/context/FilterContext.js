import {createContext,useContext,useReducer} from 'react'
import { filterReducer } from '../reducers/filterReducer'

const initialState = {
    productList:[],
    sortBy:null,
    rating:null,
    bestSeller:false,
    inStock:false
}

const FilterContext = createContext(initialState)

export const FilterContextProvider = ({children})=>{

    const [state,dispatch] =  useReducer(filterReducer, initialState)


    const initialProductList=(products)=>{
        dispatch({
            type:"PRODUCT_LIST",
            payload:{
                products:products
            }
        })
    }
    const bestSellerOnly = (products)=>{
        return state.bestSeller ? products.filter(product => product.best_seller===true) : products
    }
    const onlyInstock = (products) => {
        return state.inStock ? products.filter(product =>product.in_stock===true) : products
    }
    const ratings = (products)=>{
        if(state.rating === "4STARABOVE"){
            return products.filter(product=>product.rating >= 4)
        }
        if(state.rating === "3STARABOVE"){
            return products.filter(product=>product.rating >= 3)
        }
        if(state.rating === "2STARABOVE"){
            return products.filter(product=>product.rating >= 2)
        }
        if(state.rating === "1STARABOVE"){
            return products.filter(product=>product.rating >= 1)
        }
        return products
    }
    const sorting =(products)=>{
        if(state.sortBy==="lowToHigh"){
            return products.sort((a, b) => Number(a.price) - Number(b.price))
        }
        if(state.sortBy==="highToLow"){
            return products.sort((a, b) => Number(b.price) - Number(a.price))
        }
        return products
    }
    const filteredProducts = ratings(sorting(onlyInstock(bestSellerOnly(state.productList))))
    const value={
        state,
        dispatch,
        products:filteredProducts,
        initialProductList
    }

    return(
        <FilterContext.Provider value={value}>
            {children}
        </FilterContext.Provider>
    )
}
 export const useFilter =()=>{ return useContext(FilterContext)}
