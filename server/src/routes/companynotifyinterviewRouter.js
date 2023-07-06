const express = require('express');
const companyNotifyInterviewModel = require('../models/companyNotifyInterviewModel');




const companynotifyinterviewRouter = express.Router();


companynotifyinterviewRouter.get('/view-interview',async(req,res)=>{
  try {
      const interview = await companyNotifyInterviewModel.find()
      if(interview[0]!=undefined){
          return res.status(200).json({
              success:true,
              error:false,
              data:interview
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






  companynotifyinterviewRouter.post('/create_interview', async (req, res) => {
  try {
    const data = {
      login_id:req.body. login_id,
      message:req.body.message,
      date:req.body.interviewdate,
   
    };
    const savedData = await companyNotifyInterviewModel(data).save();

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

module.exports = companynotifyinterviewRouter;