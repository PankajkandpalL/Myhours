import { Button, Checkbox, InputAdornment, TextField } from '@mui/material';
import Box from '@mui/material/Box';
import Image from 'next/image'
import { useState } from 'react';

const src = "https://media.sugarcosmetics.com/upload/authSIe2.jpg"
const hiSrc = "https://media.sugarcosmetics.com/upload/Hi!.png"

export default function Login(){

    const [Number, setNumber] = useState("")

    return (
       <Box sx={{
        display : "flex"
       }} >
             <Box sx={{
                width : "641px",
                height : "786px",
                }} >
                    <Image loader={()=>src} src={src} alt="icon" width={641} height={786} />
            </Box>
            <Box sx={{
                height : "716px",   
                width: "1000px",
                backgroundImage : `url(${'https://media.sugarcosmetics.com/upload/loginPageBackGroundTexture.png'})`
            }} >
                <Box sx={{
                    marginTop : "100px",
                    display : "flex",
                    justifyContent : "center",
                    alignItems : "center"
                }} >
                    <Image loader={()=>hiSrc} src={hiSrc} alt="hiIcon" width={172.9} height={114} />
                </Box>
                <Box sx={{
                    marginTop : "10px",
                    display : "flex",
                    justifyContent : "center",
                    alignItems : "center",
                    fontSize : "18px"
                }} >
                    <p style={{ fontSize :"18px" , fontFamily : "sans-serif" }} >Login/Sign Up Using Phone</p>
                </Box>
                <Box sx={{
                    marginTop : "10px",
                    display : "flex",
                    justifyContent : "center",
                    alignItems : "center",
                }}>
                <TextField
                    label="Enter Mobile Number"
                    id="outlined-start-adornment"
                    sx={{ m: 1, width: '382px' }}
                    onChange={(e)=>setNumber(e.target.value)}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">+91 </InputAdornment>,
                    }}
                />
                </Box>
                <Box sx={{
                    marginTop : "12px",
                    display : "flex",
                    justifyContent : "center",
                    alignItems : "center",
                }}>
                    <p style={{ color: "#757575", width: "740px", height : "66px", fontFamily: "sans-serif", fontSize :"13px", textAlign : "center" }} >Registering for this site allows you to access your order status and history. Just fill in the above fields, and we'll get a new account set up for you in no time. We will only ask you for information necessary to make the purchase process faster and easier.</p>
                </Box>
                <Box sx={{
                    marginTop : "60px",
                    display : "flex",
                    justifyContent : "center",
                    alignItems : "center",
                }} >
                     <Button variant="contained" disabled={ Number.length === 10 ? false : true } sx={{
                        fontSize : "13px",
                         color : "white"
                     }} >
                        Send ME OTP
                    </Button>
                </Box>
                <Box sx={{
                    marginTop : "40px",
                    display : "flex",
                    justifyContent : "center",
                    alignItems : "center",
                    color : "gray"
                }} >
                    -------------------------------------------------------------------------------------------------------------------------------------------------------------
                </Box>
                <Box sx={{
                    marginTop : "-10px",
                    display : "flex",
                    justifyContent : "center",
                    alignItems : "center",
                }} >
                    <Checkbox defaultChecked size="small" />
                    <span style={{ fontFamily : "sans-serif", fontSize : "12px", color : "gray" }} > Get important updates on Whatsapp <span style={{color : "red"}} > Terms and Conditions </span> </span>
                </Box>
                <Box sx={{
                    marginTop : "40px",
                    display : "flex",
                    justifyContent : "right",
                    width :"96%",
                    alignItems : "right",
                    fontFamily : "sans-serif",
                    fontSize : "13px"
                }}>
                    Need Help? <span style={{ color : "red" }} > Contact Us</span>
                </Box>
                <Box sx={{
                    marginTop : "0px",
                    display : "flex",
                    justifyContent : "center",
                    alignItems : "center",
                    color : "gray",
                    
                }} >
                    -------------------------------------------------------------------------------------------------------------------------------------------------------------
                </Box>
                <Box sx={{
                    marginTop : "0px",
                    display : "flex",
                    justifyContent : "center",
                    alignItems : "center",
                    fontFamily : "sans-serif", 
                    fontSize : "12px"
                }}>
                    By Signing up or logging in, you agree to our &nbsp; <span style={{color : "red"}} >Terms and Conditions</span>
                </Box>
            </Box>
       </Box>
    )
}