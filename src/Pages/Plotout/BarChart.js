import "./BarChart.css";
import { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import AppBarComponent from "../../Components/AppBarComponent";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale, // x axis
  LinearScale, // y axis
  PointElement,
  Filler,
  Legend,
  Tooltip,
} from "chart.js";

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler,
  Legend,
  Tooltip
);

/* const range = (a) => {
  let tmp = [];
  for (let i = 0; i < a; i++) {
    tmp.push(i);
  }
  return tmp;
}; */
const min = (a) => {
  let min_ = a[0];
  for (let i = 1; i < a.length; i++) {
    if (a[i] < min_) {
      min_ = a[i];
    }
  }
  return min_;
};
const max = (a) => {
  let max_ = a[0];
  for (let i = 1; i < a.length; i++) {
    if (a[i] > max_) {
      max_ = a[i];
    }
  }
  return max_;
};

export default function BarChart(props) {
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

  useEffect(() => {
    fetchAPI(props);
  }, [props]);

  async function fetchAPI(props) {
    const fr_time = new Date();
    fr_time.setTime(fr_time.getTime() - 2 * 60 * 1000);
    // const to_time = new Date();

    const response = await fetch(
      `https://zlpy3tcujcgirbkuvojeze7tiu0qkrfu.lambda-url.ap-northeast-1.on.aws/?DateTime=${
        "2023-03-02T10:50" /* fr_time
        .getFullYear()
        .toString()}-${(fr_time.getMonth() + 1)
        .toString()
        .padStart(2, "0")}-${fr_time
        .getDate()
        .toString()
        .padStart(2, "0")}T${fr_time
        .getHours()
        .toString()
        .padStart(2, "0")}:${fr_time
        .getMinutes()
        .toString()
        .padStart(2, "0") */
      }&Diff=25`
    );

    async function readAllChunks(readableStream) {
      const reader = readableStream.getReader();
      const chunks = [];

      let done, value;
      while (!done) {
        ({ value, done } = await reader.read());
        if (done) {
          return chunks;
        }
        chunks.push(value);
      }

      return chunks;
    }
    const uint8_ = await readAllChunks(response.body);
    const uint8_decoded = new TextDecoder().decode(uint8_[0]);
    const data = JSON.parse(uint8_decoded);

    data[props.key_] = data[props.key_].map((item) => {
      return Number(item);
    });

    const items = {
      // labels: range(data[props.key_].length),
      labels: data["id"].reverse(),
      datasets: [
        {
          label: props.key_,
          data: data[props.key_].reverse(),
          backgroundColor: "#FFA500",
          hoverBackgroundColor: "hotpink",
          borderColor: "black",
          pointBorderColor: "green",
          fill: false,
          tension: 0.4,
        },
      ],
    };

    const options = {
      legend: true,
      scales: {
        y: {
          min: max([min(data[props.key_]) - 5, 0]),
          max: max(data[props.key_]) + 5,
        },
        x: {},
      },
    };

    setData(items);
    setOptions(options);
  }

  return (
    <div>
      <AppBarComponent />
      <div className="barChartContainer">
        <h1>History Bar Chart - {props.key_}</h1>
        <div className="chartContainer">
          <Bar data={data} options={options}></Bar>
        </div>
      </div>
    </div>
  );
}
