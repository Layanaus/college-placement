const express = require('express');
const userProfileModel = require('../models/userProfileModel');
const userRegisterModel = require('../models/userRegisterModel');
const { default: mongoose } = require('mongoose');
const obj = mongoose.Types.ObjectId


const usermyprofileRouter = express.Router();

usermyprofileRouter.get('/view-single-user/:id', async (req, res) => {
  try {
    const login_id=new obj(req.params.id)
    const student = await userRegisterModel.find({login_id})
    if (student[0] != undefined) {
      return res.status(200).json({
        success: true,
        error: false,
        data: student[0]
      })
    } else {
      return res.status(400).json({
        success: false,
        error: true,
        message: "No data found"
      })
    }
  } catch (error) {
    return res.status(400).json({
      success: false,
      error: true,
      message: "Something went wrong",
      details: error
    })
  }
})




usermyprofileRouter.post('/myprofile', async (req, res) => {
  try {
    const data = {
    login_id: req.body.login_id,
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    dob: req.body.dob,
    gender: req.body.gender,
    addressline1: req.body.addressline1,
    addressline2: req.body.addressline2,
    postcode: req.body.postcode,
    location: req.body.location,
    district: req.body.district,
    email: req.body.email,
    alternativeemail: req.body.alternativeemail,
    mobile: req.body.mobile,
    alternativemobile: req.body.alternativemobile,
    education: req.body.education,
    branch: req.body. branch,
    year: req.body.year,
    experience: req.body.experience,
    experienceyear: req.body.experienceyear,
    skill: req.body.skill,
    cv: req.body.cv,
    };
    const savedData = await userProfileModel(data).save();

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

module.exports = usermyprofileRouter;