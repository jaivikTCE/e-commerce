import React from "react";
import FooterBanner from "../../Components/FooterBanner/FooterBanner";
import HeroBanner from "../../Components/HeroBanner/HeroBanner";
import Product from "../../Components/Product/Product";

const Home = () => {
  return (
    <>
      <div>
        <HeroBanner />
        <div className="products-heading">
          <h2>Best Product</h2>
          <p>Shoes that you want</p>
        </div>
        <Product />
        <FooterBanner />
      </div>
    </>
  );
};

export default Home;
