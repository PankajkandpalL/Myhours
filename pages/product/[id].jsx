import { Box, Typography } from "@mui/material";
import axios from "axios";
import React from "react";
import config from "../../config.json";

let { BASE_API_URL } = config;

const ProductPage = ({ product }) => {
	return (
		<Box>
			<Typography>ProductPage {product.productName}</Typography>
		</Box>
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
