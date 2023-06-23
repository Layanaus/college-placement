// import React from 'react';
import Companynav from './Companynav';
import PublicUserFooter from '../Footer/PublicUserFooter';

const Editcompanyprofile = () => {
  return (
    <>
      <Companynav />
      <div className="container">
        <h1 className="text-center"> Company Profile</h1>
        <form>
          <div className="form-group row">
            <label htmlFor="companyName" className="col-sm-2 col-form-label">Company Name:</label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control custom-input"
                id="companyName"
                name="companyName"
                placeholder="Company name"
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="address" className="col-sm-2 col-form-label">Location:</label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control custom-input"
                id="address"
                name="address"
                placeholder="Location"
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="e-mail" className="col-sm-2 col-form-label">E-mail:</label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control custom-input"
                name="e-mail"
                placeholder="E-mail"
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
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="website" className="col-sm-2 col-form-label">Website Address:</label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control custom-input"
                name="website"
                placeholder="Website Address"
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="username" className="col-sm-2 col-form-label">Username:</label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control custom-input"
                name="username"
                placeholder="Username"
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
