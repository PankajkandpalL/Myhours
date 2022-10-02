import { Box } from "@mui/system";
import React from "react";
import List from "./List";
import LoginSignup from "./LoginSignup";
import Logo from "./Logo";
import Searchbox from "./Searchbox";
import useMediaQuery from '@mui/material/useMediaQuery';
import MenuIcon from '@mui/icons-material/Menu';


const Nav = ({logo}) => {
 
  const matches = useMediaQuery('(min-width:600px)');



  return (
    <Box
    // border= {'1px solid red'}
    justifyContent={{
      xs : "space-between",
      sm : "space-evenly"
    }}
      sx={{
        backgroundColor: "black",
        display: "flex",
        
        py: 2,
        paddingX :1,
        borderTop: "0.6px solid grey",
      }}
    >
    <Box display="flex" gap={'10px'}>
      {
        !matches && <MenuIcon />
      }
     <Logo logo={logo} />
     </Box>
   {
    matches &&
      <Searchbox />
   }

{
matches &&

<LoginSignup /> 

}

<List />
      {/* wishlist bag offers switch button */}
    </Box>
  );
};

export default Nav;
