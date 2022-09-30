import Modal from '@mui/material/Modal';
import {Box, FormControlLabel, Typography, Checkbox, TextField, Button} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import {v4 as uuid} from 'uuid';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    bgcolor: 'background.paper',
    boxShadow: 24,
    pb:4,
    pl:4,
    pr:4,
    pt:1,
    borderRadius:3
  };

export default function AddAddress({open,setOpen,handleClose,handleOpen,address,setAddress,addresses,setAddresses}){
    const handleChange = (e)=>{
        const {name,value,checked} = e.target;
        if(name === 'setDefaultAddress') setAddress({...address,[name]:checked})
        else setAddress({...address,[name]:value});
        
    }
    const handleSubmit = ()=>{
        setAddresses([...addresses,{...address,id:uuid()}]);
        setOpen(false);
    }
    return (
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box id="modal-modal-title" sx={{display:'flex',justifyContent:'space-between',bgcolor:'#00dfsd'}}>
            <Typography variant="h6" component="h2">
            Add New Address
            </Typography>
            <Box onClick={()=>setOpen(false)}>
                <CloseIcon/>
            </Box>
          </Box>
          <Box id="modal-modal-description"  sx={{ mt: 2 }}>
                <Box sx={{display:"flex"}}>
                    <TextField variant='outlined' name="firstName" value={address.firstName} label='First Name' sx={{m:1,width:'40ch'}} onChange={handleChange}/>
                    <TextField variant='outlined' name="lastName" value={address.lastName} label='Last Name' sx={{m:1,width:'40ch'}} onChange={handleChange}/>
                </Box>
                <Box>
                    <TextField variant='outlined' name="phoneNumber" value={address.phoneNumber} label='Phone Number' sx={{m:1,width:'40ch'}} onChange={handleChange}/>
                    <TextField variant='outlined' name='flatHouseNumber' value={address.flatHouseNumber} label='Flat/House Number' sx={{m:1,width:'40ch'}} onChange={handleChange}/>
                </Box>
                <Box>
                    <TextField variant="outlined" name="apartmentAreaLocalityRoad" value={address.apartmentAreaLocalityRoad} label='Apartment/Area/Locality/Road...' sx={{m:1,width:'80ch'}} onChange={handleChange}/>
                </Box>
                <Box>
                    <TextField variant='outlined' name="pincode" value={address.pincode} label='Pincode' sx={{m:1,width:'40ch'}} onChange={handleChange}/>
                    <Button sx={{m:1,mt:1,bgcolor:'black',color:'white','&:hover':{color:'white',bgcolor:'black'}}}>GET DETAILS</Button>
                </Box>
                <Box>
                    <TextField variant='outlined' name="state" value={address.state} label='State' sx={{m:1,width:'40ch'}} onChange={handleChange}/>
                    <TextField variant='outlined' name='city' value={address.city} label='City' sx={{m:1,width:'40ch'}} onChange={handleChange}/>
                </Box>
                <FormControlLabel control={<Checkbox name='setDefaultAddress' value={address.setDefaultAddress} onChange={handleChange} />} label="Set as default address" />
                <Box sx={{display:'flex',gap:'50px',justifyContent:'space-between'}}>
                    <Box></Box>
                    <Button onClick={handleSubmit} sx={{m:1,mt:1,bgcolor:'black',color:'white','&:hover':{color:'white',bgcolor:'black'}}}>Save and Continue</Button>
                    <Box></Box>
                </Box>
          </Box>
        </Box>
      </Modal>
    )
}