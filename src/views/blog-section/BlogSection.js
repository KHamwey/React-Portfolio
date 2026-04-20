import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Tilt from "react-parallax-tilt";
import "./BlogSection.css";

const BlogSection = () => {
  return (
    <div id="blogs">
      <Container>
        <h1 className="text-center font-details-b pb-2 mb-0">Medium Blogs</h1>
        <Row xs={1} md={2} className="g-4 justify-content-center blog-cards-row">
          <Col className="d-flex justify-content-center">
            <Tilt>
              <Card className="card-resize h-100">
                <Card.Img
                  className="image-resize"
                  variant="top"
                  src="https://miro.medium.com/max/1000/0*DPnItWaXWVDA8qGJ"
                  alt="Blog 1"
                />
                <Card.Body>
                  <a
                    className="text-dark text-decoration-none"
                    href="https://medium.com/@hamweykyle/launching-a-portfolio-site-using-aws-amplify-f4059f8ac7db"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Card.Title>Hosting a React App via AWS Amplify</Card.Title>
                    <Card.Text>January 4th, 2025</Card.Text>
                  </a>
                </Card.Body>
              </Card>
            </Tilt>
          </Col>
          <Col className="d-flex justify-content-center">
            <Tilt>
              <Card className="card-resize h-100">
                <Card.Img
                  className="image-resize"
                  variant="top"
                  src="https://miro.medium.com/max/700/0*g61HreCnSrR1JDUf"
                  alt="Blog 2"
                />
                <Card.Body>
                  <a
                    className="text-dark text-decoration-none"
                    href="xxxxx"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Card.Title>Building a AWS Connect Call Center with full (IaC)</Card.Title>
                    <Card.Text>Coming Soon</Card.Text>
                  </a>
                </Card.Body>
              </Card>
            </Tilt>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default BlogSection;
