import React, { useRef } from "react";
import Nav from "../Nav";
import "../../stylesheet/App.css";
import classes from "../../stylesheet/ContactUs.module.css";
import { useEffect } from "react";
import { BiHome } from "react-icons/bi";
import { FiPhoneCall } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";

// for email js
import emailjs from "@emailjs/browser";

// customize icon
import { IconContext } from "react-icons";

// import Form from "../Form";
// import TextInput from "../TextInput";

export default function Contact() {
  const form = useRef();

  useEffect(() => {
    document.title = "Contact Us -CPS";
  }, []);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
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
                <p>+880 1521-564157</p>
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
            <div>
              <h2> Our Developers</h2>
              <div
                class="badge-base LI-profile-badge"
                data-locale="en_US"
                data-size="medium"
                data-theme="light"
                data-type="VERTICAL"
                data-vanity="emdadulislam"
                data-version="v1"
              ></div>

              <a
                class="badge-base__link LI-simple-link"
                href="https://bd.linkedin.com/in/emdadulislam?trk=profile-badge"
              >
                EMDADUL ISLAM
              </a>
            </div>
          </div>
        </div>
        <div className={classes.contactForm}>
          <form style={{ height: "390px" }} ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              placeholder="Enter Name"
              required
              name="user_name"
            />

            <input
              type="email"
              placeholder="Enter Email"
              required
              name="user_email"
            />
            <textarea rows="10" placeholder="Your Message"></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </>
  );
}
