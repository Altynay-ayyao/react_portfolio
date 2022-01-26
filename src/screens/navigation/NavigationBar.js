import React from "react";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { navigationLinks } from "../../helpers/navigationLinks";
import Nav from "react-bootstrap/Nav";
import "./navigation.css";

const createLinks = () => {
  return navigationLinks.map((e, idx) => (
    <Nav.Link href={e.ref}>{e.name}</Nav.Link>
  ));
};
const NavigaionBar = () => {
  return (
    <div id="home">
      <Navbar className="navigation_container" expand="md">
        <Navbar.Brand href="#home" className="brand">
          Altynay Sabitzhan
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="collapse">
          <Nav className="element">{createLinks()}</Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavigaionBar;
