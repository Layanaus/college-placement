import React from 'react';

const PublicUserFooter = () => {
  return (
    <>
      <div className="container-fluid position-relative overlay-top bg-dark text-white-50 py-5" style={{ marginTop:'30px', }}>
        <div className="container mt-5 pt-5">
          <div className="row">
            <div className="col-md-4 mb-5 pl-4">
              <a href="home" className="navbar-brand">
                <h1 className="mt-n2 text-uppercase text-white">
                  {/* <img src="img\lg - Copy.jpg" width="50px" /> */}
                  About Us
                </h1>
              </a>
              <p className="m-0">
                Welcome to the College Placement Cell! We, at the College Placement Cell, are dedicated to empowering our students and bridging the gap between academia and the professional world. Our mission is to facilitate successful career opportunities for our students and provide a platform for esteemed organizations to recruit top talent from our institution. 
              </p>
            </div>
            <div className="col-md-4 mb-5 mt-4" style={{textAlign:"center",}} >
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
              <div className="d-flex justify-content-start mt-4"  >
                <a className="text-white mr-4" href="#" style={{marginLeft:"90px",}}>
                  <i className="fab fa-2x fa-twitter"   />
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
            <div className="col-md-4 mb-5" style={{marginTop:'25px',}} >
              <h3 className="text-white mb-4">Navigation</h3>
              <div className="d-flex flex-column justify-content-start">
                <a className="text-white-50 mb-2" href="#">
                  <i className="fa fa-angle-right mr-2" />
                  Home
                </a>
                <a className="text-white-50 mb-2" href="PublicUserAbout">
                  <i className="fa fa-angle-right mr-2" />
                  About
                </a>
                <a className="text-white-50 mb-2" href="PublicUserContact">
                  <i className="fa fa-angle-right mr-2" />
                  Contact
                </a>
                {/* <a className="text-white-50 mb-2" href="#">
                  <i className="fa fa-angle-right mr-2" />
                  Register
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid bg-dark text-white-50 border-top py-4" style={{ borderColor: "rgba(256, 256, 256, .1) !important" }}>
        <div className="container">
          <div className="row">
            <div className="col-md-6 text-center text-md-left mb-3 mb-md-0">
              <p className="m-0">
             Copyright   &copy; {new Date().getFullYear()}{" "}
                <a className="text-white" href="#">
                  College Placement
                </a>
                . All Rights Reserved.
              </p>
            </div>
            <div className="col-md-6 text-center text-md-right">
              <p className="m-0">
                Designed by{" "}
                <a className="text-white">
                Calicut University
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PublicUserFooter;