import React, { useEffect, useState } from "react";
// import getEthers from "./getEthers";
// import { Contract, utils } from "ethers";
// import Token from "./contracts/Token.sol/Token.json";
import "./App.css";
import Box from "@mui/material/Box";
import NavBar from "./components/navbar";
import SideBar from "./components/sidebar";
import Admin from "./components/modals/Admin";
import Reward from "./components/modals/Reward";

function App() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <NavBar />
      <SideBar />
      {/* <Admin /> */}
      {/* <Reward/> */}
    </Box>
  );
}

export default App;
