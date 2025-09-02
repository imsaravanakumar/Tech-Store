
import { useState } from "react"

import Navbar from "./Navbar";
import TopBar from "./Topbar";

const Header = ({ token, setToken }) => {
  return (
    <header className="bg-[#ffffff] h-auto border-[#e9e9e9]">
      <TopBar/>
      <Navbar token={token} setToken={setToken} />
    </header>
  );
};

export default Header;