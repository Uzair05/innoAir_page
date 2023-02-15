// import fetch from "node-fetch";

const fr_time = new Date();
fr_time.setTime(fr_time.getTime() - 1 * 60 * 1000);
const to_time = new Date();

const keyTitle = {
  CO2: "Carbon Dioxide",
  HCHO: "Formaldehyde",
  HUMI: "Relative Humidity",
  PM10: "Respirable Suspended Particulates PM10",
  PM25: "Fine Suspended Particulates PM10",
  TEMP: "Air Temperature",
  TVOC: "Total Volatile Organic Compounds",
};

const keyMetric = {
  CO2: "ppmv",
  HCHO: "µg/m³",
  HUMI: "%",
  PM10: "µg/m³",
  PM25: "µg/m³",
  TEMP: "℃",
  TVOC: "µg/m³",
};

const keyClass = {
  CO2: (d) => {
    return d < 800 ? "Excellent" : d < 1000 ? "Good" : "Normal";
  },
  HCHO: (d) => {
    return d < 30 ? "Excellent" : d < 100 ? "Good" : "Normal";
  },
  HUMI: (d) => {
    return d <= 70 && d >= 40 ? "Excellent" : d <= 70 ? "Good" : "Normal";
  },
  PM10: (d) => {
    return d < 20 ? "Excellent" : d < 100 ? "Good" : "Normal";
  },
  PM25: (d) => {
    return d < 20 ? "Excellent" : d < 100 ? "Good" : "Normal";
  },
  TEMP: (d) => {
    return d <= 25.5 && d >= 20 ? "Excellent" : d <= 25.5 ? "Good" : "Normal";
  },
  TVOC: (d) => {
    return d < 200 ? "Excellent" : d < 600 ? "Good" : "Normal";
  },
};

const keyClassDefinition = {
  CO2: ["< 800", "< 1000", "> 1000"],
  HCHO: ["< 30", "< 100", "> 100"],
  HUMI: ["40 - 70", "< 70", "> 70"],
  PM10: ["< 20", "< 100", "> 100"],
  PM25: ["< 20", "< 100", "> 100"],
  TEMP: ["20 - 25.5", "< 25.5", "> 25.5"],
  TVOC: ["< 200", "< 600", "> 600"],
};

function get_AIQ_data() {
  const url = `https://1v2kgpsm3a.execute-api.ap-northeast-2.amazonaws.com/innoair/I01A002F001B?interval=${0}&from_time=${fr_time.toISOString()}&to_time=${to_time.toISOString()}`;
  return fetch(url)
    .then((res) => {
      return res.json;
    })
    .then((res) => {
      return res.data;
    })
    .then((data) => {
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
      return items;
    });
}

export default get_AIQ_data;
