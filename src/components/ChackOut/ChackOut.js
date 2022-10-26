import React from "react";
import { useLoaderData } from "react-router-dom";
import Card from "react-bootstrap/Card";
import { ToastContainer } from "react-toastify";

const ChackOut = () => {
  const allChackOut = useLoaderData();

  const {
    name,
    picture,

    duration,
  } = allChackOut;
  return (
    <div>
      <h4>Congratulations!! You are Enroll for this course</h4>
      <ToastContainer></ToastContainer>
      <Card className="text-center">
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Img className="picture-card" variant="top" src={picture} />
          <p>Duration: {duration}</p>
          <h3>Have Fun And Stay Safe</h3>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ChackOut;
