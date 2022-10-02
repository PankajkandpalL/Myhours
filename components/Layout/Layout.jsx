import { Box } from "@mui/material";
import React from "react";
import Footer from "./Footer/Footer";
import Navbar from "./Navbar/Navbar";

const Layout = ({ children }) => {
	return (
		<Box
			sx={{
				padding: 0,
				margin: 0,
				height: "100vh",
			}}>
			<Navbar />
			{children}

			<Footer />
		</Box>
	);
};

export default Layout;
