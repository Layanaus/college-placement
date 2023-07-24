import React, { useEffect, useState } from 'react';
import Companynav from './Companynav';
import PublicUserFooter from '../Footer/PublicUserFooter';

const Testresult = () => {
  const company_id = localStorage.getItem('login_id');
  const [users, setUsers] = useState([]);
  const [jobtype, setJobtype] = useState([]);
  const [category, setCategory] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const resultsPerPage = 10; // Number of results to display per page

  useEffect(() => {
    // Fetch category data
    fetch('http://localhost:5000/categories')
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setCategory(data.data);
        }
      })
      .catch((error) => {
        console.error('Error fetching categories:', error);
      });

    // Fetch test results data
    fetch('http://localhost:5000/result/view-aptitude-result')
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setUsers(data.data);
        }
      })
      .catch((error) => {
        console.error('Error fetching test results:', error);
      });
  }, []);

  // Pagination
  const indexOfLastResult = currentPage * resultsPerPage;
  const indexOfFirstResult = indexOfLastResult - resultsPerPage;
  const currentResults = users
    .filter((user) => user.company_id === company_id)
    .slice(indexOfFirstResult, indexOfLastResult);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };


  useEffect(() => {
    fetch(`http://localhost:5000/register/view-jobs/${company_id}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setJobtype(data.data);
        }
      })
      .catch((error) => {
        console.log('Error:', error);
      });
  }, []);
  const [selectedJob, setSelectedJob] = useState('');

  const inputchange = (event) => {
    const selectedValue = event.target.value;
    setSelectedJob(selectedValue);
    console.log(selectedValue);
  };
 
  return (
    <>
      <Companynav />

      

      <div className="container">
      <div className="form-row">
        <select name="college" onChange={inputchange}>
          <option value="choose college">job Categories</option>
          {jobtype.map((job) => (
            <option key={job._id} value={job.jobname}>
              {job.jobname}
            </option>
          ))}
        </select>
        <span className="select-btn">
          <i className="zmdi zmdi-chevron-down" />
        </span>
      </div>
        <table className="table" style={{ borderRadius: 15 }}>
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Phone</th>
              <th scope="col">Email</th>
              <th scope="col">Date</th>
              <th scope="col">Score</th>
              <th scope="col">Result</th>
            </tr>
          </thead>
          <tbody>
            {currentResults.filter((user) => user.jobtype === selectedJob).map((user, index) => (
              <tr key={index}>
                <th scope="row">{indexOfFirstResult + index + 1}</th>
                <td>{user.firstname}</td>
                <td>{user.phone}</td>
                <td>{user.email}</td>
                <td>{user.date}</td>
                <td>{`${user.marks}/${user.totalmarks}`}</td>
                <td>{user.passed === 'false' ? 'failed' : 'passed'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="row justify-content-center" style={{ marginTop: '30px' }}>
        <nav aria-label="Page navigation justify-content-center">
          <ul className="pagination">
            <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
              <button
                className="page-link"
                onClick={() => paginate(currentPage - 1)}
                disabled={currentPage === 1}
              >
                Previous
              </button>
            </li>
            {Array.from({ length: Math.ceil(users.length / resultsPerPage) }).map((_, index) => (
              <li key={index} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
                <button className="page-link" onClick={() => paginate(index + 1)}>
                  {index + 1}
                </button>
              </li>
            ))}
            <li
              className={`page-item ${currentPage === Math.ceil(users.length / resultsPerPage) ? 'disabled' : ''}`}
            >
              <button
                className="page-link"
                onClick={() => paginate(currentPage + 1)}
                disabled={currentPage === Math.ceil(users.length / resultsPerPage)}
              >
                Next
              </button>
            </li>
          </ul>
        </nav>
      </div>

      <PublicUserFooter />
    </>
  );
};

export default Testresult;
