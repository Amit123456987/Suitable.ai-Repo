import { useState } from "react";
import "./Circle.css";

function Circle(props) {
  let [SymbolAttheCenter, setSymbolAttheCenter] = useState("");

  let index = props.index;
  let CircleStyle = props.CircleStyle;

  let LeftHrLineStyle = {};
  let RightHrLineStyle = {};
  let centerCircleStyle = {};

  if (index == 0) {
    LeftHrLineStyle = { visibility: "hidden" };
    centerCircleStyle = {};
    RightHrLineStyle = {};
  } else if (index == 1) {
    LeftHrLineStyle = { visibility: "hidden" };
    centerCircleStyle = {};
    RightHrLineStyle = {};
  } else if (index == 2) {
    LeftHrLineStyle = { visibility: "hidden" };
    centerCircleStyle = {};
    RightHrLineStyle = {};
  } else if (index == 3) {
    LeftHrLineStyle = { visibility: "hidden" };
    centerCircleStyle = {};
    RightHrLineStyle = {};
  }

  return (
    <>
      <div className="left" style={{ "flex-grow": 1 }}>
        <hr style={{ color: "green",  border: "2px solid black" }}></hr>
      </div>
      <div
        className="circle"
        style={{ color: "white", border: "2px solid black" }}
      >
        &#x2713;
      </div>
      <div className="right" style={{ "flex-grow": 1,  }}>
        <hr style={{ color: "green",  border: "2px solid black" }}></hr>
      </div>
    </>
  );
}

export default Circle;
