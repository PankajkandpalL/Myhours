import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import jwt from "jsonwebtoken";

import { TableHead } from "@mui/material";
import { useRouter } from 'next/router'

const LoginSignup = () => {
	// this auth will come from above components
	let text = ["Login/Register"];
	const [info, setInfo] = useState("");
	const [ auth,setAuth ] = useState( info ? true : false)

	const router = useRouter()

	let getUser = () => {
		let d = JSON.parse(localStorage.getItem("token"));
		let x = jwt.decode(d.primaryToken);
		setInfo(x.name);
		setAuth(true)
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
			onClick={()=>{
				router.push("/register")
			}}
				sx={{
					display: "flex",
					justifyContent: "space-between",
					minWidth: "90px",
					alignItems: "center",
					cursor : "pointer"
				}}>
				{auth ? info : "Login/Register"}
			</TableHead>
		</Box>
	);
};

export default LoginSignup;
