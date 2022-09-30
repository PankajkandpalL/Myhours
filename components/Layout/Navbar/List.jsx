import { Box } from "@mui/material";
import React from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import DiscountOutlinedIcon from "@mui/icons-material/DiscountOutlined";
import Link from "next/link";

const List = () => {
  return (
    <Box
      sx={{
        display: "flex",
        // justifyContent : "space-between",
        minWidth: "90px",
        gap: "30px",
        alignItems: "center",
      }}
      // border={"1px solid red"}
    >
      
      <Link href="/wishlist">
        <FavoriteBorderIcon />
      </Link>
      <Link href="/cart">
        <ShoppingBagOutlinedIcon />
      </Link>
      <Link href="/offers">
        <DiscountOutlinedIcon />
      </Link>
    </Box>
  );
};

export default List;
