import React from "react";
import { useLoaderData } from "react-router-dom";
import Card from "react-bootstrap/Card";

import { FaEye, FaStar, IconName } from "react-icons/fa";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

import { Button } from "react-bootstrap";

const Details = () => {
  const details = useLoaderData();
  const { about, name, picture, rating, _id, view } = details;
  //   console.log(details);

  const handleBuyNow = () => {
    toast("Congratulation! You enrolled fro this course");
  };

  return (
    <div>
      <Card className="text-center">
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Img className="picture-card" variant="top" src={picture} />
          <Card.Text className="mt-5">{about}</Card.Text>
          <p className="text-warning">Want to hire this course?</p>
          <Button onClick={handleBuyNow} variant="outline-success">
            Enroll Now
          </Button>{" "}
          <ToastContainer />
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
