import React from 'react'
import { Box, Button } from "@mui/material"
import Link from 'next/link'

const Cart = () => {
  return (
    <Box backgroundColor="#f2f2f2" padding="2rem" >
        <Box backgroundColor="white" borderRadius={"10px"} padding={"1rem"} alignContent="center" display={"flex"} justifyContent="center">
            <Box>
            <Box >
            <img src={"https://in.sugarcosmetics.com/Cart_nofound.svg"} width="283" height="283"/>
            </Box>
            <Box textAlign={"center"} color="gray" mt="10px">
                Hey! It's lonely here.<br/>
                Your bag seems to have no company.<br/>
                Why not add some products?
            </Box>
            <Box textAlign={"center"} mt="10px">
            <Link href="/" >
                <Button variant="contained" sx={{backgroundColor:"black", color:"white"}}>
                SHOP NOW
                </Button>
            </Link>
            </Box>
            </Box>
        </Box>
    </Box>
  )
}
export default Cart;
