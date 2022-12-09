import classes from "../stylesheet/TextInput.module.css";

export default function TextInput({ icon, ...rest }) {
  return (
    <div className={classes.textInput}>
      <input {...rest} />
      <span> {icon} </span>
    </div>
  );
}
