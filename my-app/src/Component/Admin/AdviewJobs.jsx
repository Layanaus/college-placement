import React from 'react'
import PublicUserFooter from '../Footer/PublicUserFooter'
import AdminNav from './AdminNav'

const Adviewjobs = () => {
  return (
    <>
   <AdminNav/>
     <div className="container">
    <div
  id="carouselExampleControls"
  className="carousel2 slide2 mb-5"
  data-ride="carousel2"
>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <div className="carousel-caption">
        <h3>
          "Unlock endless career possibilities with our job portal - where
          dreams meet opportunities!"
        </h3>
      </div>
    </div>
    <div className="carousel-item">
      <div className="carousel-caption">
        <h3>
          "Discover your next adventure. Find the perfect job with our powerful
          job portal."
        </h3>
      </div>
    </div>
    <div className="carousel-item">
      <div className="carousel-caption">
        <h3>
          "Your gateway to success. Let our job portal open doors to your dream
          career."
        </h3>
      </div>
    </div>
    <div className="carousel-item">
      <div className="carousel-caption">
        <h3>""Navigate your career path with confidence""</h3>
      </div>
    </div>
    <div className="carousel2-item">
      <div className="carousel2-caption">
        <h3>
          "Our cutting-edge job portal revolutionizes the way you find
          employment."
        </h3>
      </div>
    </div>
  </div>
</div>
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
        />
        <button type="button" className="btn btn-outline-primary">
          Search 
        </button>
      </div>
    </div>
  </div>
      <div className="row">
        <div className="col-md-6 mb-5">
          <div className="card">
            <div className="card-header">IT JOBSs</div>
            <div className="card-body">
              <h5 className="card-title">Special title treatment</h5>
              <p className="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <a href="adsearchjob" className="btn btn-primary">
                Seach Vaccancy
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">ENGINEERING JOBS</div>
            <div className="card-body">
              <h5 className="card-title">Special title treatment</h5>
              <p className="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <a href="adsearchjob" className="btn btn-primary">
                Seach Vaccancy
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">IT JOBSs</div>
            <div className="card-body">
              <h5 className="card-title">Special title treatment</h5>
              <p className="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <a href="adsearchjob" className="btn btn-primary">
                Seach Vaccancy
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">ENGINEERING JOBS</div>
            <div className="card-body">
              <h5 className="card-title">Special title treatment</h5>
              <p className="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <a href="adsearchjob" className="btn btn-primary">
                Seach Vaccancy
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

export default Adviewjobs

