import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./about.css";
import Profile from "../../assets/img/profile/profile.svg";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

const RESUME_URL =
  "https://drive.google.com/file/d/1J9tbuG_LZpYq9Im7tJ4PlHMjfhbTLoMd/view";
const AWS_EXAMPLES_URL =
  "https://docs.google.com/document/d/1E3dpcOhSFnz5-Wo1XbJMNZTC7u1ZzwcB6AedjvvaxkY/edit?usp=sharing";

const About = () => {
  return (
    <div id="about">
      <div className="about">
        <h1 className="pt-3 text-center font-details pb-2 about-section-title">
          ABOUT ME
        </h1>
        <Container>
          <Row className="pb-5 align-items-center justify-content-center">
            <Col xs={12} md={5} lg={4}>
              <div className="d-flex justify-content-center mb-2">
                <Image className="profile" alt="Kyle Hamwey profile" src={Profile} />
              </div>
            </Col>
            <Col xs={12} md={7} lg={8}>
              <div className="my-details rounded p-3 text-start w-100">
                <p className="about-lead mb-2">
                  I&apos;m an engineer with strengths in Python, TypeScript, Go, JavaScript, React, HTML, and CSS—plus hands-on{" "}
                  <strong>AWS</strong> work across networking, security patterns, and reliable deployments.
                </p>
                <p className="mb-5">
                  I enjoy turning messy requirements into clear, maintainable systems. Originally from Florida, I focus on practical delivery for users and teams.
                </p>

                <Row className="g-2 justify-content-center mt-3 w-100">
                  <Col xs="auto">
                    <a href="#contact">
                      <Button className="m-1" size="sm" variant="outline-primary">
                        Let&apos;s talk
                      </Button>
                    </a>
                  </Col>
                  <Col xs="auto">
                    <a href={RESUME_URL} target="_blank" rel="noopener noreferrer">
                      <Button className="m-1" size="sm" variant="outline-success">
                        Resume
                      </Button>
                    </a>
                  </Col>
                  <Col xs="auto">
                    <a href={AWS_EXAMPLES_URL} target="_blank" rel="noopener noreferrer">
                      <Button className="m-1" size="sm" variant="outline-warning">
                        AWS examples
                      </Button>
                    </a>
                  </Col>
                  <Col xs="auto">
                    <a href="https://medium.com/@hamweykyle" target="_blank" rel="noopener noreferrer">
                      <Button className="m-1" size="sm" variant="outline-secondary">
                        Medium
                      </Button>
                    </a>
                  </Col>
                  <Col xs="auto">
                    <a href="https://github.com/KHamwey" target="_blank" rel="noopener noreferrer">
                      <Button className="m-1" size="sm" variant="outline-dark">
                        GitHub
                      </Button>
                    </a>
                  </Col>
                  <Col xs="auto">
                    <a href="https://www.linkedin.com/in/kyle-h-b856b925/" target="_blank" rel="noopener noreferrer">
                      <Button className="m-1" size="sm" variant="outline-info">
                        LinkedIn
                      </Button>
                    </a>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default About;
