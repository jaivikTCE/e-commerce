import React, { useEffect, useState } from "react";
import "./ProductDetail.scss";
import Product from "../../Components/Product/Product";
import { useStateContext } from "../../Context/StateContex";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { decQty, incQty, qty, onAdd, setShowCart } = useStateContext();
  // const [index, setIndex] = useState(0);
  const [product, setProduct] = useState({});
  const { id } = useParams();

  useEffect(() => {
    getProduct();
  }, [id]);

  const getProduct = () => {
    fetch("http://localhost:3001/products")
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          console.log("res error");
        }
      })
      .then((data) => {
        const newProduct = data.find((item) => item.id === parseInt(id));
        setProduct(newProduct);
      })
      .catch((err) => console.log(err));
  };

  const handelBuyNow = () => {
    onAdd(product, qty);
    setShowCart(true);
  };

  return (
    <>
      <div key={product.id}>
        <div className="container product-detail-container">
          <div>
            <div className="image-container">
              <img
                src={product.image}
                alt="product_image"
                className="product-detail-image"
              />
            </div>
            { /* <div className="small-images-container">
              <img
                key={product.id}
                src={product.altIMG1}
                alt="alt_product_image"
                className={
                  product.id === index
                    ? "small-image selected-image"
                    : "small-image"
                }
                onMouseEnter={() => setIndex(product.id)}
              />
              <img
                key={product.id}
                src={product.altIMG2}
                alt="alt_product_image"
                className={
                  product.id === index
                    ? "small-image selected-image"
                    : "small-image"
                }
                onMouseEnter={() => setIndex(product.id)}
              />
              <img
                key={product.id}
                src={product.altIMG3}
                alt="alt_product_image"
                className={
                  product.id === index
                    ? "small-image selected-image"
                    : "small-image"
                }
                onMouseEnter={() => setIndex(product.id)}
              />
              <img
                key={product.id}
                src={product.altIMG4}
                alt="alt_product_image"
                className={
                  product.id === index
                    ? "small-image selected-image"
                    : "small-image"
                }
                onMouseEnter={() => setIndex(product.id)}
              />
            <img
                key={product.id}
                src={product.altIMG5}
                alt="alt_product_image"
                className={
                  product.id === index
                    ? "small-image selected-image"
                    : "small-image"
                }
                onMouseEnter={() => setIndex(product.id)}
              />
            </div> */}
          </div>
          <div className="product-detail-desc">
            <h1>{product.title}</h1>
            <p>{product.category}</p>
            <div className="reviews">
              <div>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-regular fa-star"></i>
                <span>{product.rate}</span>
              </div>
              <p>{product.count}</p>
            </div>
            <div className="description">
              <h4> Description :</h4>
              <p>{product.description}</p>
            </div>
            <p className="price">₹{product.price}/-</p>
            <div className="size">
              <h4>Size:</h4>
              <select name="shoesize" id="" className="size-select">
                <option value="">Choose size</option>
                <option value={product.size1}>{product.size1}</option>
                <option value={product.size2}>{product.size2}</option>
                <option value={product.size3}>{product.size3}</option>
                <option value={product.size4}>{product.size4}</option>
                <option value={product.size5}>{product.size5}</option>
              </select>
            </div>
            <div className="quantity">
              <h4>Quantity:</h4>
              <p className="quantity-desc">
                <span className="minus" onClick={decQty}>
                  <i className="fa-solid fa-minus"></i>
                </span>
                <span className="num">{qty}</span>
                <span className="plus" onClick={incQty}>
                  <i className="fa-solid fa-plus"></i>
                </span>
              </p>
            </div>
            <div className="buttons">
              <button
                type="button"
                className="add-to-cart"
                onClick={() => onAdd(product, qty)}
              >
                Add to Cart
              </button>
              <button type="button" className="buy-now" onClick={handelBuyNow}>
                Buy Now
              </button>
            </div>
          </div>
        </div>
        <div className="maylike-products-wrapper">
          <h2>You May Also Like</h2>
          <div className="marquee">
            <div className="maylike-products-container track">
              <Product />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
