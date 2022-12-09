import loginImage from "../../img/signin.gif";
import "../../stylesheet/App.css";
import Illustration from "../Illustration";
import LoginForm from "../LogInForm";
import Nav from "../Nav";
import { useEffect } from "react";
export default function Login() {
  useEffect(() => {
    document.title = "Sign In-CPS";
  }, []);
  return (
    <>
      <Nav />
      <div className="container">
        <h1 className="center">Log In</h1>
        <div className="column">
          <Illustration src={loginImage} alt="Login page" />
          <LoginForm />
        </div>
      </div>
    </>
  );
}
