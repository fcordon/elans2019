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
            <LinkContainer to={"/calendrier"}>
              <Nav.Link eventKey={1}>Calendrier</Nav.Link>
            </LinkContainer>
            {path === '/' && <AnchorLink className='nav-link' href='#classement'>Classement</AnchorLink>}
            <NavDropdown.Divider />
            <LinkContainer to={"/lequipe"}>
              <Nav.Link eventKey={2}>L'équipe</Nav.Link>
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
