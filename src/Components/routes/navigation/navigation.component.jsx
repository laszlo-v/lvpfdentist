import { Outlet, Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../../assets/images/crown.svg";
import { useState, useContext } from "react";
import { NavContext } from "../../../contexts/nav.context";
import "./navigation.styles.scss";

const Navigation = () => {
  const { active, setActive } = useContext(NavContext);

  return (
    <>
      <div className="navigation">
        <div
          className={active ? "nav-links-container-show" : "hide"}
          onClick={() => setActive(false)}
        >
          <Link className="nav-link" to="/">
            Home
          </Link>
          <Link className="nav-link" to="/about">
            About Us
          </Link>
          <Link className="nav-link" to="/services">
            Services
          </Link>
          <Link className="nav-link" to="/faq">
            FAQ
          </Link>
          <Link className="nav-link" to="/contact">
            Contact
          </Link>
        </div>
        <Link
          className="logo-container"
          to="/"
          onClick={() => setActive(false)}
        >
          <Logo />
        </Link>
        <div className="hamburger-container" onClick={() => setActive(!active)}>
          <div className="line line-1"></div>
          <div className="line line-2"></div>
          <div className="line line-3"></div>
        </div>
      </div>
      <Outlet />
    </>
  );
};
export default Navigation;
