import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useStateContext } from "../../Context/StateContex";
// import { runFireworks } from "../../lib/utils";
import "./Success.scss";

const Success = () => {
  const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();

  useEffect(() => {
    localStorage.clear();
    setCartItems([]);
    setTotalPrice(0);
    setTotalQuantities(0);
    // runFireworks();
  },[]);

  return (
      <div className="success-wrapper">
        <div className="success">
          <p className="icon">
            <i className="fa-solid fa-bag-shopping"></i>
          </p>
          <h2>Thank you for your order!</h2>
          <p className="email-smg"> Check your email inbox for the receipt.</p>
          <p className="descreption">
            If you have any questions, please email us at
          </p>
          <a className="email" href="mailto:order@gmail.com">
            order@gmail.com
          </a>
          <Link to="/">
            <button className="btn" type="button" width="300px">
              Countinue Shopping
            </button>
          </Link>
        </div>
      </div>
  );
};

export default Success;
