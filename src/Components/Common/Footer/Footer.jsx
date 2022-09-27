import React from "react";
import "./Footer.scss"

const Footer = () => {
  return (
    <>
      <footer className="footer-container">
        <p>2022 Secret Junction All rights reserverd</p>
        <p className="icons">
            <a href="https://api.whatsapp.com/send?phone=918448313034" target="_blank" rel="noreferrer"><i className="fa-brands fa-whatsapp"></i></a>
            <a href="https://www.instagram.com/secretjunction/" target="_blank" rel="noreferrer"><i className="fa-brands fa-instagram"></i></a>
            <a href="https://www.facebook.com/secretjunctionshoes/" target="_blank" rel="noreferrer"><i className="fa-brands fa-facebook-f"></i></a>
            <a href="https://twitter.com/secret_junction" target="_blank" rel="noreferrer"><i className="fa-brands fa-twitter"></i></a>
        </p>
      </footer>
    </>
  );
};

export default Footer;
