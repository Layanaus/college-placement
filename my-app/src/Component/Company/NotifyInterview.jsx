import React from 'react';
import Companynav from './Companynav';
import PublicUserFooter from '../Footer/PublicUserFooter';

const NotifyInterview = () => {
  return (
    <>
      <Companynav />
      <div className="container">
        <h2>Notify Interview Date</h2>
        <form>
          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input type="text" className="form-control" id="subject" name="subject" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              className="form-control"
              id="message"
              name="message"
              rows={5}
              defaultValue={""}
            />
          </div>
          <div className="form-group">
            <label htmlFor="interviewDate">Date:</label>
            <input type="date" className="form-control" id="interviewDate" name="interviewDate" />
          </div>
          <button type="submit" className="btn btn-primary">
            Send
          </button>
        </form>
      </div>
      <PublicUserFooter />
    </>
  );
};

export default NotifyInterview;
