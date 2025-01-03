import React from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import Tilt from 'react-parallax-tilt';
import "./BlogSection.css";

const BlogSection = () => {
    return (
        <div id="blogs">
            <Container>
            <h1 className="text-center font-details-b pb-4">Medium Blogs</h1>
                <CardDeck>
                    <Tilt >
                        <Card className="card-resize">
                            <Card.Img className="image-resize" variant="top" src="https://miro.medium.com/max/1000/0*DPnItWaXWVDA8qGJ" alt="Blog 1" />
                            <Card.Body>
                                <a className="text-dark text-decoration-none" href="https://medium.com/@hamweykyle/launching-a-portfolio-site-using-aws-amplify-f4059f8ac7db" target="_blank">
                                    <Card.Title >Hosting a React App via AWS Amplify</Card.Title>
                                    <Card.Text>
                                        January 4th, 2025
                                    </Card.Text>
                                </a>
                            </Card.Body>
                        </Card>
                    </Tilt>
                    <Tilt >
                        <Card className="card-resize">
                            <Card.Img className="image-resize" variant="top" src="https://miro.medium.com/max/700/0*g61HreCnSrR1JDUf" alt="Blog 2" />
                            <Card.Body>
                                <a className="text-dark text-decoration-none" href="xxxxx" target="_blank">
                                    <Card.Title >Building a ChatBot using AWS LEX</Card.Title>
                                    <Card.Text>
                                    Coming Soon
                                    </Card.Text>
                                </a>
                            </Card.Body>
                        </Card>
                    </Tilt>
                </CardDeck>

            </Container>
        </div>
    )
}
export default BlogSection
