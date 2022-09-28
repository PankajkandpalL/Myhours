import { Box, Container } from '@mui/material'
import React, { useState } from 'react'
import Nav from './Nav'
import Topbar from './Topbar'

const Navbar = () => {
  // topbar hide or show 
const [showbar, setShowbar] = useState(true)

  return (
    <Container
    maxWidth={false}
    position={"fixed"}
    sx={
      {
        // backgroundColor: "black",
        width : "100%",
        color: "white"
      }
    }>
      
      {showbar && <Topbar showbar={showbar} setShowbar={setShowbar} />}
      <Box>
        <Nav />
        <Box>categorybox</Box>
      </Box>
      
      </Container>
  )
}

export default Navbar