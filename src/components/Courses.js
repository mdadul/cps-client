import React, { useEffect, useState } from "react";

import classes from "../stylesheet/Course.module.css";
import Course from "./Course";
export default function Courses() {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    // fetch("https://cps.cyclic.app/courses")
    fetch("http://localhost:5000/courses")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, [courses]);


  const handleDeleteCourse = (id) => {
    const proceed = window.confirm("Are you sure to delete this course?");
    if (proceed) {
      fetch(`http://localhost:5000/courses/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("Course deleted successfully");
            const remainingCourses = Course.filter(
              (course) => course._id !== id
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
