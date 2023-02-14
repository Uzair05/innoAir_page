import "./DataDisplayCard.css";

function DataDisplayCard(props) {
  const color_class = {
    Excellent: "HorizontalBar_excellent",
    Good: "HorizontalBar_good",
    Normal: "HorizontalBar_normal",
    Offline: "HorizontalBar_offline",
  };

  return (
    <div className="OuterCircle">
      <div className="InnerCircle">
        <p className="InnerText">{props.reading}</p>
      </div>
      <div className="HorizontalBar">
        <div
          className={"HorizontalBarLeft".concat(
            " ".concat(color_class[props.bar.left.status])
          )}
        >
          <p className="HorizontalBar_text">
            {props.bar.left.status}
            <br />
            {props.bar.left.value}
          </p>
        </div>
        <div
          className={"HorizontalBarRight".concat(
            " ".concat(color_class[props.bar.right.status])
          )}
        >
          <p className="HorizontalBar_text">
            {props.bar.right.status}
            <br />
            {props.bar.right.value}
          </p>
        </div>
      </div>
    </div>
  );
}

export default DataDisplayCard;
