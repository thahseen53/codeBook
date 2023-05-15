
function session(){
    const token = JSON.parse(sessionStorage.getItem("token"));
    const cbid = JSON.parse(sessionStorage.getItem("cbid"));
    return{token,cbid}
}

export async function getUser(){
    const browserStorage = session()
    const response = await fetch(`${process.env.REACT_APP_HOST}/600/users/${browserStorage.cbid}`, {
        method: "GET",
        headers: {"Content-Type": "application/json", Authorization: `Bearer ${browserStorage.token}`}
    });
    if(!response.ok){
        throw { message: response.statusText, status: response.status }; // eslint-disable-line
    }
    const data = await response.json();
    return data
}
export async function getOrders(){
    const browserStorage = session()
    const response = await fetch(`${process.env.REACT_APP_HOST}/660/orders?user.id=${browserStorage.cbid}`, {
        method: "GET",
        headers: {"Content-Type": "application/json", Authorization: `Bearer ${browserStorage.token}`}
    });
    if(!response.ok){
        throw { message: response.statusText, status: response.status }; // eslint-disable-line
    }
    const data = await response.json();
    return data
}
export async function createOrder(order){
    const browserStorage = session()
    const response = await fetch(`${process.env.REACT_APP_HOST}/660/orders`,{
        method:"Post",
        headers:{"Content-Type":"application/json",Authorization:`Bearer ${browserStorage.token}`},
        body:JSON.stringify(order)
    })
    if(!response.ok){
        throw { message: response.statusText, status: response.status }; // eslint-disable-line
    }
    const data = await response.json()
    return data
}
