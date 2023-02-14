import "./DataDisplayCard.css";

function DataDisplayCard(props) {
  const createColor = (color_) => {
    return "_".concat(color_.toLowerCase());
  };

  /* 
    props = {
    reading: "",
    metric: "",
    graph_link:"https://abc.xyz",
    bar: {
      left: { status: "(Excellent|Good|Normal|Offline)", value: "(<|>)[0-9]+" },
      right: { status: "(Excellent|Good|Normal|Offline)", value: "(<|>)[0-9]+" },
    }
  }; 
  */

  return (
    <div
      className={"OuterCircle"
        .concat(" Outer")
        .concat(createColor(props.bar.left.status))}
    >
      <div className="InnerCircle">
        <p className="InnerText">
          {props.reading}
          <br />
          {props.metric}
        </p>
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
            {props.bar.right.value === null ? "Null" : props.bar.right.value}
          </p>
        </div>
      </div>
    </div>
  );
}

export default DataDisplayCard;
