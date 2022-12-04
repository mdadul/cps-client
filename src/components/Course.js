import React from "react";
import classes from "../stylesheet/Course.module.css";
import image from "../img/edu1.gif";
import { FcGraduationCap } from "react-icons/fc";
import { FcSurvey } from "react-icons/fc";
import { FcAlarmClock } from "react-icons/fc";
import { HiUserGroup } from "react-icons/hi";
import { BsInfoCircle } from "react-icons/bs";

export default function Course() {
  return (
    <div className={classes.course}>
      <img src={image} alt="course-banner" />
      <div className={classes.type}>
        <div className={classes.tag}>
          <p>Development</p>
          <p>Online</p>
        </div>
        <div className={classes.price}>
          <p>5000 BDT</p>
        </div>
      </div>
      <div className={classes.title}>
        <h3>Frontend Development- REACT</h3>
      </div>
      <div className={classes.details}>
        <p><FcGraduationCap/> 30 classes</p>
        <p><FcSurvey/> 50 Sheet</p>
        <p><FcAlarmClock/> 12 Hrs</p>
        <p><HiUserGroup/> 2300</p>
      </div>
      <div className={classes.coursebtn}>
        <button>Enroll Now</button>
        <button>More info <BsInfoCircle/></button>
      </div>
    </div>
  );
}
