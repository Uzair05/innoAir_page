import "./DisplayBoard.css";
import DisplayHeader from "./DisplayHeader";
import DataDisplayCard from "./DataDisplayCard";

function DisplayBoard(props) {
  return (
    <div>
      <DisplayHeader />
      <div className="displayBoard">
        {props.items.map((item) => {
          return (
            <DataDisplayCard
              title={item.title !== undefined ? item.title : "###"}
              metric={item.metric}
              bar={item.bar}
              reading={item.reading}
            />
          );
        })}
      </div>
    </div>
  );
}

export default DisplayBoard;
