import React from 'react'

const PublicUserTop = () => {
  return (
    <div className="container-fluid bg-dark">
  <div className="row py-2 px-lg-5">
    <div className="col-lg-6 text-center text-lg-left mb-2 mb-lg-0">
      <div className="d-inline-flex align-items-center text-white">
        <small>
          <i className="fa fa-phone-alt mr-2" />
          +012 345 6789
        </small>
        <small className="px-3">|</small>
        <small>
          <i className="fa fa-envelope mr-2" />
          info@web.com
        </small>
      </div>
    </div>
    <div className="col-lg-6 text-center text-lg-right">
      <div className="d-inline-flex align-items-center">
        <a className="text-white px-2" href="">
          <i className="fab fa-facebook-f" />
        </a>
        <a className="text-white px-2" href="">
          <i className="fab fa-twitter" />
        </a>
        <a className="text-white px-2" href="">
          <i className="fab fa-linkedin-in" />
        </a>
        <a className="text-white px-2" href="">
          <i className="fab fa-instagram" />
        </a>
        <a className="text-white pl-2" href="">
          <i className="fab fa-youtube" />
        </a>
      </div>
    </div>
  </div>
</div>

  )
}

export default PublicUserTop