import classes from "../stylesheet/Modal.module.css";
import CourseForm from "./CourseForm";
import { IoMdAdd } from "react-icons/io";
export default function Modal() {
  return (
    <div className={classes.modal}>
      <h1>X</h1>
      <CourseForm
        title="Edit Course"
        btnTitle="Edit Course"
        icon={<IoMdAdd />}
      />
    </div>
  );
}
