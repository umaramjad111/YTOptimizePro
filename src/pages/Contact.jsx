import React from "react";

const Contact = () => (
  <div className="d-flex align-items-center justify-content-center min-vh-100 bg-light">
    <div className="container bg-white p-5 rounded shadow">
      <h1 className="h2 fw-bold mb-3">Contact Us</h1>
      <p>For inquiries or feedback, please email us at:</p>
      <form>
        <div className="mb-3">
          <input
            type="email"
            className="form-control"
            placeholder="Your Email"
          />
        </div>
        <div className="mb-3">
          <textarea
            className="form-control"
            rows="4"
            placeholder="Message"
          ></textarea>
        </div>
        <button type="submit" className="btn btn-danger">
          Send Message
        </button>
      </form>
    </div>
  </div>
);

export default Contact;
