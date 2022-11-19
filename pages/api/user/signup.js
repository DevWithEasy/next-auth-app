import bcrypt from 'bcrypt';
import initDatabase from "../../../database/conncetDB";
import NextAuthUser from "../../../database/model/NextAuthUser";

//api end point: http://localhost:3000/api/user/signup
export default async function handler(req,res){
    await initDatabase()
    try {
        const {name,email,password} = req.body
        const hashed = await bcrypt.hash(password, 10)
        const newUser = new NextAuthUser({
            name: name,
            email: email,
            password: hashed
        })
        const user = await newUser.save()
        res.status(200).json({
            success : true,
            status : 200,
            data : user,
            message : "Account created successfully"
        })
    } catch (error) {
        res.status(500).json({
            success : false,
            status : 500,
            message : error.message
        })
    }
}