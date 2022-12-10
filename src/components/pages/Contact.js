import React from "react";
import Nav from "../Nav";
import "../../stylesheet/App.css";
import classes from "../../stylesheet/ContactUs.module.css";
import { useEffect } from "react";
import { BiHome } from "react-icons/bi";
import { FiPhoneCall } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";

// customize icon
import { IconContext } from "react-icons";

import Form from "../Form";
import TextInput from "../TextInput";

export default function Contact() {
  useEffect(() => {
    document.title = "Contact Us -CPS";
  }, []);
  return (
    <>
      <Nav />

      <div className="container column">
        <div className={classes.contact}>
          <div className={classes.contactHead}>
            <p>Contact Us</p>
            <h2>Get In Touch With Us</h2>
            <p>Contact with us</p>
          </div>
          <div className={classes.contactInfo}>
            <div className={classes.location}>
              <div className={classes.iconBox}>
                <IconContext.Provider value={{ color: "white", size: "2em" }}>
                  <BiHome />
                </IconContext.Provider>
              </div>

              <div>
                <h2> Our Location</h2>
                <p>Mirsharai, Chattogram, Bangladesh</p>
              </div>
            </div>
            <div className={classes.location}>
              <div className={classes.iconBox}>
                <IconContext.Provider value={{ color: "white", size: "2em" }}>
                  <FiPhoneCall />
                </IconContext.Provider>
              </div>
              <div>
                <h2>Phone Number</h2>
                <p>+880 1816-848940</p>
                <p>+880 1816-848940</p>
              </div>
            </div>
            <div className={classes.location}>
              <div className={classes.iconBox}>
                <IconContext.Provider value={{ color: "white", size: "2em" }}>
                  <AiOutlineMail />
                </IconContext.Provider>
              </div>
              <div>
                <h2>Email Address</h2>
                <p>info@cps.com</p>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.contactForm}>
          <Form style={{ height: "390px" }}>
            <TextInput type="text" placeholder="Enter Name" required />

            <TextInput type="email" placeholder="Enter Email" required />

            <textarea rows="30" placeholder="Your Message"></textarea>
            <button type="submit"> Send Message</button>
          </Form>
        </div>
      </div>
    </>
  );
}
