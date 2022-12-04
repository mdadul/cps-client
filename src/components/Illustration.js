import classes from '../stylesheet/Illustration.module.css'
export default function Illustration({ src, alt, ...rest }) {
  return (
    <div className={classes.illustration}>
      <img src={src} alt={alt} {...rest} />
    </div>
  );
}

