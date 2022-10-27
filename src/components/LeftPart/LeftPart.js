import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const LeftPart = () => {
  const [categories, setCategoris] = useState([]);
  console.log(categories);

  useEffect(() => {
    fetch("https://code-buzz-server.vercel.app/category")
      .then((res) => res.json())
      .then((data) => setCategoris(data));
  }, []);

  return (
    <div>
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
