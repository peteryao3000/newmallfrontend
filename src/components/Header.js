import React from "react";
import { Nav, Navbar, Container, NavItem } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faUser } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <Link to="/">
            <Navbar.Brand>Emma-Store</Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Link to="/cart">
                <h5>
                  <FontAwesomeIcon icon={faCartShopping} />
                  &nbsp;&nbsp;Cart&nbsp;&nbsp;
                </h5>
              </Link>
              <Link to="/login">
                <h5>
                  <FontAwesomeIcon icon={faUser} />
                  &nbsp;&nbsp;Login
                </h5>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
