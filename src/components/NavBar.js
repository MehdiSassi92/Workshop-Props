import React from "react";
import { Container, Navbar } from "react-bootstrap";

const NavBar = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt="home"
              src="https://i.pinimg.com/736x/b3/cc/d5/b3ccd57b054a73af1a0d281265b54ec8.jpg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            Home
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
