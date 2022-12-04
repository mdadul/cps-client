import signupImage from "../../img/signin.png";
import "../../stylesheet/App.css";

import Illustration from "../Illustration";
import Nav from "../Nav";
import {useEffect} from 'react';
import SignupForm from "../SignUpForm";
export default function Signup() {
  useEffect(() => {
    document.title = 'Sign Up-CPS'
}, []);
  return (
    <>
      <Nav />
      <div className="container">
        <h1 className="center">Create an account</h1>

        <div className="column">
          <Illustration src={signupImage} alt="Sign Up page" />
          <SignupForm />
        </div>
      </div>
    </>
  );
}
