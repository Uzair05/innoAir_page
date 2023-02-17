import "./App.css";
import { useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale, // x axis
  LinearScale, // y axis
  PointElement,
  Filler,
  Legend,
  Tooltip,
} from "chart.js";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler,
  Legend,
  Tooltip
);

const range = (a) => {
  let tmp = [];
  for (let i = 0; i < a; i++) {
    tmp.push(i);
  }
  return tmp;
};
const min = (a) => {
  let min_ = a[0];
  for (let i = 1; i < a.length; i++) {
    if (a[i] < min_) min_ = a[i];
  }
  return min_;
};
const max = (a) => {
  let max_ = a[0];
  for (let i = 1; i < a.length; i++) {
    if (a[i] > max_) max_ = a[i];
  }
  return max_;
};

function App() {
  const [data, setData] = useState({
    labels: [],
    datasets: [
      {
        label: "",
        data: [],
        backgroundColor: "aqua",
        borderColor: "black",
        pointBorderColor: "green",
        fill: false,
        tension: 0.4,
      },
    ],
  });
  const [options, setOptions] = useState({
    legend: true,
    scales: {
      y: { min: 600, max: 660 },
      x: {},
    },
  });

  async function fetchAPI() {
    const fr_time = new Date();
    fr_time.setTime(fr_time.getTime() - 20 * 60 * 1000);
    const to_time = new Date();

    const response = await fetch(
      `https://1v2kgpsm3a.execute-api.ap-northeast-2.amazonaws.com/innoair/I01A002F001B?interval=${0}&from_time=${fr_time.toISOString()}&to_time=${to_time.toISOString()}`
    );
    const data = await response.json();

    const items = {
      labels: range(data.data["CO2"].length),
      datasets: [
        {
          label: "CO2",
          data: data.data["CO2"],
          backgroundColor: "aqua",
          borderColor: "black",
          pointBorderColor: "green",
          fill: false,
          tension: 0.4,
        } /* ,
        {
          label: "HCHO",
          data: data.data["HCHO"],
          backgroundColor: "yellow",
          borderColor: "black",
          pointBorderColor: "green",
          fill: false,
          tension: 0.4,
        }, */,
      ],
    };

    const options = {
      legend: true,
      scales: {
        y: {
          min: min([...data.data["CO2"]]) - 5,
          max: max([...data.data["CO2"]]) + 5,
        },
        x: {},
      },
    };

    setData(items);
    setOptions(options);
  }

  return (
    <div style={{ width: "80%", height: "auto", margin: "auto" }}>
      <button onClick={fetchAPI}>Load Data</button>
      <h1 style={{ textAlign: "center" }}>bar chart</h1>
      <Line data={data} options={options}></Line>
    </div>
  );
  // return (
  //   <div>
  //     <button onClick={fetchAPI}>Try me</button>
  //     <p>{JSON.stringify(items)}</p>
  //   </div>
  // );
}

export default App;
