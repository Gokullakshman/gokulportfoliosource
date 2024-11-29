import axios from "axios"

const api = axios.create({
    baseURL:`http://localhost:2010`,
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