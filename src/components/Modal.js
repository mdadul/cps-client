import classes from "../stylesheet/Modal.module.css";

export default function Modal({children}) {
  return (
    <div className={classes.modal}>
      {children}
     
    </div>
  );
}
