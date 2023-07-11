import React, { useEffect, useState } from 'react';
import Companynav from './Companynav';
import PublicUserFooter from '../Footer/PublicUserFooter';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Colleges = () => {
  const [college, setCollege] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchColleges = async () => {
      try {
        const response = await axios.get('http://localhost:5000/register/view-college');
        const data = response.data;
        if (data.success) {
          setCollege(data.data);
        } else {
          setError(data.message);
        }
      } catch (error) {
        setError('Failed to fetch colleges');
      } finally {
        setLoading(false);
      }
    };

    fetchColleges();
  }, []);

  const navigate = useNavigate();
  const user_id = localStorage.getItem('user_id');
  const [inputs, setInputs] = useState({
    user_id: user_id,
    company_id: '',
    subject: '',
    message: '',
  });

  const setRegister = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs({ ...inputs, [name]: value });
  };

  const handleReset = () => {
    setInputs({
      user_id: user_id,
      company_id: '',
      subject: '',
      message: '',
    });
    setSelectedCompanyId('');
  };

  const [showModal, setShowModal] = useState(false);
  const [selectedCompanyId, setSelectedCompanyId] = useState('');

  const handleClick = (companyId) => {
    setSelectedCompanyId(companyId);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    const requestData = {
      user_id: inputs.user_id,
      company_id: selectedCompanyId,
      subject: inputs.subject,
      message: inputs.message,
    };
  
    try {
      const response = await axios.post(
        'http://localhost:5000/companyrequest/company_placementrequest',
        requestData
      );
  
      if (response.data.success) {
        navigate('/company');
      } else {
        setError(response.data.message);
      }
    } catch (error) {
      setError('Failed to submit the request');
    }
  };
  
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
          onClick={() => handleClick(name._id)}
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
