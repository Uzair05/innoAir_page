import { useState, useEffect } from "react";

import * as React from "react";
import Card from "./Card/Card.js";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";

import "./DisplayBoard.css";

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
    title: "Fine Suspended Particulates PM25",
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

export default function DisplayBoard() {
  const [items, setItems] = useState([]);

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
          key: key,
          title: keyChain[key].title,
          reading: value[0],
          metric: keyChain[key].metric,
          graph_link: "/".concat(key),
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
    setItems(items);
  }

  useEffect(() => {
    fetchAPI();
  }, []);

  // Break list of items into list of lists
  let items_ = [];
  for (var i = 0; i < items.length; i++) {
    if (items_[Math.floor(i / 4)] === undefined) {
      items_.push([]);
    }
    items_[Math.floor(i / 4)].push(items[i]);
  }

  // Stacks in rows of fours
  return (
    <Container className="MainBox">
      <Stack
        justifyContent="center"
        alignItems="center"
        direction="column"
        spacing={5}
      >
        {items_.map((d1, index) => {
          return (
            <Stack
              key={"InnerStack_".concat(index.toString())}
              direction="row"
              spacing={5}
            >
              {d1.map((d2) => {
                return (
                  <div
                    key={"Card_".concat(d2.title)}
                    style={{ width: "2in", height: "2in" }}
                  >
                    <Card
                      title={d2.title}
                      reading={d2.reading > 0 ? d2.reading : d2.bar.left.value}
                      metric={d2.metric}
                      graph_link={
                        d2.reading > 0
                          ? "IAQ".concat(d2.graph_link)
                          : "javascript:void(0)"
                      }
                      bar={
                        d2.bar
                        /* {
                      left: { status: "Good", value: "" },
                      right: { status: "Normal", value: "" },
                    } */
                      }
                    />
                  </div>
                );
              })}
            </Stack>
          );
        })}
      </Stack>
    </Container>
  );
}
