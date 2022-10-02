import { Box } from "@mui/system";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Carouselcard1 from "../Carouselcards/Carouselcard1";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import useMediaQuery from '@mui/material/useMediaQuery';


const PGtypeCarousel = (props) => {
  const [list, setList] = useState([]);
  const [range, setRange] = useState(0);
  const [show, setShow] = useState(false);
const [length, setLength] = useState(1)


const matches450 = useMediaQuery('(min-width:450px)');
const matches700 = useMediaQuery('(min-width:700px)');



  const leftclick = () => {
    if (range <= 0) {
      return;
    } else {
      setRange(() => range - length);
    }
  };

  const rightclick = () => {   
    if(range>= list.length -5) return 
    if (range >= list.length - 5) {
      setRange(list.length-1)
      return;
    } else {
      setRange(() => range + length);
    }
  };

  useEffect(() => {

    
    if(matches450){
      setLength(2)
    }
    if(matches700){
      setLength(3)
    }
    axios.get("http://localhost:3000/api/product/all").then((r) => {
      setList(r.data.products);
      setShow(true);
    });
    // console.log(list);
  }, [matches700,matches450]);

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
{
  length===1 &&  <Carouselcard1
  poster={list[range].poster}
  productName={list[range].productName}
  newPrice={list[range].newPrice}
  _id={list[range]._id}
/>
}

{
  length===2  && <> <Carouselcard1
  poster={list[range].poster}
  productName={list[range].productName}
  newPrice={list[range].newPrice}
  _id={list[range]._id}
/>
<Carouselcard1
poster={list[range+1].poster}
productName={list[range+1].productName}
newPrice={list[range+1].newPrice}
_id={list[range+1]._id}
/>
</>
}

{
  length===3 && <>
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
}
       
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
