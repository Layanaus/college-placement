import React from 'react'

const ViewJobcategory = () => {
  return (
    <>
    <div className='container'>
        <div className='text-center'>
            <h1> Job Categories</h1>
        </div>
    </div>
    <div className="job-listings">
    <div className="job-item">
    <h1>Software Development</h1>
    <p>100+ Vacancy</p>
    <a href="applyjobs"><button>Click here</button></a>
</div>

      <div className="job-item">
       
        <h1>Digital Marketing</h1>
        <p>100+ Vacancy</p>
        <a href="applyjobs"><button>Click here</button></a>
      </div>
      <div className="job-item">
      <h1>IT Field</h1>
        <p>100+ Vacancy</p>
        <a href="applyjobs"><button>Click here</button></a>
      </div>
    </div>
    
    <div className="job-listings">
      <div className="job-item">
      <h1>Non IT Field</h1>
        <p>100+ Vacancy</p>
        <a href="applyjobs"><button>Click here</button></a>
      </div>
      <div className="job-item">
      <h1>Sales & Marketing</h1>
        <p>100+ Vacancy</p>
        <a href="applyjobs"><button>Click here</button></a>
      </div>
      <div className="job-item">
      <h1>Healthcare & Medicine</h1>
        <p>100+ Vacancy</p>
        <a href="applyjobs"><button>Click here</button></a>
      </div>
    </div>
   </>
  
  )
}

export default ViewJobcategory