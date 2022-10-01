import {Box, Typography,Radio,Button} from '@mui/material';
import RadioSelect from './common/radioSelect';
import React from 'react';
import ButtonEl from './common/button';

export default function Paylater({amount}){
    const [selectedValue, setSelectedValue] = React.useState(null);
    const props = {selectedValue, setSelectedValue};
    return (
        <Box sx={{display:"flex",flexDirection:'column',gap:'15px'}}>
            <Box sx={{display:'flex',gap:'20px'}}>
                <Box sx={{width:"70%"}}><RadioSelect {...props} image={'https://cdn.shopify.com/app-store/listing_images/c4433821e3690bffccdffcc1ea9bc255/icon/CJaEn57Tn_UCEAE=.png'} text={'Simpl'} /></Box>
                <Box sx={{width:"70%"}}><RadioSelect {...props} image={'https://i0.wp.com/dmdailytricks.com/wp-content/uploads/IMG_20210622_165642.jpg'} text={'LazyPay'} /></Box>
            </Box>
            <Box sx={{display:'flex',gap:'20px'}}>
                <Box sx={{width:"70%"}}><RadioSelect {...props} image={'https://www.logotaglines.com/wp-content/uploads/2016/08/ICICI-Logo.png'} text={'ICICI'} /></Box>
                <Box sx={{width:"70%"}}><RadioSelect {...props} image={'https://w7.pngwing.com/pngs/636/81/png-transparent-hdfc-thumbnail-bank-logos-thumbnail.png'} text={'HDFC'} /></Box>
            </Box>
            <ButtonEl amount={amount} disabled={!selectedValue}/>
        </Box>
    )
}


