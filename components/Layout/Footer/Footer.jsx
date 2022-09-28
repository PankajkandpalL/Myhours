import { Box } from '@mui/material'
import React from 'react'
import Topfooter from './Topfooter'

const Footer = () => {
  return (
    <Box sx={{
      position : "absolute",
      backgroundColor : "black",
      bottom : 0,
      left :0,
      right : 0
    }}>
<Topfooter />
    </Box>
  )
}

export default Footer