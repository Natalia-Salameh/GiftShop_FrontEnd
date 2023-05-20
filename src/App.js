import React from "react";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./common/header/Navbar";
import Ceramic from "./pages/ceramic/ceramic";
import Candles from "./pages/candles/candles";
import Crochet from "./pages/crochet/crochet";
import Embroidery from "./pages/embroidery/embroidery";
import Resin from "./pages/resin/resin";
import WoodArt from "./pages/woodArt/woodArt";
import Home from "./pages/home";
import ProductCard from "./pages/productCart/productCart";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <Navbar />
                <Home />
              </div>
            }
          />
          <Route
            path="/candles"
            element={
              <div>
                <Navbar />
                <Candles />
              </div>
            }
          />
          <Route
            path="/ceramic"
            element={
              <div>
                <Navbar />
                <Ceramic />
              </div>
            }
          />
          <Route
            path="/crochet"
            element={
              <div>
                <Navbar />
                <Crochet />
              </div>
            }
          />
          <Route
            path="/embroidery"
            element={
              <div>
                <Navbar />
                <Embroidery />
              </div>
            }
          />
          <Route
            path="/resin"
            element={
              <div>
                <Navbar />
                <Resin />
              </div>
            }
          />
          <Route
            path="/woodArt"
            element={
              <div>
                <Navbar />
                <WoodArt />
              </div>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
