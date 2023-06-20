import React from 'react'
import Usernav from './Usernav'
import PublicUserFooter from '../Footer/PublicUserFooter'

const Applyjobs = () => {
  return (<>


    <Usernav/>
    <div className="container">

  <div className="row">
    <div className="col-lg-10 mx-auto">
      <div className="career-search mb-60">
        <form action="#" className="career-form mb-60">
          <div className="row">
            <div className="col-md-6 col-lg-3 my-3">
              <div className="input-group position-relative">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Your Keywords"
                  id="keywords"
                />
              </div>
            </div>
            <div className="col-md-6 col-lg-3 my-3">
              <div className="select-container">
                <select className="custom-select">
                  <option selected="">Location</option>
                  <option value={1}>Jaipur</option>
                  <option value={2}>Pune</option>
                  <option value={3}>Bangalore</option>
                </select>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 my-3">
              <div className="select-container">
                <select className="custom-select">
                  <option selected="">Select Job Type</option>
                  <option value={1}>Ui designer</option>
                  <option value={2}>JS developer</option>
                  <option value={3}>Web developer</option>
                </select>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 my-3">
              <button
                type="button"
                className="btn btn-lg btn-block btn-light btn-custom"
                id="contact-submit"
              >
                Search
              </button>
            </div>
          </div>
        </form>
        <div className="filter-result">
          <p className="mb-30 ff-montserrat">Total Job Openings : 89</p>
          <div className="job-box d-md-flex align-items-center justify-content-between mb-30">
            <div className="job-left my-4 d-md-flex align-items-center flex-wrap">
              <div className="img-holder mr-md-4 mb-md-0 mb-4 mx-auto mx-md-0 d-md-none d-lg-flex">
                FD
              </div>
              <div className="job-content">
                <h5 className="text-center text-md-left">
                  Front End Developer
                </h5>
                <ul className="d-md-flex flex-wrap text-capitalize ff-open-sans">
                  <li className="mr-md-4">
                    <i className="zmdi zmdi-pin mr-2" /> Los Angeles
                  </li>
                  <li className="mr-md-4">
                    <i className="zmdi zmdi-money mr-2" /> 2500-3500/pm
                  </li>
                  <li className="mr-md-4">
                    <i className="zmdi zmdi-time mr-2" /> Full Time
                  </li>
                  <li>
                 
                  </li>

                </ul>
               
              </div>
            

            </div>
            <div className="job-right my-4 flex-shrink-0">
            <ul className="d-md-flex flex-wrap text-capitalize ff-open-sans">
              <li>
              <a href="PJobdetails" className='btn btn-light'>More Details</a>
              </li>
           <li>
           <a
                href="applyjobportal"
                className="btn d-block w-100 d-sm-inline-block btn-primary ml-4"
              >
                Apply now
              </a>
           </li>
           
              </ul>
            </div>
          </div>
          <div className="job-box d-md-flex align-items-center justify-content-between mb-30">
            <div className="job-left my-4 d-md-flex align-items-center flex-wrap">
              <div className="img-holder mr-md-4 mb-md-0 mb-4 mx-auto mx-md-0 d-md-none d-lg-flex">
                UX
              </div>
              <div className="job-content">
                <h5 className="text-center text-md-left">Ui/Ux Developer</h5>
                <ul className="d-md-flex flex-wrap text-capitalize ff-open-sans">
                  <li className="mr-md-4">
                    <i className="zmdi zmdi-pin mr-2" /> Los Angeles
                  </li>
                  <li className="mr-md-4">
                    <i className="zmdi zmdi-money mr-2" /> 2500-3500/pm
                  </li>
                  <li className="mr-md-4">
                    <i className="zmdi zmdi-time mr-2" /> Full Time
                  </li>
                </ul>
              </div>
            </div>
            <div className="job-right my-4 flex-shrink-0">
            <ul className="d-md-flex flex-wrap text-capitalize ff-open-sans">
              <li>
              <a href="PJobdetails" className='btn btn-light'>More Details</a>
              </li>
           <li>
           <a
                href="applyjobportal"
                className="btn d-block w-100 d-sm-inline-block btn-primary ml-4"
              >
                Apply now
              </a>
           </li>
           
              </ul>
            </div>
          </div>
          <div className="job-box d-md-flex align-items-center justify-content-between mb-30">
            <div className="job-left my-4 d-md-flex align-items-center flex-wrap">
              <div className="img-holder mr-md-4 mb-md-0 mb-4 mx-auto mx-md-0 d-md-none d-lg-flex">
                GD
              </div>
              <div className="job-content">
                <h5 className="text-center text-md-left">Graphic Designer</h5>
                <ul className="d-md-flex flex-wrap text-capitalize ff-open-sans">
                  <li className="mr-md-4">
                    <i className="zmdi zmdi-pin mr-2" /> Los Angeles
                  </li>
                  <li className="mr-md-4">
                    <i className="zmdi zmdi-money mr-2" /> 2500-3500/pm
                  </li>
                  <li className="mr-md-4">
                    <i className="zmdi zmdi-time mr-2" /> Full Time
                  </li>
                </ul>

              </div>
            </div>
            <div className="job-right my-4 flex-shrink-0">
            <ul className="d-md-flex flex-wrap text-capitalize ff-open-sans">
              <li>
              <a href="PJobdetails" className='btn btn-light'>More Details</a>
              </li>
           <li>
           <a
                href="applyjobportal"
                className="btn d-block w-100 d-sm-inline-block btn-primary ml-4"
              >
                Apply now
              </a>
           </li>
           
              </ul>
            </div>
          </div>
          <div className="job-box d-md-flex align-items-center justify-content-between mb-30">
            <div className="job-left my-4 d-md-flex align-items-center flex-wrap">
              <div className="img-holder mr-md-4 mb-md-0 mb-4 mx-auto mx-md-0 d-md-none d-lg-flex">
                JS
              </div>
              <div className="job-content">
                <h5 className="text-center text-md-left">
                  Javascript Developer
                </h5>
                <ul className="d-md-flex flex-wrap text-capitalize ff-open-sans">
                  <li className="mr-md-4">
                    <i className="zmdi zmdi-pin mr-2" /> Los Angeles
                  </li>
                  <li className="mr-md-4">
                    <i className="zmdi zmdi-money mr-2" /> 2500-3500/pm
                  </li>
                  <li className="mr-md-4">
                    <i className="zmdi zmdi-time mr-2" /> Full Time
                  </li>
                </ul>
              </div>
            </div>
            <div className="job-right my-4 flex-shrink-0">
            <ul className="d-md-flex flex-wrap text-capitalize ff-open-sans">
              <li>
              <a href="PJobdetails" className='btn btn-light'>More Details</a>
              </li>
           <li>
           <a
                href="applyjobportal"
                className="btn d-block w-100 d-sm-inline-block btn-primary ml-4"
              >
                Apply now
              </a>
           </li>
           
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* START Pagination */}
      <div className="row justify-content-center">
    <nav aria-label="Page navigation justify-content-center">
      <ul className="pagination">
        <li className="page-item">
          <a className="page-link" href="#" aria-label="Previous">
            <span aria-hidden="true">«</span>
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#">
            1
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#">
            2
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#">
            3
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#" aria-label="Next">
            <span aria-hidden="true">»</span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
      {/* END Pagination */}
    </div>
  </div>
</div>
<PublicUserFooter/>
</>
  )
}

export default Applyjobs