import React, { useState, useEffect } from 'react';
import PublicUserFooter from '../Footer/PublicUserFooter';
import Usernav from './Usernav';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';


const MyProfile = () => {
  const id = localStorage.getItem('login_id');
  const [file, setFile] = useState('');
  const [category, setCategory] = useState([]);
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    login_id:id,
  });

  console.log("value==>",inputs);
  console.log("value==>",file.name);
  console.log("value==>",file);

  const setRegister = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs({ ...inputs, [name]: value });
    console.log(inputs);
  };

  const handleReset = () => {
    setInputs({});
  };

  const Registersubmit = (event) => {
    event.preventDefault();
    if (file) {
      const data = new FormData();
      const filename = file.name
      data.append('file', file);
      data.append('name', filename);
      axios.post('http://localhost:5000/profile/upload', data)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.error(error);
        });
        }
    axios.post('http://localhost:5000/profile/myprofile', inputs)
      .then((response) => {
        navigate('/user');
      })
      .catch((error) => {
      });
      axios
      .put(`http://localhost:5000/profile/edit-profile/${id}`, inputs)
      .then((response) => {
        console.log(response.data);
        setInputs(response.data.data[0] || {});
      })
      .catch((error) => {
        console.log('Error:', error);
      });
  };
  useEffect(() => {
    fetch(`http://localhost:5000/profile/view-myprofile/${id}`)
      .then((response) => response.json())
      .then((data) => {
        console.log("pppp",data.data[0]);
        if (data.success) {
          setInputs(data.data[0]);
        }
      })
      .catch((error) => {
        console.log('Error:', error);
      });
  }, [id]);


  useEffect(() => {
    fetch(`http://localhost:5000/profile/view-single-user/${id}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
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
    <Usernav/>
    <div className="container rounded bg-white mt-5 mb-5">
  <div className="row">
    <div className="col-md-3 border-right" >
      <div className="d-flex flex-column align-items-center text-center p-3 py-5">
      {category.applicantimage ? (<img
  className="rounded-circle mt-5"
  width="150px"
  src={`/upload/${category.applicantimage}`}
/>
) : (
  <p>No image available</p>
)}
        <span className="font-weight-bold">{category.firstname}</span>
        <span className="text-black-50">{category.email}</span>
        <span> </span>
      </div>
    </div> 
    <div className="col-md-5 border-right">
      <div className="p-3 py-5">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h4 className="text-right" >Profile Settings</h4>
        </div>
        

       

        <div className="row mt-2" >
          <div className="col-md-6">
            <label className="labels">First Name</label>
            <input
              name="firstname"
              type="text"
              className="form-control"
              placeholder="first name"
              value={inputs.firstname || ""}
              onChange={setRegister}
              required
             
            />
          </div>
          <div className="col-md-6">
            <label className="labels">Last Name</label>
            <input
              name="lastname"
              type="text"
              className="form-control"
              placeholder="lastname"
              value={inputs.lastname || ""}
              onChange={setRegister}
              required
            />
          </div>
        </div>
        <div className="row mt-3">
        <div className="col-md-12">
  <label className="labels">Date of Birth</label>
  <input
    name="dob"
    type="date"
    className="form-control"
    placeholder="select date of birth"
    value={inputs.dob || ""}
    onChange={setRegister}
    required
  style={{width:'350px'}}
  />
</div>
<div className="col-md-12">
  <label className="labels">Gender</label>
  <select className="form-control" style={{width:'350px'}} name="gender" value={inputs.gender || ""}
    onChange={setRegister} required>
    <option value="" disabled>Select gender</option>
    <option value="male">Male</option>
    <option value="female">Female</option>
    <option value="other">Other</option>
  </select>
</div>


          
          <div className="col-md-12">
            <label className="labels" >Address Line 1</label>
            <input
              name="addressline1"
              type="text"
              className="form-control"
              placeholder="enter address line 1"
              value={inputs.addressline1 || ""}
              onChange={setRegister}
              required
             
            />
          </div>
          <div className="col-md-12">
            <label className="labels">Address Line 2</label>
            <input
              name="addressline2"
              type="text"
              className="form-control"
              placeholder="enter address line 2"
              value={inputs.addressline2|| ""}
              onChange={setRegister}
              required
            />
          </div>
          <div className="col-md-12">
            <label className="labels">Postcode</label>
            <input
              name="postcode"
              type="text"
              className="form-control"
              placeholder="enter Pincode"
              value={inputs.postcode || ""}
              onChange={setRegister}
              required
              
            />
          </div>
         
          <div className="row mt-3">
          <div className="col-md-6">
            <label className="labels">Location</label>
            <input
              name="location"
              type="text"
              className="form-control"
              placeholder="location"
              value={inputs.location || ""}
              onChange={setRegister}
              required
              
            />
          </div>
          <div className="col-md-6">
            <label className="labels">District</label>
            <input
              name="district"
              type="text"
              className="form-control"
              placeholder="district"
              value={inputs.district || ""}
              onChange={setRegister}
              required
            />
          </div>
          
{/* 
          <div className="col-md-12">
            <label className="labels">Area</label>
            <input
              type="text"
              className="form-control"
              placeholder="Area"
              defaultValue=""
            />
          </div>
          <div className="col-md-12">
            <label className="labels">District</label>
            <input
              type="text"
              className="form-control"
              placeholder="District"
              defaultValue=""
            />
          </div> */}
          {/* <div className="col-md-12">
            <label className="labels">State</label>
            <input
              type="text"
              className="form-control"
              placeholder="enter address line 2"
              defaultValue=""
            />
          </div>
          <div className="col-md-12">
            <label className="labels">Area</label>
            <input
              type="text"
              className="form-control"
              placeholder="enter address line 2"
              defaultValue=""
            />
          </div> */}
          <div className="col-md-12">
            <label className="labels">Email ID</label>
            <input
              name="email"
              type="text"
              className="form-control"
              placeholder="enter email id"
              value={inputs.email || ""}
              onChange={setRegister}
              required
              
            />
          </div>
          <div className="col-md-12">
            <label className="labels">Alternative Email ID</label>
            <input
              name="alternativeemail"
              type="text"
              className="form-control"
              placeholder="enter email id"
              value={inputs.alternativeemail|| ""}
              onChange={setRegister}
              required
            />
          </div>
          <div className="col-md-12">
            <label className="labels">Mobile Number</label>
            <input
              name="mobile"
              type="text"
              className="form-control"
              placeholder="enter phone number"
              value={inputs.mobile || ""}
              onChange={setRegister}
              required
            />
          </div>
          <div className="col-md-12">
            <label className="labels">Alternative Mobile Number</label>
            <input
              name="alternativemobile"
              type="text"
              className="form-control"
              placeholder="enter phone number"
              value={inputs.alternativemobile || ""}
              onChange={setRegister}
              required
            />
          </div>
          
          
        </div>
        
        
        </div>
        <div className="mt-5 text-center">
          <button className="btn btn-primary profile-button"type="button" onClick={Registersubmit} encType="multipart/form-data">
            Save Profile
          </button>
        </div>
      </div>
    </div>
    {/* <div className="col-md-4">
      <div className="p-3 py-5">
        
        <div className="d-flex justify-content-between align-items-center experience">
          <span>Edit Experience</span>
          <span className="border px-3 p-1 add-experience">
            <i className="fa fa-plus" />
            &nbsp;Experience
          </span>
        </div>
        <br />
       
        <div className="col-md-12">
  <label className="labels">Experience in Designing</label>
  <input
    type="text"
    className="form-control input-lg"
    placeholder="experience"
    defaultValue=""
  />
</div>
<br />

        <div className="col-md-12">
          <label className="labels">Additional Details</label>
          <input
            type="text"
            className="form-control"
            placeholder="additional details"
            defaultValue=""
          />
        </div>
        <div className="col-md-12">
          <label className="labels">CV Upload</label>
          <input type="file" className="form-control-file" name="file4" />
        </div>
      </div>
    </div>
  </div>
</div> */}
<div className="col-md-4">
  <div className="p-3 py-5">
    

    <div className="col-md-12">
      <label className="labels">Education</label>
      <select className="form-control input-lg select-lg" name="education" style={{ width: '400px' }} value={inputs.education || ""}
    onChange={setRegister} required>
        <option value="qualification">Qualification</option>
        <option value="Post Graduated">Post Graduated</option>
        <option value="Graduated">Graduated</option>
        <option value="Higher Studies">Higher Studies</option>
      </select>
    </div>
    <br />
    <div className="col-md-12">
            <label className="labels">Branch</label>
            <input  style={{width:'400px'}}
              name="branch"
              type="text"
              className="form-control"
              placeholder="enter branch"
              value={inputs.branch || ""}
              onChange={setRegister}
              required
            />
          </div>
          <div className="col-md-12">
      <label className="labels">Year</label>
      <select className="form-control input-lg select-lg" name="year"style={{ width: '400px' }}value={inputs.year || ""}
    onChange={setRegister} required>
        <option value="Year-level">Year-level</option>
        <option value="1st Year">1st Year</option>
        <option value="2nd Year">2nd Year</option>
        <option value="3rd Year">3rd Year</option>
        <option value="4th Year">4th Year</option>
        <option value="5th Year">5th Year</option>
      </select>
    </div>
    <br />


    

    <div className="col-md-12">
      <label className="labels">Experience(optional)</label>
      <input
        style={{ width: '400px',marginBottom:'10px' }}
        name="experience"
        type="text"
        className="form-control input-lg"
        placeholder="job type"
        value={inputs.experience || ""}
        onChange={setRegister}
        required
      />
      <label className="labels">Year</label>
      <input
        style={{ width: '400px',marginBottom:'10px' }}
        name="experienceyear"
        type="number"
        className="form-control input-lg"
        placeholder="Year"
        value={inputs.experienceyear || ""}
        onChange={setRegister}
        required
      />
    </div>
    <br />
    <div className="col-md-12">
            <label className="labels">Skill</label>
            <input  style={{width:'400px'}}
              name="skill"
              type="text"
              className="form-control"
              placeholder="enter skill"
              value={inputs.skill || ""}
              onChange={setRegister}
              required
            />
          </div>

    
    <div className="col-md-12">
      <label className="labels">CV Upload</label>
      <input type="file" className="form-control-file" name="cv"
        onChange={(e) => {
          setFile(e.target.files[0]);
          console.log(e.target.files[0].name);
          setInputs({ ...inputs,cv: e.target.files[0].name });
              }}
        required
         />
    </div>
  </div>
</div>

</div></div>
<PublicUserFooter/>
    </>
  )
}

export default MyProfile