import React, { useState, useEffect } from 'react';
import PublicUserFooter from '../Footer/PublicUserFooter';
import Placementofficernav from './Placementofficernav';
import { Link } from 'react-router-dom';

const Placementofficerviewjobs = () => {
  const [category, setCategory] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

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

  const headings = [
    'Unlock endless career possibilities with our job portal - where dreams meet opportunities',
    'Discover your next adventure. Find the perfect job with our powerful job portal',
    'Your gateway to success. Let our job portal open doors to your dream career',
    'Our cutting-edge job portal revolutionizes the way you find employment',
  ];
  const [currentHeadingIndex, setCurrentHeadingIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeadingIndex((prevIndex) => (prevIndex + 1) % headings.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Filter the jobs based on the search query
  const filteredCategory = category.filter((job) =>
    job.jobcategory.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <Placementofficernav />
      <div className="container">
        <h1>{headings[currentHeadingIndex]}</h1>
      </div>
      <div className="container">
        <div className="row justify-content-center mb-5">
          <div className="col-md-4">
            <div className="input-group">
              <input
                type="search"
                className="form-control rounded"
                placeholder="Search Jobs"
                aria-label="Search"
                aria-describedby="search-addon"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button type="button" className="btn btn-outline-primary">
                Search
              </button>
            </div>
          </div>
        </div>
        <div className="row">
          {filteredCategory.map((job) => (
            <div className="col-md-4 mb-5" key={job._id}>
              <div className="card">
                <div className="card-header">{job.jobcategory}</div>
                <div className="card-body">
                  <p className="card-text">+ Vacancies</p>
                  <Link to={`/adsearchjob/${job._id}`} className="btn btn-primary">
                    View vacancies
                  </Link>
                </div>
              </div>
            </div>
          ))}
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
      </div>

      <PublicUserFooter />
    </>
  );
};

export default Placementofficerviewjobs;
