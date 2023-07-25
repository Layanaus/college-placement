import React, { useState, useEffect } from 'react';
import PublicUserFooter from '../Footer/PublicUserFooter';
import Placementofficernav from './Placementofficernav';
import { useParams } from 'react-router-dom';

const JobPortalviewstudents = () => {
  const { id } = useParams();
  const [List, setList] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/apply/view-sudhee/${id}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setList(data.data);
        }
      })
      .catch((error) => {
        console.log('Error:', error);
      });
  }, [id]);

  return (
    <>
      <Placementofficernav />
      <div className='container'>
        <h1 className='title' style={{ textAlign: 'center' }}>
          Applicant's Job Status
        </h1>
        <div className='input-group' style={{ marginTop: '50px', marginBottom: '30px' }}>
          <input
            type='search'
            className='form-control rounded'
            placeholder="Search Applicant's Name"
            aria-label='Search'
            aria-describedby='search-addon'
          />
          <button type='button' className='btn btn-outline-primary'>
            Search
          </button>
        </div>
        <table className='table' style={{ borderRadius: 15 }}>
          <thead>
            <tr>
              <th scope='col'>#</th>
              <th scope='col'>Name</th>
              <th scope='col'>Address</th>
              <th scope='col'>Mobile No</th>
              <th scope='col'>Applied Job Status</th>
            </tr>
          </thead>
          <tbody>
            {List.map((applicant, index) => (
              <tr key={index}>
                <th scope='row'>{index + 1}</th>
                <td>{applicant.name}</td>
                <td>{applicant.address}</td>
                <td>{applicant.phonenumber}</td>
                <td>{applicant.application_status}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className='row justify-content-center'>
          <nav aria-label='Page navigation justify-content-center'>
            <ul className='pagination'>
              <li className='page-item'>
                <a className='page-link' href='#' aria-label='Previous'>
                  <span aria-hidden='true'>«</span>
                </a>
              </li>
              <li className='page-item'>
                <a className='page-link' href='#'>
                  1
                </a>
              </li>
              <li className='page-item'>
                <a className='page-link' href='#'>
                  2
                </a>
              </li>
              <li className='page-item'>
                <a className='page-link' href='#'>
                  3
                </a>
              </li>
              <li className='page-item'>
                <a className='page-link' href='#' aria-label='Next'>
                  <span aria-hidden='true'>»</span>
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

export default JobPortalviewstudents;
