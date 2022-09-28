import {
	Autocomplete,
	Box,
	Button,
	Checkbox,
	Chip,
	Container,
	FormControl,
	FormControlLabel,
	FormGroup,
	InputLabel,
	MenuItem,
	OutlinedInput,
	Select,
	Stack,
	TextField,
	Typography,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";

const initData = {
	productName: "",
	category: "",
	oldPrice: 0,
	newPrice: 0,
	hasColor: false,
	colors: [],
	imagesByColors: [],
	generalImages: [],
	poster: "",
	description: [],
	ingredients: [],
	howToUse: [],
	commonlyAskedQuestions: [],
	reviews: [],
	availableOffers: [],
	isTrending: false,
	sellCount: 0,
};

const BASE_API_URL = `http://localhost:3000/api`;

const AddProduct = ({ categoriesData: categories, offersData: offers }) => {
	const [productData, setProductData] = useState(initData);
	// const [hasColor, setHasColor] = useState(false);
	const [color, setColor] = useState("");
	const handleChange = ({ target: { name, value, checked, type } }) => {
		console.log({ name, value, type, checked });
		if (
			name === "ingredients" ||
			name === "description" ||
			name === "howToUse"
		) {
			setProductData((prev) => ({
				...prev,
				[name]: value.split("\n").filter((txt) => txt !== ""),
			}));
			return;
		} else if (name === "commonlyAskedQuestions") {
			let qNas = value.split("\n\n").map((qNa) => {
				// console.log(qNa.split("\n"));
				const [Q, A] = qNa.split("\n");
				return { Q, A };
			});
			console.log(qNas);
			setProductData((prev) => ({
				...prev,
				[name]: qNas,
			}));
			return;
		} else if (type === "checkbox") {
			setProductData((prev) => ({
				...prev,
				[name]: checked,
			}));
			return;
		}
		setProductData((prev) => ({
			...prev,
			[name]: value,
		}));
	};
	// console.log(categories.map((c) => c.category));
	// const [categories, setCategories] = useState([]);

	const pushImagesWithColors = (images, color) => {
		setProductData((prev) => ({
			...prev,
			imagesByColors: [...prev.imagesByColors, { color, images }],
			colors: [...prev.colors, color],
		}));
	};

	const pushGeneralImages = (images) => {
		setProductData((prev) => ({
			...prev,
			generalImages: images,
		}));
	};

	const postProductData = async () => {
		let res = await axios.post(`${BASE_API_URL}/product/post`, productData);
		console.log(res);
		if (res.status === 201) {
			alert("product added successfully!");
			setProductData(initData);
		} else {
			alert("some data is missing, please fill all the essential details!");
		}
	};

	useEffect(() => {
		setColor("");
	}, [productData.imagesByColors]);

	useEffect(() => {
		console.log(productData);
	}, [productData]);

	return (
		<Container maxWidth="sm">
			<Typography variant="h3" textAlign="center">
				AddProduct
			</Typography>
			<Stack my="1em" gap="1em">
				<TextField
					label="Product Name"
					name="productName"
					value={productData.productName}
					variant="outlined"
					onChange={handleChange}
				/>
				<Autocomplete
					options={categories.map((c) => c.category.toUpperCase())}
					freeSolo
					label="Category"
					name="category"
					onChange={(e, newValue) => {
						handleChange({ target: { name: "category", value: newValue } });
					}}
					// variant="outlined"
					renderInput={(params) => (
						<TextField
							style={{ textTransform: "capitalize" }}
							{...params}
							label="Category"
							name="category"
							value={productData.category}
							// onChange={handleChange}
						/>
					)}
				/>
				<TextField
					label="Old Price (in ₹)"
					name="oldPrice"
					type="number"
					value={productData.oldPrice}
					variant="outlined"
					onChange={handleChange}
				/>
				<TextField
					label="New Price (in ₹)"
					name="newPrice"
					type="number"
					value={productData.newPrice}
					variant="outlined"
					onChange={handleChange}
				/>

				{/* General images */}

				<TextField
					label="Provide the general image links in comma separated format."
					onKeyDown={(e) => {
						if (e.key === "Enter") {
							if (e.target.value.length > 0) {
								let images = e.target.value.split(",");
								pushGeneralImages(images);
							}
						}
					}}
				/>
				<FormGroup>
					<FormControlLabel
						control={
							<Checkbox
								checked={productData.hasColor}
								name="hasColor"
								onChange={handleChange}
							/>
						}
						label="Is there any color variant of this product?"
					/>
				</FormGroup>

				{productData.hasColor && (
					<>
						<TextField
							label="Type color name"
							name="color"
							type="text"
							value={color}
							variant="outlined"
							onChange={(e) => {
								setColor(e.target.value);
							}}
						/>
						{color.length > 0 && (
							<TextField
								label="Provide the image links in comma separated format."
								onKeyDown={(e) => {
									if (e.key === "Enter") {
										if (e.target.value.length > 0) {
											let images = e.target.value.split(",");
											pushImagesWithColors(images, color);
										}
									}
								}}
							/>
						)}
					</>
				)}

				{/* Poster */}
				<TextField
					label="Poster URL"
					name="poster"
					type="url"
					value={productData.poster}
					onChange={handleChange}
				/>
				{/* Description */}
				<TextField
					label="Description"
					name="description"
					multiline
					maxRows={4}
					type="text"
					value={productData.description.join("\n") || ""}
					onChange={handleChange}
				/>
				{/* Ingredients */}
				<TextField
					label="Ingredients"
					name="ingredients"
					multiline
					maxRows={4}
					type="text"
					value={productData.ingredients.join("\n") || ""}
					onChange={handleChange}
				/>
				{/* How to apply */}
				<TextField
					label="How to apply"
					name="howToUse"
					multiline
					maxRows={4}
					type="text"
					value={productData.howToUse.join("\n") || ""}
					onChange={handleChange}
				/>
				{/* Commonly asked questions */}
				<TextField
					label="Commonly asked questions"
					name="commonlyAskedQuestions"
					multiline
					maxRows={4}
					type="text"
					value={productData.commonlyAskedQuestions
						.map((qna) => {
							if (qna.Q && qna.A) return `${qna.Q}\n${qna.A}`;
							return "";
						})
						.join("\n\n")}
					onChange={handleChange}
				/>

				{/* Offers */}
				<FormControl>
					<InputLabel id="offerLabel">Select offers (optional)</InputLabel>
					<Select
						labelId="offerLabel"
						id="multipleOfferChip"
						multiple
						name="availableOffers"
						input={
							<OutlinedInput
								id="select-multiple-chip"
								label="Select Offers (optional)"
							/>
						}
						renderValue={(selected) => (
							<Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
								{selected.map((value) => (
									<Chip key={value} label={value} />
								))}
							</Box>
						)}
						onChange={handleChange}
						value={productData.availableOffers}>
						{offers.map((offer) => (
							<MenuItem key={offer._id} value={offer.offerCode}>
								{offer.offerCode}
							</MenuItem>
						))}
					</Select>
				</FormControl>
				<Box mx="auto">
					<Button onClick={postProductData} variant="contained">
						Submit Product Data
					</Button>
				</Box>
			</Stack>
		</Container>
	);
};

export default AddProduct;

export const getServerSideProps = async () => {
	let categoriesData = await axios.get(`http://localhost:3000/api/categories`);
	categoriesData = categoriesData.data;
	let offersData = await axios.get(`http://localhost:3000/api/offers`);
	offersData = offersData.data;
	return {
		props: {
			categoriesData,
			offersData,
		},
	};
};
