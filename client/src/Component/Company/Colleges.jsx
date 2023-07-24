import React, { useEffect, useState } from 'react';
import Companynav from './Companynav';
import PublicUserFooter from '../Footer/PublicUserFooter';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Colleges = () => {
  const id=localStorage.getItem('login_id');
  const [college, setCollege] = useState([]);
  const [inputs, setInputs] = useState({
    login_id:id,
    
    
  });
  useEffect(() => {
    const fetchColleges = async () => {
      try {
        const response = await axios.get('http://localhost:5000/register/view-college');
        const data = response.data;
        if (data.success) {
          setCollege(data.data);
        } 
      } catch (error) {
        
      } 
    };

    fetchColleges();
  }, []);

  const setRegister = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs({ ...inputs, [name]: value });
  }
 
  const handleSubmit = async (event) => {
    event.preventDefault();
     axios.post(
        'http://localhost:5000/comapanyrequest/company_placementrequest',inputs)
      }
        
     
  
  return (
    <>
      <Companynav />
      <div className="container">
        <div className="input-group">
          <input
            type="search"
            className="form-control rounded"
            placeholder="Search Jobs"
            aria-label="Search"
            aria-describedby="search-addon"
          />
          <button type="button" className="btn btn-outline-primary">
            Search
          </button>
        </div>
        <h1 className="mt-5">Colleges</h1>
        <ul className="list-group">
          {college.map((name) => (
            <li className="list-group-item d-flex justify-content-between" key={name._id}>
              <h6>College Name:{name.collegename}</h6>
              <p>Conduct Placement Request</p>
              <button
          className='btn btn-primary'
         onClick={handleSubmit}
          >
          Request
          </button>

               
              
            </li>
          ))}
        </ul>
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
  );
};

export default Colleges;
