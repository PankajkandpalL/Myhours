import { Box, Button, Divider, TableHead, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Headline from "../../Headline/Headline";

const Topfooter = () => {
  let msg = [
    "Successfully Subscribed to news letter",
    "Please enter valid email",
  ];
const [appearvalue, setAppearvalue] = useState('red')
  const [appear, setappear] = useState('');
  const [querry, setQuerry] = useState("");
  const handleclick = () => {

 let buerry = querry.trim().split("").includes("@")

    if (querry !== "" && buerry) {
      setappear(msg[0]);
      setAppearvalue("black")
      console.log(appear)
      
    }else {
        setappear(msg[1])
        setAppearvalue("red")
        console.log(setappear)
    }
    setTimeout(()=>{
        setappear(null)
    },3000)
  };

  return (
    <Box
      sx={{
        // border:"1px solid red",
        padding: 5,
        display: "flex",
        justifyContent: "space-evenly",
        flexDirection: "column",
        alignitem: "center",
        backgroundImage: `url('https://in.sugarcosmetics.com/desc-images/Rectangle_background.svg')`,
        height : "290px"
      }}
    >
      <Typography
      width={'100%'}
        sx={{
            // border: "1px solid red",    
            
          margin: "auto",
          fontFamily: "Roboto, sans-serif",
          fontSize: "24px",
          lineHeight: "18px",
          color: "#212121",
          marginY: 1,
        }}
      >
 <Headline color={'#212121'}>
        LET’S STAY IN TOUCH
        </Headline>
      </Typography>
      
      <Typography
        sx={{
          //   border: "1px solid red",
          width: "fit-content",
          margin: "auto",
          fontFamily: "Roboto, sans-serif",
          fontWeight: 400,
          fontSize: "16px",
          lintHeight: "19px",
          color: "#212121",
          marginY: 1,
        }}
      >
        Get the latest beauty tips straight to your inbox. Can’t wait to
        connect!
      </Typography>





      <Box
      padding={{
        xs : '0px 0px ',
        sm :  "10px 19px",
        md :  "10px 19px",
        lg :  "10px 19px"
      }}
      width={{
        xs : "100%",
        sm : "80%",
        md : "60%"
      }}
      margin={"auto"}
        sx={{
          display: "flex",
          justifyContent: "center",
          
        }}
        
        // border={"1px solid red"}
      >
        <input
        type="email"
          placeholder="Enter email"
          style={{
            width : "100%",
            outline: "none",
            // border: "1px solid red"
          }}
          onChange={(e) => setQuerry(e.target.value)}
        />

        <Button
          variant="contained"
          sx={{
            backgroundColor: "black",
            outline: "none",
            border: "none",
            marginleft: "-10px",
          }}
          fontSize
          onClick={()=>handleclick()}
        >
          SUBSCRIBE
        </Button>
      </Box>
      <Typography
      sx={{
        //   border: "1px solid red",
        width: "fit-content",
        margin: "auto",
        fontFamily: "Roboto, sans-serif",
        fontWeight: 400,
        fontSize: "16px",
        lintHeight: "19px",       
      }}
      color={appearvalue}
      
      >{appear &&  appear }</Typography>
    </Box>
  );
};

export default Topfooter;

// const Line =()=>{
//     return <Typography sx={{color : red}}/>
// }
