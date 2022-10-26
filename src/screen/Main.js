import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";

const Main = () => {
  return (
    <div>
      <Header></Header>

      <Row>
        <Col>
          <Outlet></Outlet>
        </Col>
      </Row>
    </div>
  );
};

export default Main;
