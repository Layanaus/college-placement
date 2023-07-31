const express = require('express');
const PubliccontactModel = require('../models/PubliccontactModel');



const publiccontactRouter = express.Router();
publiccontactRouter.delete('/delete-jobcategory/:id', async (req, res) => {
  try {
    const jobId = req.params.id;
    const deletedJobCategory = await PubliccontactModel.findByIdAndDelete(jobId);
    if (deletedJobCategory) {
      return res.status(200).json({
        success: true,
        error: false,
        message: 'Job category deleted successfully',
        data: deletedJobCategory,
      });
    } else {
      return res.status(404).json({
        success: false,
        error: true,
        message: 'Job category not found',
      });
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: true,
      message: 'Something went wrong',
      details: error,
    });
  }
});
publiccontactRouter.get('/chinnu', async (req, res) => {
  try {
    const jobCategories = await PubliccontactModel.find();
    if (jobCategories.length > 0) {
      return res.status(200).json({
        success: true,
        error: false,
        data: jobCategories,
      });
    } else {
      return res.status(404).json({
        success: false,
        error: true,
        message: 'No contact found',
      });
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: true,
      message: 'Something went wrong',
      details: error,
    });
  }
});
publiccontactRouter.post('/createchinnu', async (req, res) => {
  try {
    const data = {
      
      name:req.body.name,
      email:req.body.email,
      contactsubject:req.body.contactsubject,
      contactmessage:req.body.contactmessage,

   
    };
    const savedData = await PubliccontactModel(data).save();

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

module.exports = publiccontactRouter;