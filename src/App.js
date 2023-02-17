import { useState } from "react";
import "./App.css";
import DisplayBoard from "./components/DisplayBoard";

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
    setData(data);

    let items = [];
    for (const [key, value] of Object.entries(data)) {
      if (keyTitle[key] !== undefined) {
        items.push({
          title: keyTitle[key],
          reading: value[0],
          metric: keyMetric[key],
          graph_link: "",
          bar: {
            left: {
              status: keyClass[key](value[0]),
              value: keyClassDefinition[key],
            },
            right: {
              status:
                keyClass[key](value[0]) === "Excellent" ? "Good" : "Normal",
              value: keyClassDefinition[key],
            },
          },
        });
      }
    }
  }

  return (
    <div>
      <button onClick={fetchAPI}>Load Page</button>
      <p>{JSON.stringify(items)}</p>
    </div>
  );
}

export default App;
