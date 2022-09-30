import AccountNavigation from "../../components/account/accountNavigation";
import Grid from '@mui/material/Grid';
import {useRouter} from 'next/router';
import { Button, Box } from "@mui/material";
import AddAddress from "../../components/account/addAddress";
import React from 'react';
import AddCard from "../../components/account/addCard";


export default function Address (){
    const router = useRouter();
    const [address, setAddress] = React.useState({
        firstName:"",
        lastName:"",
        phoneNumber:"",
        flatHouseNumber:"",
        apartmentAreaLocalityRoad:"",
        pincode:"",
        state:"",
        city:"",
        setDefaultAddress:false
    });
    const [addresses, setAddresses] = React.useState([]);
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handleEdit = (id)=>{
        const el = addresses.find((add)=>add.id === id);
        if(el){
            setAddress(el);
            handleDelete(id);
            handleOpen();
            
        }
    }
    const handleDelete = (id)=>{
        const newAddresses = addresses.filter((el)=>el.id !== id);
        setAddresses(newAddresses);
    }
    const props = {
        address,
        setAddress,
        addresses,
        setAddresses,
        open,
        setOpen,
        handleOpen,
        handleClose
    };
    return (
        <div style={{padding:'2%',backgroundColor:'#f2f2f2'}}>
            <Grid container spacing={{ xs: 2, md: 5 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                <Grid item xs={3}>
                    <AccountNavigation nav={router.pathname}/>
                </Grid>
                <Grid item xs={9}>
                    <Box sx={{display:'flex', justifyContent:'space-between'}}>
                        <Box></Box>
                        <Button sx={{bgcolor:'black',borderRadius:'10px','&:hover':{bgcolor:'black'}}} variant='contained' onClick={handleOpen}>ADD NEW ADDRESS</Button>
                        <AddAddress {...props}/>
                    </Box>
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        {addresses.map((add)=><Grid key={add.id} item xs={4}>
                            <AddCard address={add} handleEdit={handleEdit} handleDelete={handleDelete}/>
                        </Grid>)}
                        
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}