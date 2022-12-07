import React from "react";
import classes from "../stylesheet/Nav.module.css";
import Logo from "../img/logo-black.png";
import { Link } from "react-router-dom";
export default function Nav() {
  return (
    <nav>
      <div className={classes.brand}>
        <img src={Logo} alt="cps-logo" />
        <h3>CHOLO PROGRAMMING SHIKHI</h3>
        
      </div>
      <div className={classes.menu}>
        <ul>
           <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/courses'>Services</Link>
          </li>
          <li>
            <Link to='/contact'>Contact Us</Link>
          </li>
          
          <li>
            <Link to='/signup'>Sign Up</Link>
          </li>
          <li>
            <Link to='/signin'>Sign In</Link>
          </li> 
        </ul>
      </div>
    </nav>
  );
}
