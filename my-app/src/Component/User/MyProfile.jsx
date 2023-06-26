import React,{useState} from 'react'
import PublicUserFooter from '../Footer/PublicUserFooter'
import Usernav from './Usernav'

const MyProfile = () => {
  const [inputs,setinputs]=useState([]);
  const setRegister =(event)=>{
    const name=event.target.name;
    const value=event.target.value;
    setinputs({...inputs,[name]:value});
    

  };
  const Registersubmit =(event)=>{
    event.preventDefault();

    console.log("data",inputs);
  }
  console.log(inputs);


  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setinputs({ ...inputs, [name]: value });
  };

  const handleReset = () => {
    setinputs({});
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('data', inputs);
    // Perform additional actions here, such as making API requests or updating the database
  }
  const [skills, setSkills] = useState(['']); // State to store the array of skills

  const handleSkillChange = (index, value) => {
    const updatedSkills = [...skills];
    updatedSkills[index] = value;
    setSkills(updatedSkills);
  };

  const handleAddSkill = () => {
    setSkills([...skills, '']);
  };

  return (
    <>
    <Usernav/>
    <div className="container rounded bg-white mt-5 mb-5">
  <div className="row">
    <div className="col-md-3 border-right" >
      <div className="d-flex flex-column align-items-center text-center p-3 py-5">
        <img
          className="rounded-circle mt-5"
          width="150px"
          src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
        />
        <span className="font-weight-bold">Edogaru</span>
        <span className="text-black-50">edogaru@mail.com.my</span>
        <span> </span>
      </div>
    </div>
    <div className="col-md-5 border-right">
      <div className="p-3 py-5">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h4 className="text-right" >Profile Settings</h4>
        </div>
        

        

        <div className="row mt-2" onSubmit={Registersubmit}>
          <div className="col-md-6">
            <label className="labels">First Name</label>
            <input
              name="firstname"
              type="text"
              className="form-control"
              placeholder="first name"
              value={inputs.firstname || ""}
              onChange={setRegister}
             
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
  style={{width:'350px'}}
  />
</div>
<div className="col-md-12">
  <label className="labels">Gender</label>
  <select className="form-control" style={{width:'350px'}} name="gender" value={inputs.gender || ""}
    onChange={setRegister}>
    <option value="" disabled>Select gender</option>
    <option value="male">Male</option>
    <option value="female">Female</option>
    <option value="other">Other</option>
  </select>
</div>


          
          <div className="col-md-12">
            <label className="labels" >Address Line 1</label>
            <input
              name="address1"
              type="text"
              className="form-control"
              placeholder="enter address line 1"
              value={inputs.address1 || ""}
              onChange={setRegister}
             
            />
          </div>
          <div className="col-md-12">
            <label className="labels">Address Line 2</label>
            <input
              name="address2"
              type="text"
              className="form-control"
              placeholder="enter address line 2"
              value={inputs.address2 || ""}
              onChange={setRegister}
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
              
            />
          </div>
          <div className="col-md-12">
            <label className="labels">Alternative Email ID</label>
            <input
              name="altemail"
              type="text"
              className="form-control"
              placeholder="enter email id"
              value={inputs.altemail || ""}
              onChange={setRegister}
            />
          </div>
          <div className="col-md-12">
            <label className="labels">Mobile Number</label>
            <input
              name="mobileno"
              type="text"
              className="form-control"
              placeholder="enter phone number"
              value={inputs.mobileno || ""}
              onChange={setRegister}
            />
          </div>
          <div className="col-md-12">
            <label className="labels">Alternative Mobile Number</label>
            <input
              name="altmobile"
              type="text"
              className="form-control"
              placeholder="enter phone number"
              value={inputs.altmobile || ""}
              onChange={setRegister}
            />
          </div>
          
          
        </div>
        
        
        </div>
        <div className="mt-5 text-center">
          <button className="btn btn-primary profile-button" type="button">
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
      <select className="form-control input-lg select-lg" name="position" style={{ width: '400px' }} value={inputs.position || ""}
    onChange={setRegister} >
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
            />
          </div>
          <div className="col-md-12">
      <label className="labels">Year</label>
      <select className="form-control input-lg select-lg" name="yearlevel"style={{ width: '400px' }}value={inputs.yearlevel || ""}
    onChange={setRegister}>
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
      />
      <label className="labels">Year</label>
      <input
        style={{ width: '400px',marginBottom:'10px' }}
        name="pyear"
        type="number"
        className="form-control input-lg"
        placeholder="Year"
        value={inputs.pyear || ""}
        onChange={setRegister}
      />
    </div>
    <br />

    <div>
      {skills.map((skill, index) => (
        <div className="col-md-12" key={index}>
          <label className="labels">Additional Skill {index + 1}</label>
          <input
            style={{ width: '400px' }}
            name="additionalskill"
            type="text"
            className="form-control input-lg"
            placeholder={`Skill ${index + 1}`}
            value={skill}
            onChange={(e) => handleSkillChange(index, e.target.value)}
          />
        </div>
      ))}
      <button  className='btn btn-success' onClick={handleAddSkill}style={{marginLeft:'400px'}} >+</button> {/* Plus button to add more input fields */}
    </div>
    <div className="col-md-12">
      <label className="labels">CV Upload</label>
      <input type="file" className="form-control-file" name="file4" 
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