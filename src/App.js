import React from "react";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/categories/Navbar";
import Ceramic from "./pages/ceramic/ceramic";
import Candles from "./pages/candles/candles";
import Crochet from "./pages/crochet/crochet";
import Embroidery from "./pages/embroidery/embroidery";
import Resin from "./pages/resin/resin";
import WoodArt from "./pages/woodArt/woodArt";
import Home from "./pages/home";
import Footer from "./common/footer/footer";

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
                <Footer />
              </div>
            }
          />
          <Route
            path="/candles"
            element={
              <div>
                <Navbar />
                <Candles />
                <Footer />
              </div>
            }
          />
          <Route
            path="/ceramic"
            element={
              <div>
                <Navbar />
                <Ceramic />
                <Footer />
              </div>
            }
          />
          <Route
            path="/crochet"
            element={
              <div>
                <Navbar />
                <Crochet />
                <Footer />
              </div>
            }
          />
          <Route
            path="/embroidery"
            element={
              <div>
                <Navbar />
                <Embroidery />
                <Footer />
              </div>
            }
          />
          <Route
            path="/resin"
            element={
              <div>
                <Navbar />
                <Resin />
                <Footer />
              </div>
            }
          />
          <Route
            path="/woodArt"
            element={
              <div>
                <Navbar />
                <WoodArt />
                <Footer />
              </div>
            }
          />
          <Route
            path="/cart"
            element={
              <div>
                <Navbar />
                <Footer />
              </div>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
