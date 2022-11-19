import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import initDatabase from "../../../database/conncetDB";
import NextAuthUser from "../../../database/model/NextAuthUser";
import bcrypt from "bcrypt";

export default NextAuth({
    providers :[
      GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET
      }),
        GitHubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET
          }),
          CredentialsProvider({
            name: "Credentials",
            async authorize(credentials, req){
                initDatabase()

                //check user existance
                const user = await NextAuthUser.findOne({email : credentials.email})
                if (!user) {
                  throw new Error ("User not found")
                }
                //check password match
                const isValid = await bcrypt.compare(credentials.password,user.password)
                if (!isValid) {
                  throw new Error ("Wrong credentials")
                }
              return user
            }
          })
    ]
})