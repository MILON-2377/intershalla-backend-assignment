const express = require("express");
const connectDB = require("./src/config/db");
const leadRoutes = require("./src/routes/leadRoutes");
const campaignRoutes = require("./src/routes/campaignRoutes");
const sendEmailAlert = require('./src/routes/emailSendRoute');
require("dotenv").config();
const app = express();
const PORT = process.env.PORT || 5000;
const reportRoutes = require("./src/routes/reportRoutes");
const { fetchAndStoreData } = require("./src/services/etlService");

async function startServer() {
  try {
    // mongodb connection
    connectDB();

    await fetchAndStoreData();

    // middleware
    app.use(express.json());

    // Use routes
    app.use("/api/leads", leadRoutes);
    app.use("/api/campaigns", campaignRoutes);
    app.use("/api/reports", reportRoutes); // report route
    app.use("/alert/email", sendEmailAlert);

    app.get("/", (req, res) => {
      res.json("server from leads");
    });

    app.listen(PORT, () => {
      console.log("server running on port", PORT);
    });
  } catch (error) {
    console.log("Error starting the server:", error);
  }
}

startServer();
