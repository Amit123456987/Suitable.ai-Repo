import "./Reward.css";

function Reward() {
  return (
    <>
      <div className="left" style={{ "flex-grow": 1, top: "0%" }}>
        <hr style={{ border: "2px solid black" }}></hr>
      </div>
      <div className="Reward">&#x24; 2000</div>
      <div className="right" style={{ "flex-grow": 1, visibility: "hidden" }}>
        <hr></hr>
      </div>
    </>
  );
}

export default Reward;
