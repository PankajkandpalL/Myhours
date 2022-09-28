import { Box, Container } from "@mui/material";
import React from "react";
import Footer from "./Footer/Footer";
import Navbar from "./Navbar/Navbar";

const Layout = ({ children,logo }) => {
  return (
    <Box
      sx={{
        padding: 0,
        border: "1px solid red",
        margin: "0",
      }}    
    >
      <Navbar logo={logo} />
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      {children}
      <Footer />
    </Box>
  );
};

export default Layout;
