import React, { useEffect, useState } from 'react'
import Placementofficernav from './Placementofficernav'
import PublicUserFooter from '../Footer/PublicUserFooter'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'


const Viewrequests = () => {
  const navigate = useNavigate()
  const [users, setUsers] = useState([]);
  const [category, setCategory] = useState([]);
  console.log(category);
  const company_id = localStorage.getItem('company_id')
  useEffect(() => {
    fetch(`http://localhost:5000/request/view-placementrequest/${company_id}`)
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
    axios.get('http://localhost:5000/request/create_placementrequest').then((response) => {
      navigate('/placementofficer')
    })
   
  }
  const accept = (id) => {
    axios
      .get(`http://localhost:5000/request/approve/${id}`)
      .then((response) => {
        console.log(response.data);
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const reject = (id) => {
    axios
      .get(`http://localhost:5000/request/reject/${id}`)
      .then((response) => {
        console.log(response.data);
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
   <>
   <Placementofficernav/>
   <div className="container text-center"  style={{width:'50%'}}>
      <div className='text-center'>
        <h1>Requested Companies</h1>
      </div>
  <a href="#" className="list-group-item list-group-item-action">
    <div className="d-flex w-100 justify-content-between">
      <h5 className="mb-1">Fyers Agency</h5>
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
      <h5 className="mb-1">JSW Steels</h5>
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
  {/* end list 2 */}
  {/* list 3 */}
  <a href="#" className="list-group-item list-group-item-action">
    <div className="d-flex w-100 justify-content-between">
      <h5 className="mb-1">Wipro Pvt</h5>
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

export default Viewrequests