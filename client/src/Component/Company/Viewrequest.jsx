import React, { useEffect } from 'react'
import { useState } from 'react';
import PublicUserFooter from '../Footer/PublicUserFooter'
import Companynav from './Companynav'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



const Viewrequest = () => {
  const navigate = useNavigate()
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

  return (

    <>
      <Companynav />
      <div className="container">
        <div className='text-center'>
          <h1>View College Placement Request</h1>
        </div>
        {category.map((data) => (
          <a href="#" className="list-group-item list-group-item-action">
            <div className="d-flex w-100 justify-content-between">
              <h5 className="mb-1">{data.collegename}</h5>
              {/* <small className="text-muted">3 days ago</small> */}
            </div>
            <div className="d-flex w-100 justify-content-between">
              <p className="mb-1">{data.subject}</p>
              <p>{data.message}</p>
              <div>
                <div className="d-flex w-100 justify-content-center">
                  {data.status==0 ?  
                  <>
                  <button className="btn btn-primary mr-5" onclick="redirectToPage()">
                    Accept
                  </button>
                  <button className="btn btn-danger mr-5" onclick="redirectToPage()">
                    Reject
                  </button>
                  </>
                  :
                  <button className="btn btn-success mr-5" disabled>
                    Accepted
                  </button>
                  
                  }
                 
                </div>
              </div>
            </div>
          </a>
        ))}


        {/* end list  */}
      </div>
      <div className="row justify-content-center" style={{ marginTop: '30px' }}>
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

      <PublicUserFooter />
    </>


  )
}

export default Viewrequest