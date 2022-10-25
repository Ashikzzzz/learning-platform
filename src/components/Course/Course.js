import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { FaEye, FaStar, IconName } from "react-icons/fa";
import "./Course.css";

const Course = ({ course }) => {
  const { about, name, picture, rating, _id, view } = course;
  console.log(course);
  return (
    <div className="card-main mb-5">
      <Card className="text-center">
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Img className="picture-card" variant="top" src={picture} />
          <Card.Text className="mt-5">
            <p>
              Continue to <Link>See more</Link>{" "}
            </p>
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted">
          <div className="d-flex justify-content-around align-items-center">
            <div>
              <p className="d-flex align-items-center ">
                Rating: {rating}
                <FaStar className="text-warning ms-2"></FaStar>{" "}
              </p>
            </div>
            <div>
              <p className="d-flex align-items-center ">
                <FaEye className="me-2"></FaEye> View: {view}
              </p>
            </div>
          </div>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default Course;
