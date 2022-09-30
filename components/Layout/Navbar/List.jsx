import { Box } from '@mui/material'
import React from 'react'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';


const List = () => {
  return (
    <Box 
    sx={{
      display :"flex",
      justifyContent : "space-between",
      minWidth : "90px",
      alignItems : "center"
    }}
    border={"1px solid red"}>
{/* <AiOutlineHeart />

<FaBeer />
<FaBeer /> */}
<FavoriteBorderIcon/> ---
bag ----offers
    </Box>
  )
}

export default List