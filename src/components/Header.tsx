import * as React from "react";
import "./Header.css";
import frame6 from "../assets/frame6.svg";
import icons24X5 from "../assets/icons24X5.svg";
import icons24X6 from "../assets/icons24X6.svg";
import vector2 from "../assets/vector2.svg";
import Buttons1 from "./Buttons1";
import MenuItem from "./MenuItem";
import Buttons from "./Buttons";
const Header = (props: {
  frame: string,
  menuItem: {
    icons24X: string,
    markets: string,
  },
  menuItem1: {
    icons24X: string,
    markets: string,
  },
  menuItem2: {
    icons24X: string,
    markets: string,
  },
  buttons1: {
    login: string,
    icons24X: string,
  },
  icons24X: string,
  buttons: {
    register: string,
    icons24X: string,
  },
  vector: string,
  icons24X1: string,
  className?: string,
}) => {
  return (
    <div className={`header ${props.className || ""}`}>
      <img className="frame-6" src={props.frame || frame6} />
      <MenuItem className="menu-item-instance" {...props.menuItem2} />
      <MenuItem className="menu-item-instance-1" {...props.menuItem} />
      <MenuItem className="menu-item-instance-3" {...props.menuItem1} />
      <img className="vector-2" src={props.vector || vector2} />
      <Buttons className="buttons-instance-2" {...props.buttons1} />
      <Buttons1 className="buttons-instance-3" {...props.buttons} />
      <img className="icons-24-x-5" src={props.icons24X || icons24X5} />
      <img className="icons-24-x-6" src={props.icons24X1 || icons24X6} />
    </div>
  );
};
export default Header;
