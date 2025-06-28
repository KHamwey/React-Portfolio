import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./about.css";
import Profile from "../../assets/img/profile/profile.svg";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

const About = () => {
  return (
    <div id="about">
      <div className="about">
        <h1 className="pt-3 text-center font-details pb-2" style={{ color: 'grey' }}>ABOUT ME</h1>
        <Container>
          <Row className=" pb-5 align-items-center">
            <Col xs={12} md={6}>
              <Row className="justify-content-center mb-2 mr-2 ">
                <Image className="profile justify-content-end" alt="profile" src={Profile} />
              </Row>
            </Col>
            <Col xs={12} md={6}>
              <Row className=" align-items-start p-2 my-details rounded tex align-text-left " >
                <br />I am an engineer with expertise in Python, Svelte, TypeScript, GO, JavaScript, React.js, HTML, CSS, and AWS infrastructure. Currently, I am expanding my skill set by learning React Native for mobile application development, deepening my knowledge of AWS infrastructure, and exploring technologies such as Twilio for IVR solutions and AWS Lex for chatbot integration.
                <br /><br />
                I am a passionate Programmer & Solutions Engineer and a lifelong learner, dedicated to continuous growth and innovation. Originally from Florida, I thrive on tackling new challenges and delivering impactful solutions for clients and users alike.
                <br />

                <Col className="d-flex justify-content-center flex-wrap">
                  <div>
                    <a href="#contact">
                      <Button className="m-2" variant="outline-primary">
                        Let's talk
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://drive.google.com/file/d/1zn3CkQ4bUp8LR0IZLOrR8210syt9wOiJ/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-success">
                        My Resume
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://medium.com/@hamweykyle" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-secondary">
                        Medium
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://github.com/KHamwey" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-dark">
                        GitHub
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://www.linkedin.com/in/kyle-h-b856b925/" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-info">
                        LinkedIn
                      </Button>
                    </a>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default About;