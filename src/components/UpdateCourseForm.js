import React, { useState, useEffect } from "react";
import Form from "./Form";
import classes from "../stylesheet/TextInput.module.css";
import { useParams } from "react-router-dom";
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
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [totalClass, setTotalClass] = useState("");
  const [totalSheet, setTotalSheet] = useState("");
  const [totalHours, setTotalHours] = useState("");
  const [totalStudent, setTotalStudent] = useState("");

  const { statusId } = useParams();
  console.log(statusId);

  const [course, setCourse] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/instructors/${statusId}`)
      .then((res) => res.json())
      .then((data) => {
        setCourse(data);
      });
  }, []);

  const handleUpdateStatus = (e) => {
    setCourse({
      image,
      title,
      price,
      totalClass,
      totalSheet,
      totalHours,
      totalStudent,
    });

    fetch(`http://localhost:5000/instructors/${statusId}`, {
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
              onChange={(e) => setImage(e.target.value)}
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
              onChange={(e) => setTitle(e.target.value)}
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
              onChange={(e) => setPrice(e.target.value)}
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
              onChange={(e) => setTotalClass(e.target.value)}
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
              onChange={(e) => setTotalSheet(e.target.value)}
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
              onChange={(e) => setTotalHours(e.target.value)}
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
              onChange={(e) => setTotalStudent(e.target.value)}
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
