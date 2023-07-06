const express = require('express');
const PlacedStudentModel = require('../models/PlacedStudentModel');




const placedstudentRouter = express.Router();


placedstudentRouter.get('/view-placedstudent',async(req,res)=>{
  try {
      const student = await PlacedStudentModel.find()
      if(student[0]!=undefined){
          return res.status(200).json({
              success:true,
              error:false,
              data:student
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







  placedstudentRouter.post('/create_placedstudent', async (req, res) => {
  try {
    const data = {
      login_id:req.body. login_id,
      studentname:req.body.studentname,
      description:req.body.description,
      uploadimage:req.body.image,
   
    };
    const savedData = await PlacedStudentModel(data).save();

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

module.exports = placedstudentRouter;