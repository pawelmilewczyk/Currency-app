import "./Button.scss";

const Button = (props) => {
  const classes = ["Button", props.type].join(" ");
  return (
    <button
      className={classes}
      onClick={props.clicked}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default Button;
