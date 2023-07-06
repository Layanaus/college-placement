import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';


const UserReg = () => {
  const navigate = useNavigate()
  const[inputs, setinputs]=useState({});
  const [college,setCollege] = useState([]);
  console.log("value==>",inputs);
  const setRegister=(event)=>{
    const name=event.target.name;
    const value=event.target.value;
    setinputs({...inputs,[name]:value});
    console.log(inputs);  
  }
  


  const handleReset = () => {
    setinputs({});
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
  }
  

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
              <input
                type="date"
                name="dob"
              
                placeholder="DOB"
                value={inputs.dob ||""}
                onChange={setRegister}
              />
            </div>
            <div className="form-row">
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
  <label className="labels">Applicant Image</label>
  <input type="file" class="form-control-file" name="file4"   value={inputs.file4 ||""}
                  onChange={setRegister}/>
</div>

              <div className="form-row  form-row-3" style={{textAlign:'center',}}>
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
              <select name="college" value={inputs.college ||""} onChange={setRegister}>
                <option value="choose college">Choose College</option>
                {college.map((data)=>(
                  <option value={data._id}>{data.collegename}</option>
                ))}
              </select>
              <span className="select-btn">
                <i className="zmdi zmdi-chevron-down" />
              </span>
            </div>
           
           
            <div className="form-row">
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
              <input
                type="email"
                name="email"
                
                placeholder="E-mail"
                value={inputs.email ||""}
                  onChange={setRegister}
              />
            </div>
            
            <div className="form-row">
              <input
                type="tel"
                name="phone"
                
                
                placeholder="phone"
                value={inputs.phone ||""}
                onChange={setRegister}
              />
            </div>
            
            <div className="form-row">
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
              <input
                type="password"
                name="password"
                
                
                placeholder="Password"
                value={inputs.password ||""}
                  onChange={setRegister}
              />
            </div>
            <div className="form-row">
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