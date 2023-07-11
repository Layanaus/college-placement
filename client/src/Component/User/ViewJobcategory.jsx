import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


const ViewJobcategory = () => {
  const [category, setCategory] = useState([]);

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
  return (
    <>
    <div className='container'>
        <div className='text-center'>
            <h1> Job Categories</h1>
        </div>
    </div>
   
    <div className="job-listings">
    {category.map((job) => (
      <div className="job-item" key={job._id} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <div>
    <h1>{job.jobcategory}</h1>
    <p>100+ Vacancy</p>
  </div>
  <div>
  <Link className='btn btn-primary  d-flex justify-content-end' to ={`/applyjobs/${job._id}`}><i class="fa fa-arrow-right"></i></Link>
        {/* <a href="applyjobs" className="btn btn-primary  d-flex justify-content-end"><i class="fa fa-arrow-right"></i></a> */}
      </div>
      </div>
      ))}
      
    </div>
   </>
  
  )
}

export default ViewJobcategory