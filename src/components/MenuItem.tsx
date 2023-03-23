import * as React from "react";
import "./MenuItem.css";
import icons24X2 from "../assets/icons24X2.svg";
const MenuItem = (props: {
  icons24X: string,
  markets: string,
  className?: string,
}) => {
  return (
    <div className={`menu-item ${props.className || ""}`}>
      <span>{props.markets || "Info"}</span>
      <img className="icons-24-x-2" src={props.icons24X || icons24X2} />
    </div>
  );
};
export default MenuItem;
