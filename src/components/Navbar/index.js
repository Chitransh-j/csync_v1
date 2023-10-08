import React from "react";
import ScramblingEffect from "../../utils/ScramblingEffect";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  // NavBtn,
  // NavBtnLink,
} from "./NavbarElements";

import Logo from "../../assets/images/Logo_1.svg";

const Navbar = () => {
  return (
    <Nav>
      <NavLink to="/">
        <img
          src={Logo}
          alt="Logo"
          style={{
            width: "50px",
            margin: "10px 0px", // Add margin to the top and bottom
          }}
        />
      </NavLink>
      <Bars />
      <NavMenu>
        <NavLink to="/" activeStyle>
          <ScramblingEffect text="Home" />
        </NavLink>
        <NavLink to="/clubs" activeStyle>
          Clubs
        </NavLink>
        <NavLink to="/contact-us" activeStyle>
          Contact Us
        </NavLink>
        <NavLink to="/about" activeStyle>
          About
        </NavLink>
        {/* <NavBtn>
          <NavBtnLink to="/signin">Sign In</NavBtnLink>
        </NavBtn> */}
      </NavMenu>
    </Nav>
  );
};

export default Navbar;
