import "./components/DataDisplayCard";
import "./App.css";
import DataDisplayCard from "./components/DataDisplayCard";

function App() {
  return (
    <DataDisplayCard
      reading={25}
      bar={{
        left: { status: "Excellent", value: "<800" },
        right: { status: "Good", value: "<1000" },
      }}
    />
  );
}

export default App;
