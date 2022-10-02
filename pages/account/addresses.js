import AccountNavigation from "../../components/account/accountNavigation";
import Grid from '@mui/material/Grid';
import {useRouter} from 'next/router';
import { Button, Box } from "@mui/material";
import AddAddress from "../../components/account/addAddress";
import React from 'react';
import AddCard from "../../components/account/addCard";
import EmptyAccount from "../../components/account/emptyAccount";
import axios from 'axios';
import Layout from "../../components/Layout/Layout";


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
    const [user,setUser] = React.useState({});
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

    React.useEffect(()=>{
        axios({
            method:'GET',
            url:"http://localhost:3000/api/wishlist/get",
            headers:{
                'token':`${JSON.parse(localStorage.getItem('token')).primaryToken}`
            }
        }).then((res)=>{
            setAddresses(res.data.addresses);
            setUser(res.data);
        }).catch((err)=>console.log(err));
    },[])

    const props = {
        address,
        setAddress,
        addresses,
        setAddresses,
        open,
        setOpen,
        handleOpen,
        handleClose,
        user
    };
    return (
        <Layout>
            <div style={{padding:'2%',backgroundColor:'#f2f2f2',marginTop:'60px'}}>
                <Grid container spacing={{ xs: 2, md: 5 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    <Grid item xs={3}>
                        <AccountNavigation nav={router.pathname} user={user}/>
                    </Grid>
                    <Grid item xs={9}>
                        <AddAddress {...props}/>
                        {addresses.length === 0 && <EmptyAccount image={'https://media.sugarcosmetics.com/upload/ic_empty_address1%201.png'} msg={`Addresses is empty`} text={'We can\'t seem to locate you, please add in your address.'} button={'ADD NEW ADDRESS'} onClick={handleOpen}/>}
                        {addresses.length > 0 && <>
                            <Box sx={{display:'flex', justifyContent:'space-between'}}>
                                <Box></Box>
                                <Button sx={{bgcolor:'black',borderRadius:'10px','&:hover':{bgcolor:'black'}}} variant='contained' onClick={handleOpen}>ADD NEW ADDRESS</Button>
                                
                            </Box>
                            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                                {addresses.map((add)=><Grid key={add.id} item xs={4}>
                                    <AddCard address={add} handleEdit={handleEdit} handleDelete={handleDelete}/>
                                </Grid>)}
                                
                            </Grid>
                        </>}
                        
                    </Grid>
                </Grid>
            </div>
        </Layout>
    )
}