import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Company_logo from "../../../src/Image/Company-Logo/Company_logo.png";
import { useNavigate } from "react-router-dom";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import "./Style/Header2.css";
const Header2 = () => {
  const navigate = useNavigate();

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="light"
      variant="light"
      fixed="top"
      id="Navbars"
    >
      <Container>
        <Navbar.Brand onClick={() => navigate("/")}>
          <img src={Company_logo} className="nabvar-image"></img>
        </Navbar.Brand>
        <Navbar.Toggle  aria-controls="basic-navbar-nav" id="Navbar-09"/>
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="Header-2">
            <Nav.Link eventKey={1} onClick={() => navigate("/")} id="Header-3">
              Home
            </Nav.Link>
            <Nav.Link eventKey={2} onClick={() => navigate("/About-Us")}  id="Header-3" >
              About Us
            </Nav.Link>
            <Nav.Link eventKey={4} onClick={() => navigate("/Services")} id="Header-3">
              Services
            </Nav.Link>
            <Nav.Link eventKey={4} onClick={() => navigate("/News")} id="Header-3">
              News
            </Nav.Link>
            <Nav.Link eventKey={4} onClick={() => navigate("/Blog")} id="Header-3">
              Blog
            </Nav.Link>
            <Nav.Link eventKey={5} onClick={() => navigate("/Contact-Us")} id="Header-3">
              Contact Us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header2;
