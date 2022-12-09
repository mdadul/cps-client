import React from "react";
import classes from "../stylesheet/Instructor.module.css";
import { SiFacebook } from "react-icons/si";
import { BsGithub, BsLinkedin } from "react-icons/bs";
// import image from "../img/edu1.gif";
// import { Link } from 'react-router-dom'

export default function Instructor(props) {
  const [image,name,designation,institution] = props.instructor;
  return (
    <div className={classes.card}>
      <img src={image} alt="member-avater" style={{ width: "100%" }} />
      <h1>{name}</h1>
      <p className={classes.title}>{designation}</p>
      <p>{institution}</p>
      <SiFacebook /> <BsGithub /> <BsLinkedin />
    </div>
  );
}
