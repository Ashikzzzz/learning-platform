import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import Course from "../Course/Course";
import LeftPart from "../LeftPart/LeftPart";
import "./Courses.css";

const Courses = () => {
  const courses = useLoaderData();

  console.log(courses);
  return (
    <Container className="mt-5">
      <Row>
        <Col lg="4">
          <LeftPart></LeftPart>
        </Col>
        <Col lg="8">
          <div className="card-main">
            {courses.map((course) => (
              <Course key={course.id} course={course}></Course>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Courses;
