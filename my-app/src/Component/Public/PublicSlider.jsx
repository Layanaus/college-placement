import React from 'react'

const PublicSlider = () => {
  return (
    <>
    <div
  className="jumbotron jumbotron-fluid position-relative overlay-bottom"
  style={{ marginBottom: 90 }}
>
  <div className="container text-center my-5 py-5">
    <h1 className="text-white mt-4 mb-4">Welcome To Your</h1>
    <h1 className="text-white display-1 mb-5">Career Stepping stone</h1>
    <div className="mx-auto mb-5" style={{ width: "100%", maxWidth: 600 }}>
      <div className="wrapper fadeInDown">
        <div id="formContent">
          {/* Tabs Titles
          Icon */}
          <div className="fadeIn first">
            <div style={{ fontWeight: "bold", fontSize: 26, marginTop: 30 }}>
              Login
            </div>
          </div>
          {/* Login Form */}
          <form>

            <input
              type="text"
              id="login"
              className="fadeIn second"
              name="login"
              placeholder="Username"
            />
            <input
              type="text"
              id="password"
              className="fadeIn third"
              name="login"
              placeholder="password"
            />
      

            {/* <select className="fadeIn third" aria-label="Default select example">
             <option value={1} className="selectedx">Student</option>
            <option value={2}>Admin</option>
            <option value={3}>Company</option>
            <option value={3}>College</option>
           </select> */}
            <input
              type="submit"
              className="fadeIn fourth"
              defaultValue="Log In"
            />
          </form>
         {/* Remind Passowrd */}
          <div id="formFooter">
            <a className="underlineHover" href="#">
              Forgot Password?
            </a>
          </div> 
        </div>
      </div>
    </div>
  </div>
</div>

<div className='container'>
  <div className='row'>
  <div className='col-md-6 mb-5'>
    <h1>The Benefits..</h1>     
Job portal websites, also known as job boards or employment websites, 
are online platforms that connect job seekers with employers.
 These websites serve as a centralized hub where job seekers can search for job opportunities 
 and submit their resumes, while employers can post job openings and review applications.
  </div>
  <div className='col-md-6'>
  <h1>portal website..</h1>          
Job portal websites, also known as job boards or employment websites, 
are online platforms that connect job seekers with employers.
 These websites serve as a centralized hub where job seekers can search for job opportunities 
 and submit their resumes, while employers can post job openings and review applications.
  </div>
  <div className='col-md-6'>
    <h1>Our Priorities</h1>     
Job portal websites, also known as job boards or employment websites, 
are online platforms that connect job seekers with employers.
 These websites serve as a centralized hub where job seekers can search for job opportunities 
 and submit their resumes, while employers can post job openings and review applications.
  </div>
  <div className='col-md-6'>
  <h1 style={{color:'#1c4966'}}>Substitutes</h1>          
Job portal websites, also known as job boards or employment websites, 
are online platforms that connect job seekers with employers.
 These websites serve as a centralized hub where job seekers can search for job opportunities 
 and submit their resumes, while employers can post job openings and review applications.
  </div>
  </div>
</div>
<section className='mt-5 '>
  <div className="row d-flex justify-content-center">
    <div className="col-md-10 col-xl-8 text-center">
      <h3 className="mb-4">Testimonials</h3>
      <p className="mb-4 pb-2 mb-md-5 pb-md-0">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error
        amet numquam iure provident voluptate esse quasi, veritatis totam
        voluptas nostrum quisquam eum porro a pariatur veniam.
      </p>
    </div>
  </div>
  <div className="row text-center">
    <div className="col-md-4 mb-5 mb-md-0">
      <div className="d-flex justify-content-center mb-4">
        <img
          src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"
          className="rounded-circle shadow-1-strong"
          width={150}
          height={150}
        />
      </div>
      <h5 className="mb-3">Maria Smantha</h5>
      <h6 className="text-primary mb-3">Web Developer</h6>
      <p className="px-xl-3">
        <i className="fas fa-quote-left pe-2" />
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id
        officiis hic tenetur quae quaerat ad velit ab hic tenetur.
      </p>
      <ul className="list-unstyled d-flex justify-content-center mb-0">
        <li>
          <i className="fas fa-star fa-sm text-warning" />
        </li>
        <li>
          <i className="fas fa-star fa-sm text-warning" />
        </li>
        <li>
          <i className="fas fa-star fa-sm text-warning" />
        </li>
        <li>
          <i className="fas fa-star fa-sm text-warning" />
        </li>
        <li>
          <i className="fas fa-star-half-alt fa-sm text-warning" />
        </li>
      </ul>
    </div>
    <div className="col-md-4 mb-5 mb-md-0">
      <div className="d-flex justify-content-center mb-4">
        <img
          src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp"
          className="rounded-circle shadow-1-strong"
          width={150}
          height={150}
        />
      </div>
      <h5 className="mb-3">Lisa Cudrow</h5>
      <h6 className="text-primary mb-3">Graphic Designer</h6>
      <p className="px-xl-3">
        <i className="fas fa-quote-left pe-2" />
        Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
        suscipit laboriosam, nisi ut aliquid commodi.
      </p>
      <ul className="list-unstyled d-flex justify-content-center mb-0">
        <li>
          <i className="fas fa-star fa-sm text-warning" />
        </li>
        <li>
          <i className="fas fa-star fa-sm text-warning" />
        </li>
        <li>
          <i className="fas fa-star fa-sm text-warning" />
        </li>
        <li>
          <i className="fas fa-star fa-sm text-warning" />
        </li>
        <li>
          <i className="fas fa-star fa-sm text-warning" />
        </li>
      </ul>
    </div>
    <div className="col-md-4 mb-0">
      <div className="d-flex justify-content-center mb-4">
        <img
          src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp"
          className="rounded-circle shadow-1-strong"
          width={150}
          height={150}
        />
      </div>
      <h5 className="mb-3">John Smith</h5>
      <h6 className="text-primary mb-3">Marketing Specialist</h6>
      <p className="px-xl-3">
        <i className="fas fa-quote-left pe-2" />
        At vero eos et accusamus et iusto odio dignissimos ducimus qui
        blanditiis praesentium voluptatum deleniti atque corrupti.
      </p>
      <ul className="list-unstyled d-flex justify-content-center mb-0">
        <li>
          <i className="fas fa-star fa-sm text-warning" />
        </li>
        <li>
          <i className="fas fa-star fa-sm text-warning" />
        </li>
        <li>
          <i className="fas fa-star fa-sm text-warning" />
        </li>
        <li>
          <i className="fas fa-star fa-sm text-warning" />
        </li>
        <li>
          <i className="far fa-star fa-sm text-warning" />
        </li>
      </ul>
    </div>
  </div>
</section>

</>

  )
}

export default PublicSlider