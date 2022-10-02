import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import jwt from "jsonwebtoken";

import { TableHead } from "@mui/material";

const LoginSignup = () => {
	let auth = true;
	// this auth will come from above components
	let text = ["Login/Register"];
	const [info, setInfo] = useState();

	let getUser = () => {
		let d = JSON.parse(localStorage.getItem("token"));
		let x = jwt.decode(d.primaryToken);
		setInfo(x.name);
	};

	useEffect(() => {
		let msg = localStorage.getItem("message") || "";
		if (msg === "Logged In") {
			getUser();
		}
	}, []);

	return (
		<Box
			sx={{
				display: "flex",
				alignitem: "center",
				justifyContent: " center",
			}}
			w={"100px"}>
			<TableHead
				sx={{
					display: "flex",
					justifyContent: "space-between",
					minWidth: "90px",
					alignItems: "center",
				}}>
				{auth ? info : "Login/Register"}
			</TableHead>
		</Box>
	);
};

export default LoginSignup;
