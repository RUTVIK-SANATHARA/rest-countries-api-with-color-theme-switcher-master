import axios from "axios"

export const Success=(user)=>{
    return{
        type:"SUCCESS",
        payload:user
    }
}
export const Req=()=>{
    return{
        type:"REQ"
    }
}

export const Error=(err)=>{
    return{
        type:"ERROR",
        payload:err
    }
}

export const fetchUsers=()=>{
    return(dispatch)=>{
        dispatch(Req)
        axios.get("https://restcountries.com/v2/all")
        .then(res=>{
            const users=res.data  
            dispatch(Success(users))
        })
        .catch(error=>{
            const errormsg = error.message
            dispatch(Error(errormsg))
        })
    }
}