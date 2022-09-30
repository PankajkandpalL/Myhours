import { Image } from "@mui/icons-material";
import { Box } from "@mui/material";
import React from "react";

const CarouselImage = ({src}) => {
 
  return (
    <Box margin={"auto"} width={'90%'} borderRadius={"20px"} overflow={"hidden"}>
      <img
        style={{
          width: "100%",
          // border : "1px solid red"
        }}
        src={src}
      />
    </Box>
  );
};

export default CarouselImage;
