import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import jwt from 'jsonwebtoken'

import { TableHead } from "@mui/material";

const LoginSignup = () => {
  let auth = true;
  // this auth will come from above components
  let text = ["Login/Register"];
  const [info, setInfo] = useState();

  let getUser = () => {
    let d = JSON.parse(localStorage.getItem("token"))
    let x = jwt.decode(d.primaryToken)
    setInfo(x.name)
  }

  useEffect(()=>{
    if(localStorage.getItem("message")==="Logged In")
    {
      getUser()
    }

  },[])

  return (
    <Box
      sx={{
        display: "flex",
        alignitem: "center",
        justifyContent: " center",
      }}
      w={"100px"}
    >
      <TableHead
        sx={{
          display: "flex",
          justifyContent: "space-between",
          minWidth: "90px",
          alignItems: "center",
   
        }}
      >
        {auth ? info : "Login/Register"}

        {/* <Select name="111111111111111111" 
          sx={{
            border: "1px solid red",
            width: "40px",
            color: "white",
          }}
          >
          <option >logout</option> 
        </Select>*/}
      </TableHead>
    </Box>
  );
};

export default LoginSignup;
