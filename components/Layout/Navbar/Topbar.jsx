import { Box } from "@mui/material";
import React from "react";
import { Typography } from "@mui/material";

const Topbar = ({ setShowbar, showbar }) => {
  return (
    <Box display={"flex"}>
      <Typography
        align={"center"}
        width={"100%"}
        py={0.5}
        fontFamily={"Roboto, sans-serif"}
        fontWeight={400}
        fontSize={"16px"}
        lineHeight={"24px"}
        color={"white"}
        bgcolor={"black"}
      >
        Get 4 mini liquid lipsticks + pouch FREE on a spend of Rs. 1099.
      </Typography>
      {/* <CloseOutlinedIcon onClick={()=>setShowbar(!showbar)} /> */}
      {/* having issue with icons 😅 */}
      <p
        style={{
          width: "fit-content",
          position: "fixed",
          right: 50,
          color: "white",
          top : -10
        }}
        onClick={() => setShowbar(!showbar)}
      >
        cancel
      </p>
    </Box>
  );
};

export default Topbar;
