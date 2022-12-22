import React, { useState } from "react";
import Nav from "../Nav";
import Courses from "../Courses";
import Footer from "../Footer";
import Instructors from "../Instructors";
import { useEffect } from "react";
import Banner from "../Banner";
import Modal from "../Modal";
import CourseForm from "../CourseForm";
export default function Home() {
  const [show, setShow] = useState(false);

  const handleToggle = () => {
    setShow(!show);
  };

  useEffect(() => {
    document.title = "Cholo Programming Shikhi -CPS";

    // fetch api
    fetch("https://cps.cyclic.app/")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);
  return (
    <>
      <Nav />
      <Banner />
      {show && (
        <Modal>
          <CourseForm title="Edit Course" btnTitle="Edit Course" />
          <button onClick={handleToggle}>Close </button>
        </Modal>
      )}
      <Courses />
      <Instructors />
      <Footer />
    </>
  );
}
