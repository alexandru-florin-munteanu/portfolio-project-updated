import React from "react";
import "./Footer.css";
function Footer() {
  return (
    <footer className="footer">
      <blockquote className="footer__quote">
        <p className="quote">“ Paths are made by walking ”</p>
        <p className="author"> - Franz Kafka</p>
      </blockquote>
      <div className="footer__logo">
        <div className="footer__image"></div>
        <div className="footer__copyright">
          <p>&copy; Copyright by Alexandru Munteanu. Personal Portfolio</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
