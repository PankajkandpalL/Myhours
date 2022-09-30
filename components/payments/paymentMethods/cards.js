import {Box,TextField,Typography,Button} from '@mui/material';
import ButtonEl from './common/button';
import React from 'react';

export default function Cards({amount='598.00'}){
    const [cardDetails,setCardDetails] = React.useState({});
    return (
        <Box>
            <Box variant='h5' component='h5' sx={{display:'flex',gap:'10px',color:'#7a7a7a'}}>
                <img src='https://www.svgrepo.com/show/222656/credit-card-credit.svg' height='28px' alt='card'/>
                <Typography fontSize={18}>Credit/Debit Card</Typography>
            </Box>
            <Box sx={{display:"flex",gap:'10px',color:'#7a7a7a'}} >
                <Typography fontSize={12}>We accept</Typography>
                <Box sx={{mt:-0.6}}><img src='https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg'  height="10px" alt='visa'/></Box>
                <Box sx={{mt:-0.6}}><img src='https://upload.wikimedia.org/wikipedia/commons/d/d1/RuPay.svg'  height='10px' alt='rupay'/></Box>
                <Box sx={{mt:-0.6}}><img src='https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg'  height='10px' alt='mastercard'/></Box>
                <Typography fontSize={12}>{"& more"}</Typography>
            </Box>
            <Box>
                <TextField onChange={(e)=>{setCardDetails(e.target.value)}}  variant="outlined" name="cardNumber" label='Card Number' sx={{m:1}}/>
            </Box>
            <Box>
                <TextField onChange={(e)=>{setCardDetails(e.target.value)}} variant="outlined" name="cardHolderName" label='Card Holder Name' sx={{m:1}}/>
            </Box>
            <Box sx={{display:'flex'}}>
                <TextField onChange={(e)=>{setCardDetails(e.target.value)}} variant="outlined" name="expiry" label='Expiry (MM/YY)' sx={{m:1}} />
                <TextField onChange={(e)=>{setCardDetails(e.target.value)}} variant="outlined" name="cvv" label='CVV' sx={{m:1}} />
            </Box>
            <ButtonEl amount={amount}  />
        </Box>
    )
}