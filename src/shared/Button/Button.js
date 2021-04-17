import "./Button.scss";

const Button = (props) => {
  const classes = ["Button", props.type].join(" ");
  return <button className={classes}>{props.children}</button>;
};

export default Button;
