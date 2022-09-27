import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Product.scss";

const API = "http://localhost:3001/products";

const Product = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);
  
  const getProducts =()=>{
    fetch(API)
    .then((res) => {
      if(res.ok){
        return res.json();
      }else{
        console.log("res Error");
      }
    })
    .then((data) => setProducts(data))
    .catch((err) => console.log(err))
  }

  return (
    <div className="products-container">
      {products.map((data) => (
        <Link to={`/productdetail/${data.id}`} key={data.id} > 
          <div className="product-card">
            <img
              src={data.image}
              alt="P_Image"
              width={300}
              height={300}
              className="product-image"
            />
            <p className="product-name">{data.title}</p>
            <p className="product-price">₹{data.price}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Product;
