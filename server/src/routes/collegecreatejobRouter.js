const express = require('express');
const collegeCreateJobModel = require('../models/collegeCreateJobModel')



const collegecreatejobRouter = express.Router();


collegecreatejobRouter.get('/view-jobportal',async(req,res)=>{
  try {
      const users = await collegeCreateJobModel.find()
      if(users[0]!=undefined){
          return res.status(200).json({
              success:true,
              error:false,
              data:users
          })
      }else{
          return res.status(400).json({
              success:false,
              error:true,
              message:"No data found"
          })
      }
  } catch (error) {
      return res.status(400).json({
          success:false,
          error:true,
          message:"Something went wrong",
          details:error
      })
  }
  })






collegecreatejobRouter.post('/create_jobportal', async (req, res) => {
  try {
    const data = {
      login_id:req.body. login_id,
    companyname:req.body.companyname,
    companylocation:req.body.companylocation,
    jobname:req.body.jobname,
    jobdescription:req.body.jobdescription,
    jobcategory_id:req.body.jobcategory_id,
    Requiredqualification:req.body.qualification,
    salaryrange:req.body.salaryrange,
    companycontact:req.body.companycontact,
    lastdate:req.body.lastdate,
    };
    const savedData = await collegeCreateJobModel(data).save();

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

module.exports = collegecreatejobRouter;