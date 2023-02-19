import {useState} from 'react'
import axios from 'axios'
import Cookies from 'universal-cookie'

export const useFetch = (url:any) => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")

    console.log(url)

    const handleGoogle = async (res:any) => {
        // setLoading(true)
        await axios({
            headers: {
                "Content-Type": "application/json"
            },
            method:"POST",
            url: url,
            data: {
                credential: res.credential
            }
        }).then((postRes:any) => {

            if(postRes?.status === 201){
                alert(postRes?.data?.message)
                window.location.href = "/sign-in"
            }

            if(postRes?.status === 200){
                const cookie = new Cookies()
                cookie.set('user', postRes?.data?.token)
                alert(postRes?.data?.message)
                window.location.href = "/"
            }

        }).catch(err => {
            alert(err?.response?.data?.message)
        })
    }
    return {loading, error, handleGoogle}
}