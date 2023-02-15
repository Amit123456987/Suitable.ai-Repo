// import logo from "./logo.svg";
import "../../App";
import Profile from "../Profile/Profile";
import Circle from "../Circle/Circle";
import Reward from "../Reward/Reward";
import EmployeeStatus from "../EmployeeStatus/EmployeeStatus";

function Table() {
  return (
    <div className="Table">
      <body>
        <header>
          <h1 className="text" style={{ color: "white" }}>
            Referral Code
          </h1>

          <input placeholder="  search"></input>

          <button>&#x1F50D;</button>
        </header>
        <main></main>
        <div className="container">
          <div className="table">
            <div className="table-cell">Candidate</div>
            <div className="table-cell">Reffered</div>
            <div className="table-cell">Interviewed</div>
            <div className="table-cell">Hired</div>
            <div className="table-cell">Joined</div>
            <div className="table-cell">Reward</div>

           <EmployeeStatus/>
           <EmployeeStatus/>
           <EmployeeStatus/>
           <EmployeeStatus/>
          </div>
        </div>
      </body>
    </div>
  );
}

export default Table;
