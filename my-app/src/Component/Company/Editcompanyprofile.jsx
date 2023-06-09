import React from 'react';
import Companynav from './Companynav';
import PublicUserFooter from '../Footer/PublicUserFooter';

const Editcompanyprofile = () => {
  return (
    <>
      <Companynav />
      <div className="container">
        <h2>Edit Company Profile</h2>
        <form>
          <div className="form-group row">
            <label htmlFor="companyName" className="col-sm-2 col-form-label">Company Name:</label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
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
                className="form-control"
                id="address"
                name="address"
                placeholder="Location"
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="website" className="col-sm-2 col-form-label">Founded In:</label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="website"
                name="website"
                placeholder="12/09/2002"
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="founder" className="col-sm-2 col-form-label">Founder:</label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="founder"
                name="founder"
                placeholder="Founder name"
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="website" className="col-sm-2 col-form-label">Website:</label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="website"
                name="website"
                placeholder="website.blog"
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="description" className="col-sm-2 col-form-label">Description:</label>
            <div className="col-sm-10">
              <textarea
                className="form-control"
                id="description"
                name="description"
                rows={5}
                placeholder="Description about Company"
                defaultValue={""}
              />
            </div>
          </div>
          <div className="form-group row">
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
