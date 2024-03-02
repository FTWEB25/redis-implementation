import React from "react";
import { Link } from "react-router-dom";

function Homepage() {
  return (
    <>
      <div>
        <h1>Homepage</h1>
        <Link to={"/signup"}>
          <button>Signup</button>
        </Link>
        <Link to={"/login"}>
          <button>Login</button>
        </Link>
      </div>
    </>
  );
}

export default Homepage;
