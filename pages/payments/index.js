import {Box,Grid} from '@mui/material';
import PriceDetails from '../../components/payments/priceDetails';
import CartSummary from '../../components/payments/cartSummary';
import PaymentMethods from '../../components/payments/paymentMethods';

export default function Payments(){
    return (
        <Box sx={{m:1,bgcolor:'#f2f2f2',height:'100vh'}}>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                <Grid item xs={1} sm={3} md={5}>
                        <Box>
                            <PriceDetails/>
                            <CartSummary/>
                        </Box>
                </Grid>
                <Grid item xs={3} sm={5} md={7}>
                        <Box>
                            <PaymentMethods/>
                        </Box>
                </Grid>
            </Grid>
        </Box>
    )
}