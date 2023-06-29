import React from 'react'

const PublicUserFooter = () => {
  return (
    <>
  <div
    className="container-fluid position-relative overlay-top bg-dark text-white-50 py-5"
    style={{ marginTop: 90 }}
  >
    <div className="container mt-5 pt-5">
      <div className="row">
        <div className="col-md-6 mb-5">
          <a href="home" className="navbar-brand">
            <h1 className="mt-n2 text-uppercase text-white">
              <img src="img\lg - Copy.jpg" width="50px" />
              Placement cell
            </h1>
          </a>
          <p className="m-0">
            Accusam nonumy clita sed rebum kasd eirmod elitr. Ipsum ea lorem at
            et diam est, tempor rebum ipsum sit ea tempor stet et consetetur
            dolores. Justo stet diam ipsum lorem vero clita diam
          </p>
        </div>
        <div className="col-md-6 mb-5">
          {/* <h3 class="text-white mb-4">Newsletter</h3> */}
          <div className="w-100">
            <div className="input-group">
              {/* <input type="text" class="form-control border-light" style="padding: 30px;" placeholder="Your Email Address"> */}
              <div className="input-group-append">
                {/* <button class="btn btn-primary px-4">Sign Up</button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4 mb-5">
          <h3 className="text-white mb-4">Navigation</h3>
          <div className="d-flex flex-column justify-content-start">
            <a className="text-white-50 mb-2" href="#">
              <i className="fa fa-angle-right mr-2" />
              Home
            </a>
            <a className="text-white-50 mb-2" href="#">
              <i className="fa fa-angle-right mr-2" />
              About
            </a>
            <a className="text-white-50 mb-2" href="#">
              <i className="fa fa-angle-right mr-2" />
              Contact
            </a>
            <a className="text-white-50 mb-2" href="#">
              <i className="fa fa-angle-right mr-2" />
              Register
            </a>
          </div>
        </div>
        <div className="col-md-4 mb-5">
          <h3 className="text-white mb-4">Get In Touch</h3>
          <p>
            <i className="fa fa-map-marker-alt mr-2" />
            123 Street, Kochin, KERALA
          </p>
          <p>
            <i className="fa fa-phone-alt mr-2" />
            +012 345 67890
          </p>
          <p>
            <i className="fa fa-envelope mr-2" />
            info@web.com
          </p>
          <div className="d-flex justify-content-start mt-4">
            <a className="text-white mr-4" href="#">
              <i className="fab fa-2x fa-twitter" />
            </a>
            <a className="text-white mr-4" href="#">
              <i className="fab fa-2x fa-facebook-f" />
            </a>
            <a className="text-white mr-4" href="#">
              <i className="fab fa-2x fa-linkedin-in" />
            </a>
            <a className="text-white" href="#">
              <i className="fab fa-2x fa-instagram" />
            </a>
          </div>
        </div>
        {/* <div class="col-md-4 mb-5">
              <h3 class="text-white mb-4">Our Courses</h3>
              <div class="d-flex flex-column justify-content-start">
                  <a class="text-white-50 mb-2" href="#"><i class="fa fa-angle-right mr-2"></i>Web Design</a>
                  <a class="text-white-50 mb-2" href="#"><i class="fa fa-angle-right mr-2"></i>Apps Design</a>
                  <a class="text-white-50 mb-2" href="#"><i class="fa fa-angle-right mr-2"></i>Marketing</a>
                  <a class="text-white-50 mb-2" href="#"><i class="fa fa-angle-right mr-2"></i>Research</a>
                  <a class="text-white-50" href="#"><i class="fa fa-angle-right mr-2"></i>SEO</a>
              </div>
          </div> */}
        <div className="col-md-4 mb-5">
          <h3 className="text-white mb-4">Quick Links</h3>
          <div className="d-flex flex-column justify-content-start">
            <a className="text-white-50 mb-2" href="#">
              <i className="fa fa-angle-right mr-2" />
              Privacy Policy
            </a>
            <a className="text-white-50 mb-2" href="#">
              <i className="fa fa-angle-right mr-2" />
              Terms &amp; Condition
            </a>
            <a className="text-white-50 mb-2" href="#">
              <i className="fa fa-angle-right mr-2" />
              Regular FAQs
            </a>
            <a className="text-white-50 mb-2" href="#">
              <i className="fa fa-angle-right mr-2" />
              Help &amp; Support
            </a>
            <a className="text-white-50" href="#">
              <i className="fa fa-angle-right mr-2" />
              Contact
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div
    className="container-fluid bg-dark text-white-50 border-top py-4"
    style={{ borderColor: "rgba(256, 256, 256, .1) !important" }}
  >
    <div className="container">
      <div className="row">
        <div className="col-md-6 text-center text-md-left mb-3 mb-md-0">
          <p className="m-0">
            Copyright ©{" "}
            <a className="text-white" href="#">
              Your Site Name
            </a>
            . All Rights Reserved.
          </p>
        </div>
        <div className="col-md-6 text-center text-md-right">
          <p className="m-0">
            Designed by{" "}
            <a className="text-white" href="https://htmlcodex.com">
              HTML Codex
            </a>
          </p>
        </div>
      </div>
    </div>
  </div>
</>

  )
}

export default PublicUserFooter