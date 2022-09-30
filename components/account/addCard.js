import {Box } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

export default function AddCard(props){
    const {address,handleEdit,handleDelete} = props;
    return (
        <Box m='4' sx={{bgcolor:'white',boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",borderRadius:4,p:2}}>
            <Box sx={{display:"flex",justifyContent:'space-between'}}>
                <Box variant='h4' component='h5'>{address.firstName}{" "}{address.lastName}</Box>
                <Box sx={{display:"flex",gap:"5px"}}>
                    <Box onClick={()=>handleEdit(address.id)} sx={{cursor:'pointer'}}><EditIcon/></Box>
                    <Box onClick={()=>handleDelete(address.id)} sx={{cursor:'pointer'}}><DeleteOutlineIcon/></Box>
                </Box>
            </Box>
            <Box>{address.flatHouseNumber}</Box>
            <Box>India, {address.city}, {address.state}, {address.pincode}</Box>
            <Box>Phone Number: {address.phoneNumber} </Box>
        </Box>
    )
}