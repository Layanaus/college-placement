import React, { useEffect } from 'react'
import { useState } from 'react';
import PublicUserFooter from '../Footer/PublicUserFooter'
import Companynav from './Companynav'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



const Viewrequest = () => {
  const navigate=useNavigate()
  const [category, setCategory] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/jobcategory/view-jobcategory')
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setCategory(data.data);
        }
      })
      .catch((error) => {
        console.log('Error:', error);
      });
  }, []);
  
  const Registersubmit = (event) => {
    event.preventDefault();
    axios.get('http://localhost:5000/request/create_placementrequest').then((response)=>{
      navigate('/placementofficer')
    })
      
  }
 
  return (

    <>
    <Companynav/>
    <div className="container">
      <div className='text-center'>
        <h1>View College Placement Request</h1>
      </div>
  <a href="#" className="list-group-item list-group-item-action">
    <div className="d-flex w-100 justify-content-between">
      <h5 className="mb-1">Royal engineering college</h5>
      <small className="text-muted">3 days ago</small>
    </div>
    <div className="d-flex w-100 justify-content-between">
      <p className="mb-1">Subject of Letter</p>
      <div>
        <div className="d-flex w-100 justify-content-center">
          <button className="btn btn-primary mr-5" onclick="redirectToPage()">
            Accept
          </button>
          <button className="btn btn-danger mr-5" onclick="redirectToPage()">
            Reject
          </button>
        </div>
      </div>
    </div>
  </a>
  {/* end list 1 */}
  {/* list 2 */}
  <a href="#" className="list-group-item list-group-item-action">
    <div className="d-flex w-100 justify-content-between">
      <h5 className="mb-1">MES kuttippuram</h5>
      <small className="text-muted">11 days ago</small>
    </div>
    <div className="d-flex w-100 justify-content-between">
      <p className="mb-1">Subject of Letter</p>
      <div>
        <div className="d-flex w-100 justify-content-center">
        <button className="btn btn-primary mr-5" onclick="redirectToPage()">
            Accept
          </button>
          <button className="btn btn-danger mr-5" onclick="redirectToPage()">
            Reject
          </button>
        </div>
      </div>
    </div>
  </a>
  <a href="#" className="list-group-item list-group-item-action">
    <div className="d-flex w-100 justify-content-between">
      <h5 className="mb-1">CCSIT kuttippuram</h5>
      <small className="text-muted">10 days ago</small>
    </div>
    <div className="d-flex w-100 justify-content-between">
      <p className="mb-1">Subject of Letter</p>
      <div>
        <div className="d-flex w-100 justify-content-center">
        <button className="btn btn-primary mr-5" onclick="redirectToPage()">
            Accept
          </button>
          <button className="btn btn-danger mr-5" onclick="redirectToPage()">
            Reject
          </button>
        </div>
      </div>
    </div>
  </a>
  {/* end list 2 */}
  {/* list 3 */}
  <a href="#" className="list-group-item list-group-item-action">
    <div className="d-flex w-100 justify-content-between">
      <h5 className="mb-1">CCSIT Manjery</h5>
      <small className="text-muted">7 days ago</small>
    </div>
    <div className="d-flex w-100 justify-content-between">
      <p className="mb-1">Subject of Letter</p>
      <div>
        <div className="d-flex w-100 justify-content-center">
        <button className="btn btn-primary mr-5" onclick="redirectToPage()">
            Accept
          </button>
          <button className="btn btn-danger mr-5" onclick="redirectToPage()">
            Reject
          </button>
        </div>
      </div>
    </div>
  </a>
  <a href="#" className="list-group-item list-group-item-action">
    <div className="d-flex w-100 justify-content-between">
      <h5 className="mb-1">CCSIT Manjery</h5>
      <small className="text-muted">7 days ago</small>
    </div>
    <div className="d-flex w-100 justify-content-between">
      <p className="mb-1">Subject of Letter</p>
      <div>
        <div className="d-flex w-100 justify-content-center">
        <button className="btn btn-primary mr-5" onclick="redirectToPage()">
            Accept
          </button>
          <button className="btn btn-danger mr-5" onclick="redirectToPage()">
            Reject
          </button>
        </div>
      </div>
    </div>
  </a>
  {/* end list  */}
</div>
<div className="row justify-content-center" style={{marginTop:'30px'}}>
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
  
<PublicUserFooter/>
</>


  )
}

export default Viewrequest