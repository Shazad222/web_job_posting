const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const sequelize = require("./config/database");
const jobRoutes = require("./routes/jobRoutes");
const Job = require("./models/jobModel");
const User = require("./models/userModel");

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Test database connection
sequelize
  .authenticate()
  .then(() => {
    console.log("Database connected successfully");
    // Sync the models with the database (creates tables if they don't exist)
    sequelize
      .sync({ force: false }) // Use { force: true } to reset tables on each restart
      .then(() => console.log("Models synced with database."));
  })
  .catch((err) => console.log("Error connecting to the database: ", err));

// Use job routes
app.use("/api", jobRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
