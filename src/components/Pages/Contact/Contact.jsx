import React from "react";
import "./Contact.scss";

const Contact = () => {

  return (
    <div className="container">
      <div className="contact-container">
        <div className="contact-header">
          <h1>CONTACT US</h1>
        </div>
      </div>

      <div className="contact-descritpion">
        <h1>
          To make an enquiry please fill out the form below and we will get back
          to you as soon as possible. If your query is urgent, please phone us.
        </h1>
      </div>

      <div className="form-details--container">
        <div className="complete-form">
          <div class="container">
            <h1>CONTACT US</h1>
            <form
              target="_blank"
              action="https://formsubmit.co/renato.sormani@gmail.com"
              method="POST"
            >
              <div class="form-group">
                <div class="form-row">
                  <div class="col">
                    <input
                      type="text"
                      name="name"
                      class="form-control"
                      placeholder="Full Name"
                      required
                    />
                  </div>
                  <div class="col">
                    <input
                      type="email"
                      name="email"
                      class="form-control"
                      placeholder="Email Address"
                      required
                    />
                  </div>
                </div>
              </div>
              <div class="form-group">
                <textarea
                  placeholder="Your Message"
                  class="form-control"
                  name="message"
                  rows="10"
                  required
                ></textarea>
              </div>
              <input type="hidden" name="_captcha" value="false" />
              <button type="submit" class="btn btn-lg btn-dark btn-block">
                Submit Form
              </button>
            </form>
          </div>
        </div>

        <div className="contact-box">
          <h2>GET IN TOUCH...</h2>
          <br></br>
          <div className="all-details">
            <div className="phone-details">
              <h1>CONTACT DETAILS</h1>
              <p>
                Email:{" "}
                <a
                  className="email-address"
                  href="mailto:info@jrdelectrical.co.uk"
                >
                  info@jrdelectrical.co.uk
                </a>
              </p>
              <p>Mobile: 07831 644 244</p>
              <p>24-Hr Mobile: 07824 388 770</p>
            </div>
            <br></br>
            <div className="office-details">
              <h1>HEAD OFFICE</h1>
              <p>JRD Electrical Ltd</p>
              <p>154 stoke Lane,</p>
              <p>Bristol, BS9 3RN</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
