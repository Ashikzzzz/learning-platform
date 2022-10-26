import React from "react";
import "./Home.css";
import Carousel from "react-bootstrap/Carousel";
import o4 from "../../assets/image/o4.jpeg";
import o2 from "../../assets/image/o2.jpeg";
import o3 from "../../assets/image/o3.jpeg";
import { Button, Col, Row } from "react-bootstrap";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";

const Home = () => {
  // using context
  const { googleProvider } = useContext(AuthContext);
  const googleNewProvider = new GoogleAuthProvider();

  // google login
  const handleGoogleLogin = () => {
    googleProvider(googleNewProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <Row>
        <Col lg="3">
          <Button
            onClick={handleGoogleLogin}
            className="d-flex mt-3 align-items-center"
            variant="dark"
            size="lg"
          >
            <FaGoogle className="me-2"></FaGoogle> Sign In With Google
          </Button>
          <Button
            className="d-flex mt-3  align-items-center"
            variant="success"
            size="lg"
          >
            <FaGithub className="me-2"></FaGithub> Sign In With GitHub
          </Button>
        </Col>
        <Col lg="9">
          <Carousel>
            <Carousel.Item className="caroselPic">
              <img className="d-block w-100" src={o4} alt="Second slide" />
              <Carousel.Caption>
                <h3>Learning point</h3>
                <p className="text-dark">
                  “For the things we have to learn before we can do them, we
                  learn by doing them.” ― Aristotle. “Learning is not attained
                  by chance, it must be sought for with ardor and attended to
                  with diligence.” ― Abigail Adams. “The beautiful thing about
                  learning is that nobody can take it away from you.”
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="caroselPic">
              <img className="d-block w-100" src={o2} alt="Second slide" />

              <Carousel.Caption>
                <h3>Code buzzz</h3>
                <p className="text-light">
                  Knowledge is the eye of desire and can become the pilot of the
                  soul. An expert is a man who knows just that much more about
                  his subject than his associates. Most of us are nearer the top
                  than we think. We fail to realize how easy it is, how
                  necessary it is to learn that fraction more.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="caroselPic">
              <img className="d-block w-100" src={o3} alt="Third slide" />

              <Carousel.Caption>
                <h3>Why is learning important?</h3>
                <p className="text-light">
                  Summary. Continuous learning is important because it helps
                  people to feel happier and more fulfilled in their lives and
                  careers, and to maintain stronger cognitive functioning when
                  they get older.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
    </div>
  );
};

export default Home;
