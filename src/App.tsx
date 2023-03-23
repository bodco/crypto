import * as React from "react";
import "./App.css";
import base from "./assets/base.svg";
import graph5 from "./assets/graph5.svg";
import icons24X3 from "./assets/icons24X3.svg";
import graph1 from "./assets/graph1.svg";
import frame6 from "./assets/frame6.svg";
import ellipse from "./assets/ellipse.svg";
import frame4 from "./assets/frame4.svg";
import graph4 from "./assets/graph4.svg";
import vector1 from "./assets/vector1.svg";
import ellipse1 from "./assets/ellipse1.svg";
import icons4 from "./assets/icons4.svg";
import iconsaxLinearusercirlceadd from "./assets/iconsaxLinearusercirlceadd.svg";
import icons3 from "./assets/icons3.svg";
import chart from "./assets/chart.svg";
import graph from "./assets/graph.svg";
import icons24X from "./assets/icons24X.svg";
import priceIndication from "./assets/priceIndication.svg";
import vector2 from "./assets/vector2.svg";
import frame from "./assets/frame.svg";
import icons24X4 from "./assets/icons24X4.svg";
import icons24X5 from "./assets/icons24X5.svg";
import icons from "./assets/icons.svg";
import graph3 from "./assets/graph3.svg";
import graph2 from "./assets/graph2.svg";
import icons1 from "./assets/icons1.svg";
import vector from "./assets/vector.svg";
import icons24X6 from "./assets/icons24X6.svg";
import macBookPro from "./assets/macBookPro.svg";
import icons2 from "./assets/icons2.svg";
import CardFrame from "./components/CardFrame";
import Card from "./components/Card";
import Header from "./components/Header";
const App = () => {
  const propsData = {
    frame2163: {
      btc: "BTC",
      icons: icons,
      pnljsjdkpeeuk: "$",
      frame: frame,
      num1: "10%",
      bitcoin: "Bitcoin",
      num: "20,412.12",
      graph: graph1,
    },
    card: {
      base: base,
      kaxoqxuhktwgy: "$",
      frame: frame,
      graph: graph3,
      xrp: "XRP",
      num: "0.12",
      num1: "10%",
      icons: icons2,
      ripple: "Ripple",
    },
    card1: {
      bitcoin: "Ethereum",
      btc: "ETH",
      frame: frame,
      num1: "10%",
      icons: icons1,
      graph: graph2,
      pnljsjdkpeeuk: "$",
      num: "1,512.21",
    },
    frame2170: {
      graph: graph5,
      num: "0,999",
      frame: frame4,
      num1: "0,01%",
      bitcoin: "Tether",
      icons: icons4,
      pnljsjdkpeeuk: "$",
      btc: "USDT",
    },
    frame2171: {
      bitcoin: "Binance USD",
      graph: graph4,
      btc: "BUSD",
      num: "1.00",
      pnljsjdkpeeuk: "$",
      num1: "0,001%",
      frame: frame4,
      icons: icons3,
    },
    header: {
      vector: vector2,
      frame: frame6,
      icons24X1: icons24X6,
      menuItem1: {
        markets: "Info",
        icons24X: icons24X,
      },
      menuItem2: {
        markets: "Markets",
        icons24X: icons24X,
      },
      menuItem: {
        icons24X: icons24X,
        markets: "Trade",
      },
      buttons1: {
        login: "Login",
        icons24X: icons24X3,
      },
      buttons: {
        register: "Register",
        icons24X: icons24X4,
      },
      icons24X: icons24X5,
    },
  };
  return (
    <div className="main-page-v-1-dark">
      <div className="bg">
        <div className="cat-absolute-container">
          <span className="buy-bitcoin">Buy Bitcoin</span>
          <span className="c-rypto">&amp; CRypto</span>
          <span className="lorem-ipsum-dolor-sit-amet-conse">
            Lorem ipsum dolor sit amet consectetur. Odio orci tincidunt lacus ut
            orci metus eu odio. Mi ac gravida leo eu eget tristique.{" "}
          </span>
          <div className="flex-container">
            <CardFrame
              className="frame-2163-instance-1"
              {...propsData.frame2163}
            />
            <button className="frame-2078">
              <span className="register">Register</span>
              <img
                className="iconsax-linearusercirlceadd"
                src={iconsaxLinearusercirlceadd}
              />
            </button>
            <button className="frame-2079">
              <span className="login">Login</span>
              <img className="iconsax-linearlogin" src={icons24X3} />
            </button>
            <Card className="card-instance-2" {...propsData.card} />
          </div>
          <div className="flex-container-1">
            <CardFrame className="card-instance-1" {...propsData.card1} />
            <CardFrame
              className="frame-2170-instance"
              {...propsData.frame2170}
            />
          </div>
          <CardFrame className="frame-2171-instance" {...propsData.frame2171} />
        </div>
        <div className="cat-absolute-container-1">
          <img className="icons" src={icons} />
          <div className="frame-2164">
            <div className="flex-container-2">
              <div className="flex-container-3">
                <span>BNB</span>
                <span className="bnb">BNB</span>
              </div>
              <div className="flex-container-4">
                <span className="num-58765">587,65</span>
                <span className="brmaieuvnvqoj">$</span>
              </div>
            </div>
            <img className="frame" src={frame} />
            <span className="num-10">10%</span>
            <img className="graph" src={graph} />
          </div>
        </div>
        <img className="price-indication-1" src={priceIndication} />
        <img className="price-indication" src={priceIndication} />
        <img className="chart" src={chart} />
        <img className="vector-1" src={vector1} />
        <img className="vector" src={vector} />
        <div className="noise">
          <Header className="header-instance-1" {...propsData.header} />
          <img className="mac-book-pro-16-2022" src={macBookPro} />
        </div>
        <img className="ellipse" src={ellipse} />
        <img className="ellipse-1" src={ellipse1} />
        <img className="chart-1" src={chart} />
      </div>
    </div>
  );
};
export default App;
