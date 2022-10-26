import React from "react";

import { useContext } from "react";
import { Button, Image } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaToggleOff, FaToggleOn, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

import logo from "../../assets/logo/Photo-studio.png";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

import "./Header.css";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  // signout control
  const handleSignOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

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
            <Nav>
              <Nav.Link>
                {user?.uid ? (
                  <>
                    <span> {user?.displayName}</span>
                    <Button
                      onClick={handleSignOut}
                      className="ms-2"
                      variant="secondary"
                      size="sm"
                    >
                      Log Out
                    </Button>
                  </>
                ) : (
                  <>
                    <Button className="yourNav me-2" variant="outline-primary">
                      <Link to="/login">Login</Link>
                    </Button>
                    <Button className="yourNav" variant="outline-primary">
                      <Link to="/register">Register</Link>
                    </Button>
                  </>
                )}
              </Nav.Link>

              <Nav.Link eventKey={2} href="#memes">
                {user?.photoURL ? (
                  <Image
                    style={{ height: "40px" }}
                    roundedCircle
                    src={user.photoURL}
                  ></Image>
                ) : (
                  <FaUser></FaUser>
                )}
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
        <div>
          <FaToggleOn></FaToggleOn>
        </div>
      </Navbar>
    </div>
  );
};

export default Header;
