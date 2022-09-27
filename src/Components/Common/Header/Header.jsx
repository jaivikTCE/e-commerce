import React from "react";
import "./Header.scss";
import logosj from "../../../Images/LogoSJ.png";
import Cart from "../../Cart/Cart";
import { useStateContext } from "../../../Context/StateContex";
import { Link } from "react-router-dom";

const Header = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext(0);
  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg px-3">
          <div className="container-fluid">
            <Link className="navbar-brand me-5" to="/">
              <img src={logosj} alt="logo" />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarContent"
              aria-controls="navbarContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarContent">
              <div className="d-flex" role="search">
                <input
                  className="searchbar form-control me-2"
                  type="search"
                  placeholder="Search for product"
                  aria-label="Search"
                />
                <span>
                  <i className="fa-solid fa-magnifying-glass"></i>
                </span>
              </div>
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="/products">
                    Products
                  </Link>
                </li>
              </ul>
              <button
                type="button"
                className="cart-icon cart me-4"
                onClick={() => setShowCart(true)}
              >
                <a href="#cart">
                  <i className="fa-solid fa-cart-shopping"></i>
                  <span className="cart-item-qty">{totalQuantities}</span>
                </a>
              </button>
              <a href="#login">
                <div className="navLoginBtn">Login</div>
              </a>
            </div>
          </div>
          {showCart && <Cart />}
        </nav>
      </header>
    </>
  );
};

export default Header;
