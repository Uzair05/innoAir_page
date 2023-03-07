import React from "react";
import AppBarComponent from "../../Components/AppBarComponent";

import "./LandingPage.css";

export default function LandingPage(props) {
  return (
    <div>
      <AppBarComponent />

      <div className="LandingBody">
        <h1 className="PageTitle">Smart Facility Management Portal</h1>
      </div>
    </div>
  );
}
