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
       fontSize={{xs : "18px" , sm : "20px" ,md : "20px", lg : "20px" }}
       lineHeight={{ xs : "22px", sm : '28px', md : "28px", lg : "28px"}}
        sx={{
          // width : "20%",
          fontWeight: 900,          
          color: color,
         
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
