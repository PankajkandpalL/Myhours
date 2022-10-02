import { Box } from "@mui/material";
import React from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import DiscountOutlinedIcon from "@mui/icons-material/DiscountOutlined";
import Link from "next/link";
import useMediaQuery from '@mui/material/useMediaQuery';
import SearchIcon from '@mui/icons-material/Search';


const List = () => {

  const matches = useMediaQuery('(min-width:450px)');



  return (
    <Box
    gap={{ sm : "30px", xs :  '10px'}}
      sx={{
        display: "flex",
        // justifyContent : "space-between",
        minWidth: "90px",
        
        alignItems: "center",
      }}
      // border={"1px solid red"}
    >
      {
        !matches && <Link href="/search">
        <SearchIcon />
      </Link>
      }
      <Link href="/wishlist">
        <FavoriteBorderIcon />
      </Link>
      {matches &&   <Link href="/cart">
        <ShoppingBagOutlinedIcon />
      </Link> }
     <Link href="/offers">
        <DiscountOutlinedIcon />
      </Link>
    </Box>
  );
};

export default List;
