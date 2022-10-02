import { Box, Input, Typography } from "@mui/material";
import { margin } from "@mui/system";

import React from "react";

const Searchbox = () => {
  return (
    <Box
    width={{ sm : "311px", md : "350px" }}
      sx={{
        display: "flex",
        alignitem: "center",
        overflow: "hidden",
        borderRadius: "10px",
        height: "42px",
      }}
      // border={"1px solid red"}
    >
      <input
         
         placeholder='Try "Liquid Lipstick"'
        style={{
          padding: "10px 20px ",
          width : "100%",       
          overtflow: "hidden",
          border: "1px solid white",
          outline: "none",
          backgroundColor: "black",
          color: "white",
        }}
      />
    
      <Search />
    </Box>
  );
};

export default Searchbox;

const Search = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignitem: "center",
        paddingX: "15px",
        backgroundColor: "white",
        color: "black",
        justifyContent: "space-around",
      }}
    >
   
      <Typography
      fontSize={{
        sm : "15px" , md : "20px"
      }}
        sx={{
          height: "fit-content",
          margin: "auto",
          // fontSize: "15px",
          lineHeight: "23px",
          color: "#212121",
          fontWeight: 400,
          letterSpacing: "0.6px",
        }}
      >
        Search
      </Typography>
    </Box>
  );
};
