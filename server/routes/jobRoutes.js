// const express = require("express");
// const Job = require("../models/jobModel");
// const router = express.Router();

// // Get all jobs
// router.get("/jobs", async (req, res) => {
//   try {
//     const jobs = await Job.findAll();
//     res.json(jobs);
//   } catch (err) {
//     res.status(500).send("Server error");
//   }
// });

// // Get job by ID
// router.get("/jobs/:id", async (req, res) => {
//   try {
//     const job = await Job.findByPk(req.params.id);
//     if (!job) return res.status(404).send("Job not found");
//     res.json(job);
//   } catch (err) {
//     res.status(500).send("Server error");
//   }
// });

// module.exports = router;

// routes/jobRoutes.js
const express = require("express");
const { createJob, getAllJobs } = require("../controllers/jobController");
const router = express.Router();

// POST route for creating a job
router.post("/jobs", createJob);

// GET route for fetching all jobs
router.get("/jobs", getAllJobs);

// GET route for fetching a specific job by ID
router.get("/jobs/:id", async (req, res) => {
  try {
    const job = await Job.findByPk(req.params.id);
    if (!job) return res.status(404).send("Job not found");
    res.json(job);
  } catch (err) {
    res.status(500).send("Server error");
  }
});

module.exports = router;
