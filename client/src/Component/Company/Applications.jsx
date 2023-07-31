import React, { useEffect, useState } from 'react';
import PublicUserFooter from '../Footer/PublicUserFooter';
import Companynav from './Companynav';
import { Link, useParams } from 'react-router-dom';

const Applications = () => {
  const { id } = useParams();
  const { cid } = useParams();
  const company_id = localStorage.getItem('login_id');
  const [applicants, setApplicants] = useState([]);
  const [vishnu, setVishnu] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/register/view-chinnu/${id}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setApplicants(data.data);
        }
      })
      .catch((error) => {
        console.log('Error:', error);
      });
  }, []);
  useEffect(() => {
    fetch(`http://localhost:5000/apply/view-fasil/${id}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setVishnu(data.data);
        }
      })
      .catch((error) => {
        console.log('Error:', error);
      });
  }, []);
 

  return (
    <>
      <Companynav />
      <div className="container">
        <table className="table" style={{ borderRadius: 15 }}>
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
           
              <th scope="col">Attachment</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            {applicants
              // .filter((job) => job.company_id === company_id)
              .map((job, index) => (
                <tr key={job._id}>
                  <th scope="row">{index + 1}</th>
                  <td>{job.name}</td>
                 
                  <td>
                    <Link to={`/Reviewapplication/${job.login_id}/${job._id}/${job.job_id}`}>View Cv &amp; More Detail</Link>
                  </td>
                  <td>{job.application_status}</td>
                </tr>
              ))}
          </tbody>
          <tbody>
            {vishnu
              // .filter((job) => job.company_id === company_id)
              .map((chinnu, index) => (
                <tr key={chinnu._id}>
                  <th scope="row">{index + 1}</th>
                  <td>{chinnu.name}</td>
                 
                  <td>
                    <Link to={`/Reviewapplication/${chinnu.login_id}/${chinnu._id}/${chinnu.job_id}`}>View Cv &amp; More Detail</Link>
                  </td>
                  <td>{chinnu.application_status}</td>
                </tr>
              ))}
          </tbody>
        </table>
        <button className="btn btn-primary" style={{ width: '100%' }}>
          Publish Interview Result
        </button>
      </div>

      <PublicUserFooter />
    </>
  );
};

export default Applications;
