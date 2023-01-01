import React from "react";
import classes from "../stylesheet/Course.module.css";
import { FcGraduationCap } from "react-icons/fc";
import { FcSurvey } from "react-icons/fc";
import { FcAlarmClock } from "react-icons/fc";
import { HiUserGroup } from "react-icons/hi";
import { AiTwotoneDelete } from "react-icons/ai";
import { Link } from "react-router-dom";

// props is an object with a property called ourCourse which is an object with the following properties: _id, image, title, price, totalClass, totalLecture, totalTime, totalStudent
export default function Course(props) { 
  const { // destructuring the properties of the ourCourse object
    _id,
    image,
    title, 
    price,
    totalClass,
    totalLecture,
    totalTime,
    totalStudent,
  } = props.ourCourse; // props.ourCourse is the object with the properties listed above 

  const { handleDeleteCourse } = props; // props is an object with a property called handleDeleteCourse which is a function

  return ( // return the following JSX
    <>
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
          <Link to={`/updatecourse/${_id}`}> 
            <button>Edit</button> 
          </Link>
          <button onClick={() => handleDeleteCourse(_id)}> 
            Delete <AiTwotoneDelete />
          </button>
        </div>
      </div>
    </>
  );
}
