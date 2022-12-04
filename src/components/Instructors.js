import React from "react";
import Instructor from "./Instructor";
import classes from "../stylesheet/Instructor.module.css";
// import { useEffect, useState } from "react";

export default function Instructors() {
  // const [instructors, setInstructor] = useState([]);
  // useEffect(() => {
  //   fetch("https://randomuser.me/api/")
  //     .then((res) => res.json())
  //     .then((data) => setInstructor(data.results));
  //     // .then((data)=>console.log(data));
  // }, []);

  return (
    <div className={classes.instructor}>
     <Instructor/>
    <Instructor/>
    <Instructor/>
    <Instructor/>
    <Instructor/>
    <Instructor/>
    </div>
  );
}
