import {
	Accordion,
	AccordionDetails,
	AccordionSummary,
	Box,
	Breadcrumbs,
	Button,
	Checkbox,
	Container,
	Divider,
	FormControl,
	Grid,
	Icon,
	InputLabel,
	Link as MLink,
	MenuItem,
	Select,
	Stack,
	Typography,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout/Layout";
import config from "../../config.json";
import { BsDroplet, BsShare } from "react-icons/bs";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ImageSectionComponent from "../../components/productPage/ImageSectionComponent";
import { GiRabbit } from "react-icons/gi";
import { RiShoppingBag3Line } from "react-icons/ri";
import { BsGear } from "react-icons/bs";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Headline from "../../components/Headline/Headline";
import PGtypeCarousel from "../../components/PGtypeCarousel/PGtypeCarousel";
import Link from "next/link";
import { Favorite, FavoriteBorder } from "@mui/icons-material";

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

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

	const [generalImages, setGeneralImages] = useState(product.generalImages);

	const changeColor = (e) => {
		// console.log(e.target.value);
		setSelectedColor(e.target.value);
	};

	const postData = () => {

		let d = JSON.parse(localStorage.getItem("token"))
	
		var data = JSON.stringify({
		  "productName": product.productName,
		  "newPrice": product.newPrice,
		  "poster": product.poster
		});
		
		var config = {
		  method: 'post',
		  url: 'hhttps://sugarcosmetucs.vercel.app/api/cart/post',
		  headers: { 
			'token': d.primaryToken , 
			'Content-Type': 'application/json'
		  },
		  data : data
		};
		
		axios(config)
		.then(function (response) {
		  if(response.data=="Already In the cart!")
		  {
			alert("Already In The Cart!")
		  }
		  else
		  {
			alert("Product Added to the Cart")
		  }
		})
		.catch(function (error) {
		  console.log(error);
		});
		
	
	  } 

	useEffect(() => {
		if (product.hasColor) {
			let selectedImages = product.imagesByColor.find(
				(img) => img.color === selectedColor
			);
			console.log(selectedImages);
			setImagesByColor(selectedImages.images);
		}
	}, [selectedColor]);

	let handleDel = (id) => {

		let d = JSON.parse(localStorage.getItem("token"))

		var data = JSON.stringify({
			"id": id
		  });
		  
		  var config = {
			method: 'delete',
			url: 'https://sugarcosmetucs.vercel.app/api/wishlist/delete',
			headers: { 
			  'token': d.primaryToken, 
			  'Content-Type': 'application/json'
			},
			data : data
		  };
		  
		  axios(config)
		  .then(function (response) {
			alert(response.data)
		  })
		  .catch(function (error) {
			console.log(error);
		  });
		  
	}


	let handleChange = (e) => {
		
		let d = JSON.parse(localStorage.getItem("token"))

		if(e.target.checked)
		{
			var data = JSON.stringify({
				"productName": product.productName,
				"newPrice": product.newPrice,
				"oldPrice": product.oldPrice,
				"poster": product.poster,
				"ratings": Math.floor(Math.random()*10)
			  });
			  
			  var config = {
				method: 'post',
				url: 'http://lhttps://sugarcosmetucs.vercel.app/api/wishlist/post',
				headers: { 
				  'token': d.primaryToken, 
				  'Content-Type': 'application/json'
				},
				data : data
			  };
			  
			  axios(config)
			  .then(function (response) {
				alert(JSON.stringify(response.data));
			  })
			  .catch(function (error) {
				console.log(error);
			  });  
		}
		else
		{
			var data = JSON.stringify({
				"productName": product.productName,
				"newPrice": product.newPrice,
				"oldPrice": product.oldPrice,
				"poster": product.poster
			  });
			  
			  var config = {
				method: 'post',
				url: 'https://sugarcosmetucs.vercel.app/api/wishlist/remove',
				headers: { 
				  'token': d.primaryToken, 
				  'Content-Type': 'application/json'
				},
				data : data
			  };
			  
			  axios(config)
			  .then(function (response) {
				console.log(response.data.id)
				handleDel(response.data.id)
			  })
			  .catch(function (error) {
				console.log(error);
			  });
		}
	}

	return (
		<Layout>
			<Box bgcolor="#f3f2f2">
				<Box
					// width={"100%"}
					bgcolor={"white"}
					py={"20px"}
					px="20px">
					<Breadcrumbs aria-label="breadcrumb">
						<Link href="/" passHref>
							<MLink underline="hover">Home</MLink>
						</Link>
						<Link href="/product/all" passHref>
							<MLink underline="hover">Products</MLink>
						</Link>
						{/* <Link href={`/product/${product.category}`} passHref>
							<MLink underline="hover">{product.category}</MLink>
						</Link> */}
						<Link href={`/product/${product._id}`} passHref>
							<MLink underline="hover">{product.productName}</MLink>
						</Link>
					</Breadcrumbs>
				</Box>
				<Container
					maxWidth="lg"
					sx={{
						boxShadow:
							"rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;",
						margin: "20px auto",
						paddingY: "40px",
						borderRadius: "15px",
						backgroundColor: "white",
					}}>
					<Grid container justifyContent="space-between" spacing={2}>
						<Grid item xs={12} md={5}>
							<ImageSectionComponent
								images={[...imagesByColor, ...generalImages]}
							/>
						</Grid>
						<Grid item xs={12} md={7}>
							{/* Name and share icon */}
							<Stack direction={"row"} justifyContent={"space-between"}>
								<Typography variant={"h5"}>{product.productName}</Typography>
								<Icon>
									<BsShare />
								</Icon>
							</Stack>
							<Stack
								direction="row"
								justifyContent={"flex-start"}
								gap={"10px"}
								my="25px">
								{product.oldPrice > 0 && (
									<Typography
										variant="h4"
										sx={{ textDecoration: "line-through" }}>
										₹{product.oldPrice}
									</Typography>
								)}
								<Typography variant="h4">₹{product.newPrice}</Typography>
							</Stack>
							{/* // "This has color, so show available color options, and change product images wrt the color selected." */}
							<Box sx={{ maxWidth: 120 }} my="25px">
								{product.hasColor && (
									<FormControl fullWidth>
										<InputLabel id="color-select-label">
											Select Variant
										</InputLabel>
										<Select
											labelId="color-select-label"
											id="color-select"
											value={selectedColor}
											onChange={changeColor}
											label="Select a Variant">
											{product.colors.map((color, index) => {
												return (
													<MenuItem key={`${color}${index}`} value={color}>
														{color}
													</MenuItem>
												);
											})}
										</Select>
									</FormControl>
								)}
							</Box>
							{/* 
							show available offers
							 */}
							<Box
								p="20px"
								ml="0"
								my="25px"
								sx={{
									borderRadius: "10px",
									backgroundColor: "#f7f7f7",
								}}>
								<Typography variant="body1" textTransform={"uppercase"}>
									Available Offers: {product.availableOffers.length}
								</Typography>
								{product.availableOffers.length > 0 &&
									product.availableOffers.map((offer) => {
										return (
											<li key={offer._id}>
												Offer Code: {offer.offerCode} | Discount Amount: ₹
												{offer.discount}
											</li>
										);
									})}
							</Box>
							{/* Add to favourites & Cart buttons */}
							<Box
								display={"flex"}
								justifyContent={"start"}
								// gap={"20px"}
								width={"100%"}
								alignItems={"center"}
								my="25px">
								<Box
									margin={1}
									border={"1px solid black"}
									p={0.6}
									borderRadius={"10px"}
									display={"flex"}
									alignitem={"center"}
									justifyContent={"center"}>
									{/* <FavoriteBorderIcon /> */}
									<Checkbox onChange={(e)=>handleChange(e)} {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
								</Box>
								<Box>
									<Button
										sx={{
											backgroundColor: "black",
											borderRadius: "10px",
										}}
										onClick={() => {
											postData()
										}}
										variant="contained">
										Add to Cart
									</Button>
								</Box>
							</Box>
							{/* Divider */}
							<Divider />
							{/* Message to buyers */}
							<Stack
								color="text.secondary"
								px="20px"
								py="15px"
								direction={"row"}
								gap={2}
								sx={{ backgroundColor: "#f7f7f7" }}>
								<Box display="flex" alignItems="center" gap="5px">
									<Icon>
										<GiRabbit />
									</Icon>
									<Typography variant="caption">Cruelty Free</Typography>
								</Box>
								<Box display="flex" alignItems="center" gap="5px">
									<Icon>
										<RiShoppingBag3Line />
									</Icon>
									<Typography variant="caption">Easy Returns</Typography>
								</Box>
								<Box display="flex" alignItems="center" gap="5px">
									<Icon>
										<BsGear />
									</Icon>
									<Typography variant="caption">Quality First</Typography>
								</Box>
								<Box display="flex" alignItems="center" gap="5px">
									<Icon>
										<BsDroplet />
									</Icon>
									<Typography variant="caption">
										Dermatologically Tested
									</Typography>
								</Box>
							</Stack>
							<Divider />
							{/* Accordion to show additional information */}
							<Box>
								{product.description.length > 0 && (
									<Accordion>
										<AccordionSummary expandIcon={<ExpandMoreIcon />}>
											<Typography
												sx={{ textTransform: "uppercase" }}
												fontSize="14px">
												Description
											</Typography>
										</AccordionSummary>
										<AccordionDetails>
											{product.description.map((desc, index) => {
												return (
													<Typography fontSize="14px" key={`${desc}-${index}`}>
														{desc}
													</Typography>
												);
											})}
										</AccordionDetails>
									</Accordion>
								)}
								{product.ingredients.length > 0 && (
									<Accordion>
										<AccordionSummary expandIcon={<ExpandMoreIcon />}>
											<Typography
												sx={{ textTransform: "uppercase" }}
												fontSize="14px">
												ingredients
											</Typography>
										</AccordionSummary>
										<AccordionDetails>
											{product.ingredients.map((ingredient, index) => {
												return (
													<Typography
														fontSize="14px"
														key={`${ingredient}-${index}`}>
														{ingredient}
													</Typography>
												);
											})}
										</AccordionDetails>
									</Accordion>
								)}
								{product.howToUse.length > 0 && (
									<Accordion>
										<AccordionSummary expandIcon={<ExpandMoreIcon />}>
											<Typography
												sx={{ textTransform: "uppercase" }}
												fontSize="14px">
												how to use/apply?
											</Typography>
										</AccordionSummary>
										<AccordionDetails>
											{product.howToUse.map((instruction, index) => {
												return (
													<Typography
														fontSize="14px"
														key={`${instruction}-${index}`}>
														{instruction}
													</Typography>
												);
											})}
										</AccordionDetails>
									</Accordion>
								)}
								{product.commonlyAskedQuestions.length > 0 && (
									<Accordion>
										<AccordionSummary expandIcon={<ExpandMoreIcon />}>
											<Typography
												sx={{ textTransform: "uppercase" }}
												fontSize="14px">
												Commonly asked questions
											</Typography>
										</AccordionSummary>
										<AccordionDetails>
											{product.commonlyAskedQuestions.map(({ Q, A, _id }) => {
												return (
													<Box key={`${_id}`} my="15px">
														<Typography fontSize="14px">{`${Q}`}</Typography>
														<Typography fontSize="14px">{`${A}`}</Typography>
													</Box>
												);
											})}
										</AccordionDetails>
									</Accordion>
								)}
							</Box>
							{/* Recommended Products Section */}
						</Grid>
					</Grid>
				</Container>
				<Headline color="#212121">
					<Typography fontSize="20px" sx={{ textTransform: "uppercase" }}>
						Recommended Products
					</Typography>
				</Headline>
				<PGtypeCarousel
					// border={"1px solid red"}
					margin={"auto"}
					width={"85%"}
					height={"500px"}
					display={"flex"}
					justifyContent={"space-evenly"}
					alignItems={"center"}
					gap={"20px"}
				/>
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
	// product.oldPrice = 100;
	return {
		props: {
			product,
		},
	};
};
