import { Box } from "@mui/material";
import Head from "next/head";
import React, { useState } from "react";

import { TableHead } from "@mui/material";

const LoginSignup = () => {
  let auth = false;
  let text = ["Login/Register"]
  const [info, setInfo] = useState(auth)
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
         
          <TableHead>
            {text[info?0:1]}
          </TableHead>
        
      
    </Box>
  );
};

export default LoginSignup;
