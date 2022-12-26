import Home from "./components/pages/Home";
import Signup from "./components/pages/SignUp";
import Login from "./components/pages/SignIn";
import ContactUs from "./components/pages/Contact";
import Courses from "./components/pages/Courses";
import UpdateCourseForm from "./components/UpdateCourseForm";

import "./stylesheet/App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Banner from "./components/Banner";
import AddCourse from "./components/pages/AddCourse";
import AddMember from "./components/pages/AddMember";
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/banner" element={<Banner />} />
        <Route exact path="/addcourse" element={<AddCourse />} />
        <Route exact path="/addmember" element={<AddMember />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/signin" element={<Login />} />
        <Route exact path="/contact" element={<ContactUs />} />
        <Route exact path="/courses" element={<Courses />} />
        <Route exact path="/updatecourse/:id" element={<UpdateCourseForm />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
