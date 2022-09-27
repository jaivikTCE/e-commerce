import React, { useEffect, useState } from "react";
import "./HeroBanner.scss";
import axios from "axios";

const HeroBanner = () => {
  const [item, setItem] = useState([]);

  useEffect(() => {
    const getItem = async () => {
      const products = await axios.get("http://localhost:3001/herobanner");
      setItem(products.data);
    };
    getItem();
  }, []);

  return (
    <>
      <div className="hero-banner-container">
        {item.map((data) => (
          <div key={data.id}>
            <p className="product-tag">{data.Hb_ProductTag}</p>
            <h3>{data.Hb_Name}</h3>
            <h1>{data.Hb_Tag}</h1>
            <img
              src={data.Hb_image}
              alt="shoes"
              className="hero-banner-image"
            />

            <div>
              <a href="products">
                <button type="button">Shop Now</button>
              </a>
              <div className="desc">
                <h5>Description</h5>
                <p>{data.Hb_Descreption}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default HeroBanner;
