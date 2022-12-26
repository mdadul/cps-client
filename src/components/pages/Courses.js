import React from "react";
import Coursess from "../Courses";
import Nav from "../Nav";
import Footer from "../Footer";
import { useEffect } from "react";
// import Modal from "../Modal";
export default function Courses() {
  useEffect(() => {
    document.title = "Add Course-CPS";
  }, []);
  return (
    <>
      <Nav />
      <Coursess />
      <Footer />
    </>
  );
}
