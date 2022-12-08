import React from "react";
import classes from "../stylesheet/Footer.module.css";
import Logo from "../img/logo-white.png";
import { Link } from "react-router-dom";
import { AiOutlineCopyrightCircle } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { AiOutlineMail } from "react-icons/ai";
import { IoMdCall } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";

export default function Footer() {
  return (
    <footer>
      <div className={classes.footer}>
        <div className={classes.footerLogo}>
          <img src={Logo} alt="cps-logo" />
          <div>
            <h3>CHOLO PROGRAMMING SHIKHI</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
              assumenda commodi maxime nam voluptas voluptates nesciunt nulla ut
              dolore expedita eligendi dignissimos debitis, minima fugiat animi
              reiciendis corporis consectetur neque.
            </p>
          </div>
        </div>
        <div className={classes.footerMenu}>
          <h3>Useful Links</h3>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/courses'>Courses</Link>
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
        <div className={classes.footerContact}>
          <h3>Contact Us</h3>
          <ul>
            <p><GoLocation/> Mirsharai, Chattogram</p>
            <p><IoMdCall/> Phone: 01816-848940</p>
            <p><IoMdCall/> Phone: 01521-564157</p>
            <p><AiOutlineMail/> Email: info@cps.com</p>
            <span><FaFacebook/> </span>     
            <span><BsLinkedin/> </span>
            <span><BsGithub/></span>
          </ul>
        </div>
      </div>
      <p className={classes.copyright}>
        Copyright <AiOutlineCopyrightCircle/> <Link to='/'>Cholo Programming Shikhi.</Link> All rights reserved.
      </p>
    </footer>
  );
}
