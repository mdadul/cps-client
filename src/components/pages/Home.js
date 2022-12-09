import React from "react";
import Nav from "../Nav";
import Courses from "../Courses";
import Footer from "../Footer";
import Instructors from "../Instructors";
import { useEffect } from "react";
import Banner from "../Banner";
export default function Home() {
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
      <Courses />
      <Instructors />
      <Footer />
    </>
  );
}
