import * as React from "react";
import "./Buttons1.css";
import icons24X4 from "../assets/icons24X4.svg";
const Buttons1 = (props: {
  register: string,
  icons24X: string,
  className?: string,
}) => {
  return (
    <button className={`buttons-1 ${props.className || ""}`}>
      <span className="register-1">{props.register || "Register"}</span>
      <img className="icons-24-x-4" src={props.icons24X || icons24X4} />
    </button>
  );
};
export default Buttons1;
