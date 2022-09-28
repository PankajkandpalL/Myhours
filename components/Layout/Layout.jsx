import { Box, Container } from "@mui/material";
import React from "react";
import Footer from "./Footer/Footer";
import Navbar from "./Navbar/Navbar";

const Layout = ({ children }) => {
  return (
    <Box
      sx={{
        padding: 0,
        border: "1px solid red",
        // width: "100%",
        margin: "0",
      }}
      maxWidth={false}
    >
      <Navbar />
      {children}
      <Footer />
    </Box>
  );
};

export default Layout;
