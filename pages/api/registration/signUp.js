import User from "../../../models/User";

export default async function handler (req,res) {

    console.log(req.method)
    
    try{

        if (req.method !== "POST") {
        	return res.status(403).send({
        		message: `${req.method} is not supported on this route`,
            });
        }   

        let { mobile, email, password, username } = req.body

        console.log({ mobile, email, password, username })

        await dbConnect();

        let data = new User(mobile, email, password, username)
        await data.save()

        res.send("Created Successfully!")

    }
    catch(e){
        res.status(500).send('Internal Server Error')
    }

} 