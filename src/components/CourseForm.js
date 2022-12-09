import React from "react";
import { useRef } from "react";
import Form from "./Form";

// import TextInput from './TextInput'

export default function CourseForm() {
  const imageRef = useRef();
  const titleRef = useRef();
  const priceRef = useRef();
  const totalClassRef = useRef();
  const totalLectureRef = useRef();
  const totalTimeRef = useRef();
  const totalStudentRef = useRef();

  const handleCourseForm = (e) => {
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
    fetch("https://cps.cyclic.app/courses", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCourse),
    })
      .then((res) => res.json)
      .then((data) => {
        console.log(data.insertedId);
        if (data.insertedId) {
          alert("Successfully added the Course!");
          e.target.reset();
        }
      });

    e.preventDefault();
  };
  return (
    <>
      <Form style={{ height: "520px" }} onSubmit={handleCourseForm}>
        <input
          type="text"
          placeholder="Enter Image Link"
          required
          ref={imageRef}
        />
        <input
          type="text"
          placeholder="Enter Course Title"
          required
          ref={titleRef}
        />
        <input
          type="text"
          placeholder="Enter Course Price"
          required
          ref={priceRef}
        />
        <input
          type="text"
          placeholder="Enter Total Classes"
          required
          ref={totalClassRef}
        />
        <input
          type="text"
          placeholder="Enter Total Lecture Sheet"
          required
          ref={totalLectureRef}
        />
        <input
          type="text"
          placeholder="Enter Total Time to finish"
          required
          ref={totalTimeRef}
        />
        <input
          type="text"
          placeholder="Enter Total Enrolled Student"
          required
          ref={totalStudentRef}
        />
        <button type="submit">ADD Course</button>
      </Form>
    </>
  );
}
