import "./BarChart.css";
import { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import axios from "axios";
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
    // fr_time.setTime(fr_time.getTime() - 20 * 60 * 1000);
    // const to_time = new Date();

    // const response = await fetch(
    //   `https://1v2kgpsm3a.execute-api.ap-northeast-2.amazonaws.com/innoair/I01A002F001B?interval=${0}&from_time=${fr_time.toISOString()}&to_time=${to_time.toISOString()}`
    // );

    // const response = await axios.get(
    //   `https://1v2kgpsm3a.execute-api.ap-northeast-2.amazonaws.com/innoair/I01A002F001B?interval=${0}&from_time=${fr_time.toISOString()}&to_time=${to_time.toISOString()}`
    // );

    const response = await axios({
      url: `https://zlpy3tcujcgirbkuvojeze7tiu0qkrfu.lambda-url.ap-northeast-1.on.aws/?DateTime=${fr_time.getFullYear()}-${(
        fr_time.getUTCMonth() + 1
      )
        .toString()
        .padStart(2, "0")}-${fr_time
        .getUTCDate()
        .toString()
        .padStart(2, "0")}T${fr_time
        .getUTCHours()
        .toString()
        .padStart(2, "0")}:${fr_time
        .getUTCMinutes()
        .toString()
        .padStart(2, "0")}&Diff=${25}}`,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-type": "application/json",
      },
      method: "GET",
    });

    const data = response["data"];

    const items = {
      labels: range(data.data[props.key_].length),
      datasets: [
        {
          label: props.key_,
          data: data.data[props.key_],
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
          min: max([min([...data.data[props.key_]]) - 5, 0]),
          max: max([...data.data[props.key_]]) + 5,
        },
        x: {},
      },
    };

    setData(items);
    setOptions(options);
  }

  return (
    <div style={{ width: "80%", height: "auto", margin: "auto" }}>
      <h1 style={{ textAlign: "center" }}>History Bar Chart - {props.key_}</h1>
      <Bar data={data} options={options}></Bar>
    </div>
  );
}
