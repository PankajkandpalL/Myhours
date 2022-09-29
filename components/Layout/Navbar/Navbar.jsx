import { Box } from '@mui/material'
import React, { useState } from 'react'
import Nav from './Nav'
import Topbar from './Topbar'

const Navbar = ({logo}) => {
  // topbar hide or show 
const [showbar, setShowbar] = useState(true)

  return (
    <Box    
    position={"fixed"}
    sx={
      {
       
        width : "100%",
        color: "white"
      }
    }>
      
      {showbar && <Topbar showbar={showbar} setShowbar={setShowbar} />}
      <Box>
        <Nav logo={logo}/>
        <Box>categorybox</Box>
      </Box>
      
      </Box>
  )
}

export default Navbar