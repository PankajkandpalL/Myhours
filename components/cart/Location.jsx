import { Box } from '@mui/system'
import Link from 'next/link'
import React from 'react'
import {FiChevronRight} from "react-icons/fi"

const Location = () => {
  return (
    <Box backgroundColor="white">
        <Box padding={"0.5rem"} display="flex" sx={{cursor:"pointer"}} ml="15px">
        <Link href="/"><span >Home</span></Link>
        <Box><FiChevronRight/></Box>
        <Link href={"/cart"}><b>Cart</b></Link>
        </Box>
    </Box>
  )
}

export default Location
