import React, { useEffect, useState } from "react";

import classes from "../stylesheet/Course.module.css";
import Course from "./Course";

export default function Courses() {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    //     fetch("http://localhost:5000/courses")
    // fetch("https://cps.cyclic.app/courses")
    fetch("https://cps.onrender.com/courses")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, [courses]);

  const handleDeleteCourse = (id) => {
    const proceed = window.confirm("Are you sure, want to delete?");
    if (proceed) {
      // fetch(`http://localhost:5000/courses/${id}`,{
      // fetch(`https://cps.cyclic.app/courses/${id}`,{
      fetch(`https://cps.onrender.com/courses/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCont > 0) {
            alert("Deleted Successfully");
            const remainingCourses = courses.filter(
              (courses) => courses._id !== id
            );
            setCourses(remainingCourses);
          }
        });
    }
  };

  return (
    <>
      <h1 style={{ "text-align": "center", margin: "10px 0" }}>Our Courses</h1>
      <div className={classes.Courses}>
        {courses.map((course) => (
          <Course
            ourCourse={course}
            handleDeleteCourse={handleDeleteCourse}
          ></Course>
        ))}
      </div>
    </>
  );
}
