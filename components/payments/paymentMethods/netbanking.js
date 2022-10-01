import {Box} from '@mui/material';
import React from 'react';
import RadioSelect from './common/radioSelect';
import ButtonEl from './common/button';

export default function Netbanking({amount}){
    const [selectedValue, setSelectedValue] = React.useState(null);
    const props = {selectedValue, setSelectedValue};
    return (
        <Box sx={{display:"flex",flexDirection:'column',gap:'15px'}}>
            <Box sx={{display:'flex',gap:'20px'}}>
                <Box sx={{width:"70%"}}><RadioSelect {...props} image={'https://media.glassdoor.com/sqll/38314/bank-of-india-squarelogo.png'} text={'BOI'} /></Box>
                <Box sx={{width:"70%"}}><RadioSelect {...props} image={'https://w7.pngwing.com/pngs/636/81/png-transparent-hdfc-thumbnail-bank-logos-thumbnail.png'} text={'HDFC'} /></Box>  
            </Box>
            <Box sx={{display:'flex',gap:'20px'}}>
                <Box sx={{width:"70%"}}><RadioSelect {...props} image={'https://www.logotaglines.com/wp-content/uploads/2016/08/ICICI-Logo.png'} text={'ICICI'} /></Box>
                <Box sx={{width:"70%"}}><RadioSelect {...props} image={'https://upload.wikimedia.org/wikipedia/commons/a/a4/State-Bank-of-India-Logo.svg'} text={'SBI'} /></Box>
            </Box>
            <Box sx={{display:'flex',gap:'20px'}}>
                <Box sx={{width:"70%"}}><RadioSelect {...props} image={'http://1.bp.blogspot.com/_85dCU3S-dtE/TOaYHcZ3kMI/AAAAAAAABJU/0QS0xvV12Ww/s1600/logo529.png'} text={'YES'} /></Box>
                <Box sx={{width:"70%"}}><Box></Box></Box>
            </Box>
            <ButtonEl amount={amount} disabled={!selectedValue}/>
        </Box>
    )
}