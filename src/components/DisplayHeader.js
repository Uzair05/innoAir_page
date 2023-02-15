import "./DisplayHeader.css";

const DisplayHeader = (props) => {
  return (
    <div className="displayBoardHeader">
      <div id="displayTablet_excellent" className="displayTablet">
        <p>Excellent</p>
      </div>
      <div id="displayTablet_good" className="displayTablet">
        <p>Good</p>
      </div>
      <div id="displayTablet_normal" className="displayTablet">
        <p>Normal</p>
      </div>
      <div id="displayTablet_offline" className="displayTablet">
        <p>Offline</p>
      </div>
    </div>
  );
};

export default DisplayHeader;
