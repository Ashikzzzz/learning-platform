import React from "react";
import { useLoaderData } from "react-router-dom";
import Card from "react-bootstrap/Card";
import { ToastContainer } from "react-toastify";
import ReactPrint from "react-to-print";
import { useRef } from "react";
import "./ChackOut.css";
import { Button } from "react-bootstrap";

const ChackOut = () => {
  const ref = useRef();
  const allChackOut = useLoaderData();

  const {
    name,
    picture,

    duration,
  } = allChackOut;
  console.log(allChackOut);
  return (
    <div ref={ref} className="print">
      <h4>Congratulations!! You are Enroll for this course</h4>
      <ToastContainer></ToastContainer>
      <Card className="text-center">
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Img className="picture-cart" variant="top" src={picture} />
          <p>Duration: {duration}</p>
          <h3>Have Fun And Stay Safe</h3>
          <ReactPrint
            trigger={() => (
              <Button className="btn btn-primary">Download pdf</Button>
            )}
            content={() => ref.current}
          ></ReactPrint>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ChackOut;
