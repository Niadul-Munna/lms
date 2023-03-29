import React from "react";

const Content = () => {
  return (
    <div className="page-content bg-white">
      <div
        className="page-banner ovbl-dark"
        style={{ backgroundImage: "url(assets/images/banner/banner2.jpg)" }}
      >
        <div className="container">
          <div className="page-banner-entry">
            <h1 className="text-white">Contact Us 2</h1>
          </div>
        </div>
      </div>

      <div className="breadcrumb-row">
        <div className="container">
          <ul className="list-inline">
            <li>
              <a href="#">Home</a>
            </li>
            <li>Contact Us 2</li>
          </ul>
        </div>
      </div>

      <div className="page-banner contact-page">
        <div className="container-fuild">
          <div className="row m-lr0">
            <div className="col-lg-6 col-md-6 p-lr0 d-flex">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3448.1298878182047!2d-81.38369578541523!3d30.204840081824198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e437ac927a996b%3A0x799695b1a2b970ab!2sNona+Blue+Modern+Tavern!5e0!3m2!1sen!2sin!4v1548177305546"
                className="align-self-stretch d-flex"
                style={{ width: "100%", width: "100%", minHeight: "300px" }}
                allowfullscreen
              ></iframe>
            </div>
            <div className="col-lg-6 col-md-6 section-sp2 p-lr30">
              <form
                className="contact-bx ajax-form"
                action="http://educhamp.themetrades.com/demo/assets/script/contact.php"
              >
                <div className="ajax-message"></div>
                <div className="heading-bx left p-r15">
                  <h2 className="title-head">
                    Get In <span>Touch</span>
                  </h2>
                  <p>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page
                  </p>
                </div>
                <div className="row placeani">
                  <div className="col-lg-6 ">
                    <div className="form-group">
                      <div className="input-group">
                        <label>Your Name</label>
                        <input
                          name="name"
                          type="text"
                          required
                          className="form-control valid-character"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <div className="input-group">
                        <label>Your Email Address</label>
                        <input
                          name="email"
                          type="email"
                          className="form-control"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <div className="input-group">
                        <label>Your Phone</label>
                        <input
                          name="phone"
                          type="text"
                          required
                          className="form-control int-value"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <div className="input-group">
                        <label>Subject</label>
                        <input
                          name="subject"
                          type="text"
                          required
                          className="form-control"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <div className="input-group">
                        <label>Type Message</label>
                        <textarea
                          name="message"
                          rows="4"
                          className="form-control"
                          required
                        ></textarea>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <div className="input-group">
                        <div
                          className="g-recaptcha"
                          data-sitekey="6Lf2gYwUAAAAAJLxwnZTvpJqbYFWqVyzE-8BWhVe"
                          data-callback="verifyRecaptchaCallback"
                          data-expired-callback="expiredRecaptchaCallback"
                        ></div>
                        <input
                          className="form-control d-none"
                          style={{ display: "none" }}
                          data-recaptcha="true"
                          required
                          data-error="Please complete the Captcha"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <button
                      name="submit"
                      type="submit"
                      value="Submit"
                      className="btn button-md"
                    >
                      {" "}
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
