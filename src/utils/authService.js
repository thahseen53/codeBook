
export async function login(authDetail){
    const options ={
        method:"POST",
        headers :{"content-Type":"application/json"},
        body:JSON.stringify(authDetail)
      }

      const response = await fetch(`${process.env.REACT_APP_HOST}/login`,options)
      if(!response.ok){
        throw { message: response.statusText, status: response.status }; // eslint-disable-line
    }
      const data = await response.json()
      if(data.accessToken){
        sessionStorage.setItem("token",JSON.stringify(data.accessToken))
        sessionStorage.setItem("cbid",JSON.stringify(data.user.id))
      }
      return data
}

export async function register(authDetail){
    const response = await fetch(`${process.env.REACT_APP_HOST}/register`,{
        method:"POST",
        headers :{"content-Type":"application/json"},
        body:JSON.stringify(authDetail)
      })
      const data = await response.json()
      if(!response.ok){
        throw { message: response.statusText, status: response.status };// eslint-disable-line
    }
      if(data.accessToken){
        sessionStorage.setItem("token",JSON.stringify(data.accessToken))
        sessionStorage.setItem("cbid",JSON.stringify(data.user.id))
      }
      return data
}
//deletes session storage
export async function logout(){
    sessionStorage.removeItem("token")
    sessionStorage.removeItem("cbid")
}