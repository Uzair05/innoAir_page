import "./components/DataDisplayCard";
import "./App.css";
import DataDisplayCard from "./components/DataDisplayCard";
import DisplayBoard from "./components/DisplayBoard";

function App() {
  return (
    <DisplayBoard>
      <DataDisplayCard
        reading={750}
        bar={{
          left: { status: "Excellent", value: "<800" },
          right: { status: "Good", value: "<1000" },
        }}
        metric={"ppm"}
      />
      <DataDisplayCard
        reading={905}
        bar={{
          left: { status: "Good", value: "<1000" },
          right: { status: "Normal", value: "<1500" },
        }}
        metric={"ppm"}
      />
      <DataDisplayCard
        reading={1400}
        bar={{
          left: { status: "Normal", value: "<1500" },
          right: { status: "Offline", value: null },
        }}
        metric={"ppm"}
      />
    </DisplayBoard>
  );
}

export default App;
