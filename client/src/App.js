import React, { useState } from "react";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import ReactDOM from "react-dom";

import { BrowserRouter, Routes, Route, Switch } from "react-router-dom";
import Layout from "./pages/Layout.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Music from "./pages/Music.jsx";
import Navbar from "./Navbar.jsx";
import "./App.css";

function App() {
  // React States
  return (
    <div className="app">
      <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Layout />}>           
          <Route index element={<Home />} />           
          <Route path="Music" element={<Music />} />           
          <Route path="About" element={<About />} />           
          </Route>
        </Routes>      
      </div>
      </BrowserRouter>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

export default App