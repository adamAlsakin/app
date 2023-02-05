
import React from "react";
import { Navbar, Nav, Container, } from "react-bootstrap";
import "./Navs.css";
import logo from "../../assest/images/logo1.PNG"
import { Link
 } from "react-router-dom";



const Navs = () => {
    return (
        <Navbar  expand="lg">
  <Container>
    <Navbar.Brand href="/">
        <img src= {logo} title="logo"/>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
        <Nav.Link href="/">Accueil</Nav.Link>
        <Nav.Link href="/a-propos">À propos</Nav.Link>
        <Nav.Link href="/actualites">Actualités</Nav.Link>
        <Nav.Link href="/evenement">évènement</Nav.Link>
        <Nav.Link href="/contact">Contact</Nav.Link>
        <Nav.Link href="/login">Login</Nav.Link>
        <Nav.Link href="/register">Register</Nav.Link>
        
        
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
        
    );
}
export default Navs;