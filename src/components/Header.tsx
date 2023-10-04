import React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Navigation from "./Navigation";
import Profile from "./Profile";

const Header = () => (
  <header>
    <Container fluid>
      <Row>
        <Col xs={12} sm={6} lg={12}>
          <Profile />
        </Col>
        <Col xs={6} lg={12} className="d-none d-sm-block">
          <Navigation />
        </Col>
      </Row>
    </Container>
  </header>
);

export default Header;
