import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/iitg_logo.jpg";

function Navbar() {
  return (
    <div className="min-w-full px-5 py-3 flex items-center justify-between">
      <div>
        <img src={Logo} alt="" className="w-16" />
      </div>
      <div className="flex gap-5">
        <Link to="/">Home</Link>
        <Link to="/research">Research</Link>
        <a href="#">Teaching</a>
        <a href="#">Resume</a>
        <Link to="MID-lab">MID Lab</Link>
        <a href="#">Publicaions</a>
        <a href="#">Patents</a>
        <a href="#">Outreach</a>
        <a href="#">Computational Tools</a>
      </div>
    </div>
  );
}

export default Navbar;
