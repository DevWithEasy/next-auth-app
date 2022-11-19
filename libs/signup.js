import axios from "axios"

export default async function signup_account(value){
    try {
      const res = await axios.post('/api/user/signup',value) 
      console.log(res.data)
    } catch (error) {
        console.log(error)
    }
}