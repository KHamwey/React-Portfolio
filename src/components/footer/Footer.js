import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div>
      <div className="py-2 text-center footer-style">Made by Kyle Hamwey <span role="img" aria-label="copyright">©️</span>&nbsp; {new Date().getFullYear()}</div>
    </div>
  );
};

export default Footer;