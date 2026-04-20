import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";

// skills
import { skills } from "./db-skills";

import "./skills.css";

const Skills = () => {
    return (
        <div className="pt-3 pb-3 skills-section" id="skills">
            <h1 className="text-center font-details-b pb-2 mb-0">TECH SKILLS</h1>
            <Row xs={1} md={2} lg={3} className="g-3 g-md-4 justify-content-center skills-grid">
                <Col className="d-flex justify-content-center">
                    <Card className="focus skills-card h-100 w-100">
                        <Card.Body className="py-2 px-3">
                            <Card.Title as="h2" className="text-center skills-card-title mb-1">Version Control</Card.Title>
                            <hr className="skills-card-hr" />
                            <Card.Text className="card-text skills-card-list d-flex flex-column align-items-start text-start">
                                <a className="text-dark text-decoration-none skills-card-link" href={skills.versionControl[0].link} target="_blank" rel="noopener noreferrer">
                                    <Image src={skills.versionControl[0].imgSrc} alt={skills.versionControl[0].imgAltText} rounded className="image-style m-1"></Image> {skills.versionControl[0].skillName}
                                </a>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                <Col className="d-flex justify-content-center">
                    <Card className="focus skills-card h-100 w-100">
                        <Card.Body className="py-2 px-3">
                            <Card.Title as="h2" className="text-center skills-card-title mb-1">Database</Card.Title>
                            <hr className="skills-card-hr" />
                            <Card.Text className="card-text skills-card-list d-flex flex-column align-items-start text-start">
                                {skills.databases.map((skill, index) => (
                                    <span key={index}>
                                        <a className="text-dark text-decoration-none skills-card-link" href={skill.link} target="_blank" rel="noopener noreferrer">
                                            <Image src={skill.imgSrc} alt={skill.imgAltText} rounded className="image-style m-1"></Image> {skill.skillName}
                                        </a>
                                    </span>
                                ))}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                <Col className="d-flex justify-content-center">
                    <Card className="focus skills-card h-100 w-100">
                        <Card.Body className="py-2 px-3">
                            <Card.Title as="h2" className="text-center skills-card-title mb-1">Frameworks</Card.Title>
                            <hr className="skills-card-hr" />
                            <Card.Text className="card-text skills-card-list d-flex flex-column align-items-start text-start">
                                {skills.frameworks.map((skill, index) => (
                                    <span key={index}>
                                        <a className="text-dark text-decoration-none skills-card-link" href={skill.link} target="_blank" rel="noopener noreferrer">
                                            <Image src={skill.imgSrc} alt={skill.imgAltText} rounded className="image-style m-1"></Image> {skill.skillName}
                                        </a>
                                    </span>
                                ))}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                <Col className="d-flex justify-content-center">
                    <Card className="focus skills-card h-100 w-100">
                        <Card.Body className="py-2 px-3">
                            <Card.Title as="h2" className="text-center skills-card-title mb-1">Hosting Platform</Card.Title>
                            <hr className="skills-card-hr" />
                            <Card.Text className="card-text skills-card-list d-flex flex-column align-items-start text-start">
                                {skills.hostingPlatforms.map((skill, index) => (
                                    <span key={index}>
                                        <a className="text-dark text-decoration-none skills-card-link" href={skill.link} target="_blank" rel="noopener noreferrer">
                                            <Image src={skill.imgSrc} alt={skill.imgAltText} rounded className="image-style m-1"></Image> {skill.skillName}
                                        </a>
                                    </span>
                                ))}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                <Col className="d-flex justify-content-center">
                    <Card className="focus skills-card h-100 w-100">
                        <Card.Body className="py-2 px-3">
                            <Card.Title as="h2" className="text-center skills-card-title mb-1">Scripting Languages</Card.Title>
                            <hr className="skills-card-hr" />
                            <Card.Text className="card-text skills-card-list d-flex flex-column align-items-start text-start">
                                {skills.frontend.map((skill, index) => (
                                    <span key={index}>
                                        <a className="text-dark text-decoration-none skills-card-link" href={skill.link} target="_blank" rel="noopener noreferrer">
                                            <Image src={skill.imgSrc} alt={skill.imgAltText} rounded className="image-style m-1"></Image> {skill.skillName}
                                        </a>
                                    </span>
                                ))}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default Skills;
