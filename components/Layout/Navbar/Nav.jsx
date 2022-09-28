import { Box } from "@mui/system";
import React from "react";
import LoginSignup from "./LoginSignup";
import Logo from "./Logo";
import Searchbox from "./Searchbox";

const Nav = ({ logo }) => {
 
  return (
    <Box
      sx={{
        backgroundColor: "black",
        display: "flex",
        justifyContent: "space-evenly",
        py: 2,
        borderTop: "0.6px solid grey",
      }}
    >
     <Logo logo={logo} />
     {/* search box */}
      <Searchbox />

{/* LoginSignup here  */}
 <LoginSignup /> 


      <p></p>
      wishlist bag offers switch button
    </Box>
  );
};

export default Nav;
