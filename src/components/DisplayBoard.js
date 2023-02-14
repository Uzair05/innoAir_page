import "./DisplayBoard.css";

function DisplayBoard(props) {
  return <div className="displayBoard">{props.children}</div>;
}

export default DisplayBoard;
