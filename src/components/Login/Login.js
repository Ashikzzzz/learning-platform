import React from "react";
import { useState } from "react";
import { useContext } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";

const Login = () => {
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  // context use
  const { signIn, googleProvider, gitProvider } = useContext(AuthContext);

  const googleNewProvider = new GoogleAuthProvider();
  const gitNewProvider = new GithubAuthProvider();

  // login controll
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
        setError("");
        navigate(from, { replace: true });
      })
      .catch((error) => setError("Password is wrong"));
  };

  const handleGoogleLogin = () => {
    googleProvider(googleNewProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => console.log(error));
  };

  // gitHub login
  const handleGitLogin = () => {
    gitProvider(gitNewProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <form onSubmit={handleLogin} className="w-50 mx-auto mt-5">
        <Form.Group className="mb-5" controlId="formBasicEmail">
          <Form.Control
            name="email"
            type="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            name="password"
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Login
        </Button>
        <p>
          You need to <Link to="/register"> Register</Link>First{" "}
        </p>
        <p className="text-danger"> {error}</p>
      </form>
      <Button
        onClick={handleGoogleLogin}
        className="d-flex mt-3 align-items-center mx-auto"
        variant="dark"
        size="lg"
      >
        <FaGoogle className="me-2"></FaGoogle> Sign In With Google
      </Button>
      <Button
        onClick={handleGitLogin}
        className="d-flex mt-3 mx-auto align-items-center"
        variant="success"
        size="lg"
      >
        <FaGithub className="me-2"></FaGithub> Sign In With GitHub
      </Button>
    </div>
  );
};

export default Login;
