import { Box, Container } from "@mui/material";
import React from "react";
import Footer from "./Footer/Footer";
import Navbar from "./Navbar/Navbar";

const Layout = ({ children,logo }) => {
  return (
    <Box
      sx={{
        padding: 0,
        // border: "1px solid red",
        margin: "0",
        height : "100vh",
        display : "flex",
        flexDirection : "column"
      }}    
    >
      <Navbar logo={logo} />
      <Box marginTop={{ sm : "168px", sm : "100px" , xs : "100px"}}>     
      {children}
      </Box> 
      <Footer />
    </Box>
  );
};

export default Layout;
