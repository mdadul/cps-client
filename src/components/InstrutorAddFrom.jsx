import React from "react";
import { useRef } from "react";
import Form from "./Form";

// import TextInput from "./TextInput";

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
    fetch("https://cps.cyclic.app/instructors", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newInstructor),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("Successfully added the Course!");
          e.target.reset();
        }
      });
  };
  return (
    <>
      <Form style={{ height: "520px" }} onSubmit={handleMemberForm}>
        <input
          type="text"
          placeholder="Enter Image Link"
          required
          ref={imageRef}
        />
        <input
          type="text"
          placeholder="Enter Name "
          required
          ref={nameRef}
        />
        <input
          type="text"
          placeholder="Enter Designation"
          required
          ref={designationRef}
        />
        <input
          type="text"
          placeholder="Enter Institutions"
          required
          ref={institutionsRef}
        />
        <input
          type="text"
          placeholder="Enter Facebook Profile 🔗"
          required
          ref={facebookRef}
        />
        <input
          type="text"
          placeholder="Enter Github 🔗"
          required
          ref={githubRef}
        />
        <input
          type="text"
          placeholder="Enter LinkedIn 🔗"
          required
          ref={linkedinRef}
        />
        <button type="submit">ADD Member</button>
      </Form>
    </>
  );
}
