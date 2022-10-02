import nodemailer from 'nodemailer'
import { google } from 'googleapis'
import jwt from "jsonwebtoken"

const SMTP_CLIENT_ID = "972684909672-ip3of3smva5otlsk43uidk3k6je9434s.apps.googleusercontent.com"
const SMTP_CLIENT_SECRET_ID = "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"
const SMTP_REDIRECT_URI = "https://developers.google.com/oauthplayground"
const SMTP_REFRESH_TOKEN = "1//04VvoHbSAQxTDCgYIARAAGAQSNwF-L9Irp84XMZ1gOV4jqIm0vxH1gszfMSR2D_0U3CpCn0TuP6jV4dgZRYq9eSWuQXnRoRe-Vp4"


export default async function handler(req,res){

    if (req.method !== "POST") {
        return res.status(403).send({
            message: `${req.method} is not supported on this route`,
        });
    }  

    let { email } = req.body


    let { token } = req.headers

    const oAuth2Client = new google.auth.OAuth2( SMTP_CLIENT_ID, SMTP_CLIENT_SECRET_ID, SMTP_REDIRECT_URI )

    oAuth2Client.setCredentials({ refresh_token : SMTP_REFRESH_TOKEN })

    try{

        const accessToken = await oAuth2Client.getAccessToken()

            let decode = jwt.decode(token);

                const transport = nodemailer.createTransport({
                    service : 'gmail',
                    auth : {
                        type : 'OAUTH2',
                        user : 'pankajkandpal5602@gmail.com',
                        clientId : SMTP_CLIENT_ID,
                        clientSecret : SMTP_CLIENT_SECRET_ID,
                        refreshToken : SMTP_REFRESH_TOKEN,
                        accessToken : accessToken
                    }
                })

                console.log("setup completed!!")

                const mailOptions = {
                    from : "pankajkandpal5602@gmail.com",
                    to : email,
                    subject : "Subscribed to SugarCosmetics!!",
                    text : `Hello ${decode.name}, You have been successfully subscribed to the sugarcosmetics.com. Thank You!`
                }

                console.log("Mail sending!")

                const result = await transport.sendMail(mailOptions)

                console.log('mail sent');

                res.send('Otp sent to mail!')

    }
    catch(E){
        res.send("Internal error")
    }

}