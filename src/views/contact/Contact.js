import React from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./contact.css";
import contactHeroBg from "../../assets/img/background/background.webp";

const Contact = () => {
  return (
    <div id="contact">
      <h1 className="pt-3 text-center font-details-b pb-3">CONTACT ME</h1>
      <div
        className="contact-jumbotron p-5 rounded"
        style={{
          backgroundColor: "#ffffff",
          backgroundImage: `url(${contactHeroBg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <Row>
          <Col className="d-flex justify-content-center flex-wrap">
            <div className="m-2">
              <a href="mailto:hamweykyle@ymail.com" target="_blank" rel="noopener noreferrer">
                <Button variant="outline-danger" title="hamweykyle@ymail.com">
                  <i className="fas fa-envelope-square"></i> Email Me
                </Button>
              </a>
            </div>
            <div className="m-2">
            <a href="https://www.linkedin.com/in/kyle-h-b856b925/" target="_blank" rel="noopener noreferrer">
                <Button variant="outline-primary" title="Visit my LinkenIn">
                  <i className="fab fa-linkedin"></i> LinkedIn
                </Button>
              </a>
            </div>
            
            <div className="m-2">
            <a href="https://github.com/KHamwey" target="_blank" rel="noopener noreferrer">
                <Button variant="outline-dark" title="My other projects">
                  <i className="fab fa-github-square"></i> GitHub
                </Button>
              </a>
            </div>
            <div className="m-2">
              <a href="https://medium.com/@hamweykyle" target="_blank" rel="noopener noreferrer">
                <Button id="medium-btn" variant="outline-info" title="Lets write together!">
                <i className="fab fa-medium"></i> Medium
                </Button>
              </a>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Contact;
