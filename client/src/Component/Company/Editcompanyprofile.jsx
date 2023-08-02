
import { useEffect, useState } from 'react';
import Companynav from './Companynav';
import PublicUserFooter from '../Footer/PublicUserFooter';
import axios from 'axios';
const Editcompanyprofile = () => {
  const id = localStorage.getItem('login_id');

  const [inputs, setInputs] = useState({
    login_id: id,
  });

  const setRegister = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs({ ...inputs, [name]: value });
  };

  const handleReset = () => {
    setInputs({});
  };

  const registersubmit = (event) => {
    event.preventDefault();
    console.log('data', inputs);
    axios
    .put(`http://localhost:5000/register/edit-companyprofile/${id}`, inputs)
    .then((response) => {
      console.log(response.data);
      setInputs(response.data.data[0] || {});
    })
    .catch((error) => {
      console.log('Error:', error);
      });
  };


  useEffect(() => {
    fetch(`http://localhost:5000/register/view-company-profile/${id}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setInputs(data.data[0]); 
        }
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [id]);
  return (
    <>
      <Companynav />
      <div className="container">
        <h1 className="text-center"> Company Profile</h1>
        <form onSubmit={registersubmit}>
          <div className="form-group row" >
            <label htmlFor="companyName" className="col-sm-2 col-form-label">Company Name:</label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control custom-input"
                name="companyname"
                placeholder="Companyname"
                value={inputs.companyname ||""}
                onChange={setRegister}
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="address" className="col-sm-2 col-form-label">Location:</label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control custom-input"
                name="companylocation"
                placeholder="Location"
                value={inputs.companylocation ||""}
                onChange={setRegister}
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="e-mail" className="col-sm-2 col-form-label">E-mail:</label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control custom-input"
                name="email"
                placeholder="E-mail"
                value={inputs.email ||""}
                onChange={setRegister}
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="phone" className="col-sm-2 col-form-label">Phone:</label>
            <div className="col-sm-10">
              <input
                type="text"
                pattern="[0-9]*"
                className="form-control custom-input"
                name="phone"
                placeholder="Phone"
                value={inputs.phone ||""}
                onChange={setRegister}
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="website" className="col-sm-2 col-form-label">Website Address:</label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control custom-input"
                name="websiteaddress"
                placeholder="Website Address"
                value={inputs.websiteaddress ||""}
                onChange={setRegister}
              />
            </div>
          </div>
         
          
          <div className="form-group row" style={{marginLeft:'385px'}}>
            <div className="col-sm-10 offset-sm-2">
              <button type="submit" className="btn btn-primary">
                Save Changes
              </button>
            </div>
          </div>
        </form>
      </div>
      <PublicUserFooter />
    </>
  );
};

export default Editcompanyprofile;
