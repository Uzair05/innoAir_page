import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./Pages/Dashboard/Dashboard";
import BarChart from "./Pages/Plotout/BarChart";
import LandingPage from "./Pages/LandingPage/LandingPage";
import AIProject from "./Pages/AI_Project/AI_Project";
import "./App.css";

function App() {
  document.title = "Robo Dynamix Limited";
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<LandingPage />} />

          <Route path="/AIQ">
            <Route index element={<Dashboard />} />
            <Route path="CO2" element={<BarChart key_={"C02"} />} />
            <Route path="HCHO" element={<BarChart key_={"HCHO"} />} />
            <Route path="HUMI" element={<BarChart key_={"HUMI"} />} />
            <Route path="PM10" element={<BarChart key_={"PM10"} />} />
            <Route path="PM25" element={<BarChart key_={"PM25"} />} />
            <Route path="TEMP" element={<BarChart key_={"TEMP"} />} />
            <Route path="TVOC" element={<BarChart key_={"TVOC"} />} />
          </Route>

          <Route path="/AI_Project">
            <Route index element={<AIProject />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
