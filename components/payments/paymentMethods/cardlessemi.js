import {Box} from '@mui/material';
import RadioSelect from './common/radioSelect';
import React from 'react';
import ButtonEl from './common/button';

export default function Cardlessemi({amount}){
    const [selectedValue, setSelectedValue] = React.useState(null);
    const props = {selectedValue, setSelectedValue};
    return (
        <Box>
            <RadioSelect {...props} image={'https://pbs.twimg.com/profile_images/1491331086412283904/VlXZFExl_400x400.jpg'} text={'ZestMoney'}/>
            <ButtonEl amount={amount} disabled={!selectedValue}/>
        </Box>
    )
}