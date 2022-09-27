import React, { useEffect, useState } from "react";
import "./FooterBanner.scss";
import axios from "axios";

const FooterBanner = () => {
  const [item, setItem] = useState([]);

  useEffect(() => {
    const getItem = async () => {
      const products = await axios.get("http://localhost:3001/footerbanner");
      setItem(products.data);
    };
    getItem();
  }, []);

  return (
    <>
      <div className="footer-banner-container">
        {item.map((data) => (
          <div className="banner-desc" key={data.id}>
            <div className="left">
              <p>{data.Fb_SalePercentage} Off</p>
              <h3>{data.Fb_Tag1}</h3>
              <h3>{data.Fb_Tag2}</h3>
              <p>Till {data.Fb_SaleDate}</p>
            </div>
            <div className="right">
              <p>{data.Fb_Name}</p>
              <h3>{data.Fb_SaleName}</h3>
              <p>{data.Fb_ShortDescreption}</p>
              <a href="products">
                <button type="button">Shop Now</button>
              </a>
            </div>
            <img src={data.Fb_image} alt="bannerImage" className="footer-banner-image" />
          </div>
        ))}
      </div>
    </>
  );
};

export default FooterBanner;
