import axios from "axios"

const api = axios.create({
    baseURL:`http://192.168.43.94:29096`,
    withCredentials:false,
    headers:{
        Accept:"application/json",
       "content-Type":"application/json",
    }
})

export default{
    sendEmail(input){
        console.log(input)
        return api.post("/sendemail",input)
    },
}