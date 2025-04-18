import React from "react";
import {
  Navbar,
  Container,
  Offcanvas,
  Nav,
  NavDropdown,
  Form,
  Button,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import applelogo from "../assets/img/assets/assets/logos/apple.svg";
import "../App.css";

const CustomNavbar = function () {
  return (
    <Navbar expand="lg" className="mb-3 bg-secondary">
      <Container fluid>
        <Navbar.Brand href="#" className="d-flex">
          <img src={applelogo} alt="Apple Logo" style={{ width: "20px" }} />
          Music
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="offcanvasNavbar" />
        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel">Menu</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">start Jam</Nav.Link>
              <NavDropdown title="profile" id="offcanvasNavbarDropdown">
                <NavDropdown.Item href="#action1">Go upgrade</NavDropdown.Item>
                <NavDropdown.Item href="#action2">setting</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action3">logout</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-danger">Search</Button>
            </Form>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
