export const filterReducer =(state,action)=>{
    const {type,payload} = action

    switch(type){
        case "PRODUCT_LIST":
            return{productList:payload.products}
        case "SORT_BY":
            return{...state,sortBy:payload.sortBy}

        case "RATINGS":
            return {...state,rating:payload.rating}
        case "IN_STOCK_ONLY":
            return {...state,inStock:payload.inStock}
        case "BEST_SELLERS_ONLY":
            return{...state,bestSeller:payload.bestSeller}
        case "CLEAR_ALL":
            return{...state,    
                sortBy:null,
                rating:null,
                bestSeller:false,
                inStock:false}
        default:
            throw new Error("Something went wrong")
    }
}