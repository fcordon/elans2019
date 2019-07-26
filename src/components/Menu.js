import React from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

function Menu() {
  return (
    <Navbar bg="light" expand="lg">
      <div className="container">
        <Navbar.Brand className="navbar-brand">
          Les Elans loisir de Champigny
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <LinkContainer to={"/equipe"}>
              <Nav.Link eventKey={0}>L'équipe</Nav.Link>
            </LinkContainer>
            <LinkContainer to={"/calendrier"}>
              <Nav.Link eventKey={1}>Calendrier</Nav.Link>
            </LinkContainer>
            <NavDropdown.Divider />
            <LinkContainer to={"/classement"}>
              <Nav.Link eventKey={2}>Classement</Nav.Link>
            </LinkContainer>
            <LinkContainer to={"/classement"}>
              <Nav.Link eventKey={3}>Nous contacter</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}

export default Menu
