import React from "react";
import { useRef } from "react";
import Form from "./Form";
import classes from "../stylesheet/TextInput.module.css";

//  icon import from react icons
import {
  FcAddImage,
  FcAddDatabase,
  FcCurrencyExchange,
  FcSurvey,
  FcInspection,
  FcDisplay,
  FcPodiumWithSpeaker,
} from "react-icons/fc";

export default function CourseForm() {
  const imageRef = useRef();
  const titleRef = useRef();
  const priceRef = useRef();
  const totalClassRef = useRef();
  const totalLectureRef = useRef();
  const totalTimeRef = useRef();
  const totalStudentRef = useRef();

  const handleCourseForm = (e) => {
    e.preventDefault();
    const image = imageRef.current.value;
    const title = titleRef.current.value;
    const price = priceRef.current.value;
    const totalClass = totalClassRef.current.value;
    const totalLecture = totalLectureRef.current.value;
    const totalTime = totalTimeRef.current.value;
    const totalStudent = totalStudentRef.current.value;

    const newCourse = {
      image,
      title,
      price,
      totalClass,
      totalLecture,
      totalTime,
      totalStudent,
    };

    // post course via API
    // fetch("http://localhost:5000/courses", {
      
    fetch("https://cps.cyclic.app/courses", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCourse),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("Successfully added the Course!");
          e.target.reset();
        }
      });
  };
  return (
    <>
      <Form style={{ height: "520px" }} onSubmit={handleCourseForm}>
        <h2>Add New Course</h2>
        <div className={classes.textInput}>
          <input
            type="text"
            placeholder="Enter Image Link"
            required
            ref={imageRef}
          />
          <h2>
            <FcAddImage />
          </h2>
        </div>
        <div className={classes.textInput}>
          <input
            type="text"
            placeholder="Enter Course Title"
            required
            ref={titleRef}
          />
          <h2>
            <FcAddDatabase />
          </h2>
        </div>
        <div className={classes.textInput}>
          <input
            type="text"
            placeholder="Enter Course Price"
            required
            ref={priceRef}
          />
          <h2>
            <FcCurrencyExchange />
          </h2>
        </div>
        <div className={classes.textInput}>
          <input
            type="text"
            placeholder="Enter Total Classes"
            required
            ref={totalClassRef}
          />
          <h2>
            <FcSurvey />
          </h2>
        </div>
        <div className={classes.textInput}>
          <input
            type="text"
            placeholder="Enter Total Lecture Sheet"
            required
            ref={totalLectureRef}
          />
          <h2>
            <FcInspection />
          </h2>
        </div>
        <div className={classes.textInput}>
          <input
            type="text"
            placeholder="Enter Total Time to finish"
            required
            ref={totalTimeRef}
          />
          <h2>
            <FcDisplay />
          </h2>
        </div>
        <div className={classes.textInput}>
          <input
            type="text"
            placeholder="Enter Total Enrolled Student"
            required
            ref={totalStudentRef}
          />
          <h2>
            <FcPodiumWithSpeaker />
          </h2>
        </div>

        <button type="submit">Add Course</button>
      </Form>
    </>
  );
}
