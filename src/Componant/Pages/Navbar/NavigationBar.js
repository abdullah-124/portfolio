import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./nav.css";

export default function NavigationBar() {
  return (
    <>
      <Navbar expand="md">
        <Container fluid>
          <Navbar.Brand className="nav-logo">
            <span className="text-past">Abd</span>ullah
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto d-lg-flex align-items-center">
              <Nav.Link href="#home">
                <Link className="route-link" to={"/"}>
                  <span className="text-past">00. </span>Home
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link className="route-link" to={"/about"}>
                  <span className="text-past">01. </span>About
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link className="route-link" to={"/projects"}>
                  <span className="text-past">02. </span>Projects
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link className="route-link" to={"/contact"}>
                  <span className="text-past">03. </span>Contact
                </Link>
              </Nav.Link>
              <Nav.Link className="">
                <button className="button-primary-outline">Resume</button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
