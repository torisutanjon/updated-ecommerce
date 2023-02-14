import axios from "axios"

export const registerAccount = async (firstname:string, lastname:string, email:string, username:string,   password:string) => {
    try {
        const res = await axios({
            headers:{
                "Content-Type": "application/json"
            },
            url:"/register",
            method:"POST",
            data:{
                firstname:firstname,
                lastname:lastname,
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
            url:"/get-user"
        })
        return res
    } catch (error) {
        console.log(error)
    }
}

export const getUserInfo = async (id:string | undefined) => {
    try {

        const res = await axios({
            headers:{
                "Content-Type": 'application/json'
            },
            method:"POST",
            url:"/get-user",
            data:{
                _id: id
            }
        })

        return res
    } catch (error) {
        console.log(error)
    }
}

export const checkPassword = async (id:string| undefined, password:string) => {
    try {
        const res = await axios({
            headers:{
                "Content-Type": "application/json"
            },
            method:"POST",
            url:"/get-user/check-password",
            data:{
                _id:id,
                password:password
            }
        })
        
        return res
    } catch (error) {
        return error
    }
}


export const updateUser = async (id:string|undefined, firstname: string, lastname:string,username:string, email:string, password:string) => {
    try {
        const res = await axios({
            headers:{
                "Content-Type": "application/json"
            },
            method: "PUT",
            url: "/get-user/update-user",
            data:{
                _id: id,
                firstname: firstname,
                lastname:lastname,
                username:username,
                email:email,
                password:password
            }
        })

        return res
    } catch (error) {
        return error
    }
}
