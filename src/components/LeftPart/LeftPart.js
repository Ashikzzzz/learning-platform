import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";

const LeftPart = () => {
  const [categories, setCategoris] = useState([]);
  console.log(categories);

  useEffect(() => {
    fetch("http://localhost:5000/category")
      .then((res) => res.json())
      .then((data) => setCategoris(data));
  }, []);

  return (
    <div>
      <Button className="d-flex  align-items-center" variant="dark" size="lg">
        <FaGoogle className="me-2"></FaGoogle> Sign In With Google
      </Button>
      <Button
        className="d-flex mt-3  align-items-center"
        variant="success"
        size="lg"
      >
        <FaGithub className="me-2"></FaGithub> Sign In With GitHub
      </Button>
      <h2>All have {categories.length} Categories</h2>
      {categories.map((c) => {
        return (
          <h6 key={c.id}>
            {" "}
            <Link to={`/category/${c.id}`}>{c.name}</Link>
          </h6>
        );
      })}
    </div>
  );
};

export default LeftPart;