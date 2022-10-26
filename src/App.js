import Home from "./com/Home";
import Weathermain from "./com/WeatherMain";
import Weathermain2 from "./com/WeatherMain2";
import React from "react";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/c2/:item" element={<Weathermain />} />
      <Route path="/c1" element={<Weathermain2 />} />
    </Routes>
  );
}

export default App;
