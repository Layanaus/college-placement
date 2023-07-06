import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import AdminNav from './AdminNav';
import PublicUserFooter from '../Footer/PublicUserFooter';

const Createcategory = () => {
  const navigate = useNavigate();
  const [jobCategories, setJobCategories] = useState([]);
  const [inputs, setInputs] = useState({});

  useEffect(() => {
    fetchJobCategories();
  }, []);

  const fetchJobCategories = async () => {
    try {
      const response = await axios.get('http://localhost:5000/jobcategory/view-jobcategory');
      setJobCategories(response.data.data);
    } catch (error) {
      console.log('Error:', error);
    }
  };

  const setRegister = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs({ ...inputs, [name]: value });
  };

  const handleReset = () => {
    setInputs({});
  };

  const Registersubmit = (event) => {
    event.preventDefault();
    axios
      .post('http://localhost:5000/jobcategory/add_jobcategory', inputs)
      .then((response) => {
        navigate('/admin');
      })
      .catch((error) => {
        console.log('Error:', error);
      });
  };

  const removeJobCategory = (id) => {
    axios
      .delete(`http://localhost:5000/jobcategory/delete-jobcategory/${id}`)
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
        <h3 className="pb-3 mb-5 font-italic border-bottom mt-5">
          <i className="fa fa-book-reader" />
          Job Category
        </h3>
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card">
              <div className="card-header">Add Job Category</div>
              <div className="card-body">
                <form name="my-form" onSubmit={Registersubmit}>
                  <div className="form-group row">
                    <label htmlFor="category" className="col-md-4 col-form-label text-md-right">
                      Job category
                    </label>
                    <div className="col-md-6">
                      <input
                        type="text"
                        className="form-control"
                        name="jobcategory"
                        value={inputs.jobcategory || ''}
                        onChange={setRegister}
                      />
                    </div>
                  </div>
                  <div className="col-md-6 offset-md-4">
                    <button type="submit" className="btn btn-primary">
                      Create Category
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="jobcategory">
          <div className="row">
            <div className="col-lg-10 offset-md-1">
              <div className="card panel-table">
                <div className="card-header" style={{ textAlign: 'center' }}>
                  <h2>Manage Job Category</h2>
                  <div className="row" />
                </div>
                <div className="card-body">
                  <table className="table table-striped table-bordered table-list">
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Job Category Name</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
  {jobCategories.map((category, index) => (
    <tr key={category._id}>
      <th scope="row">{index + 1}</th> {/* Display the sl no */}
      <td>{category.jobcategory}</td>
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

export default Createcategory;
