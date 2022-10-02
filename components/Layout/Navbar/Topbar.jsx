import { Box } from "@mui/material";
import React from "react";
import { Typography } from "@mui/material";
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';



const Topbar = ({ setShowbar, showbar }) => {
  return (
    <Box display={"flex"} justifyContent={"space-around"}  >
      <Typography
      // border={"1px solid red"}
      width={{xs : "fit-content", sm : "100%"}}
        align={"center"}
        // width={}
        py={0.8}
        fontFamily={"Roboto, sans-serif"}
        fontWeight={400}
        fontSize={{ xs : "9px", sm : "16px"}}
        lineHeight={"24px"}
        color={"white"}
        
      >
        Get 4 mini liquid lipsticks + pouch FREE on a spend of Rs. 1099.
      </Typography>
    
      <p
        style={{
          width: "fit-content",
          position: "fixed",
          right: 40,
          color: "white",
          top : -10
        }}
        onClick={() => setShowbar(!showbar)}
      >
        <ClearOutlinedIcon />
      </p>
    </Box>
  );
};

export default Topbar;
