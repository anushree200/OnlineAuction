import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [hovered, setHovered] = useState(null);

  const getLinkStyle = (id) => ({
    color: "white",
    fontSize: "18px",
    fontWeight: "500",
    textDecoration: "none",
    padding: "10px 20px",
    borderRadius: "25px",
    transition: "all 0.3s ease",
    border: hovered === id ? "0.5px solid rgba(255,255,255,0.6)" : "0.5px solid transparent",
  });

  return (
    <div
      style={{
        position: "absolute",
        top: "50px",
        left: "80%",
        transform: "translateX(-50%)",
        background: "rgba(255, 255, 255, 0.1)",
        backdropFilter: "blur(12px)",
        borderRadius: "50px",
        padding: "12px 30px",
        display: "flex",
        gap: "30px",
        boxShadow: 
        "0 0 40px rgba(0,0,0,0.95), 0 0 55px rgba(255,0,150,0.9), 0 0 75px rgba(128,0,255,0.85), 0 0 95px rgba(0,0,0,1)",
        zIndex: 2,
      }}
    >
      <Link
        to="/home"
        style={getLinkStyle("login")}
        onMouseEnter={() => setHovered("login")}
        onMouseLeave={() => setHovered(null)}
      >
        Login
      </Link>
      <Link
        to="/signup"
        style={getLinkStyle("signup")}
        onMouseEnter={() => setHovered("signup")}
        onMouseLeave={() => setHovered(null)}
      >
        Signup
      </Link>
      <a
        href="/auctions"
        style={getLinkStyle("auctions")}
        onMouseEnter={() => setHovered("auctions")}
        onMouseLeave={() => setHovered(null)}
      >
        Auctions
      </a>
    </div>
  );
};

export default Navbar;
