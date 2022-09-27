import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { StateContex } from "./Context/StateContex";

import "./App.scss";
const Home = lazy(() => import("./Pages/Home/Home"));
const Header = lazy(() => import("./Components/Common/Header/Header"));
const Footer = lazy(() => import("./Components/Common/Footer/Footer"));
const Product = lazy(() => import("./Components/Product/Product"));
const ProductDetail = lazy(() => import("./Pages/ProductDetail/ProductDetail"));
const Success = lazy(() => import("./Pages/Success/Success"));

const App = () => {
  return (
    <StateContex>
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <Header />
          <Toaster />
          <Routes>
            <Route exact index path="/" element={<Home />} />
            <Route exact path="/products" element={<Product />} />
            <Route
              exact
              path="/productdetail/:id"
              element={<ProductDetail />}
            />
            <Route exact path="/success" element={<Success />} />
          </Routes>
          <Footer />
        </Suspense>
      </BrowserRouter>
    </StateContex>
  );
};

export default App;
