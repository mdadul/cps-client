import React, { useEffect, useState } from "react";

import classes from "../stylesheet/Course.module.css";
import Course from "./Course";

export default function Courses() {
  const [courses, setCourses] = useState([]); // courses is an array of objects and setCourses is a function to update courses
  useEffect(() => { // useEffect is a hook
    fetch("http://localhost:5000/courses") // fetch returns a promise
      .then((res) => res.json()) // res.json() returns a promise
      .then((data) => setCourses(data)); // data is an array
  }, [courses]); // courses is a dependency

  const handleDeleteCourse = (id)=>{ // id is a parameter of handleDeleteCourse function and it is passed from Course.js
    const proceed = window.confirm('Are you sure, want to delete?') // window.confirm returns a boolean value
    if(proceed){ // if proceed is true
      fetch(`http://localhost:5000/courses/${id}`,{ // fetch returns a promise and it is used to delete a document from a collection in MongoDB database
        method: 'DELETE', // delete method is used to delete a document from a collection in MongoDB database
      })
      .then((res)=> res.json()) // res.json() returns a promise
      .then((data)=>{ // data is an object and it contains a property named deletedCont which is a number and it is the number of deleted documents
        if(data.deletedCont >0 ){ // if data.deletedCont is greater than 0 then the document is deleted from the collection
          alert('Deleted Successfully')
          const remainingCourses = courses.filter( // filter is a method of array and it returns a new array and it takes a callback function as a parameter and the callback function takes an element of the array as a parameter and it returns a boolean value and if the boolean value is true then the element is added to the new array and if the boolean value is false then the element is not added to the new array
            (courses)=> courses._id !== id, // if the id of the element is not equal to the id parameter of handleDeleteCourse function then the element is added to the new array
            ) 
          setCourses(remainingCourses) // setCourses is a function to update courses and remainingCourses is an array of objects
        }
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
        {courses.map((course) => ( // map is a method of array and it takes a callback function as a parameter and the callback function takes an element of the array as a parameter and it returns a JSX element
          <Course ourCourse={course} // ourCourse is a property of Course component and it is an object and it is passed from Courses.js and it is used in Course.js
          handleDeleteCourse={handleDeleteCourse}></Course> // handleDeleteCourse is a property of Course component and it is a function and it is passed from Courses.js and it is used in Course.js 
        ))}
      </div> 
    </>
  );
}
