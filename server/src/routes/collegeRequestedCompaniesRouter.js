const express = require('express');
const collegeRequestedCompaniesModel = require('../models/collegeRequestedCompaniesModel');




const collegeRequestedCompaniesRouter = express.Router();


collegeRequestedCompaniesRouter.get('/view-companyplacementrequest',async(req,res)=>{
  try {
      const request = await collegeRequestedCompaniesModel.find()
      if(request[0]!=undefined){
          return res.status(200).json({
              success:true,
              error:false,
              data:request
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






  collegeRequestedCompaniesRouter.post('/company_placementrequest', async (req, res) => {
  try {
    const data = {
      
      college_id:req.body.college_id,
      subject:req.body.subject,
      message:req.body.message,
      status:0
   
    };
    const savedData = await collegeRequestedCompaniesModel(data).save();

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

module.exports = collegeRequestedCompaniesRouter;