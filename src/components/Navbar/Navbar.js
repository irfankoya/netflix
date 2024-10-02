import React, { useEffect } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import searchicon from "../../assets/search_icon.svg";
import bellicon from "../../assets/bell_icon.svg";
import profileimg from "../../assets/profile_img.png";
import careticon from "../../assets/caret_icon.svg";
import { useRef } from "react";
import { logout } from "../../firebase";

const Navbar = () => {
  const navRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      if (navRef.current) {
        if (window.scrollY >= 80) {
          navRef.current.classList.add("nav-dark");
        } else {
          navRef.current.classList.remove("nav-dark");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div ref={navRef} className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="logo" className="logo-img" />
        <ul>
          <li>Home</li>
          <li>Tv shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My list</li>
          <li>Browse by language</li>
        </ul>
      </div>
      <div className="navbar-right">
        <img src={searchicon} alt="search" className="icon" />
        <p>Children</p>
        <img src={bellicon} alt="bellIcon" className="icon" />
        <div className="navbar-profile">
          <img src={profileimg} alt="" className="profile" />
          <img src={careticon} alt="" className="profile" />
          <div className="dropdown">
            <p
              onClick={() => {
                logout();
              }}
            >
              Sign Out of Netflix
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
