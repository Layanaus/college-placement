const express = require('express');
const companyRequestModel = require('../models/companyRequestModel');



const companyrequestRouter = express.Router();


companyrequestRouter.get('/view-placementrequest',async(req,res)=>{
  try {
      const request = await companyRequestModel.find()
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






  companyrequestRouter.post('/create_placementrequest', async (req, res) => {
  try {
    const data = {
      login_id:req.body. login_id,
      subject:req.body.subject,
      message:req.body.message,
   
    };
    const savedData = await companyRequestModel(data).save();

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

module.exports = companyrequestRouter;