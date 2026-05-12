import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Logo from "../../assets/icons/logo.png";
import { SCHEDULE_APPOINTMENT_URL } from "../../constants/links";
import "./NavBar.css";

 const NavBar = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="md"
            fixed="top"
             className="animate-navbar nav-theme justify-content-between"
             variant="dark">
                <Navbar.Brand href="#home">
                    <img className="logo" src={Logo} alt='Logo'/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link className="call-nav-link" href="tel:+18774246658">Call AI</Nav.Link>
                        <Nav.Link
                            className="nav-schedule-cta"
                            href={SCHEDULE_APPOINTMENT_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            title="Open Google Calendar — schedule a call"
                        >
                            <i className="fas fa-calendar-alt nav-schedule-cta__icon" aria-hidden="true" />
                            <span className="nav-schedule-cta__text">Book a call</span>
                        </Nav.Link>
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#about">About</Nav.Link>
                        <Nav.Link href="#skills">Skills</Nav.Link>
                        <Nav.Link href="#projects">Projects</Nav.Link>
                        <Nav.Link href="#blogs">Blogs</Nav.Link>
                        <Nav.Link href="#contact">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}

export default NavBar