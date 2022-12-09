import React from "react";
import classes from "../stylesheet/Course.module.css";
import { FcGraduationCap } from "react-icons/fc";
import { FcSurvey } from "react-icons/fc";
import { FcAlarmClock } from "react-icons/fc";
import { HiUserGroup } from "react-icons/hi";
import { BsInfoCircle } from "react-icons/bs";
// import image from '../img/edu1.gif'
export default function Course(props) {
  console.log(props.ourCourse);
  const {
    image,
    title,
    price,
    totalClass,
    totalLecture,
    totalTime,
    totalStudent,
  } = props.ourCourse;

  return (
    <div className={classes.course}>
      <img src={image} alt="course-banner" />
      <div className={classes.type}>
        <div className={classes.tag}>
          <p>Development</p>
          <p>Online</p>
        </div>
        <div className={classes.price}>
          <p>{price}</p>
        </div>
      </div>
      <div className={classes.title}>
        <h3>{title}</h3>
      </div>
      <div className={classes.details}>
        <p>
          <FcGraduationCap /> {totalClass} classes
        </p>
        <p>
          <FcSurvey /> {totalLecture} Sheets
        </p>
        <p>
          <FcAlarmClock /> {totalTime} Hrs
        </p>
        <p>
          <HiUserGroup /> {totalStudent} Students
        </p>
      </div>
      <div className={classes.coursebtn}>
        <button>Edit</button>
        <button>
          Delete <BsInfoCircle />
        </button>
      </div>
    </div>
  );
}
