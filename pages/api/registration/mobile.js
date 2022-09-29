import dbConnect from "../../../lib/mongodbConnect";
import User from "../../../models/User";
import jwt from 'jsonwebtoken' 

export default async function handler (req,res) {

    if (req.method !== "POST") {
        return res.status(403).send({
            message: `${req.method} is not supported on this route`,
        });
    }   

    let { mobile } = req.body
    
    try{

        await dbConnect()

        let userExists = await User.findOne({ mobile : mobile })

        if(userExists)
        {
            let accessToken = jwt.sign({ id : userExists._id, email : userExists.email, name : userExists.username, mobile : userExists.mobile }, "ACCESSSECRET1234", { expiresIn : "7 days" } )
            let refreshToken = jwt.sign({ id : userExists._id, email : userExists.email, name : userExists.username, mobile : userExists.mobile }, "REFRESHSECRET1234", { expiresIn : "30 days" } )
            return res.send({ message : "Logged In", token : { primaryToken : accessToken, refreshToken : refreshToken }})
        }

        let data = new User({ mobile })
        await data.save()

        res.send({message : "Created Successfully!", user : data._id})

    }
    catch(e){
        res.status(500).send('Internal Server Error')
    }

} 