import { Box, Input } from "@mui/material";
import { margin } from "@mui/system";

import React from "react";

const Searchbox = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignitem: "center",
        overflow: "hidden",
        borderRadius: "10px",
        height: "42px",
      }}
    >
      <input
        placeholder='Try "Liquid Lipstick"'
        style={{
          padding: "10px 20px ",
          width: "350px",
          overtflow: "hidden",
          border: "1px solid white",
          outline: "none",
          backgroundColor: "black",
          color: "white",
        }}
      />
      {/* suggesion box at bottom */}
      {/* icons here  */}
      <Search />
    </Box>
  );
};

export default Searchbox;

const Search = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignitem: "center",
        paddingX: "15px",
        backgroundColor: "white",
        color: "black",
        justifyContent: "space-around",
      }}
    >
      {/* <FiSearch /> */}
      <p
        style={{
          height: "fit-content",
          margin: "auto",
          fontSize: "20px",
          lineHeight: "23px",
          color: "#212121",
          fontWeight: 400,
          letterSpacing: "0.6px",
        }}
      >
        Search
      </p>
    </Box>
  );
};
