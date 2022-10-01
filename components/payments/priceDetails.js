import {Box} from '@mui/material';

export default function PriceDetails(props){
    const {totalAmount,subTotal,tax,shipping} = props;
    return (
        <Box p='20px'>
            <Box variant='h3' component='h3'>PRICE DETAILS</Box>
            <Box sx={{bgcolor:"white",borderRadius:5,p:4,boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px'}}>
                <Box sx={{color:'#86807a',borderBottom:"1px solid #86807a",pb:1}}>
                    <Box sx={{display:"flex",justifyContent:"space-between"}}>
                        <Box>Subtotal</Box>
                        <Box>{'\u20B9'}{subTotal}</Box>
                    </Box>
                    <Box sx={{display:"flex",justifyContent:"space-between"}}>
                        <Box>Tax</Box>
                        <Box>{'\u20B9'}{tax}</Box>
                    </Box>
                    <Box sx={{display:"flex",justifyContent:"space-between"}}>
                        <Box>Shipping</Box>
                        <Box sx={{color:shipping==0?'green':'#86807a'}}>{}{shipping == 0?"Free":'\u20B9'+shipping}</Box>
                    </Box>
                </Box>
                <Box sx={{display:"flex",justifyContent:"space-between"}}>
                    <Box variant='h3' component='h3'>Total</Box>
                    <Box variant='h3' component='h3'>{'\u20B9'}{totalAmount}</Box>
                </Box>
            </Box>
        </Box>
    )
}