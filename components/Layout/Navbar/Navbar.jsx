import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import Nav from "./Nav";
import Topbar from "./Topbar";

const Navbar = () => {
	// topbar hide or show
	const [showbar, setShowbar] = useState(true);

	let item = [
		{
			name: "Makeup",
		},
		{
			name: "Brushes",
		},
		{
			name: "Skincare",
		},
		{
			name: "Gifting",
		},
		{
			name: "Blog",
		},
		{
			name: "Offers",
		},
		{
			name: "Stores",
		},
	];
	return (
		<Box
			position={"sticky"}
			bgcolor={"black"}
			top={0}
			zIndex={1000}
			sx={{ width: "100%", color: "white" }}>
			{showbar && <Topbar showbar={showbar} setShowbar={setShowbar} />}
			<Box>
				<Nav />
			</Box>

			<Box
				sx={{
					backgroundColor: "#141414",
					paddingY: 2,
					color: "white",
					display: "flex",
					gap: "30px",
					paddingX: "30px",
				}}>
				{item.map((e, i) => {
					return (
						<Box key={i}>
							<Typography
								sx={{
									fontSize: "14px",
									lineHeight: "21px",
									color: "white",
									fontWeight: 400,
								}}>
								{e.name}
							</Typography>
						</Box>
					);
				})}
			</Box>
		</Box>
	);
};

export default Navbar;
