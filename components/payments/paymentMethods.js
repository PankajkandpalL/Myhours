import {Box,Grid} from '@mui/material';
import React from 'react';
import Cardlessemi from './paymentMethods/cardlessemi';
import Cards from './paymentMethods/cards';
import Cred from './paymentMethods/cred';
import Netbanking from './paymentMethods/netbanking';
import Paylater from './paymentMethods/paylater';
import Payondelivery from './paymentMethods/payondelivery';
import Upi from './paymentMethods/upi';
import Wallets from './paymentMethods/wallets';

export default function PaymentMethods(){
    const [paymentMethod, setPaymentMethod] = React.useState("upi");
    return (
        <Box p='20px'>
            <Box variant='h3' component='h3'>PAYMENT METHODS</Box>
            <Box sx={{bgcolor:"white",borderRadius:5,p:4,pt:7,boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px'}}>
                <Box sx={{bgcolor:"white",borderRadius:5,pl:3,boxShadow: 'rgba(0, 0, 0, 0.05) 0px 0px 0px 1px'}}>
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 2, sm: 8, md: 12 }}>
                        <Grid item xs={1} sm={3} md={5} sx={{bgcolor:"#f2f2f2",borderTopLeftRadius:10,borderBottomLeftRadius:10}}>
                            <Box sx={{display:"flex",flexDirection:'column',pl:3,pt:3,pb:4}}>
                                <Box onClick={()=>setPaymentMethod("upi")} sx={{cursor:'pointer',bgcolor:paymentMethod==="upi"?"white":"#f2f2f2",color:paymentMethod==="upi"?"black":"#7a7a7a",borderTopLeftRadius:10,borderBottomLeftRadius:10,p:2}}>UPI</Box>
                                <Box onClick={()=>setPaymentMethod("cards")} sx={{cursor:'pointer',bgcolor:paymentMethod==="cards"?"white":"#f2f2f2",color:paymentMethod==="cards"?"black":"#7a7a7a",borderTopLeftRadius:10,borderBottomLeftRadius:10,p:2}}>CARDS</Box>
                                <Box onClick={()=>setPaymentMethod("paylater")} sx={{cursor:'pointer',bgcolor:paymentMethod==="paylater"?"white":"#f2f2f2",color:paymentMethod==="paylater"?"black":"#7a7a7a",borderTopLeftRadius:10,borderBottomLeftRadius:10,p:2}}>PAY LATER</Box>
                                <Box onClick={()=>setPaymentMethod("cardlessemi")} sx={{cursor:'pointer',bgcolor:paymentMethod==="cardlessemi"?"white":"#f2f2f2",color:paymentMethod==="cardlessemi"?"black":"#7a7a7a",borderTopLeftRadius:10,borderBottomLeftRadius:10,p:2}}>CARDLESS EMI</Box>
                                <Box onClick={()=>setPaymentMethod("cred")} sx={{cursor:'pointer',bgcolor:paymentMethod==="cred"?"white":"#f2f2f2",color:paymentMethod==="cred"?"black":"#7a7a7a",borderTopLeftRadius:10,borderBottomLeftRadius:10,p:2}}>CRED</Box>
                                <Box onClick={()=>setPaymentMethod("wallets")} sx={{cursor:'pointer',bgcolor:paymentMethod==="wallets"?"white":"#f2f2f2",color:paymentMethod==="wallets"?"black":"#7a7a7a",borderTopLeftRadius:10,borderBottomLeftRadius:10,p:2}}>WALLETS</Box>
                                <Box onClick={()=>setPaymentMethod("netbanking")} sx={{cursor:'pointer',bgcolor:paymentMethod==="netbanking"?"white":"#f2f2f2",color:paymentMethod==="netbanking"?"black":"#7a7a7a",borderTopLeftRadius:10,borderBottomLeftRadius:10,p:2}}>NETBANKING</Box>
                                <Box onClick={()=>setPaymentMethod("payondelivery")} sx={{cursor:'pointer',bgcolor:paymentMethod==="payondelivery"?"white":"#f2f2f2",color:paymentMethod==="payondelivery"?"black":"#7a7a7a",borderTopLeftRadius:10,borderBottomLeftRadius:10,p:2}}>PAY ON DELIVERY</Box>
                            </Box>
                        </Grid>
                        <Grid item xs={3} sm={5} md={7}>
                            {paymentMethod==="upi" && <Upi/>}
                            {paymentMethod==="cards" && <Cards/>}
                            {paymentMethod==="paylater" && <Paylater/>}
                            {paymentMethod==="cardlessemi" && <Cardlessemi/>}
                            {paymentMethod==="cred" && <Cred/>}
                            {paymentMethod==="wallets" && <Wallets/>}
                            {paymentMethod==="netbanking" && <Netbanking/>}
                            {paymentMethod==="payondelivery" && <Payondelivery/>}                                
                                
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Box>
    )
}