import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import Nav from "./Nav";
import Topbar from "./Topbar";

const Navbar = ({ logo }) => {
  // topbar hide or show
  const [showbar, setShowbar] = useState(true);
  const [listbar, setListbar] = useState('none')

const myhover = (e)=>{

}

  let item = [
    {
      name: "Makeup",
      appen: ["1","2","4","5"],
    },
    {
      name: "Brushes",
      appen: ["1"],
    },
    {
      name: "Skincare",
      appen: ["1"],
    },
    {
      name: "Gifting",
      appen: ["1"],
    },
    {
      name: "Blog",
      appen: ["1"],
    },
    {
      name: "Offers",
      appen: ["1"],
    },
    {
      name: "Stores",
      appen: ["1"],
    },
  ];
  return (
    <Box position={"fixed"} zIndex={1000} sx={{ width: "100%", color: "white" }}>
      {showbar && <Topbar showbar={showbar} setShowbar={setShowbar} />}
      <Box>
        <Nav logo={logo} />
        <Box
          sx={{
            backgroundColor: "#141414",
            // border : "1px solid red",
            paddingY: 2,
            color: "white",
            display: "flex",
            gap: "30px",
            paddingX: "30px"
          }}
        >
          {item.map((e, i) => {
            return (
              <Box >
                <Typography
                sx={{
                  fontSize : "14px",
                  lineHeight : "21px",
                  color :"white", 
                  fontWeight : 400
                }}
                >{e.name}</Typography>
                {/* <Box
                  position={"absolute"}
                  border={"1px solid red"}
                  width={"80px"}
                  marginTop={"20px"}
                >
                  { e.appen.map((e,i)=>{
                    return  <Typography display={listbar} sx={{
                      textAlign : "center",
                      paddingY :1,
                      paddingX : 2
                    }}> {e}</Typography>
                  })} 
                </Box> */}
              </Box>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;


// {item.map((e, i) => {
//   return (
//     <Box >
//       <Typography>{e.name}</Typography>
//       <Box
//         position={"absolute"}
//         border={"1px solid red"}
//         width={"80px"}
//         marginTop={"20px"}
//       >
//        { e.appen.map((e,i)=>{
//           return  <Typography display={listbar} sx={{
//             textAlign : "center",
//             paddingY :1,
//             paddingX : 2
//           }}> {e}</Typography>
//         })}
//       </Box>
//     </Box>
//   );
// })}