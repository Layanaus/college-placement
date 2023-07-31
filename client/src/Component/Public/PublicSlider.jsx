import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Carousel } from 'react-bootstrap';

const PublicSlider = () => {
  const navigate = useNavigate();
  const [category, setCategory] = useState([]);
  const [inputs, setInputs] = useState({
    username: '',
    password: '',
  });

  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      axios.post('http://localhost:5000/login/login', inputs)
        .then((data) => {
          console.log(data);
          if (data.data.role === '1') {
            localStorage.setItem('user_id', data.data.user_id);
            localStorage.setItem('login_id', data.data.login_id);
            localStorage.setItem('role', data.data.role);
            navigate('/User');
          } else if (data.data.role === '2') {
            localStorage.setItem('company_id', data.data.company_id);
            localStorage.setItem('login_id', data.data.login_id);
            localStorage.setItem('role', data.data.role);
            navigate('/Company');
          } else if (data.data.role === '3') {
            localStorage.setItem('college_id', data.data.college_id);
            localStorage.setItem('login_id', data.data.login_id);
            localStorage.setItem('role', data.data.role);
            navigate('/placementofficer');
          }
          else {
            toast.error('Incorrect username or password');
          }
        })
        .catch((error) => {
          console.log(error);
          toast.error('incorrect password or username');
        });
    }
  }, [formErrors, inputs, isSubmit, navigate]);

  const setRegister = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs({ ...inputs, [name]: value });
  };
  const validate = (values) => {
    let errors = {};
    if (!values.username) {
      errors.username = 'username';
    }
    if (!values.password) {
      errors.password = 'password';
    }
    return errors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormErrors(validate(inputs));
    setIsSubmit(true);
  };
  useEffect(() => {
    fetch(`http://localhost:5000/create/view-placedstudent`)
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
  const chunkArray = (arr, size) => {
    const chunkedArr = [];
    for (let i = 0; i < arr.length; i += size) {
      chunkedArr.push(arr.slice(i, i + size));
    }
    return chunkedArr;
  };

  const testimonialRows = chunkArray(category, 3);
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
        <ToastContainer />
          <div className="fadeIn first">
            <div style={{ fontWeight: "bold", fontSize: 26, marginTop: 30 }}>
              Login
            </div>
          </div>
          {/* Login Form */}
          <form className='ne'onSubmit={handleSubmit}>
          <span style={{ color: formErrors.username ? 'red' : '' }}>{formErrors.username}</span>
            <input
              type="text"
              className="fadeIn second"
              name="username"
              placeholder="Username"
              onClick={() => setFormErrors({ ...formErrors, username: '' })}
              onChange={setRegister}
            />
            <span style={{ color: formErrors.password ? 'red' : '' }}>{formErrors.password}</span>
            <input
              type="text"
              className="fadeIn third"
              name="password"
              placeholder="password"
              onClick={() => setFormErrors({ ...formErrors, password: '' })}
              onChange={setRegister}

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
<section className='mt-5'>
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
      <Carousel interval={1000}>
        {testimonialRows.map((row, rowIndex) => (
          <Carousel.Item key={rowIndex}>
            <div className="row text-center">
              {row.map((testimonial, index) => (
                <div className="col-md-4 mb-5 mb-md-0" key={index}>
                  <div className="d-flex justify-content-center mb-4">
                    <img
                      src={`/upload/${testimonial.uploadimage}`} // Assuming you have an 'image' property in the fetched data
                      className="rounded-circle shadow-1-strong"
                      width={150}
                      height={150}
                      alt={testimonial.studentname}
                    />
                  </div>
                  <h5 className="mb-3">{testimonial.studentname}</h5>
                  <h6 className="text-primary mb-3">{testimonial.description}</h6>
                  <p className="px-xl-3">
                    <i className="fas fa-quote-left pe-2" />
                    {testimonial.userexperience}
                  </p>
                  <ul className="list-unstyled d-flex justify-content-center mb-0">
                    {Array.from({ length: Math.floor(testimonial.rating) }).map((_, i) => (
                      <li key={i}>
                        <i className="fas fa-star fa-sm text-warning" />
                      </li>
                    ))}
                    {testimonial.rating % 1 !== 0 && (
                      <li>
                        <i className="fas fa-star-half-alt fa-sm text-warning" />
                      </li>
                    )}
                  </ul>
                </div>
              ))}
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </section>


</>

  )
}

export default PublicSlider