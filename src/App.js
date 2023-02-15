import "./App.css";
import DisplayBoard from "./components/DisplayBoard";

function App() {
  const items = [
    {
      reading: 750,
      bar: {
        left: { status: "Excellent", value: "<800" },
        right: { status: "Good", value: "<1000" },
      },
      metric: "ppm",
    },
    {
      reading: 905,
      bar: {
        left: { status: "Good", value: "<1000" },
        right: { status: "Normal", value: "<1500" },
      },
      metric: "ppm",
    },
    {
      reading: 1400,
      bar: {
        left: { status: "Normal", value: "<1500" },
        right: { status: "Offline", value: null },
      },
      metric: "ppm",
    },
    {
      reading: 750,
      bar: {
        left: { status: "Excellent", value: "<800" },
        right: { status: "Good", value: "<1000" },
      },
      metric: "ppm",
    },
    {
      reading: 905,
      bar: {
        left: { status: "Good", value: "<1000" },
        right: { status: "Normal", value: "<1500" },
      },
      metric: "ppm",
    },
    {
      reading: 1400,
      bar: {
        left: { status: "Normal", value: "<1500" },
        right: { status: "Offline", value: null },
      },
      metric: "ppm",
    },
    {
      reading: 750,
      bar: {
        left: { status: "Excellent", value: "<800" },
        right: { status: "Good", value: "<1000" },
      },
      metric: "ppm",
    },
    {
      reading: 905,
      bar: {
        left: { status: "Good", value: "<1000" },
        right: { status: "Normal", value: "<1500" },
      },
      metric: "ppm",
    },
    {
      reading: 1400,
      bar: {
        left: { status: "Normal", value: "<1500" },
        right: { status: "Offline", value: null },
      },
      metric: "ppm",
    },
  ];

  return <DisplayBoard items={items} />;
}

export default App;
