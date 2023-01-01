import React, { useState, useEffect } from "react";
import Form from "./Form";
import classes from "../stylesheet/TextInput.module.css";
import { useParams } from "react-router-dom";
import update from "../img/update.svg";
import Illustration from "./Illustration";
import Nav from "./Nav";
import Footer from "./Footer";

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

export default function UpdateCourseForm() {
  const { id } = useParams();
  console.log(id);

  const [course, setCourse] = useState({});

  useEffect(() => {
    // fetch(`http://localhost:5000/courses/${id}`)
    fetch(`https://cps.onrender.com/courses/${id}`)
      .then((res) => res.json())
      .then((data) => setCourse(data));
  }, [id]);

  const handleImageChange = (e) => {
    const updateImage = e.target.value;

    const updateCourse = {
      image: updateImage,
      title: course.title,
      price: course.price,
      totalClass: course.totalClass,
      totalLecture: course.totalLecture,
      totalTime: course.totalTime,
      totalStudent: course.totalStudent,
    };
    setCourse(updateCourse);
  };

  // handle title change
  const handleTitleChange = (e) => {
    const updateTitle = e.target.value;

    const updateCourse = {
      image: course.image,
      title: updateTitle,
      price: course.price,
      totalClass: course.totalClass,
      totalLecture: course.totalLecture,
      totalTime: course.totalTime,
      totalStudent: course.totalStudent,
    };
    setCourse(updateCourse);
  };

  // handle price change
  const handlePriceChange = (e) => {
    const updatePrice = e.target.value;

    const updateCourse = {
      image: course.image,
      title: course.title,
      price: updatePrice,
      totalClass: course.totalClass,
      totalLecture: course.totalLecture,
      totalTime: course.totalTime,
      totalStudent: course.totalStudent,
    };
    setCourse(updateCourse);
  };

  // handle total class change
  const handleClassChange = (e) => {
    const updateTotalClass = e.target.value;
    const updateCourse = {
      image: course.image,
      title: course.title,
      price: course.price,
      totalClass: updateTotalClass,
      totalLecture: course.totalLecture,
      totalTime: course.totalTime,
      totalStudent: course.totalStudent,
    };
    setCourse(updateCourse);
  };

  // handle total sheet change
  const handleSheetChange = (e) => {
    const updateSheet = e.target.value;
    const updateCourse = {
      image: course.image,
      title: course.title,
      price: course.price,
      totalClass: course.totalClass,
      totalLecture: updateSheet,
      totalTime: course.totalTime,
      totalStudent: course.totalStudent,
    };
    setCourse(updateCourse);
  };

  // handle total hour change
  const handleHoursChange = (e) => {
    const updateTotalHour = e.target.value;
    const updateCourse = {
      image: course.image,
      title: course.title,
      price: course.price,
      totalClass: course.totalClass,
      totalLecture: course.totalLecture,
      totalTime: updateTotalHour,
      totalStudent: course.totalStudent,
    };
    setCourse(updateCourse);
  };
  const handleStudentChange = (e) => {
    const updateTotalStudent = e.target.value;
    const updateCourse = {
      image: course.image,
      title: course.title,
      price: course.price,
      totalClass: course.totalClass,
      totalLecture: course.totalLecture,
      totalTime: course.totalTime,
      totalStudent: updateTotalStudent,
    };
    setCourse(updateCourse);
  };
  const handleUpdateStatus = (e) => {
    // fetch(`http://localhost:5000/courses/${id}`, {
    fetch(`https://cps.onrender.com/courses/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(course),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          alert("Successfully Updated");
          setCourse({});
        }
      });
    e.preventDefault();
  };

  return (
    <>
      <Nav />
      <div className="container column">
        <Illustration src={update} />

        <Form style={{ height: "520px" }} onSubmit={handleUpdateStatus}>
          <h2>Update Course</h2>
          <div className={classes.textInput}>
            <input
              type="text"
              value={course.image || " "}
              onChange={handleImageChange}
              required
            />
            <h2>
              <FcAddImage />
            </h2>
          </div>
          <div className={classes.textInput}>
            <input
              type="text"
              value={course.title || " "}
              required
              onChange={handleTitleChange}
            />
            <h2>
              <FcAddDatabase />
            </h2>
          </div>
          <div className={classes.textInput}>
            <input
              type="text"
              value={course.price || " "}
              required
              onChange={handlePriceChange}
            />
            <h2>
              <FcCurrencyExchange />
            </h2>
          </div>
          <div className={classes.textInput}>
            <input
              type="text"
              placeholder="Enter Total Classes"
              value={course.totalClass || " "}
              onChange={handleClassChange}
              required
            />
            <h2>
              <FcSurvey />
            </h2>
          </div>
          <div className={classes.textInput}>
            <input
              type="text"
              required
              value={course.totalLecture || " "}
              onChange={handleSheetChange}
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
              value={course.totalTime || " "}
              onChange={handleHoursChange}
            />
            <h2>
              <FcDisplay />
            </h2>
          </div>
          <div className={classes.textInput}>
            <input
              type="text"
              placeholder="Enter Total Enrolled Student"
              value={course.totalStudent || " "}
              onChange={handleStudentChange}
              required
            />
            <h2>
              <FcPodiumWithSpeaker />
            </h2>
          </div>

          <button type="submit">Update Course</button>
        </Form>
      </div>

      <Footer />
    </>
  );
}
