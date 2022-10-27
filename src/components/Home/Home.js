import React from "react";
import "./Home.css";
import Carousel from "react-bootstrap/Carousel";
import p1 from "../../assets/image/p1.jpeg";
import p2 from "../../assets/image/p2.jpg";
import p3 from "../../assets/image/p3.jpeg";
import { Button, Col, Row } from "react-bootstrap";

const Home = () => {
  // using context

  // google login

  return (
    <div>
      <Carousel>
        <Carousel.Item className="caroselPic">
          <img className="d-block w-100" src={p1} alt="Second slide" />
          <Carousel.Caption>
            <h3>Learning point</h3>
            <p className="text-warning">
              “For the things we have to learn before we can do them, we learn
              by doing them.” ― Aristotle. “Learning is not attained by chance,
              it must be sought for with ardor and attended to with diligence.”
              ― Abigail Adams. “The beautiful thing about learning is that
              nobody can take it away from you.”
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="caroselPic">
          <img className="d-block w-100" src={p2} alt="Second slide" />

          <Carousel.Caption>
            <h3>Code buzzz</h3>
            <p className="text-warning">
              Knowledge is the eye of desire and can become the pilot of the
              soul. An expert is a man who knows just that much more about his
              subject than his associates. Most of us are nearer the top than we
              think. We fail to realize how easy it is, how necessary it is to
              learn that fraction more.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="caroselPic">
          <img className="d-block w-100" src={p3} alt="Third slide" />

          <Carousel.Caption>
            <h3 className="text-dark">Why is learning important?</h3>
            <p className="text-warning">
              Summary. Continuous learning is important because it helps people
              to feel happier and more fulfilled in their lives and careers, and
              to maintain stronger cognitive functioning when they get older.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Home;
