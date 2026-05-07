import React from "react";
import "./footer.css";

const CONNECT_REPO_URL = "https://github.com/KHamwey/terraform-aws-connect-callcenter";

const Footer = () => {
  return (
    <div>
      <div className="py-2 text-center footer-style">
        <div>
          Made by Kyle Hamwey <span role="img" aria-label="copyright">©️</span>&nbsp;
          {new Date().getFullYear()}
        </div>
        <a
          className="footer-badge-link"
          href={CONNECT_REPO_URL}
          target="_blank"
          rel="noreferrer"
        >
          Built with Amazon Connect, Lex V2, and Terraform
        </a>
      </div>
    </div>
  );
};

export default Footer;