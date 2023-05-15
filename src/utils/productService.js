

export async function getProductList(searchTerm){
    const response = await fetch(`${process.env.REACT_APP_HOST}/products?name_like=${searchTerm ? searchTerm:""}`)
    if(!response.ok){
        throw { message: response.statusText, status: response.status } // eslint-disable-line
    }
    const data = response.json()
    return data
}
export async function getFeatuerdList(){
    const response = await fetch(`${process.env.REACT_APP_HOST}/featured_products`)
    if(!response.ok){
        throw { message: response.statusText, status: response.status }; // eslint-disable-line
    }
    const data = response.json()
    return data
}
export async function getProduct(id){
    const response = await fetch(`${process.env.REACT_APP_HOST}/products/${id}`)
    if(!response.ok){
        throw { message: response.statusText, status: response.status }; // eslint-disable-line
    }
    const data = response.json()
    return data
}