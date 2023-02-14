import "./DisplayBoard.css";
import DataDisplayCard from "./DataDisplayCard";

function DisplayBoard(props) {
  return (
    <div className="displayBoard">
      {props.items.map((item) => {
        return (
          <DataDisplayCard
            metric={item.metric}
            bar={item.bar}
            reading={item.reading}
          />
        );
      })}
    </div>
  );
}

export default DisplayBoard;
