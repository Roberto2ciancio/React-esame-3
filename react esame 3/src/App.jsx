import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import CustomNavbar from "./components/CustomNavbar";
import AppleMusic from "./components/applemusic";
import "./App.css";
import CustomFooter from "./components/customfooter";

function App() {
  const [searchQuery, setSearchQuery] = useState("sferaebbasta");

  return (
    <div className="app dark-bg2">
      <CustomNavbar setSearchQuery={setSearchQuery} />
      <AppleMusic searchQuery={searchQuery} />
      <CustomFooter />
    </div>
  );
}

export default App;
