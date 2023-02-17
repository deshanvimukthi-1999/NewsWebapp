import React from "react";
import { Link } from "react-router-dom";


const Navbar = () => {


  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
            <h2>24 Articles</h2>
          </Link>
        </div>
        <div className="links">
          <Link className="link" to="/?cat=art">
            <h6>ART</h6>
          </Link>
          <Link className="link" to="/?cat=science">
            <h6>SCIENCE</h6>
          </Link>
          <Link className="link" to="/?cat=technology">
            <h6>TECHNOLOGY</h6>
          </Link>
          <span className="write">
            <Link className="link" to="/write">
              Write
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;