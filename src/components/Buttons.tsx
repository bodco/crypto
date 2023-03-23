import * as React from "react";
import "./Buttons.css";
import icons24X3 from "../assets/icons24X3.svg";
const Buttons = (props: {
  login: string,
  icons24X: string,
  className?: string,
}) => {
  return (
    <button className={`buttons ${props.className || ""}`}>
      <span className="login-1">{props.login || "Login"}</span>
      <img className="icons-24-x-3" src={props.icons24X || icons24X3} />
    </button>
  );
};
export default Buttons;
