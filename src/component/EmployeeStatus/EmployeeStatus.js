// import logo from "./logo.svg";
import "../../App";
import Profile from "../Profile/Profile";
import Circle from "../Circle/Circle";
import Reward from "../Reward/Reward";
import Row from "../Row/Row";

function EmployeeStatus(props) {
  let EmployeeName = props.EmployeeName;
  let EmployeeDesignation = props.EmployeeDesignation;
  let Status = props.Status;
  let CirclesStyle = [
    "Symbol",
    "Hollow-Circle",
    "Hollow-Circle",
    "Hollow-Circle",
    ["No Dollar", "No Present"],
  ];

  if (Status === "Interviewed") {
    CirclesStyle = [
      "Green",
      "Symbol",
      "Hollow-Circle",
      "Hollow-Circle",
      ["No Dollar", "No Present"],
    ];
  } else if (Status === "Hired") {
    CirclesStyle = [
      "Green",
      "Green",
      "Symbol",
      "Hollow-Circle",
      ["No Dollar", "No Present"],
    ];
  } else if (Status === "Joined-No-Reward") {
    CirclesStyle = [
      "Green",
      "Green",
      "Green",
      "Symbol",
      ["Dollar", "No Present"],
    ];
  } else if (Status === "Joined-Reward") {
    CirclesStyle = [
      "Green",
      "Green",
      "Green",
      "Symbol",
      ["No-Dollar", "Present"],
    ];
  } else if (Status === "Reward") {
    CirclesStyle = [
      "Green",
      "Green",
      "Green",
      "Green",
      ["No-Dollar", "Present"],
    ];
  } else if (Status === "Terminated") {
    CirclesStyle = CirclesStyle.map((value, index) => {
      if (value == "Green" || value == "Hollow-Circle") {
        CirclesStyle[index] = "Grey";
        return CirclesStyle[index];
      }
      return CirclesStyle[index];
    });
  }

  return (
    <Row
      EmployeeName={EmployeeName}
      EmployeeDesignation={EmployeeDesignation}
      Status={Status}
      CirclesStyle={CirclesStyle}
    ></Row>
  );
}

export default EmployeeStatus;
