// import logo from "./logo.svg";
import "../../App";
import Profile from "../Profile/Profile";
import Circle from "../Circle/Circle";
import Reward from "../Reward/Reward";

function Row(props) {
  let EmployeeName = props.EmployeeName;
  let EmployeeDesignation = props.EmployeeDesignation;
  let Status = props.Status;
  let CirclesStyle = props.CirclesStyle;

  return (
    <>
      <div className="table-cell">
        <Profile
          EmployeeName={EmployeeName}
          EmployeeDesignation={EmployeeDesignation}
        />
      </div>
      <div className="table-cell">
        <Circle CirclesStyle={CirclesStyle} index={0} />
      </div>
      <div className="table-cell">
        <Circle CirclesStyle={CirclesStyle} index={1} />
      </div>
      <div className="table-cell">
        <Circle CirclesStyle={CirclesStyle} index={2} />
      </div>
      <div className="table-cell">
        <Circle CirclesStyle={CirclesStyle} index={3} />
      </div>
      <div className="table-cell">
        <Reward CirclesStyle={CirclesStyle} index={4} />
      </div>
    </>
  );
}

export default Row;
