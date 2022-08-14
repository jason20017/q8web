import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import Main from "./pages/Main";
import data from "./TestData/data";

import "./styles/index.css";
function App() {
  return (
    <div className="app">
      <NavBar />
      <div className="app_layer1">
        <SideBar />
        <div className="app_layer2">
          <Routes>
            <Route path="/" exact element={<Main data={data} />}></Route>
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
