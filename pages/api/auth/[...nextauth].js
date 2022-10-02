import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"


const CLIENT_ID = '853372887789-5sbrsf3tmfie8987oqisa4tuoavp16a1.apps.googleusercontent.com'
const CLIENT_SECRET_ID = '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'
const NEXTAUTH_SECRET = '17c475c837c2eea5e35a74d608a0ea8a'


export default NextAuth({

  providers: [

    GoogleProvider({
      clientId: CLIENT_ID,
      clientSecret: CLIENT_SECRET_ID,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code"
        }
      },
      jwt : {
        encryption : true
      },
      secret : NEXTAUTH_SECRET,
      callbacks : {
        async jwt(token, account){
          if(account?.accessToken) 
          {
            token.accessToken = account.accessToken
          }
          return token;
        }
      },
      redirect : async(url, _baseUrl) => {
        console.log("url is ",  url, "and base url is", _baseUrl)
        if(url === "/register")
        {
          return Promise.resolve("/")
        }
        return Promise.resolve("/")
      }
    })

  ],

  secret: NEXTAUTH_SECRET
  
})