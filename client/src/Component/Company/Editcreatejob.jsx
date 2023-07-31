import React, { useEffect } from 'react';
import { useState } from 'react';
import PublicUserFooter from '../Footer/PublicUserFooter';
import Companynav from './Companynav';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useParams } from 'react-router-dom';

const Editcreatejob = () => {
  const { id } = useParams();
  const login_id = localStorage.getItem('login_id');
  const navigate = useNavigate();
  const [jobcategory, setJobCategory] = useState([]);

  const [inputs, setInputs] = useState({
    login_id: login_id,
  });

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
      .put(`http://localhost:5000/register/edit-job/${id}`, inputs)
      .then((response) => {
        console.log(response.data);
        toast.success('Job successfully updated');
        setInputs({});
      })
      .catch((error) => {
        console.log('Error:', error);
        toast.error('Failed to update job');
      });
  };

  const jobcategory_id = inputs.jobcategory;

  const updatedInputs = { ...inputs, jobcategory_id };

  useEffect(() => {
    axios
      .get('http://localhost:5000/jobcategory/view-jobcategory')
      .then((response) => {
        setJobCategory(response.data.data);
      })
      .catch((error) => {
        console.log('Error:', error);
      });
  }, []);


  return (
    <>
    <Companynav/>
    <div className="container">
      <ToastContainer/>
      <h3 className="pb-3 mb-5 font-italic border-bottom mt-5">
        <i className="fa fa-book-reader" />
      Edit Job Vaccancy Announcement
      </h3>
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card">
            <div className="card-header">Edit job vaccancies</div>
            <div className="card-body">
              <form
                name="my-form"
                onSubmit={Registersubmit}
              >

               
                <div className="form-group row">
                  <label
                    htmlFor="jobname"
                    className="col-md-4 col-form-label text-md-right"
                  >
                    Job name
                  </label>
                  <div className="col-md-6">
                    <input
                      type="text"
                      className="form-control"
                      name="jobname"
                      value={inputs.jobname || ""}
                      onChange={setRegister}
                      required
                    />
                  </div>
                </div>
                
                <div className="form-group row">
  <label
    htmlFor="jobname"
    className="col-md-4 col-form-label text-md-right"
  >
    Job description
  </label>
  <div className="col-md-6">
    <textarea

      className="form-control"
      name="jobdescription"
      rows='5'
      value={inputs.jobdescription|| ""}
      onChange={setRegister}
      required
    ></textarea>
  </div>
</div>

                <div className="form-group row">
  <label htmlFor="category" className="col-md-4 col-form-label text-md-right">
    Job Category
  </label>
  <div className="col-md-6" >
    <select id="category" className="form-control" name="jobcategory" value={inputs.jobcategory || ""}
    onChange={setRegister}>
      required
      <option value="">Select job category</option>
                {jobcategory.map((data)=>(
                  <option value={data._id}>{data.jobcategory}</option>
                ))}

    </select>
  </div>
</div>
                <div className="form-group row">
                  <label
                    htmlFor="vaccancy"
                    className="col-md-4 col-form-label text-md-right"
                  >
                    Vaccancy
                  </label>
                  <div className="col-md-6">
                    <input
                      type="text"
                      className="form-control"
                      name="vaccancy"
                      value={inputs.vaccancy || ""}
                      onChange={setRegister}
                      required
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label
                    htmlFor="qualification"
                    className="col-md-4 col-form-label text-md-right"
                  >
                    Qualification
                  </label>
                  <div className="col-md-6">
                    <input
                      type="text"
                     
                      className="form-control"
                      name="qualification"
                      value={inputs.qualification || ""}
                      onChange={setRegister}
                      required
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label
                    htmlFor="salary"
                    className="col-md-4 col-form-label text-md-right"
                  >
                    Expected Salary
                  </label>
                  <div className="col-md-6">
                    <input
                      type="text"
                    
                      className="form-control"
                      name="expectedsalary"
                      value={inputs.expectedsalary || ""}
                      onChange={setRegister}
                      required
                    />
                  </div>
                </div>
                
                <div className="form-group row">
                <label
                  htmlFor="lastdate"
                  className="col-md-4 col-form-label text-md-right"
                >
                  Last Date
                </label>
                <div className="col-md-6">
                  <input
                    type="date"
                   name="lastdate"
                    className="form-control"
                    value={inputs.lastdate || ""}
                    onChange={setRegister}
                    required
                  />
                </div>
              </div>
                <div className="col-md-6 offset-md-4">
                  <button type="submit" className="btn btn-primary">
                    Send Job Alert
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
   
    </div>
   
    <PublicUserFooter/>

  </>
  
  )
}

export default Editcreatejob