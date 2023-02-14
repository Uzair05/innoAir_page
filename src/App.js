import "./components/DataDisplayCard";
import "./App.css";
import DataDisplayCard from "./components/DataDisplayCard";

function App() {
  return (
    <div>
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
          right: { status: "Offline", value: "Null" },
        }}
        metric={"ppm"}
      />
    </div>
  );
}

export default App;
