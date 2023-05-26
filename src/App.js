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
import ProductDetails from "./pages/productDetails";
import ProductPage from "./pages/search";
import AuthContextProvider from "./context/AuthContextProvider";
import LoginPage from "./pages/Login";
function App() {
  return (
    <div className="App">
      <AuthContextProvider>
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

        <Route path='/products/id/:id' 
        element={<div> 
            <Navbar />
            <ProductDetails/>
            <Footer />
          </div>} />

          <Route path="/products/name/:name"
           element={<div>
            <Navbar />
            <ProductPage/>
            <Footer />
            </div>} />
            <Route path="/Login" element={<LoginPage />} />


        </Routes>
      </BrowserRouter>
      </AuthContextProvider>

    </div>

    
  );
}

export default App;
