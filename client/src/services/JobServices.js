// // src/services/jobService.js
// import axios from "axios";

// const getJobs = async () => {
//   try {
//     // Example static jobs data (replace with API call later)
//     return [
//       { id: 1, title: "Software Engineer", location: "Lahore" },
//       { id: 2, title: "Project Manager", location: "Karachi" },
//       { id: 3, title: "UI/UX Designer", location: "Islamabad" },
//     ];
//   } catch (error) {
//     console.error("Error fetching jobs", error);
//     return [];
//   }
// };

// export default getJobs;

// src/services/jobService.js
import axios from "axios";

const API_URL = "http://localhost:5000/api/jobs"; // Update this with your back-end URL

// Fetch all jobs
const getJobs = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data; // Returns the list of jobs
  } catch (error) {
    console.error("Error fetching jobs", error);
    return [];
  }
};

// Fetch job details by ID
const getJobById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data; // Returns the job details
  } catch (error) {
    console.error("Error fetching job details", error);
    return null;
  }
};

export { getJobs, getJobById };
