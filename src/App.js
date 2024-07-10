import React from "react";
import { Route, Routes } from "react-router-dom";
import Menu from "./Menu";
import Breakfast from "./Breakfast";
import Lunch from "./Lunch";
import Dinner from "./Dinner";
import Sweets   from "./Sweets";
import Juice from './Juice';
import Chai from './Chai&Coffe';

function App() {
  return (
    <>
      <Menu />
      <Routes>
        <Route exact path="/Breakfast" element={<Breakfast />} />
        <Route exact path="/Lunch" element={<Lunch />} />
        <Route exact path="/Dinner" element={<Dinner />} />
        <Route exact path="/Sweets" element={<Sweets />} />
        <Route exact path="/Juice" element={<Juice />} />
        <Route exact path="/Chai" element={<Chai />} />
      </Routes>
    </>
  );
}

export default App;