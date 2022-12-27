import React, { useEffect, useState } from "react";

import classes from "../stylesheet/Course.module.css";
import Course from "./Course";
export default function Courses() {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/courses")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  return (
    <>
      <h1 style={{ "text-align": "center", margin: "10px 0" }}>Our Courses</h1>
      <div className={classes.Courses}>
        {courses.map((course) => (
          <Course ourCourse={course}></Course>
        ))}
      </div>
    </>
  );
}