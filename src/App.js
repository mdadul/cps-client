import Home from "./components/pages/Home";
import Signup from "./components/pages/SignUp";
import Login from "./components/pages/SignIn";
import ContactUs from "./components/pages/Contact";
import Courses from "./components/pages/Courses";
import "./stylesheet/App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/signin" element={<Login />} />
        <Route exact path="/contact" element={<ContactUs />} />
        <Route exact path="/courses" element={<Courses />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
