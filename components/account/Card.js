import {Box, Typography} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';

export default function Card({img,title,price}){
    return (
        <Box sx={{pb:4,boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",borderRadius:"10px",diplay:'flex',flexDirection:"column",textAlign:"center",bgcolor:'white'}}>
            <img src={img} height='220' width=""/>
            <Box sx={{display:"flex",flexDirection:"column",gap:"20px"}}>
                <Box>{title}</Box>
                <Box><Typography variant={'h5'} component={'h5'}>{'\u20B9'}{price}</Typography></Box>
            </Box>
            <Box pl='50px' mt='50px' sx={{display:"flex",gap:'20px'}}>
                <Box p='5px 5px 2px 5px' sx={{border:"2px solid black",borderRadius:"10px"}}><FavoriteIcon/></Box>
                <Box p='5px 50px 2px 50px' sx={{bgcolor:'black',color:"white",borderRadius:'10px'}}>ADD TO CART</Box>
            </Box>
        </Box>
    )
}