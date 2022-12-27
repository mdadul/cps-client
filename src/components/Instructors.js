import React from "react";
import Instructor from "./Instructor";
import classes from "../stylesheet/Instructor.module.css";
import { useEffect, useState } from "react";

export default function Instructors() {
  const [instructors, setInstructor] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/instructors")
      .then((res) => res.json())
      .then((data) => setInstructor(data));
  }, []);

  return (
    <>
      <h1 style={{ "text-align": "center", margin: "10px 0" }}>Members</h1>
      <div className={classes.instructor}>
        {instructors.map((instructor) => (
          <Instructor ourInstrutors={instructor} />
        ))}
      </div>
    </>
  );
}
