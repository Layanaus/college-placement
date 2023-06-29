import React from 'react'
import Usernav from '../../Component/User/Usernav'
import PublicUserFooter from '../../Component/Footer/PublicUserFooter'
const Appliedjobs = () => {
  return (
    <>
    <Usernav/>
<div className="container">
  <div className="row justify-content-center mb-5">
    
    <div class="btn-group" style={{width:'50%'}}>
  <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" >
   Search by status of application
  </button>
  <div class="dropdown-menu dropdown-menu-right">
    <button class="dropdown-item" type="button">Eligible for Aptitude test</button>
    <button class="dropdown-item" type="button">Ineligible for Aptitude test</button>
    <button class="dropdown-item" type="button">Waiting for examination</button>
  </div>
</div>
    </div>
  
  <div className="row justify-content-center">
    <div className="col-md-8 mb-5">
      <div className="card">
        <div className="card-header text text-center">Netwok architect</div>
        <div className="card-body text-center">
          <h5 className="card-title">IBM Limited</h5>
          <p className="card-text">
          Applied on 12/08/2022
          </p>
          <a href="Jobdetails" className="btn btn-primary">
         Not Examined
          </a>
        </div>
      </div>
    </div>
  </div>
  <div className="row justify-content-center">
    <div className="col-md-8 mb-5">
      <div className="card">
        <div className="card-header text text-center">Python Developer</div>
        <div className="card-body text-center">
          <h5 className="card-title">Infosys</h5>
          <p className="card-text">
          Applied on 12/08/2022
          </p>
          <a href="Jobdetails" className="btn btn-primary">
         Not Eligible
          </a>
        </div>
      </div>
    </div>
  </div>
  <div className="row justify-content-center">
    <div className="col-md-8 mb-5">
      <div className="card">
        <div className="card-header text text-center">HR officer</div>
        <div className="card-body text-center">
          <h5 className="card-title">Wipro Private limited</h5>
          <p className="card-text">
            Applied on 12/08/2022
          </p>
          <a href="aptitudetst" className="btn btn-primary">
           Attend Test
          </a>
        </div>
      </div>
    </div>
  </div>
  <div className="row justify-content-center">
    <div className="col-md-8 mb-5">
      <div className="card">
        <div className="card-header text text-center">System Analyser</div>
        <div className="card-body text-center">
          <h5 className="card-title">Microsoft pvt</h5>
          <p className="card-text">
          Applied on 12/08/2022
          </p>
          
          <a href="Jobdetails" className="btn btn-primary">
            Not Examined
          </a>
        </div>
      </div>
    </div>
  </div>
</div>
<PublicUserFooter/>
</>
  )
}

export default Appliedjobs