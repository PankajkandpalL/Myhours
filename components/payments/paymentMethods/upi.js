import {Box, Typography, TextField, Button} from '@mui/material';
import ButtonEl from './common/button';
import React from 'react';

export default function Upi({amount='598.00'}){
    const [upiId,setUpiId] = React.useState("");
    return (
        <Box variant='h5' component='h5' sx={{display:'flex',flexDirection:'column',gap:'10px'}}>
            <Box><Typography sx={{color:'#7a7a7a'}}>Transfer Money From Your Bank Account Using UPI With Your Registered VPA</Typography></Box>
            <Box sx={{display:"flex",gap:'10px',color:'#7a7a7a'}} >
                <Typography fontSize={12}>We accept</Typography>
                <Box sx={{mt:-0.2}}><img src='https://upload.wikimedia.org/wikipedia/commons/f/f2/Google_Pay_Logo.svg'  height="10px" alt='gpay'/></Box>
                <Box sx={{mt:-0.2}}><img src='https://cdn.worldvectorlogo.com/logos/phonepe-1.svg'  height='10px' alt='phonepe'/></Box>
                <Box sx={{mt:-0.2}}><img src='https://upload.wikimedia.org/wikipedia/commons/2/24/Paytm_Logo_%28standalone%29.svg'  height='10px' alt='paytm'/></Box>
                <Box sx={{mt:-0.2}}><img src='https://upload.wikimedia.org/wikipedia/commons/e/e1/UPI-Logo-vector.svg'  height='10px' alt='bhim'/></Box>
                <Typography fontSize={12}>{"& more"}</Typography>
            </Box>
            <Box>
                <TextField onChange={(e)=>setUpiId(e.target.value)}  variant="outlined" name="upiid" value={upiId} label='Enter UPI ID' sx={{m:1}}/>
            </Box>
            <ButtonEl amount={amount}  disabled={upiId === ""}/>
        </Box>
    )
}