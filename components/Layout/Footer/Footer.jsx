import { Box } from "@mui/material";
import React from "react";
import Bottomfooter from "./Bottomfooter";
import Topfooter from "./Topfooter";

const Footer = (props) => {
	return (
		<Box>
			<Topfooter />
			<Bottomfooter />
		</Box>
	);
};

export default Footer;
