import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Register = () => {
  // register controll
  const handleSubmitRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, photoURL, email, password);
  };

  return (
    <form onSubmit={handleSubmitRegister} className="w-50 mt-5">
      <Form.Group className="mb-5" controlId="formBasicEmail">
        <Form.Control name="name" type="text" placeholder="Your Name" />
      </Form.Group>
      <Form.Group className="mb-5" controlId="formBasicEmail">
        <Form.Control name="photoURL" type="text" placeholder="Your PhotoURl" />
      </Form.Group>
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

      <Button variant="primary" type="submit">
        Sign Up
      </Button>
    </form>
  );
};

export default Register;
