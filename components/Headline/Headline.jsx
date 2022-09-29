import { Box, Divider } from "@mui/material";
import React from "react";

const Headline = ({ children, color }) => {
  return (
    <Box
      paddingY={3}
      alignItems={"center"}
      justifyContent={"center"}
      display={"flex"}
    >
      <Box
        color={"red"}        
        border={"0.5px solid red"}
        width={"5%"}
        zIndex={0}
      ></Box>
      <Divider
        sx={{
          // width : "20%",
          fontWeight: 900,
          lineHeight: "28px",
          color: color,
          fontSize: "20px",
          letterSpacing: "1px",
          fontFamily: "Roboto",
          zindex: 100,
          backgroundColor: "none",
        }}
      >
        {children}
      </Divider>
      <Box
        color={"red"}
        
        border={"0.5px solid red"}
        width={"5%"}
        zIndex={0}
      ></Box>
    </Box>
  );
};

export default Headline;
