import { Box } from '@mui/material'
import React from 'react'
import { AiOutlineHeart,FaBeer } from 'react-icons/fa';

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
wishlist ---
bag ----offers
    </Box>
  )
}

export default List