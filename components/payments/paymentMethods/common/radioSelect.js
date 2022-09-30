import {Box, Typography,Radio} from '@mui/material';

export default function RadioSelect ({image,text,selectedValue,setSelectedValue}){
    const handleSelect = ()=>{
        setSelectedValue(text);
    }
    return (
        <Box onClick={handleSelect} sx={{display:'flex',p:1,pt:1,justifyContent:'space-between',borderRadius:'8px',boxShadow: 'rgba(0, 0, 0, 0.05) 0px 0px 0px 1px',cursor:'pointer'}}>
            <Box sx={{display:'flex',gap:"5px"}}>
                <img src={image} height='25px' alt={text}/>
                <Typography>{text}</Typography>
            </Box>
            <Radio
                checked={selectedValue === text}
                value={text}
                name={text.toLowerCase()}
            />

        </Box>
    )
}