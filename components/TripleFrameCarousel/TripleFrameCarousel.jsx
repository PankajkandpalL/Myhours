import { useMediaQuery } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Slider from "react-slick";
import CarouselImage from "../Carouselcards/CarouselImage";
import { SampleNextArrow, SamplePrevArrow } from "./customarrow";

const TripleFrameCarousel = ({list}) => {

  const matches500 = useMediaQuery("(max-width:500px)");
  const matches800 = useMediaQuery("(max-width:800px)");

  let value;
  if (matches500) {
    value = 1;
  } else if (matches800) {
    value = 2;
  }else {
    value = 3;
  }
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: value,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <Box   gap={"20px"}  width={"90%"} margin={"auto"}>
      <Slider {...settings}>
        {
          list.map((e,i)=>{
            return <CarouselImage key={i}  src={e}/>
          })
        }
      </Slider>
    </Box>
  );
};

export default TripleFrameCarousel;
