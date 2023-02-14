import "./components/DataDisplayCard";
import "./App.css";
import DataDisplayCard from "./components/DataDisplayCard";

function App() {
  return (
    <div>
      <DataDisplayCard
        reading={25}
        bar={{
          left: { status: "Excellent", value: "<800" },
          right: { status: "Good", value: "<1000" },
        }}
      />
      <DataDisplayCard
        reading={25}
        bar={{
          left: { status: "Good", value: "<1000" },
          right: { status: "Normal", value: "<1500" },
        }}
      />
    </div>
  );
}

export default App;
