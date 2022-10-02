import {Box, Typography,Button} from '@mui/material';

export default function EmptyAccount({image,msg,text,button,onClick}){
    return (
        <Box sx={{bgcolor:'white',borderRadius:5,pt:12,pb:12}}>
            <Box sx={{textAlign:'center'}}>
                <img src={image} height='195' width='215'/>
                <Typography sx={{fontSize:16}}>{msg}</Typography>
                <Typography sx={{color:'#7a7a7a'}}>{text}</Typography>
                <Button onClick={onClick} sx={{bgcolor:'black',mt:1.5,p:1.4,fontSize:16,borderRadius:'10px','&:hover':{bgcolor:'black'}}} variant='contained'>{button}</Button>
            </Box>
        </Box>
    )
}