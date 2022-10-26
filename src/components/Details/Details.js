import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Card from "react-bootstrap/Card";
import "./Details.css";
import { FaEye, FaStar, IconName } from "react-icons/fa";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

import { Button } from "react-bootstrap";

const Details = () => {
  const details = useLoaderData();
  const {
    about,
    name,
    picture,
    rating,
    _id,
    view,
    category_id,
    duration,
    price,
  } = details;
  //   console.log(details);

  return (
    <div>
      <Card className="text-center">
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Img className="picture-card" variant="top" src={picture} />
          <Card.Text className="mt-5">{about}</Card.Text>
          <h6>Price: {price}</h6>
          <p>Duration: {duration}</p>
          <p className="text-warning">Want to hire this course?</p>
          <Button className="enroll" variant="outline-success">
            <Link to={`/chackout/${category_id}`}>Enroll Now</Link>
          </Button>{" "}
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

export default Details;
