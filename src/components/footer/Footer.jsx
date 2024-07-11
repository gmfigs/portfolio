import React from "react";
import "./footer.css";

const Footer = ({ currentPath }) => {
  const renderFooterContent = () => {
    switch (currentPath) {
      case "/siscog":
        return (
          <>
            <h1 className="footer__title">SISCOG SA <i className="uil ml-less uil-trademark"></i></h1>
            <ul className="footer__list">
              <li>
                <a href="/home" className="footer__link">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="footer__link">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="footer__link">
                  Projects
                </a>
              </li>
            </ul>
          </>
        );
      case "/hoyBank":
        return (
          <>
            <h1 className="footer__title">HoyBank</h1>
            <ul className="footer__list">
              <li>
                <a href="/home" className="footer__link">
                  Home
                </a>
              </li>
              <li>
                <a href="#challenge" className="footer__link">
                  Challenge
                </a>
              </li>
              <li>
                <a href="#styleguide" className="footer__link">
                  Styleguide
                </a>
              </li>
            </ul>
          </>
        );
      default:
        return (
          <>
            <h1 className="footer__title">GFigueiredo</h1>
            <ul className="footer__list">
              <li>
                <a href="#about" className="footer__link">
                  About
                </a>
              </li>
              <li>
                <a href="#portfolio" className="footer__link">
                  Projects
                </a>
              </li>
              <li>
                <a href="#testimonials" className="footer__link">
                  Testimonials
                </a>
              </li>
            </ul>
          </>
        );
    }
  };

  return (
    <footer className="footer">
      <div className="footer__container container">
        {renderFooterContent()}
        <div className="footer__social">
          <a
            href="https://www.facebook.com/"
            className="footer__social-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bx bxl-facebook"></i>
          </a>
          <a
            href="https://www.instagram.com/"
            className="footer__social-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bx bxl-instagram"></i>
          </a>
          <a
            href="https://twitter.com/"
            className="footer__social-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bx bxl-twitter"></i>
          </a>
        </div>
        <span className="footer__copy">&#169; GFigueiredo. All rights reserved</span>
      </div>
    </footer>
  );
};

export default Footer;
