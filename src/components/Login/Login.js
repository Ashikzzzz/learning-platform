import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { FaGithub, FaGoogle } from "react-icons/fa";

const Login = () => {
  return (
    <div>
      <Form className="w-50 mt-5">
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
      </Form>
    </div>
  );
};

export default Login;
