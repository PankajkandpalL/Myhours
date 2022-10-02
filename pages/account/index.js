import AccountNavigation from "../../components/account/accountNavigation";
import Grid from '@mui/material/Grid';
import EmptyAccount from "../../components/account/emptyAccount";
import React from 'react';
import axios from 'axios';
import { useRouter } from "next/router";
import Layout from "../../components/Layout/Layout";


const LoginPage = ()=>{
    const [user,setUser] = React.useState({});
    const router = useRouter();

    React.useEffect(()=>{
        axios({
            method:'GET',
            url:"http://localhost:3000/api/wishlist/get",
            headers:{
                'token':`${JSON.parse(localStorage.getItem('token')).primaryToken}`
            }
        }).then((res)=>setUser(res.data)).catch((err)=>console.log(err));
    },[])
    return (
        <Layout>
            <div style={{padding:'2%',backgroundColor:'#f2f2f2',marginTop:'60px'}}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    <Grid item xs={3}>
                        <AccountNavigation user={user}/>
                    </Grid>
                    <Grid item xs={9}>
                        <EmptyAccount image={'https://media.sugarcosmetics.com/upload/graphic.png'} msg={`Not ${user.username}`} text={'Click below to login from a different account.'} button={'LOGIN'} onClick={()=>router.push('/register')}/>
                    </Grid>
                </Grid>
            </div>
        </Layout>
    )
}

export default LoginPage;


