import {Box} from '@mui/material';
import React from 'react';
import RadioSelect from './common/radioSelect';
import ButtonEl from './common/button';

export default function Wallets({amount='598.00'}){
    const [selectedValue, setSelectedValue] = React.useState(null);
    const props = {selectedValue, setSelectedValue};
    return (
        <Box sx={{display:"flex",flexDirection:'column',gap:'15px'}}>
            <Box sx={{display:'flex',gap:'20px'}}>
                <Box sx={{width:"70%"}}><RadioSelect {...props} image={'https://media.publit.io/file/w_350,h_262,c_fit,q_80/mobikwik-380.jpg'} text={'Mobikwik'} /></Box>
                <Box sx={{width:"70%"}}><RadioSelect {...props} image={'https://play-lh.googleusercontent.com/nGWjneuOt6DaJq22hbMhyZxfkxB022UdVogA19oEOwJjkGvA5r2j3slNtLqOwKyb-QU=s48-rw'} text={'Payzapp'} /></Box>
            </Box>
            <Box sx={{display:'flex',gap:'20px'}}>
                <Box sx={{width:"70%"}}><RadioSelect {...props} image={'https://assets1.cleartax-cdn.com/cleartax/images/1658779747_6290cb22fbfb8433ccbdf4aa_olamoneylogo4x.png?auto=format&fit=max&w=96'} text={'Olamoney'} /></Box>
                <Box sx={{width:"70%"}}><RadioSelect {...props} image={'https://seeklogo.com/images/A/airtel-logo-2F959F4207-seeklogo.com.png'} text={'Airtelmoney'} /></Box>
            </Box>
            <Box sx={{display:'flex',gap:'20px'}}>
                <Box sx={{width:"70%"}}><RadioSelect {...props} image={'https://pbs.twimg.com/profile_images/1214220012979920898/N4tFtfjN_400x400.png'} text={'Amazonpay'} /></Box>
                <Box sx={{width:"70%"}}><RadioSelect {...props} image={'https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/freecharge-logo-icon.png'} text={'Freecharge'} /></Box>
            </Box>
            <Box sx={{display:'flex',gap:'20px'}}>
                <Box sx={{width:"70%"}}><RadioSelect {...props} image={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcFWerxYnFitX7QZqtg9iCrrdQc9ITwJhDOnAIojAoONSaSBqvkbkDB_Q88Qgl09_FKSc&usqp=CAU'} text={'Jiomoney'} /></Box>
                <Box sx={{width:"70%"}}><RadioSelect {...props} image={'https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/phonepe-logo-icon.png'} text={'Phonepe'} /></Box>
            </Box>
            <ButtonEl amount={amount} disabled={selectedValue}/>
        </Box>
    )
}