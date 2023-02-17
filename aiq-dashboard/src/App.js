import { useState } from "react";
import "./App.css";
import DisplayBoard from "./components/DisplayBoard";

const keyChain = {
  CO2: {
    title: "Carbon Dioxide",
    metric: "ppmv",
    keyClass: (d) => {
      return d < 800 ? "Excellent" : d < 1000 ? "Good" : "Normal";
    },
    keyClassDefinition: ["< 800", "< 1000", "> 1000"],
  },
  HCHO: {
    title: "Formaldehyde",
    metric: "µg/m³",
    keyClass: (d) => {
      return d < 30 ? "Excellent" : d < 100 ? "Good" : "Normal";
    },
    keyClassDefinition: ["< 30", "< 100", "> 100"],
  },
  HUMI: {
    title: "Relative Humidity",
    metric: "%",
    keyClass: (d) => {
      return d <= 70 && d >= 40 ? "Excellent" : d <= 70 ? "Good" : "Normal";
    },
    keyClassDefinition: ["40 - 70", "< 70", "> 70"],
  },
  PM10: {
    title: "Respirable Suspended Particulates PM10",
    metric: "µg/m³",
    keyClass: (d) => {
      return d < 20 ? "Excellent" : d < 100 ? "Good" : "Normal";
    },
    keyClassDefinition: ["< 20", "< 100", "> 100"],
  },
  PM25: {
    title: "Fine Suspended Particulates PM10",
    metric: "µg/m³",
    keyClass: (d) => {
      return d < 20 ? "Excellent" : d < 100 ? "Good" : "Normal";
    },
    keyClassDefinition: ["< 20", "< 100", "> 100"],
  },
  TEMP: {
    title: "Air Temperature",
    metric: "℃",
    keyClass: (d) => {
      return d <= 25.5 && d >= 20 ? "Excellent" : d <= 25.5 ? "Good" : "Normal";
    },
    keyClassDefinition: ["20 - 25.5", "< 25.5", "> 25.5"],
  },
  TVOC: {
    title: "Total Volatile Organic Compounds",
    metric: "µg/m³",
    keyClass: (d) => {
      return d < 200 ? "Excellent" : d < 600 ? "Good" : "Normal";
    },
    keyClassDefinition: ["< 200", "< 600", "> 600"],
  },
};

function App() {
  const [items, setData] = useState([]);

  async function fetchAPI() {
    const fr_time = new Date();
    fr_time.setTime(fr_time.getTime() - 1 * 60 * 1000);
    const to_time = new Date();

    const response = await fetch(
      `https://1v2kgpsm3a.execute-api.ap-northeast-2.amazonaws.com/innoair/I01A002F001B?interval=${0}&from_time=${fr_time.toISOString()}&to_time=${to_time.toISOString()}`
    );
    const data = await response.json();

    const items = [];
    for (const [key, value] of Object.entries(data.data)) {
      if (keyChain[key]) {
        items.push({
          title: keyChain[key].title,
          reading: value[0],
          metric: keyChain[key].metric,
          graph_link: "",
          bar: {
            left: {
              status: keyChain[key].keyClass(value[0]),
              value:
                keyChain[key].keyClassDefinition[
                  keyChain[key].keyClass(value[0]) === "Excellent"
                    ? 0
                    : keyChain[key].keyClass(value[0]) === "Good"
                    ? 1
                    : 2
                ],
            },
            right: {
              status:
                keyChain[key].keyClass(value[0]) === "Excellent"
                  ? "Good"
                  : "Normal",
              value:
                keyChain[key].keyClassDefinition[
                  keyChain[key].keyClass(value[0]) === "Excellent" ? 1 : 2
                ],
            },
          },
        });
      }
    }
    setData(items);
  }

  return (
    <div>
      <button onClick={fetchAPI}>Load Page</button>
      <DisplayBoard items={items} />
    </div>
  );
}

export default App;
