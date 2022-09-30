import {Box, Typography,Button} from '@mui/material';
import ButtonEl from './common/button';

export default function Payondelivery({amount='598.00'}){
    return (
        <Box sx={{display:'flex',flexDirection:'column',gap:'15px'}}>
            <Box sx={{display:"flex",gap:'10px',color:'#7a7a7a'}} >
                <img src='https://toppng.com/uploads/preview/cash-in-hand-icon-11549486230pl37r7u3fu.png' width='60px' height='30px'/>
                <Typography sx={{color:'#6d6d6d'}}>Cash On Delivery</Typography>
            </Box>
            <Box><Typography sx={{color:'#7a7a7a',fontSize:12}}>We recommend using a digital payment method for completing the payment</Typography></Box>
            <ButtonEl amount={amount}/>
        </Box>
    )
}