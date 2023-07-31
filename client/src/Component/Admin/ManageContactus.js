import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import AdminNav from './AdminNav';
import PublicUserFooter from '../Footer/PublicUserFooter';

const ManageContactus = () => {
  const navigate = useNavigate();
  const [jobCategories, setJobCategories] = useState([]);
  const [inputs, setInputs] = useState({});

  useEffect(() => {
    fetchJobCategories();
  }, []);

  const fetchJobCategories = async () => {
    try {
      const response = await axios.get('http://localhost:5000/contact/chinnu');
      setJobCategories(response.data.data);
    } catch (error) {
      console.log('Error:', error);
    }
  };

  const removeJobCategory = (id) => {
    axios
      .delete(`http://localhost:5000/contact/delete-jobcategory/${id}`)
      .then(() => {
        setJobCategories((prevCategories) => prevCategories.filter((category) => category._id !== id));
      })
      .catch((error) => {
        console.log('Error:', error);
      });
  };
  

  

 
  

  return (
    <>
      <AdminNav />
      <div className="container">
    
        <div className="jobcategory">
          <div className="row">
            <div className="col-lg-10 offset-md-1">
              <div className="card panel-table">
                <div className="card-header" style={{ textAlign: 'center' }}>
                  <h3>Manage Contactus</h3>
                  <div className="row" />
                </div>
                <div className="card-body">
                  <table className="table table-striped table-bordered table-list">
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Subject</th>
                        <th>Messsage</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
  {jobCategories.map((category, index) => (
    <tr key={category._id}>
      <th scope="row">{index + 1}</th> {/* Display the sl no */}
      <td>{category.name}</td>
      <td>{category.email}</td>   <td>{category.contactsubject}</td>   <td>{category.contactmessage}</td>
      <td align="center">
        <button className="btn btn-danger" onClick={() => removeJobCategory(category._id)}>
          <em className="fa fa-times" />
        </button>
      </td>
    </tr>
  ))}
</tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <PublicUserFooter />
    </>
  );
};

export default ManageContactus;
