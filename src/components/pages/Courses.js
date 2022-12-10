import React from "react";
import CourseForm from "../CourseForm";
import Nav from "../Nav";
import Illustration from "../Illustration";
import education from "../../img/update.svg";
import add from '../../img/add.png';
import InstructorAddForm from "../InstrutorAddFrom";
import { useEffect } from "react";
import { IoMdAdd } from "react-icons/io";

export default function Courses() {
  useEffect(() => {
    document.title = "Add Course-CPS";
  }, []);
  return (
    <>
      <Nav />
      <div className="container column">
        <Illustration src={education} />
        <CourseForm title="Add New Course" btnTitle ="Add Course" icon={<IoMdAdd/>}/>
      </div>
      <div className="container column">
        <InstructorAddForm />
        <Illustration src={add} />
      </div>
    </>
  );
}
