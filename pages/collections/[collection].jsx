import { Box, Typography } from "@mui/material";
import config from "../../config.json";
import React from "react";
import axios from "axios";

const BASE_API_URL = config.BASE_API_URL;

const CollectionPage = ({ productsData }) => {
	return (
		<Box>
			<Typography>CollectionPage</Typography>
			{productsData?.map((p) => {
				return <Typography key={p._id}>{p.productName}</Typography>;
			})}
		</Box>
	);
};

export default CollectionPage;

export const getServerSideProps = async (context) => {
	let apiUrl = `${BASE_API_URL}/product/byCategory`;
	let productsData = await axios.get(apiUrl, {
		params: {
			category: context.params.collection,
		},
	});
	return {
		props: { productsData: productsData.data },
	};
};
