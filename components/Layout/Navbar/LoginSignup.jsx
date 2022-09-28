import { Box } from "@mui/material";
import Head from "next/head";
import React, { useState } from "react";

import { TableHead } from "@mui/material";

const LoginSignup = () => {
  let auth = false;
  // this auth will come from above components 
  let text = ["Login/Register"]
  const [info, setInfo] = useState("hii user")
  return (
    <Box
      border={"1px solid red"}
      sx={{
        display: "flex",
        alignitem: "center",
        justifyContent: " center",
      }}
      w={"100px"}
    >         
          <TableHead 
           sx={{
            display :"flex",
            justifyContent : "space-between",
            minWidth : "90px",
            alignItems : "center"
          }}>
            {auth? info : "Login/Register"}
          </TableHead>
        
      
    </Box>
  );
};

export default LoginSignup;
