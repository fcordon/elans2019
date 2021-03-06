import React, { useState } from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { LinkContainer } from 'react-router-bootstrap'

const Menu = (props) => {
  const [path, setPath] = useState(props.pathname.location.pathname)

  props.pathname.listen((location) => {
    return setPath(location.pathname)
  })

  return (
    <Navbar bg="light" expand="lg" fixed="top" collapseOnSelect>
      <div className="container">
        <Navbar.Brand className="navbar-brand">
          <LinkContainer to={"/"}>
              <Nav.Link eventKey={0}>Les Elans loisir de Champigny</Nav.Link>
          </LinkContainer>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            {path === '/' && <AnchorLink className='nav-link' href='#classement'>Classement</AnchorLink>}
            <LinkContainer to={"/calendrier"}>
              <Nav.Link eventKey={1}>Calendrier</Nav.Link>
            </LinkContainer>
            <LinkContainer to={"/resultats"}>
              <Nav.Link eventKey={2}>Résultats</Nav.Link>
            </LinkContainer>
            <NavDropdown.Divider />
            <LinkContainer to={"/lequipe"}>
              <Nav.Link eventKey={3}>L'équipe</Nav.Link>
            </LinkContainer>
            <LinkContainer to={"/statistiques"}>
              <Nav.Link eventKey={4}>Les Stats</Nav.Link>
            </LinkContainer>
            <LinkContainer to={"/top-five"}>
              <Nav.Link eventKey={5}>Les Top 5</Nav.Link>
            </LinkContainer>
            <NavDropdown.Divider />
            <AnchorLink className='nav-link' href='#footer'>Nous contacter</AnchorLink>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}

export default Menu
