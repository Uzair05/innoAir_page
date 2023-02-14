import "./DataDisplayCard.css";

function DataDisplayCard(props) {
  const createColor = (color_) => {
    return "_".concat(color_.toLowerCase());
  };

  return (
    <div
      className={"OuterCircle"
        .concat(" Outer")
        .concat(createColor(props.bar.left.status))}
    >
      <div className="InnerCircle">
        <p className="InnerText">{props.reading}</p>
      </div>

      <div className="HorizontalBar">
        <div
          className={"HorizontalBarLeft"
            .concat(" HorizontalBar")
            .concat(createColor(props.bar.left.status))}
        >
          <p className="HorizontalBar_text">
            {props.bar.left.status}
            <br />
            {props.bar.left.value}
          </p>
        </div>
        <div
          className={"HorizontalBarRight"
            .concat(" HorizontalBar")
            .concat(createColor(props.bar.right.status))}
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
