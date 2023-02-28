import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./Pages/Dashboard/Dashboard";
import BarChart from "./Pages/Plotout/BarChart";
import "./App.css";

function App() {
  document.title = "Robo Dynamix Limited";
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<p>Hello</p>} />
          <Route path="/AIQ">
            <Route index element={<Dashboard />} />
            <Route path="/AIQ/CO2" element={<BarChart key_={"CO2"} />} />
            <Route path="/AIQ/HCHO" element={<BarChart key_={"HCHO"} />} />
            <Route path="/AIQ/HUMI" element={<BarChart key_={"HUMI"} />} />
            <Route path="/AIQ/PM10" element={<BarChart key_={"PM10"} />} />
            <Route path="/AIQ/PM25" element={<BarChart key_={"PM25"} />} />
            <Route path="/AIQ/TEMP" element={<BarChart key_={"TEMP"} />} />
            <Route path="/AIQ/TVOC" element={<BarChart key_={"TVOC"} />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
