// // src/pages/JobListings.js
// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom"; // Import Link from react-router-dom
// import getJobs from "../services/JobServices";

// const JobListings = () => {
//   const [jobs, setJobs] = useState([]);

//   useEffect(() => {
//     const fetchJobs = async () => {
//       const jobData = await getJobs();
//       setJobs(jobData);
//     };

//     fetchJobs();
//   }, []);

//   return (
//     <div>
//       <h2>Job Listings</h2>
//       <ul>
//         {jobs.map((job) => (
//           <li key={job.id}>
//             <Link to={`/job/${job.id}`}>
//               {job.title} - {job.location}
//             </Link>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default JobListings;

// src/pages/JobListings.js
import React, { useState, useEffect } from "react";
import { getJobs } from "../services/JobServices"; // Import the API function

const JobListings = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      const jobData = await getJobs();
      setJobs(jobData); // Set fetched data to state
    };

    fetchJobs();
  }, []); // Empty array means it runs once when component mounts

  return (
    <div>
      <h2>Job Listings</h2>
      <ul>
        {jobs.map((job) => (
          <li key={job.id}>
            <a href={`/job/${job.id}`}>
              {job.title} - {job.location}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JobListings;
