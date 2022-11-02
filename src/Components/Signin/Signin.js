import React from "react";
import { Link } from "react-router-dom";

const Signin = () => {
  return (
    <div>
      <form>
        <h1>Sign In</h1>
        <br />
        <input type="email" placeholder="email" />
        <br />
        <br />
        <input type="password" placeholder="password" /> <br />
        <br />
        <Link to={{ pathname: "/dashboard", state: { isAuth: false } }}>
          <button>Sign In</button>
        </Link>
      </form>
    </div>
  );
};

export default Signin;
