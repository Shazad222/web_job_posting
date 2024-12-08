// controllers/jobController.js

const Job = require("../models/jobModel"); // Importing the Job model

// Create a new job posting
const createJob = async (req, res) => {
  try {
    const { title, location, description } = req.body;

    if (!title || !location || !description) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newJob = await Job.create({ title, location, description });
    res.status(201).json(newJob);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error creating job" });
  }
};

// Get all job listings
const getAllJobs = async (req, res) => {
  try {
    const jobs = await Job.findAll();
    res.status(200).json(jobs);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching jobs" });
  }
};

// Export controllers to be used in routes
module.exports = {
  createJob,
  getAllJobs,
};
