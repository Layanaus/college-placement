const express = require('express');
const collegeRequestedCompaniesModel = require('../models/collegeRequestedCompaniesModel');




const collegeRequestedCompaniesRouter = express.Router();

collegeRequestedCompaniesRouter.get('/approve/:id', async (req, res) => {
  try {
    const id = req.params.id;

    const approve = await collegeRequestedCompaniesModel.updateOne({ _id: id }, { $set: { status: 1 } });

    if (approve && approve.modifiedCount === 1) {
      return res.status(200).json({
        success: true,
        message: 'User approved',
      });
    } else if (approve && approve.modifiedCount === 0) {
      return res.status(400).json({
        success: false,
        message: 'User not found or already approved',
      });
    } else {
      throw new Error('Error updating user');
    }
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: 'Something went wrong',
      details: error.message,
    });
  }
});


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
      
      login_id:req.body.login_id,
      college_id:req.body.college_id,
      subject:'conduct placement request',
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