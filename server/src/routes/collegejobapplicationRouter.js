const express = require('express');
const collegeJobApplicationModel = require('../models/collegeJobApplicationModel');
collegeJobApplicationModel



const collegejobapplicationRouter = express.Router();

collegejobapplicationRouter.post('/jobportal_application', async (req, res) => {
  try {
    const data = {
     
    name:req.body.name,
    dateofbirth:req.body.dateofbirth,
    address:req.body.address,
    phonenumber:req.body.phonenumber,
    emailaddress:req.body.emailaddress,
    education:req.body.education,
    skills:req.body.skills,
    aboutyourself:req.body.aboutyourself,
    };
    const savedData = await collegeJobApplicationModel(data).save();

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

module.exports = collegejobapplicationRouter;