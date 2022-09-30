import {Box,Button} from '@mui/material';

export default function ButtonEl ({amount,disabled}){
    return (
        <Box>
            <Button disabled={disabled} sx={{bgcolor:'black',borderRadius:'10px','&:hover':{bgcolor:'black'}}} variant='contained'>PROCEED TO PAYMENT{`(\u20B9${amount})`}</Button>
        </Box>
    )
}