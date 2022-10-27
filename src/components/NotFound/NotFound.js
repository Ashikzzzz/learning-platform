import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <h1 className="text-center">
        {" "}
        You are reached the wrong path go to <Link to="/">Home</Link>
      </h1>
    </div>
  );
};

export default NotFound;
