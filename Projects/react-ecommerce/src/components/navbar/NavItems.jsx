import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo/logo.png";
import { FaInfoCircle } from "react-icons/fa";

const NavItems = () => {
  const [menuToggle, setMenuToggle] = useState(false);
  const [socialToggle, setSocialToggle] = useState(false);
  const [headerFixed, setHeaderFixed] = useState(false);

  // addevent listener
  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
      setHeaderFixed(true);
    } else {
      setHeaderFixed(false);
    }
  });

  return (
    <header
      className={`header-section style-4 ${
        headerFixed ? "header-fixed fadeInUp" : ""
      }`}
    >
      {/* header top start */}
      <div className={`header-top d-md-none ${socialToggle ? "open" : ""}`}>
        <div className="container">
          <div className="header-top-area">
            <Link to="/signup" className="lab-btn me-3">
              <span>create accrount</span>
            </Link>
            <Link to="/login">log in</Link>
          </div>
        </div>
      </div>

      {/* Header bottom */}
      <div className="header-bottom">
        <div className="container">
          <div className="header-wrapper">
            {/* logo */}
            <div className="logo-search-acte">
              <div className="logo">
                <Link to={"/"}>
                  <img src={logo} alt="logo" />
                </Link>
              </div>
            </div>

            {/* menu area */}
            <div className="menu-area">
              <div className="menu">
                <ul className={`lab-ul ${menuToggle ? "active" : ""}`}>
                  <li>
                    <Link to="/">home</Link>
                  </li>
                  <li>
                    <Link to="/shop">shop</Link>
                  </li>
                  <li>
                    <Link to="/blog">blog</Link>
                  </li>
                  <li>
                    <Link to="/about">about</Link>
                  </li>
                  <li>
                    <Link to="/contact">contact</Link>
                  </li>
                </ul>
              </div>

              {/* sign in & log in */}
              <Link to="/sign-up" className="lab-btn me-3 d-none d-md-block">
                create accrount
              </Link>
              <Link to="/login" className="d-none d-md-block">
                log in
              </Link>

              {/* menu toggler */}
              <div
                onClick={() => setMenuToggle(!menuToggle)}
                className={`header-bar d-lg-none ${menuToggle ? "active" : ""}`}
              >
                <span></span>
                <span></span>
                <span></span>
              </div>

              {/* social toggler */}
              <div
                className="ellepsis-bar text-danger d-md-none"
                onClick={() => setSocialToggle(!socialToggle)}
              >
                <FaInfoCircle />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavItems;
