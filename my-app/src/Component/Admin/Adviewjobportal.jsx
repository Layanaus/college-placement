import React, { useState } from 'react';
import PublicUserFooter from '../Footer/PublicUserFooter';
import AdminNav from './AdminNav';

const Adviewjobportal = () => {
  const [showCards, setShowCards] = useState(false);

  const handleButtonClick = () => {
    setShowCards(true);
  };

  return (
    <>
    <AdminNav/>
    <div className="container">
      <h3 className="pb-3 mb-5 font-italic border-bottom mt-5">
        <i className="fa fa-book-reader" /> View Job Portal
      </h3>
      <div className="row justify-content-center">
        <div className="col-md-8 mb-5">
          <div className="form-group">
            <label htmlFor="job1">University Colleges:</label>
            <select className="form-control" id="job1">
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
          </div>
          <div className="form-group">
            <div className="text-center">
              <input type="button" value="Submit" onClick={handleButtonClick} />
            </div>
          </div>
        </div>
      </div>
      {showCards && (
        <>
          <div className="row justify-content-center">
            <div className="col-md-8 mb-5">
              <div className="card">
                <div className="card-header text text-center">Python Developer</div>
                <div className="card-body text-center">
                  <h5 className="card-title">Special title treatment</h5>
                  <p className="card-text">
                    With supporting text below as a natural lead-in to additional content.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-8 mb-5">
              <div className="card">
                <div className="card-header text text-center">Python Developer</div>
                <div className="card-body text-center">
                  <h5 className="card-title">Special title treatment</h5>
                  <p className="card-text">
                    With supporting text below as a natural lead-in to additional content.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-8 mb-5">
              <div className="card">
                <div className="card-header text text-center">Python Developer</div>
                <div className="card-body text-center">
                  <h5 className="card-title">Special title treatment</h5>
                  <p className="card-text">
                    With supporting text below as a natural lead-in to additional content.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
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
    <PublicUserFooter/>
    </>
  );
};

export default Adviewjobportal;
