import { Box, Divider, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";
import IconFooter from "./IconFooter";

const Bottomfooter = () => {
    let five = [
        {
            link : "/store",
            name : "Stores"
        },{
            link : "/pages/terms-conditions",
            name : "Terms & Conditions"
        }
        ,{
            link : "/pages/returns",
            name : "Returns"
        
        },{
            link : "/pages/FAQ",
            name : "FAQs"
        }
        ,{
            link : "/pages/aboutus",
            name : "About Us"
        }
    ]
  return (
    <Box
      sx={{
        backgroundColor: "black",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
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
      <Divider color={"red"} width={"80%"}  />
      {
        five.map((e,i)=>{
            return  <Typography color={"white"} key={i}>
                <Link color={"white"} href={e.link} >
                {e.name}
                </Link>
                </Typography> 
        })
      }
      <Divider color={"red"} width={"80%"}  />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </Box>
  );
};

export default Bottomfooter;
