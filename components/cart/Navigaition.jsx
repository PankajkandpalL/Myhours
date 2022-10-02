import { Box } from '@mui/system'
import Link from 'next/link'
import React from 'react'
import {FiChevronRight} from "react-icons/fi"

const Navigation = () => {
  return (
    <Box backgroundColor="white">
        <Box padding={"0.5rem"}  display="flex" gap="10px" sx={{cursor:"pointer"}} ml="15px">
        <Link href="/"><span >Home</span></Link>
        <Box mt="4px"><FiChevronRight/></Box>
        <Link href={"/cart"}><b>Cart</b></Link>
        </Box>
    </Box>
  )
}

export default Navigation;
