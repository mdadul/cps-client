import React from "react";
import Nav from "../Nav";
import "../../stylesheet/App.css";
import {useEffect} from 'react';
export default function Contact() {
  useEffect(() => {
    document.title = 'Contact Us -CPS'
}, []);
  return (
    <>
      <Nav />
      <div className="container">
        <h1 className="center">Contact Us</h1>

        <div className="columns">
          
        </div>
      </div>
    </>
  );
}
