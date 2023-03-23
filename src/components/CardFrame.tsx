import * as React from "react";
import "./CardFrame.css";
import frame1 from "../assets/frame1.svg";
import icons1 from "../assets/icons1.svg";
import graph1 from "../assets/graph1.svg";
const CardFrame = (props: {
  num1: string,
  btc: string,
  pnljsjdkpeeuk: string,
  graph: string,
  bitcoin: string,
  frame: string,
  num: string,
  icons: string,
  className?: string,
}) => {
  return (
    <div className={`card-frame-2170 ${props.className || ""}`}>
      <img className="icons-2" src={props.icons || icons} />
      <div className="flex-container-9">
        <div className="flex-container-10">
          <span className="bitcoin">{props.bitcoin || "Bitcoin"}</span>
          <span className="btc">{props.btc || "BTC"}</span>
        </div>
        <div className="flex-container-11">
          <span className="num-2041212">{props.num || "20,412.12"}</span>
          <span className="ejdeealuvublm">{props.pnljsjdkpeeuk || "$"}</span>
        </div>
      </div>
      <img className="frame-1" src={props.frame || frame1} />
      <span className="num-10-2">{props.num1 || "10%"}</span>
      <img className="graph-1" src={props.graph || graph1} />
    </div>
  );
};
export default CardFrame;
