import React from 'react'
import { useEffect } from 'react'
import Nav from '../Nav';
import { IoMdAdd } from "react-icons/io";
import CourseForm from '../CourseForm';
import Illustration from '../Illustration';
import education from "../../img/update.svg";
import Footer from '../Footer';
export default function AddCourse() {
    useEffect(() => {
        document.title = "Add Course-CPS";
      }, []);
  return (
    <>
     <Nav></Nav>
     <div className="container column">
        <Illustration src={education} />
        <CourseForm
          title="Add New Course"
          btnTitle="Add Course"
          icon={<IoMdAdd />}
        />
      </div>
      <Footer></Footer>
    </>
   
  )
}
