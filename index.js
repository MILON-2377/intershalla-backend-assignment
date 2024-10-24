const express = require("express");
const connectDB = require("./src/config/db");
const leadRoutes = require("./src/routes/leadRoutes");
const campaignRoutes = require("./src/routes/campaignRoutes");
require("dotenv").config();
const app = express();
const PORT = process.env.PORT || 5000;
const { fetchAndStoreData } = require("./src/services/etlService");
const reportRoutes = require("./src/routes/reportRoutes");



try {

  // mongodb connection
  connectDB();

  // middleware
  app.use(express.json());

  // Use routes
  app.use("/api/leads", leadRoutes);
  app.use("/api/campaigns", campaignRoutes);
  app.use("/api/reports", reportRoutes); // report route

  app.get("/", (req, res) => {
    res.json("server from leads");
  });

  app.listen(PORT, () => {
    console.log("server running on port", PORT);
  });
} catch (error) {
  console.log("Error starting the server:", error);
}
