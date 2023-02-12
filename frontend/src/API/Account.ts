import axios from "axios"

export const registerAccount = async (email:string, username:string,   password:string) => {
    try {
        const res = await axios({
            headers:{
                "Content-Type": "application/json"
            },
            url:"/register",
            method:"POST",
            data:{
                username: username,
                email:email,
                password:password
            }
        })
        return res
    } catch (error) {
        return error
    }
}

export const loginAccount = async (email:string, password:string) => {
    try{
        const res = axios({
            headers:{
                "Content-Type" : "application/json"
            },
            method: "POST",
            url: "/login",
            data: {
                email:email,
                password:password
            }
        })
        return res
    } catch(error){
        return error
    }
}

export const checkLoginStatus = async () => {
    try {
        const res = await axios({
            headers:{
                "Content-Type": "application/json"
            },
            method:"GET",
            url:"/login/get-user"
        })
        return res
    } catch (error) {
        console.log(error)
    }
}