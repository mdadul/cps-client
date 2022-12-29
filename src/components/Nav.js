import React , {useState} from "react";
import "../stylesheet/Nav.css";
import Logo from "../img/logo-black.png";
import { Link } from "react-router-dom";
import { FcMenu } from "react-icons/fc";
export default function Nav() {

  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }

  return (  
    <nav>
      <div className="brand">
        <Link to="/">
          <div className="brandTitle">
            <img src={Logo} alt="cps-logo" />
            <h3>CHOLO PROGRAMMING SHIKHI</h3>
          </div>
        </Link>
        <div className="menuIcon" onClick={handleShowNavbar}>
              <h1><FcMenu></FcMenu></h1>
        </div>

      </div>
     
      <div>
        
        <ul className={
          showNavbar ? "menu active" : "menu"
        }>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/banner">Banner</Link>
          </li>
          <li>
            <Link to="/courses">Courses</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/addcourse">Add Course</Link>
          </li>
          <li>
            <Link to="/addmember">Add Member</Link>
          </li>

          {/* <li>
            <Link to="/signup">Sign Up</Link>
          </li>
          <li>
            <Link to="/signin">Sign In</Link>
          </li> */}
        </ul>
      </div>
    </nav>
  );
}
