import {Box} from '@mui/material';

const cartItems = [{img:'https://cdn.shopify.com/s/files/1/0906/2558/products/moisturiser.jpg?v=1626968292',item:'Aquaholic Priming Moisturizer',price:"499"},{img:'https://cdn.shopify.com/s/files/1/0906/2558/products/moisturiser.jpg?v=1626968292',item:'Aquaholic Priming Moisturizer',price:"499"},{img:'https://cdn.shopify.com/s/files/1/0906/2558/products/moisturiser.jpg?v=1626968292',item:'Aquaholic Priming Moisturizer',price:"499"}];


export default function CartSummary(){
    return (
        <Box p='20px'>
            <Box variant='h3' component='h3'>CART SUMMARY</Box>
            <Box sx={{bgcolor:"white",borderRadius:5,p:4,boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px'}}>
                {cartItems.map((el)=><CartSummaryCard key={el.img} el={el}/>)}
            </Box>
        </Box>
    )
}


function CartSummaryCard ({el}){
    return (
        <Box sx={{display:"flex",gap:'10px',justifyContent:'space-between'}}>
            <Box sx={{display:"flex",gap:'10px'}}>
                <img src={el.img}
                    width='50px' 
                    height='50px' 
                    alt='cartItem'/>
                <Box>
                    <Box sx={{color:'#54474d'}}>{el.item}</Box>
                    <Box variant='h5' component='h5'>{'\u20B9'}{" "}{el.price}</Box>
                </Box>
            </Box>
            <Box sx={{color:"#54474d"}}>
                <Box></Box>
                <Box>Qty:1</Box>
            </Box>
        </Box>
    )
}