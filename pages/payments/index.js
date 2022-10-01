import {Box,Grid} from '@mui/material';
import PriceDetails from '../../components/payments/priceDetails';
import CartSummary from '../../components/payments/cartSummary';
import PaymentMethods from '../../components/payments/paymentMethods';
import React from 'react';

const data = [{img:'https://cdn.shopify.com/s/files/1/0906/2558/products/moisturiser.jpg?v=1626968292',item:'Aquaholic Priming Moisturizer',price:"499",qty:1},{img:'https://cdn.shopify.com/s/files/1/0906/2558/products/moisturiser.jpg?v=1626968292',item:'Aquaholic Priming Moisturizer',price:"499",qty:2},{img:'https://cdn.shopify.com/s/files/1/0906/2558/products/moisturiser.jpg?v=1626968292',item:'Aquaholic Priming Moisturizer',price:"499",qty:1}];
// const data = [{img:'https://cdn.shopify.com/s/files/1/0906/2558/products/moisturiser.jpg?v=1626968292',item:'Aquaholic Priming Moisturizer',price:"499",qty:1}]
const taxRate = 0.152545;

export default function Payments(){
    const [totalAmount, setTotalAmount] = React.useState(0);
    const [cartItems, setCartItems] = React.useState([]);
    const fix2dig = (n)=>Number(n).toFixed(2);
    const subTotal = fix2dig(cartItems.reduce((a,b)=>{
        return Number(a + Number(b.price)* b.qty);
    }, 0));
    const shipping = fix2dig(subTotal < 500 ? 99 : 0);
    const tax = fix2dig(subTotal * taxRate);
    React.useEffect(()=>{
        setCartItems(data);
    },[])
    React.useEffect(()=>{
        setTotalAmount(subTotal + Number(shipping));
    },[cartItems])
    const props = {totalAmount:fix2dig(totalAmount),subTotal,tax,shipping};
    return (
        <Box sx={{m:1,bgcolor:'#f2f2f2',height:'100vh'}}>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                <Grid item xs={1} sm={3} md={5}>
                        <Box>
                            <PriceDetails {...props} />
                            <CartSummary cartItems={cartItems}/>
                        </Box>
                </Grid>
                <Grid item xs={3} sm={5} md={7}>
                        <Box>
                            <PaymentMethods amount={fix2dig(totalAmount)}/>
                        </Box>
                </Grid>
            </Grid>
        </Box>
    )
}