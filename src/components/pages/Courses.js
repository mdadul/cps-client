import React from "react";
import CourseForm from "../CourseForm";
import Nav from "../Nav";
import Illustration from "../Illustration";
import education from '../../img/update.svg';
import InstructorAddForm from "../InstrutorAddFrom";
import {useEffect} from 'react';
export default function Courses() {
    useEffect(() => {
        document.title = 'Add Course-CPS'
    }, []);
  return (
    <>
      <Nav />
      <div className="container column">
      <Illustration src={education}/>
      <CourseForm />      
      </div>
      <div><InstructorAddForm/></div>
    </>
  );
}
