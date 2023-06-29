const express = require('express');
const companyCreateJobModel = require('../models/companyCreateJobModel');


const companycreatejobRouter = express.Router();

companycreatejobRouter.post('/create_job', async (req, res) => {
  try {
    const data = {
    login_id: req.body.login_id,
    jobname:req.body.jobname,
    jobdescription:req.body.jobdescription,
    jobcategory:req.body.jobcategory,
    vaccancy:req.body. vaccancy,
    qualification:req.body.qualification,
    expectedsalary:req.body.expectedsalary,
    branch:req.body.branch,
    lastdate:req.body.lastdate,
    };
    const savedData = await companyCreateJobModel(data).save();

    if (savedData) {
      return res.status(200).json({
        success: true,
        error: false,
        message: "Registration completed",
        details: savedData
      });
    }
  } catch (error) {
    return res.status(400).json({
      success: false,
      error: true,
      message: "Something went wrong",
      details: error
    });
  }
});

module.exports = companycreatejobRouter;