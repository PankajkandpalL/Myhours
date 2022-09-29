import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"


const CLIENT_ID = '853372887789-5sbrsf3tmfie8987oqisa4tuoavp16a1.apps.googleusercontent.com'
const CLIENT_SECRET_ID = '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'
const NEXTAUTH_SECRET = '17c475c837c2eea5e35a74d608a0ea8a'


export default NextAuth({

  providers: [

    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    })

  ],

  secret: NEXTAUTH_SECRET
  
})