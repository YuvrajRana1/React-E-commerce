import React from "react";
import { Link } from "react-router-dom";
import { Footer, Navbar } from "../components";

const Login = () => {
  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center text-light">Login</h1>
        <hr className="bg-light" />
        <div className="row my-4 h-100">
          <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
            <form>
              <div className="my-3">
                <label htmlFor="display-4" className="text-light">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                  style={{ backgroundColor: '#2c2c2c', color: '#fff' }}
                />
              </div>
              <div className="my-3">
                <label htmlFor="floatingPassword display-4" className="text-light">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="floatingPassword"
                  placeholder="Password"
                  style={{ backgroundColor: '#2c2c2c', color: '#fff' }}
                />
              </div>
              <div className="my-3">
                <p className="text-light">New Here? <Link to="/register" className="text-decoration-underline text-info">Register</Link> </p>
              </div>
              <div className="text-center">
                <button className="my-2 mx-auto btn btn-dark btn-hover" type="submit" disabled>
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
