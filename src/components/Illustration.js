import classes from "../stylesheet/Illustration.module.css";
export default function Illustration({ src, alt, ...rest }) { // props is an object with properties called src and alt
  return (
    <div className={classes.illustration}>
      <img src={src} alt={alt} {...rest} />
    </div>
  );
}
