import React from "react";
import classes from "../stylesheet/Course.module.css";
import Course from "./Course";
export default function Courses() {
  return (
    <>
    <h1 style={{"text-align":"center" ,"margin":"10px 0"}}>Our Courses</h1>
      <div className={classes.Courses}>
        <Course />
        <Course />
        <Course />
        <Course />
        <Course />
        <Course />
        <Course />
        <Course />
        <Course />
      </div>
    </>
  );
}
