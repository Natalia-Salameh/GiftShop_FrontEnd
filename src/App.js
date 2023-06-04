import React from "react";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Ceramic from "./pages/ceramic/ceramic";
import Candles from "./pages/candles/candles";
import Crochet from "./pages/crochet/crochet";
import Embroidery from "./pages/embroidery/embroidery";
import Resin from "./pages/resin/resin";
import WoodArt from "./pages/woodArt/woodArt";
import Home from "./pages/home";
import Footer from "./common/footer/footer";
import ProductDetails from "./pages/productDetails";
import AuthContextProvider from "./context/AuthContextProvider";
import Cart from "./components/AddToCart/Cart";
import { CartProvider } from "./components/AddToCart/cartContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Slide } from "react-toastify";
import Navbar from "./common/navbar/Navbar";
import Header from "./common/header/header";
import ProductPage from "./common/search/search";
import LoginPage from "./pages/Login/login";
import SignupPage from "./pages/Login/signup";
import CategoryPage from "./pages/Admin/categoryPage";
import ProductPageAdmin from "./pages/Admin/productPage";
import AddNewCategory from "./pages/Admin/addCategory/add_new_categoryPage";
import AddNewProduct from "./pages/Admin/addProduct/addProductPage";
import CheckoutPage from "./pages/orderPage";
import NotFound from "./pages/pageNotFound/pageNotfound";

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <CartProvider>
          <BrowserRouter>
            <ToastContainer transition={Slide} />
            <Header/>
            <Navbar />
            <div className="Content">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/candles" element={<Candles />} />
                <Route path="/ceramic" element={<Ceramic />} />
                <Route path="/crochet" element={<Crochet />} />
                <Route path="/embroidery" element={<Embroidery />} />
                <Route path="/resin" element={<Resin />} />
                <Route path="/woodArt" element={<WoodArt />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup" element={<SignupPage />} />
                <Route path="/products/id/:id" element={<ProductDetails />} />
                <Route exact path="/cart" component={Cart} />
                <Route path="/products/name/:name" element={<ProductPage />} />

                <Route
                  path="categorypage/Categories/:id/products"
                  element={
                    <div>
                      <ProductPageAdmin />
                    </div>
                  }
                />

                <Route
                  path="/newcategory"
                  element={
                    <div>
                      <AddNewCategory />
                    </div>
                  }
                />

                <Route
                  path="/newProduct"
                  element={
                    <div>
                      <AddNewProduct />
                    </div>
                  }
                />

                <Route
                  exact
                  path="/categorypage"
                  element={
                    <div>
                      <CategoryPage />
                    </div>
                  }
                />
                <Route exact path="/checkout" element={<CheckoutPage />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </div>

            <Footer />
          </BrowserRouter>
        </CartProvider>
      </AuthContextProvider>
    </div>
  );
}

export default App;
