import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Link from "next/link";

const Carouselcard1 = (
 {poster,productName,newPrice,_id}
) => {
  // const poster =
  //   "https://cdn.shopify.com/s/files/1/0906/2558/products/1_529c20ee-c872-4029-9702-8580d7b9a66f.jpg?v=1640178644";
  // const productName = "Matte Attack Transferproof Lipstick";
  // const newPrice = 699;
  // const _id = "/product/6334c5e543d5dec59a27f8a4";

  return (
    <Box
      width={"200px"}
      backgroundColor={"white"}
      paddingX={2}
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      borderRadius={"20px"}
      maxHeight={"350px"}
    >
      <Box overflow={"hidden"} borderRadius={"15px"}>
        <Image
          loader={(src) => poster}
          src={poster}
          alt="icon"
          width={140}
          height={190}
        />
      </Box>
      <Typography
        paddingY={1}
        width={"60%"}
        textAlign={"center"}
        fontFamily={"Roboto"}
        fontWeight={400}
        fontSize={"13px"}
        lineHeight={"16px"}
        color={"#212121"}
      >
        {productName}
      </Typography>
      <Typography
        fontFamily={"Roboto"}
        fontWeight={700}
        fontSize={"18px"}
        lineHeight={"27px"}
        color={"black"}
      >
        {" "}
        ₹{newPrice}
      </Typography>

      <Box
        display={"flex"}
        justifyContent={"space-between"}
        // gap={"20px"}
        width={"100%"}
        alignItems={"center"}
        marginY={1}
      >
        <Box
          margin={1}
          border={"1px solid black"}
          p={0.6}
          borderRadius={"10px"}
          display={"flex"}
          alignitem={"center"}
          justifyContent={"center"}
        >
          <FavoriteBorderIcon />
        </Box>
        <Link href={`/product/${_id}`} >
        <Button
          
          sx={{
            width: "80%",
            backgroundColor: "black",
            borderRadius: "10px",
          }}
          variant="contained"
        >
          Add to Cart
        </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default Carouselcard1;
