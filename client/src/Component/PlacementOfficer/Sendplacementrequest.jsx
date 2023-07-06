
import React, { useState } from 'react';
import Placementofficernav from './Placementofficernav';
import PublicUserFooter from '../Footer/PublicUserFooter';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Sendplacementrequest = () => {
  const navigate = useNavigate()
  const[inputs, setinputs]=useState({});
  console.log("value==>",inputs);
  const setRegister=(event)=>{
    const name=event.target.name;
    const value=event.target.value;
    setinputs({...inputs,[name]:value});
    console.log(inputs);  
  }
  const handleReset = () => {
    setinputs({});
  };

  const Registersubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:5000/request/create_placementrequest',inputs).then((response)=>{
      navigate('/placementofficer')
    })
      
  }
 
    
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('data', inputs);

    // Perform form submission logic here
    alert('Placement request submitted!');
    handleCloseModal();
  };

  return (
    <>
      <Placementofficernav />
      <div className="container">
        <h3 className="pb-3 mb-5 font-italic border-bottom mt-5">
          <i className="fa fa-book-reader" />
          Top Hiring Companies
        </h3>
        <div className="row justify-content-center mb-5">
          <div className="col-md-4">
            <div className="input-group">
              <input
                type="search"
                className="form-control rounded"
                placeholder="Search"
                aria-label="Search"
                aria-describedby="search-addon"
              />
              <button type="button" className="btn btn-outline-primary">
                search
              </button>
            </div>
          </div>
        </div>

        <div className="row mb-4">
          <div className="col-lg-3 col-md-6 mb-4">
            <div className="card hover-lift hover-shadow-xl shadow-sm border-0">
              <div className="card-body p-4">
                <div className="d-flex mb-2 align-items-center">
                  <div className="col">
                    <div className="ml-2">
                      <h5>Wipro</h5>
                    </div>
                  </div>
                  <div className="col">
                    <div className="ml-3">
                      <div className="width-5x height-5x p-2 bg-white shadow-sm position-relative flex-center rounded-circle border">
                        <img
                          src="https://bootdey.com/img/Content/avatar/avatar1.png"
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <p className="mb-0 text-muted">14 Jobs opportunities</p>
              </div>
              <button className="btn btn-primary" onClick={handleClick}>
                Send Request
              </button>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mb-4">
            <div className="card hover-lift hover-shadow-xl shadow-sm border-0">
              <div className="card-body p-4">
                <div className="d-flex mb-2 align-items-center">
                  <div className="col">
                    <div className="ml-2">
                      <h5>Wipro</h5>
                    </div>
                  </div>
                  <div className="col">
                    <div className="ml-3">
                      <div className="width-5x height-5x p-2 bg-white shadow-sm position-relative flex-center rounded-circle border">
                        <img
                          src="https://bootdey.com/img/Content/avatar/avatar1.png"
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <p className="mb-0 text-muted">14 Jobs opportunities</p>
              </div>
              <button className="btn btn-primary" onClick={handleClick}>
                Send Request
              </button>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mb-4">
            <div className="card hover-lift hover-shadow-xl shadow-sm border-0">
              <div className="card-body p-4">
                <div className="d-flex mb-2 align-items-center">
                  <div className="col">
                    <div className="ml-2">
                      <h5>Wipro</h5>
                    </div>
                  </div>
                  <div className="col">
                    <div className="ml-3">
                      <div className="width-5x height-5x p-2 bg-white shadow-sm position-relative flex-center rounded-circle border">
                        <img
                          src="https://bootdey.com/img/Content/avatar/avatar1.png"
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <p className="mb-0 text-muted">14 Jobs opportunities</p>
              </div>
              <button className="btn btn-primary" onClick={handleClick}>
                Send Request
              </button>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mb-4">
            <div className="card hover-lift hover-shadow-xl shadow-sm border-0">
              <div className="card-body p-4">
                <div className="d-flex mb-2 align-items-center">
                  <div className="col">
                    <div className="ml-2">
                      <h5>Wipro</h5>
                    </div>
                  </div>
                  <div className="col">
                    <div className="ml-3">
                      <div className="width-5x height-5x p-2 bg-white shadow-sm position-relative flex-center rounded-circle border">
                        <img
                          src="https://bootdey.com/img/Content/avatar/avatar1.png"
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <p className="mb-0 text-muted">14 Jobs opportunities</p>
              </div>
              <button className="btn btn-primary" onClick={handleClick}>
                Send Request
              </button>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mb-4">
            <div className="card hover-lift hover-shadow-xl shadow-sm border-0">
              <div className="card-body p-4">
                <div className="d-flex mb-2 align-items-center">
                  <div className="col">
                    <div className="ml-2">
                      <h5>Wipro</h5>
                    </div>
                  </div>
                  <div className="col">
                    <div className="ml-3">
                      <div className="width-5x height-5x p-2 bg-white shadow-sm position-relative flex-center rounded-circle border">
                        <img
                          src="https://bootdey.com/img/Content/avatar/avatar1.png"
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <p className="mb-0 text-muted">14 Jobs opportunities</p>
              </div>
              <button className="btn btn-primary" onClick={handleClick}>
                Send Request
              </button>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mb-4">
            <div className="card hover-lift hover-shadow-xl shadow-sm border-0">
              <div className="card-body p-4">
                <div className="d-flex mb-2 align-items-center">
                  <div className="col">
                    <div className="ml-2">
                      <h5>Wipro</h5>
                    </div>
                  </div>
                  <div className="col">
                    <div className="ml-3">
                      <div className="width-5x height-5x p-2 bg-white shadow-sm position-relative flex-center rounded-circle border">
                        <img
                          src="https://bootdey.com/img/Content/avatar/avatar1.png"
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <p className="mb-0 text-muted">14 Jobs opportunities</p>
              </div>
              <button className="btn btn-primary" onClick={handleClick}>
                Send Request
              </button>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mb-4">
            <div className="card hover-lift hover-shadow-xl shadow-sm border-0">
              <div className="card-body p-4">
                <div className="d-flex mb-2 align-items-center">
                  <div className="col">
                    <div className="ml-2">
                      <h5>Wipro</h5>
                    </div>
                  </div>
                  <div className="col">
                    <div className="ml-3">
                      <div className="width-5x height-5x p-2 bg-white shadow-sm position-relative flex-center rounded-circle border">
                        <img
                          src="https://bootdey.com/img/Content/avatar/avatar1.png"
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <p className="mb-0 text-muted">14 Jobs opportunities</p>
              </div>
              <button className="btn btn-primary" onClick={handleClick}>
                Send Request
              </button>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mb-4">
            <div className="card hover-lift hover-shadow-xl shadow-sm border-0">
              <div className="card-body p-4">
                <div className="d-flex mb-2 align-items-center">
                  <div className="col">
                    <div className="ml-2">
                      <h5>Wipro</h5>
                    </div>
                  </div>
                  <div className="col">
                    <div className="ml-3">
                      <div className="width-5x height-5x p-2 bg-white shadow-sm position-relative flex-center rounded-circle border">
                        <img
                          src="https://bootdey.com/img/Content/avatar/avatar1.png"
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <p className="mb-0 text-muted">14 Jobs opportunities</p>
              </div>
              <button className="btn btn-primary" onClick={handleClick}>
                Send Request
              </button>
            </div>
          </div>
          
          {/* Other company cards */}
        </div>
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
      </div>

      {showModal && (
        <div className="modal" style={{ display: 'block' }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Send Placement Request</h5>
                <button
                  type="button"
                  className="close"
                  onClick={handleCloseModal}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form  onSubmit={Registersubmit}>
                  <div className="form-group">
                    <label htmlFor="name">Subject Name</label>
                    <input
                      type="text"
                      name="subject"
                      className="form-control"
                      placeholder="Enter your Subject"
                      value={inputs.subject ||""}
                      onChange={setRegister}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                      name="message"
                      className="form-control"
                      rows="3"
                      placeholder="Enter your message"
                      value={inputs.message ||""}
                      onChange={setRegister}
                    ></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
          
        </div>
      )}

      <PublicUserFooter />
    </>
  );
};

export default Sendplacementrequest;
