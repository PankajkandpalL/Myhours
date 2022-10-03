import { Box, Button, Divider, TableHead, Typography } from "@mui/material";
import React, { useState } from "react";
import Headline from "../../Headline/Headline";
import axios from "axios";

const Topfooter = () => {
	let msg = [
		"Successfully Subscribed to news letter, you will be getting a mail regarding same in your inbox!",
		"Please enter valid email",
	];
	const [appearvalue, setAppearvalue] = useState("red");
	const [appear, setappear] = useState("");
	const [querry, setQuerry] = useState("");
	const handleclick = () => {
		let buerry = querry.trim().split("").includes("@");

		if (querry !== "" && buerry) {
			var data = JSON.stringify({
				email: querry,
			});

			let d = JSON.parse(localStorage.getItem("token"));

			var config = {
				method: "post",
				url: "https://sugarcosmetucs.vercel.app/api/sendMail",
				headers: {
					token: d.primaryToken,
					"Content-Type": "application/json",
				},
				data: data,
			};

			axios(config)
				.then(function (response) {
					setappear(msg[0]);
					setAppearvalue("black");
				})
				.catch(function (error) {
					console.log(error);
				});
		} else {
			setappear(msg[1]);
			setAppearvalue("red");
			console.log(setappear);
		}
		setTimeout(() => {
			setappear(null);
		}, 3000);
	};

	return (
		<Box
			sx={{
				padding: 5,
				display: "flex",
				justifyContent: "space-evenly",
				flexDirection: "column",
				alignitem: "center",
				backgroundImage: `url('https://in.sugarcosmetics.com/desc-images/Rectangle_background.svg')`,
				height: "290px",
			}}>
			<Headline color={"#212121"}>LET’S STAY IN TOUCH</Headline>

			<Typography
				sx={{
					width: "fit-content",
					margin: "auto",
					fontFamily: "Roboto, sans-serif",
					fontWeight: 400,
					fontSize: "16px",
					lintHeight: "19px",
					color: "#212121",
					marginY: 1,
				}}>
				Get the latest beauty tips straight to your inbox. Can’t wait to
				connect!
			</Typography>

			<Box
				padding={{
					xs: "0px 0px ",
					sm: "10px 19px",
					md: "10px 19px",
					lg: "10px 19px",
				}}
				width={{
					xs: "100%",
					sm: "80%",
					md: "60%",
				}}
				margin={"auto"}
				sx={{
					display: "flex",
					justifyContent: "center",
				}}

				// border={"1px solid red"}
			>
				<input
					type="email"
					placeholder="Enter email"
					style={{
						width: "100%",
						outline: "none",
						// border: "1px solid red"
					}}
					onChange={(e) => setQuerry(e.target.value)}
				/>

				<Button
					variant="contained"
					sx={{
						backgroundColor: "black",
						outline: "none",
						border: "none",
						marginleft: "-10px",
					}}
					onClick={() => handleclick()}>
					SUBSCRIBE
				</Button>
			</Box>
			<Typography
				sx={{
					width: "fit-content",
					margin: "auto",
					fontFamily: "Roboto, sans-serif",
					fontWeight: 400,
					fontSize: "16px",
					lintHeight: "19px",
				}}
				color={appearvalue}>
				{appear && appear}
			</Typography>
		</Box>
	);
};

export default Topfooter;

// const Line =()=>{
//     return <Typography sx={{color : red}}/>
// }
