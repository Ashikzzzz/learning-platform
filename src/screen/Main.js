import React from "react";
import { Col, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
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
      <Footer></Footer>
    </div>
  );
};

export default Main;
