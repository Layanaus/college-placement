const express = require('express');
const jobCategoryModel = require('../models/jobCategoryModel');

const jobcategoryRouter = express.Router();

// GET all job categories
jobcategoryRouter.get('/view-jobcategory', async (req, res) => {
  try {
    const jobCategories = await jobCategoryModel.find();
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
        message: 'No job categories found',
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

// POST create a new job category
jobcategoryRouter.post('/add_jobcategory', async (req, res) => {
  try {
    const { jobcategory } = req.body;
    const newJobCategory = new jobCategoryModel({
      jobcategory,
    });
    const savedJobCategory = await newJobCategory.save();
    return res.status(200).json({
      success: true,
      error: false,
      message: 'Job category created successfully',
      data: savedJobCategory,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: true,
      message: 'Something went wrong',
      details: error,
    });
  }
});

// DELETE a job category by ID
jobcategoryRouter.delete('/delete-jobcategory/:id', async (req, res) => {
  try {
    const jobId = req.params.id;
    const deletedJobCategory = await jobCategoryModel.findByIdAndDelete(jobId);
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

module.exports = jobcategoryRouter;
