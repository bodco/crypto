import * as React from "react";
import "./Card.css";
import icons3 from "../assets/icons3.svg";
import frame3 from "../assets/frame3.svg";
import graph3 from "../assets/graph3.svg";
const Card = (props: {
  xrp: string,
  num1: string,
  num: string,
  base: string,
  graph: string,
  frame: string,
  icons: string,
  ripple: string,
  kaxoqxuhktwgy: string,
  className?: string,
}) => {
  return (
    <div className={`card ${props.className || ""}`}>
      <img className="icons-1" src={icons3} />
      <div className="flex-container-5">
        <span>{props.ripple || "Ripple"}</span>
        <div className="flex-container-6">
          <span className="num-012">{props.num || "0.12"}</span>
          <span className="qtbmvhjquqzet">{props.kaxoqxuhktwgy || "$"}</span>
        </div>
      </div>
      <div className="flex-container-7">
        <span className="xrp">{props.xrp || "XRP"}</span>
        <div className="flex-container-8">
          <img className="frame-3" src={props.frame || frame3} />
          <span className="num-10-1">{props.num1 || "10%"}</span>
        </div>
      </div>
      <img className="graph-3" src={props.graph || graph3} />
    </div>
  );
};
export default Card;
