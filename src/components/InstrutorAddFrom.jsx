import React from "react";
import { useRef } from "react";
import Form from "./Form";
import classes from "../stylesheet/TextInput.module.css";
// icon from react icon
import { FcAddImage } from "react-icons/fc";
import { BiRename } from "react-icons/bi";
import { SiDesignernews } from "react-icons/si";
import { MdCastForEducation } from "react-icons/md";
import { BsFacebook, BsGithub, BsLinkedin } from "react-icons/bs";

export default function InstructorAddForm() {
  const imageRef = useRef();
  const nameRef = useRef();
  const designationRef = useRef();
  const institutionsRef = useRef();
  const facebookRef = useRef();
  const githubRef = useRef();
  const linkedinRef = useRef();

  const handleMemberForm = (e) => {
    e.preventDefault();

    const image = imageRef.current.value;
    const name = nameRef.current.value;
    const designation = designationRef.current.value;
    const institutions = institutionsRef.current.value;
    const facebook = facebookRef.current.value;
    const github = githubRef.current.value;
    const linkedin = linkedinRef.current.value;

    const newInstructor = {
      image,
      name,
      designation,
      institutions,
      facebook,
      github,
      linkedin,
    };

    // post couse via API
    // fetch("https://cps.cyclic.app/instructors", {
    fetch("http://localhost:5000/instructors", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newInstructor),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("Successfully added the member!");

          e.target.reset();
        }
      });
  };
  return (
    <>
      <Form style={{ height: "520px" }} onSubmit={handleMemberForm}>
        <div className={classes.textInput}>
          <input
            type="text"
            placeholder="Enter Image Link"
            required
            ref={imageRef}
          />
          <h2>
            <FcAddImage />
          </h2>
        </div>
        <div className={classes.textInput}>
          <input type="text" placeholder="Enter Name " required ref={nameRef} />
          <h2>
            <BiRename />
          </h2>
        </div>
        <div className={classes.textInput}>
          <input
            type="text"
            placeholder="Enter Designation"
            required
            ref={designationRef}
          />
          <h2>
            <SiDesignernews />
          </h2>
        </div>
        <div className={classes.textInput}>
          <input
            type="text"
            placeholder="Enter Institutions"
            required
            ref={institutionsRef}
          />
          <h2>
            {" "}
            <MdCastForEducation />{" "}
          </h2>
        </div>
        <div className={classes.textInput}>
          <input
            type="text"
            placeholder="Enter Facebook Profile 🔗"
            required
            ref={facebookRef}
          />
          <h2>
            <BsFacebook />
          </h2>
        </div>
        <div className={classes.textInput}>
          <input
            type="text"
            placeholder="Enter Github 🔗"
            required
            ref={githubRef}
          />
          <h2>
            <BsGithub />
          </h2>
        </div>
        <div className={classes.textInput}>
          <input
            type="text"
            placeholder="Enter LinkedIn 🔗"
            required
            ref={linkedinRef}
          />
          <h2>
            <BsLinkedin />
          </h2>
        </div>

        <button type="submit">ADD Member</button>
      </Form>
    </>
  );
}
