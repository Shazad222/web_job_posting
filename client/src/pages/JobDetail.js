// // src/pages/JobDetail.js
// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";

// // Sample job data (or fetch it from an API)
// const jobData = [
//   {
//     id: 1,
//     title: "Software Engineer",
//     company: "Tech Corp",
//     description: "Develop software applications",
//   },
//   {
//     id: 2,
//     title: "Product Manager",
//     company: "Innovate Ltd.",
//     description: "Manage product development lifecycle",
//   },
//   {
//     id: 3,
//     title: "UI/UX Designer",
//     company: "Design Studio",
//     description: "Create intuitive user interfaces",
//   },
// ];

// const JobDetail = () => {
//   const { id } = useParams(); // Get the job ID from the URL
//   const [job, setJob] = useState(null);

//   useEffect(() => {
//     // Fetch the job details using the id
//     const selectedJob = jobData.find((job) => job.id === parseInt(id)); // Use parseInt to convert string ID to number
//     setJob(selectedJob);
//   }, [id]);

//   if (!job) {
//     return <p>Job not found.</p>;
//   }

//   return (
//     <div>
//       <h1>{job.title}</h1>
//       <h2>Company: {job.company}</h2>
//       <p>{job.description}</p>
//       <button>Apply Now</button>
//     </div>
//   );
// };

// export default JobDetail;

// src/pages/JobDetail.js
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; // To extract job ID from the URL
import { getJobById } from "../services/JobServices"; // Import the API function

const JobDetail = () => {
  const { id } = useParams(); // Get job ID from the URL
  const [job, setJob] = useState(null);

  useEffect(() => {
    const fetchJob = async () => {
      const jobData = await getJobById(id);
      setJob(jobData); // Set fetched job details to state
    };

    fetchJob();
  }, [id]); // Dependency array ensures it runs again if ID changes

  if (!job) {
    return <div>Loading...</div>; // Loading state while fetching job details
  }

  return (
    <div>
      <h2>{job.title}</h2>
      <p>{job.location}</p>
      <p>{job.description}</p>
    </div>
  );
};

export default JobDetail;
