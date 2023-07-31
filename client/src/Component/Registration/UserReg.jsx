import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';


const UserReg = () => {
  const navigate = useNavigate()
  const [file, setFile] = useState('');

  const[inputs, setinputs]=useState({
    first_name:"",
    dob:"",
    gender:"",
    address:"",
    college:"",
    qualification:"",
    image:"",
    regnumber:"",
    email:"",
    phone:"",
    username:"",
    password:"",
    cnf_password:"", 
  });
  console.log("value==>",inputs);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [college,setCollege] = useState([]);

  console.log('value==>', inputs);
  console.log("value==>",file.name);
  console.log("value==>",file);
  const setRegister=(event)=>{
    const name=event.target.name;
    const value = event.target.value;
    setinputs({ ...inputs, [name]: value });
    console.log(inputs);
  }
  


  const handleReset = () => {
    setinputs({});
  };
  useEffect(() => {
    console.log(formErrors);
    
    console.log("key", Object.keys(formErrors).length);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(inputs);
    }
  }, [formErrors]);
  const validate = (values) => {
    const errors = {};
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var phoneno = /^[6-9]\d{9}$/;
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
     
   
    if (!values.first_name) {
      errors.first_name = "First Name is required!";
    }
    if (!values.dob) {
      errors.dob = "Date of birth is required!";
    }
    if (!values.gender) {
      errors.gender = "Gender is required!";
    }
    if (!values.address) {
      errors.address = "Address is required!";
    }
    if (!values.college) {
      errors.college = "College is required!";
    }
    if (!values.qualification) {
      errors.qualification = "Qualification is required!";
    } 
    if (!values.regnumber) {
      errors.regnumber = "Register Number is required!";
    } 
    // if (!values.email) {
    //   errors.email = "Email is required!";
    // } 
    // if (!values.phone) {
    //   errors.phone = "Contact Number is required!";
    // }else if(!phoneno.test(values.phone)){
    //   errors.phone = "Enter valid Contact Number !";
    // }
    
    if (!values.email) {
      errors.email = "email is required!";
    }
     else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.phone) {
      errors.phone = "Contact Number is required!";
    }else if(!phoneno.test(values.phone)){
      errors.phone = "Enter valid Contact Number !";
    }
    if (!values.username) {
      errors.username = "User Name is required";
    }
    if (!values.password) {
      errors.password = "Password is required";
    }
    if (!values.cnf_password) {
      errors.cnf_password = "Confirmation Password is required";
    }
     
    if(values.password!==values.cnf_password){
      errors.cnf_password = "Enter same password";
    }
    return errors;
  };
  
  useEffect(() => {
    axios.get('http://localhost:5000/register/view-college2')
      .then((response) => {
        setCollege(response.data.data);
      })
      .catch((error) => {
        console.log('Error:', error);
      });
  }, []);

  const Registersubmit = (event) => {
    event.preventDefault();
     setFormErrors(validate(inputs));
  setIsSubmit(true);
  if(Object.keys(formErrors).length === 0 && isSubmit){
    console.log(inputs);
    if (file) {
      const data = new FormData();
      const filename = file.name
      data.append('file', file);
      data.append('name', filename);
      axios.post('http://localhost:5000/register/upload', data)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.error(error);
        });
    }
    axios.post('http://localhost:5000/register/userreg',inputs).then((response)=>{
      navigate('/')
    }).catch((error)=>{
      toast.error(error.response.data.message, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
      
    })
  }}
  

  return (
    <>

    {/* Navbar End */}
    <div className="page-content" style={{ textAlign: "center" }}>
    <ToastContainer/>

      <div className="form-v10-content">
        <form className="form-detail" onSubmit={Registersubmit} method="post" id="myform">
          <div className="form-left">
            <center>
              <h2>Student Registration</h2>
            </center>
            <div className="form-row">
            <span className='errormsg' style={{ color: 'red' }}>{formErrors.first_name}</span>
            <input
  type="text"
  name="first_name"
  placeholder="First Name"
  value={inputs.first_name || ""}
  onChange={setRegister}
  style={{ textAlign: "left", paddingLeft: "10px" }}
/>

              </div>
              <div className="form-row">
              <span className='errormsg' style={{ color: 'red' }}>{formErrors.dob}</span>
              <input
                type="date"
                name="dob"
                placeholder="DOB"
                value={inputs.dob ||""}
                onChange={setRegister}
              />
            </div>
            <div className="form-row">
            <span className='errormsg' style={{ color: 'red' }}>{formErrors.gender}</span>
              <select name="gender" value={inputs.gender ||""} onChange={setRegister}>
                <option value="choose college">Gender</option>
                <option >Male</option>
                <option >Female</option>
                <option >Others</option>
              </select>
              <span className="select-btn">
                <i className="zmdi zmdi-chevron-down" />
              </span>
            </div>
            <div class="form-row">
            <span className='errormsg' style={{ color: 'red' }}>{formErrors.image}</span>       
  <label className="labels">Applicant Image</label>
  <input type="file" class="form-control-file" name="image"  
   onChange={(e) => {
    setFile(e.target.files[0]);
    console.log(e.target.files[0].name);
    setinputs({ ...inputs,image: e.target.files[0].name });
              }}/>
</div>

              <div className="form-row  form-row-3" style={{textAlign:'center',}}>
              <span className='errormsg' style={{ color: 'red' }}>{formErrors.address}</span>
              <input
                type="text"
                name="address"
               
                
                placeholder="Address"
                value={inputs.address ||""}
                  onChange={setRegister}
                
                style={{ textAlign: "left" }}
              />
            </div>
            <div className="form-row">
            <span className='errormsg' style={{ color: 'red' }}>{formErrors.college}</span>
              <select name="college" value={inputs.college ||""} onChange={setRegister}>
                <option value="choose college">Choose College</option>
                {college.map((data)=>(
                  <option value={data.login_id}>{data.collegename}</option>
                ))}
              </select>
              <span className="select-btn">
                <i className="zmdi zmdi-chevron-down" />
              </span>
            </div>
           
           
            <div className="form-row">
            <span className='errormsg' style={{ color: 'red' }}>{formErrors.qualification}</span>
              <select name="qualification" value={inputs.qualification ||""} onChange={setRegister}>
                <option value="qualification">Qualitfication</option>
                <option value="Post Graduated">Post Graduated</option>
                <option value="Graduated">Graduated</option>
                <option value="Higher Studies">Higher Studies </option>
              </select>
              <span className="select-btn">
                <i className="zmdi zmdi-chevron-down" />
              </span>
            </div>
            <div className="form-row  form-row-3" style={{textAlign:'center',}}>
            <span className='errormsg' style={{ color: 'red' }}>{formErrors.regnumber}</span>
              <input
              
                type="text"
                name="regnumber"
                placeholder="Stud-Reg-No"
                value={inputs.regnumber ||""}
                  onChange={setRegister}
                
                style={{ textAlign: "left" }}
              />
            </div>
              
            
            
           
            <div className="form-row">
            <span className='errormsg' style={{ color: 'red' }}>{formErrors.email}</span>
              <input
                type="email"
                name="email"
                
                placeholder="E-mail"
                value={inputs.email ||""}
                  onChange={setRegister}
              />
            </div>
            
            <div className="form-row">
            <span className='errormsg' style={{ color: 'red' }}>{formErrors.phone}</span>
              <input
                type="tel"
                name="phone"
                placeholder="phone"
                value={inputs.phone ||""}
                onChange={setRegister}
                onKeyPress={(event) => {
                  if (!/[0-9]/.test(event.key) || event.target.value.length >= 10) {
                    event.preventDefault();
                  }
                }}
              
              />
            </div>
            
            <div className="form-row">
            <span className='errormsg' style={{ color: 'red' }}>{formErrors.username}</span>
                <input
                  type="text"
                  name="username"
                  placeholder="Username"
                  value={inputs.username || ""}
                  onChange={setRegister}
                  style={{ textAlign: "left", paddingLeft: "10px" }}
                />
              </div>
            <div className="form-row">
            <span className='errormsg' style={{ color: 'red' }}>{formErrors.password}</span>
              <input
                type="password"
                name="password"
                
                
                placeholder="Password"
                value={inputs.password ||""}
                  onChange={setRegister}
              />
            </div>
            <div className="form-row">
            <span className='errormsg' style={{ color: 'red' }}>{formErrors.cnf_password}</span>
              <input
                type="password"
                name="cnf_password"
                
                
                placeholder="Confirm-Password"
                value={inputs.cnf_password ||""}
                  onChange={setRegister}
              />
            </div>
            <center>
           
<div className="register d-flex gap-3">
                <input
                  type="submit"
                  name="register"
                  className="btn btn-primary flex-grow-1"
                  value="Register"
                />
                <input
                  type="reset"
                  name="reset"
                  className="btn btn-secondary"
                  value="Reset"
                  onClick={handleReset}
                />
              </div>



            </center>
          </div>
        </form>
      </div>
    </div>
  </>
  
  )
}

export default UserReg