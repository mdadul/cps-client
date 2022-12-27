import React, { useState, useEffect } from "react";
import Form from "./Form";
import classes from "../stylesheet/TextInput.module.css";
import {  useParams } from "react-router-dom";
import update from "../img/update.svg";
import Illustration from "./Illustration";
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
  const { statusId } = useParams();
  console.log(statusId);

  const [course, setCourse] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/courses/${statusId}`)
      .then((res) => res.json())
      .then((data) => {
        setCourse(data);
      });
  }, [statusId]);


  const handleImageChange = (e) => {
    const updateImage = e.target.value;

    const updateCourse = {
      image: updateImage,
      title: course.title,
      price: course.price,
      totalClass: course.totalClass,
      totalSheet : course.totalSheet,
      totalHours: course.totalHours,
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
      totalSheet : course.totalSheet,
      totalHours: course.totalHours,
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
      totalSheet : course.totalSheet,
      totalHours: course.totalHours,
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
      totalSheet : course.totalSheet,
      totalHours: course.totalHours,
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
      totalSheet: updateSheet,
      totalHours: course.totalHours,
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
      totalSheet : course.totalSheet,
      totalHours: updateTotalHour,
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
      totalSheet : course.totalSheet,
      totalHours: course.totalHours,
      totalStudent: updateTotalStudent,
    };
    setCourse(updateCourse);
  };
  const handleUpdateStatus = (e) => {
    fetch(`http://localhost:5000/courses/${statusId}`, {
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
      <div className="container column">
        <Illustration src={update} />

        <Form style={{ height: "520px" }} onSubmit={handleUpdateStatus}>
          <h2>Update Course</h2>
          <h1>Id {statusId}</h1>
          <div className={classes.textInput}>
            <input
              type="text"
              placeholder="Enter Image Link"
              onChange={handleImageChange}
              value={course.image || " "}
              required
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
              onChange={handleTitleChange}
              value={course.title || " "}
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
              onChange={handlePriceChange}
              value={course.price || " "}
            />
            <h2>
              <FcCurrencyExchange />
            </h2>
          </div>
          <div className={classes.textInput}>
            <input
              type="text"
              placeholder="Enter Total Classes"
              onChange={handleClassChange}
              value={course.totalClass || " "}
              required
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
              onChange={handleSheetChange}
              value={course.totalSheet || " "}
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
              onChange={handleHoursChange}
              value={course.totalHours || " "}
            />
            <h2>
              <FcDisplay />
            </h2>
          </div>
          <div className={classes.textInput}>
            <input
              type="text"
              placeholder="Enter Total Enrolled Student"
              onChange={handleStudentChange}
              value={course.totalStudent || " "}
              required
            />
            <h2>
              <FcPodiumWithSpeaker />
            </h2>
          </div>

          <button type="submit">Update Course</button>
        </Form>
      </div>
    </>
  );
}
