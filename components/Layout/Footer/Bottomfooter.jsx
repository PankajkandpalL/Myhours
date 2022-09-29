import { Box, Divider, Typography } from "@mui/material";
import { lineHeight } from "@mui/system";
import Link from "next/link";
import React from "react";
import Hyperlink from "../../Hyperlink";
import IconFooter from "./IconFooter";

const Bottomfooter = () => {
  let five = [
    {
      link: "/store",
      name: "Stores",
    },
    {
      link: "/pages/terms-conditions",
      name: "Terms & Conditions",
    },
    {
      link: "/pages/returns",
      name: "Returns",
    },
    {
      link: "/pages/FAQ",
      name: "FAQs",
    },
    {
      link: "/pages/aboutus",
      name: "About Us",
    },
  ];
  return (
    <Box
      sx={{
        backgroundColor: "black",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <img
        width={"90px"}
        style={{
          margin: "auto",
          marginTop: "-50px",
          backgroundColor: "black",
          padding: "20px",
          borderRadius: "73px 73px 0px 0px",
          marginBottom: "20px",
        }}
        src="https://in.sugarcosmetics.com/Footer_sugar_icon.svg"
        alt=""
      />
      <br />
      <br />
      <IconFooter />
      <Divider color={"grey"} width={"80%"} />
      {/* <Link href={"/"} style={{color:"black"}}>1</Link> */}
      <Box
        sx={{
          display: "flex",
          // border :"1px solid red",
          width: "80%",
          justifyContent: "center",
          gap: "20px",
          color: "white",
          paddingY: 2,
        }}
      >
        {five.map((e, i) => {
          return <Hyperlink name={e.name} link={e.link} key={i} />;
        })}
      </Box>
      <Divider color={"grey"} width={"80%"} />

      <Typography>GET IN TOUCH</Typography>
      <Box
      paddingY={2}
        width={"80%"}
        // border={"1px solid red"}
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
        flexDirection={{
          xs : "column",
          sm : "row"
        }}
      >
        <Box p={1} color={"white"} textAlign={{xs : "center", sm  : "left"}}  w={{xs : '100%', md : "25%"}}>
          <Typography
          sx={{
            fontSize :"18px",
            fontWeight : 400,
            lineHeight : "21px",
            color : "white"
          }}          
          >Call us at</Typography>
          <Typography sx={{
            fontSize :"18px",
            fontWeight : 700,
            lineHeight : "27px",
            color : "#969696"
          }}  >1800-209-9933</Typography>
          <Typography  sx={{
            fontSize :"18px",
            fontWeight : 700,
            lineHeight : "27px",
            color : "#969696"
          }}   >Monday to Friday : 9 AM to 7PM</Typography>
          <Typography
          sx={{
            fontSize :"18px",
            fontWeight : 400,
            lineHeight : "21px",
            color : "white"
          }} 
          >Influencer Collab</Typography>
          <Typography 
           sx={{
            fontSize :"18px",
            fontWeight : 700,
            lineHeight : "27px",
            color : "#969696"
          }} 
          >Join us</Typography>
        </Box>
        <Box color={"white"}  textAlign={{xs : "center", sm  : "left"}} p={1}  w={{xs : '100%', md : "25%"}}>
          <Typography > Support</Typography>
          <Typography  sx={{
            fontSize :"18px",
            fontWeight : 700,
            lineHeight : "27px",
            color : "#969696"
          }} >hello@sugarcosmetics.com</Typography>
        </Box>
        <Box color={"white"}  textAlign={{xs : "center", sm  : "left"}} p={1} w={{xs : '100%', md : "25%"}} >
          <Typography> Careers</Typography>
          <Typography  sx={{
            fontSize :"18px",
            fontWeight : 700,
            lineHeight : "27px",
            color : "#969696"
          }} >We're hiring</Typography>
        </Box>
        <Box  textAlign={{xs : "center", sm  : "left"}} color={"white"} p={1}  w={{xs : '100%', md : "25%"}}>
          <Typography> Careers</Typography>
          <Typography  sx={{
            fontSize :"18px",
            fontWeight : 700,
            lineHeight : "27px",
            color : "#969696"
          }} >We're hiring</Typography>
        </Box>
      </Box>
      <Divider color={"grey"} width={"80%"} />
      
<Box 
paddingY={2}
flexDirection={{
  xs : "column",
  sm : "row"
}}
sx={{
  display :"flex",
  justifyContent : "center",
  gap : "20px"
}} width={'70%'}>
  <Box color={"white"}>
  <Typography 
  sx={{
    fontFamily : "Roboto, sans-serif",
    fontWeight : 500,
    color : "white",
    fontSize :"18px",
    lineHeight  : "22px"
  }}
  >
    GET THE NEW SUGAR APP TODAY!
  </Typography>
  <Typography
   sx={{
    fontFamily : "Roboto, sans-serif",
    fontWeight : 400,
    color : "#969696",
    fontSize :"14px",
    lineHeight  : "21px"
  }}
  >
    Tap into a better shopping experience.
  </Typography>
  </Box>
  <Box sx={{
    display : 'flex',
    width : '50%',
    gap : "20px"
  }}>
    <img style={{
      cursor : "pointer"
    }} width={"150px"} src="https://in.sugarcosmetics.com/playstore.png" alt="" />
    <img style={{
      cursor : "pointer"
    }} width={"150px"} src="https://in.sugarcosmetics.com/apple-store.png" alt="" />
  </Box>
</Box>




      <Divider color={"grey"}  width={"100%"} />
<Box>
<Typography 
 sx={{
  fontFamily : "Roboto, sans-serif",
  fontWeight : 500,
  color : "#999999",
  fontSize :"14px",
  lineHeight  : "21px"
}}
paddingY={3}
>
Copyright © 2022 SUGAR Cosmetics. All rights reserved.
</Typography>

</Box>

<Divider color={"grey"}  />
    </Box>
  );
};

export default Bottomfooter;
