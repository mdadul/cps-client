import React from "react";
import { useEffect } from "react";
import Nav from "../Nav";
import Footer from "../Footer";
import InstructorAddForm from "../InstrutorAddFrom";
import Illustration from "../Illustration";
import add from "../../img/add.png";

import Banner from "../Banner";

export default function AddMember() {
  useEffect(() => {
    document.title = "Add Member-CPS";
  }, []);
  return (
    <>
      <Nav></Nav>
      <div className="container column">
        <InstructorAddForm />
        <Illustration src={add} />
      </div>
      <Banner />
      <Footer />
    </>
  );
}
