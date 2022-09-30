import { Box, Container, Grid, Icon, Stack, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout/Layout";
import config from "../../config.json";
import { BsShare } from "react-icons/bs";
import Image from "next/image";
import ImageSectionComponent from "../../components/productPage/ImageSectionComponent";

let { BASE_API_URL } = config;

const ProductPage = ({ product }) => {
	const [imagesByColor, setImagesByColor] = useState(
		product.hasColor ? product.imagesByColor[0].images : []
	);
	const [selectedColor, setSelectedColor] = useState(
		product.hasColor ? product.imagesByColor[0].color : ""
	);
	const [selectedImage, setSelectedImage] = useState(
		product.hasColor
			? product.imagesByColor[0].images[0]
			: product.generalImages[0]
	);
	// console.log(imagesByColor);
	// console.log({ selectedColor });
	const [generalImages, setGeneralImages] = useState(product.generalImages);

	useEffect(() => {
		if (product.hasColor) {
			let selectedImages = product.imagesByColor.filter(
				(img) => img.color === selectedColor
			);
			console.log(selectedImages);
		}
	}, [selectedColor]);

	return (
		<Layout>
			<Box sx={{ border: "1px solid green" }} bgcolor="#f3f2f2">
				<Box
					// width={"100%"}
					bgcolor={"white"}
					py={"20px"}
					px="0px">
					Breadcrumb section
				</Box>
				<Container
					maxWidth="xl"
					sx={{
						boxShadow:
							"rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;",
						margin: "20px auto",
						paddingY: "40px",
						borderRadius: "15px",
						backgroundColor: "white",
					}}>
					<Grid container justifyContent="space-between" spacing={2}>
						<Grid item xs={12} md={4}>
							<ImageSectionComponent
								images={[...imagesByColor, ...generalImages]}
							/>
						</Grid>
						<Grid item xs={12} md={8} border="1px solid black">
							<Typography textAlign={"center"}>
								xs=12 md=7 Info Section
							</Typography>
							{/* Name and share icon */}
							<Stack direction={"row"} justifyContent={"space-between"}>
								<Typography variant={"h5"}>{product.productName}</Typography>
								<Icon>
									<BsShare />
								</Icon>
							</Stack>
							{product.hasColor &&
								"This has color, so show available color options, and change product images wrt the color selected."}
						</Grid>
					</Grid>
				</Container>
			</Box>
		</Layout>
	);
};

export default ProductPage;

export const getServerSideProps = async (context) => {
	const { id } = context.params;
	let apiUrl = `${BASE_API_URL}/product/byID`;
	let product = await axios.get(apiUrl, {
		params: {
			_id: id,
		},
	});
	product = product.data;
	return {
		props: {
			product,
		},
	};
};
