import React from "react";
import { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import logo from "../../assets/logo/Photo-studio.png";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import "./Header.css";

const Header = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>
            <div className="d-flex justify-content-center title  align-item-center">
              <img src={logo} alt="" />
              <Link to="/">Code-BuzzZZ</Link>
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto myNav">
              <Link to="/Courses">Courses</Link>
              <Link to="/question">FAQ</Link>
              <Link to="/blog">Blog</Link>
            </Nav>
            <Nav className="myNav">
              <Nav.Link href="#deets">More deets</Nav.Link>
              <Link to="/login">Login</Link>
              <Nav.Link eventKey={2} href="#memes">
                {user.displayName}
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
