import { Box } from "@mui/system";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Carouselcard1 from "../Carouselcards/Carouselcard1";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const PGtypeCarousel = (props) => {
  const [list, setList] = useState([]);
  const [range, setRange] = useState(0);
  const [show, setShow] = useState(false);

  const leftclick = () => {
    if (range <= 0) {
      return;
    } else {
      setRange(() => range - 4);
    }
  };

  const rightclick = () => {  
    if(range>= list.length -5) return 
    if (range >= list.length - 5) {
      setRange(list.length-1)
      return;
    } else {
      setRange(() => range + 4);
    }
  };

  useEffect(() => {
    axios.get("http://localhost:3000/api/product/all").then((r) => {
      setList(r.data.products);
      // console.log(r)
      setShow(true);
    });
    console.log(list);
  }, []);
useEffect(()=>{
  console.log(range),[ ]
})
  return (
    <Box {...props}>
      <Box onClick={() => leftclick()}>
        <KeyboardArrowLeftIcon
          sx={{
            backgroundColor: "white",
            borderRadius: "50%",
            opacity: "50%",
          }}
        />{" "}
      </Box>
      {show && (
        <>
          <Carouselcard1
            poster={list[range].poster}
            productName={list[range].productName}
            newPrice={list[range].newPrice}
            _id={list[range]._id}
          />
          <Carouselcard1
            poster={list[range + 1].poster}
            productName={list[range + 1].productName}
            newPrice={list[range + 1].newPrice}
            _id={list[range + 1]._id}
          />
          <Carouselcard1
            poster={list[range + 2].poster}
            productName={list[range + 2].productName}
            newPrice={list[range + 2].newPrice}
            _id={list[range + 2]._id}
          />
          <Carouselcard1
            poster={list[range + 3].poster}
            productName={list[range + 3].productName}
            newPrice={list[range + 3].newPrice}
            _id={list[range + 3]._id}
          />
        </>
      )}

      <Box onClick={() => rightclick()}>
        <ChevronRightIcon
          sx={{
            backgroundColor: "white",
            borderRadius: "50%",
            opacity: "50%",
          }}
        />
      </Box>
    </Box>
  );
};

export default PGtypeCarousel;
