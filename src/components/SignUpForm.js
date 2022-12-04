import React from "react";
import Form from "../components/Form";
import TextInput from "../components/TextInput";
import { FaUserCircle } from 'react-icons/fa';
import { MdMarkEmailRead } from 'react-icons/md';
import { MdOutlinePassword } from 'react-icons/md';

export default function SignupForm() {

  return (
    <Form style={{ height: "420px" }} >
      <TextInput
        type ='text'
        placeholder ='Enter Username'
        label ='Username'
        icon={<FaUserCircle/>}
        required/>

      <TextInput
        type ='email'
        placeholder ='Enter Email'
        icon={<MdMarkEmailRead/>}
        required/>
      <TextInput
        type ='password'
        placeholder ='Enter Password'
        icon={<MdOutlinePassword/>}
        required/>
      <TextInput
        type ='password'
        placeholder ='Confirm Password'
        icon={<MdOutlinePassword/>}
        required/>
      <button type='submit'>Sign Up</button>

    </Form>
  );
}
