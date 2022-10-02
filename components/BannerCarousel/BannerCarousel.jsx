import React from "react";
import Slider from "react-slick";

import { Box } from "@mui/material";
import { SampleNextArrow, SamplePrevArrow } from "./customarrow";

const BannerCarousel = ({ width, item }) => {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		nextArrow: <SampleNextArrow />,
		prevArrow: <SamplePrevArrow />,
	};
	return (
		<Box margin={"auto"} width={width}>
			<Slider {...settings}>
				{item.map((e, i) => {
					return <img key={i} src={e} alt="" />;
				})}
			</Slider>
		</Box>
	);
};

export default BannerCarousel;
