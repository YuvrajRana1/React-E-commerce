import React from "react";
import { Footer, Navbar } from "../components";

const ContactPage = () => {
  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center text-light">Contact Us</h1>
        <hr className="bg-light" />
        <div className="row my-4 h-100">
          <div className="col-md-6 col-lg-4 col-sm-8 mx-auto">
            <form>
              <div className="form my-3">
                <label htmlFor="Name" className="text-light">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="Name"
                  placeholder="Enter your name"
                  style={{ backgroundColor: '#2c2c2c', color: '#fff' }}
                />
              </div>
              <div className="form my-3">
                <label htmlFor="Email" className="text-light">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="Email"
                  placeholder="name@example.com"
                  style={{ backgroundColor: '#2c2c2c', color: '#fff' }}
                />
              </div>
              <div className="form my-3">
                <label htmlFor="Message" className="text-light">Message</label>
                <textarea
                  rows={5}
                  className="form-control"
                  id="Message"
                  placeholder="Enter your message"
                  style={{ backgroundColor: '#2c2c2c', color: '#fff' }}
                />
              </div>
              <div className="text-center">
                <button
                  className="my-2 px-4 mx-auto btn btn-dark btn-hover"
                  type="submit"
                  disabled
                >
                  Send
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

export default ContactPage;
