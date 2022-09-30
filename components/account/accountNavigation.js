import {Image, Box, Typography} from '@mui/material';
import AssignmentIcon from '@mui/icons-material/Assignment';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import RedeemIcon from '@mui/icons-material/Redeem';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import {useRouter} from 'next/router';


export default function AccountNavigation({nav}){
    const router = useRouter();
    
    return (
        <Box sx={{borderRadius:"10px",color:"white",boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}}>
            <Box sx={{ borderRadius:"10px" ,height:'30vh', backgroundImage:'url("https://media.sugarcosmetics.com/upload/VTOBackgroungTexture.png")' }}>
                <Box sx={{paddingTop:'5%',textAlign:'center',color:'white',display:'flex',gap:'5px',flexDirection:'column'}}>
                    <Box><img src='https://media.sugarcosmetics.com/upload/accountMask.png' width='30%' height='20%' alt='account'/></Box>
                    <Box><Typography component={'h4'} sx={{fontWeight:'bold'}}>Sharang Ahirekar</Typography></Box>
                    <Box>+91 99999 99999</Box>
                    <Box>email@email.com</Box>
                </Box>
            </Box>
            <Box sx={{textAlign:"center"}}>
            <Box onClick={()=>router.push('/account/orders')} sx={{display:'flex',alignItems:"center",justifyContent:'space-between',bgcolor:'white',color:'black',borderBottom:'1px solid grey',height:"75px",color:nav=== '/account/orders'?'#fc2779':'black',cursor:'pointer'}}>
                <Box sx={{display:"flex"}}>
                    <AssignmentIcon/>
                    <Typography >Orders</Typography>
                </Box>
                <Box>
                    <ArrowForwardIosIcon/>
                </Box>
            </Box>
            <Box onClick={()=>router.push('/account/addresses')}  sx={{display:'flex',alignItems:"center",justifyContent:'space-between',bgcolor:'white',color:'black',borderBottom:'1px solid grey',height:'75px',color:nav=== '/account/addresses'?'#fc2779':'black',cursor:'pointer'}}>
                <Box sx={{display:"flex"}}>
                    <FmdGoodIcon/>
                    <Typography>Addresses</Typography>
                </Box>
                <Box>
                    <ArrowForwardIosIcon/>
                </Box>
            </Box>
            <Box  onClick={()=>router.push('/account/wishlist')} sx={{display:'flex',alignItems:"center",justifyContent:'space-between',bgcolor:'white',color:'black',borderBottom:'1px solid grey',height:'75px',color:nav=== '/account/wishlist'?'#fc2779':'black',cursor:'pointer'}}>
                <Box sx={{display:"flex"}}>
                    <FavoriteBorderIcon/>
                    <Typography>Wishlist</Typography>
                </Box>
                <Box>
                    <ArrowForwardIosIcon/>
                </Box>
            </Box>
            <Box onClick={()=>router.push('/account/referral')} sx={{display:'flex',alignItems:"center",justifyContent:'space-between',borderBottomRightRadius:"10px",borderBottomLeftRadius:"10px",bgcolor:'white',color:'black',height:'75px',color:nav=== '/account/referral'?'#fc2779':'black',cursor:'pointer'}}>
                <Box sx={{display:"flex"}}>
                    <RedeemIcon/>
                    <Typography>Refer & Earn</Typography>
                </Box>
                <Box>
                    <ArrowForwardIosIcon/>
                </Box>
            </Box>
            </Box>
        </Box>
    )
}