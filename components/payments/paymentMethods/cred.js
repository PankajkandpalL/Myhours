import {Box} from '@mui/material';
import RadioSelect from './common/radioSelect';
import React from 'react';
import ButtonEl from './common/button';

export default function Cred({amount='598.00'}){
    const [selectedValue, setSelectedValue] = React.useState(null);
    const props = {selectedValue, setSelectedValue};
    return (
        <Box>
            <RadioSelect {...props} image={'https://uploads-ssl.webflow.com/5b0c471ddb589cf22d4477a4/5e9489a651655d63cdd727cc_cred-app-icon1.png'} text={'Cred Pay'}/>
            <ButtonEl amount={amount}  disabled={selectedValue}/>
        </Box>

    )
}