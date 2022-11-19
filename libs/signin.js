import axios from "axios"

export default async function signin_account(value){
    try {
      const res = await axios.post('/api/user/signin',value) 
      console.log(res.data)
    } catch (error) {
        console.log(error)
    }
}