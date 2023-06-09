const express = require('express');
const companyQuestionModel = require('../models/companyQuestionModel');




const companyquestionRouter = express.Router();
companyquestionRouter.delete('/delete-question/:id', async (req, res) => {
    try {
      const questionId = req.params.id;
  
      // Find the question by ID and delete it
      const deletedQuestion = await companyQuestionModel.findByIdAndDelete(questionId);
  
      if (deletedQuestion) {
        return res.status(200).json({
          success: true,
          error: false,
          message: "Question deleted successfully",
          details: deletedQuestion
        });
      } else {
        return res.status(404).json({
          success: false,
          error: true,
          message: "Question not found",
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


companyquestionRouter.get('/view-question',async(req,res)=>{
  try {
      const question = await companyQuestionModel.find()
      if(question[0]!=undefined){
          return res.status(200).json({
              success:true,
              error:false,
              data:question
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






  companyquestionRouter.post('/create_question', async (req, res) => {
  try {
    const data = {
      login_id:req.body.login_id,
      question:req.body. question,
      option1:req.body. option1,
      option2:req.body.option2,
      option3:req.body.option3,
      option4:req.body. option4,
      answer:req.body.answer,
    };
    const savedData = await companyQuestionModel(data).save();

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

module.exports = companyquestionRouter;