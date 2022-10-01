import AccountNavigation from "../../components/account/accountNavigation";
import Grid from '@mui/material/Grid';
import Card from "../../components/account/Card";
import {useRouter} from 'next/router';

export default function Referral (){
    const router = useRouter();
    return (
        <div style={{padding:'2%',backgroundColor:'#f2f2f2'}}>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                <Grid item xs={3}>
                    <AccountNavigation nav={router.pathname}/>
                </Grid>
                <Grid item xs={9}>
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}