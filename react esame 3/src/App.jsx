import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import CustomNavbar from "./components/CustomNavbar";
import AppleMusic from "./components/applemusic";
import "./App.css";
import CustomFooter from "./components/customfooter";

function App() {
  return (
    <div className="app dark-bg2">
      <CustomNavbar />
      <AppleMusic />
      <CustomFooter />
    </div>
  );
}

export default App;
