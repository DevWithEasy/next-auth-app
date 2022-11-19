import bcrypt from 'bcrypt';
import initDatabase from "../../../database/conncetDB";
import NextAuthUser from "../../../database/model/NextAuthUser";

//api end point: http://localhost:3000/api/user/signin
export default async function handler(req,res){
    await initDatabase()
    try {
        const user = await NextAuthUser.findOne({"email" : req.body.email})
        if(!user){
            return res.status(404).json({
                success : false,
                status : 404,
                message : "User not found"
            })
        }
        const isValid = await bcrypt.compare(req.body.password, user.password)
        if(!isValid){
            return res.status(403).json({
                success : false,
                status : 403,
                message : "Wrong credentials"
            })
        }
        const {password,...others} = user
        res.status(200).json({
            success : true,
            status : 200,
            data : others._doc,
            message : "Account Found successfully"
        })
    } catch (error) {
        res.status(500).json({
            success : false,
            status : 500,
            message : error.message
        })
    }
}