import React from "react";
import { Container, Dropdown, Nav, NavDropdown, Navbar } from "react-bootstrap";

const MenuBar = () => {
  return (
    <div>
      <Navbar bg="warning" data-bs-theme="dark">
      <Container>
      <Navbar.Brand href="#home">My Apps</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/workerlist">Worker List</Nav.Link>
              </Nav>
      </Container>
      </Navbar>
      
    </div>
  )
}

export default MenuBar
