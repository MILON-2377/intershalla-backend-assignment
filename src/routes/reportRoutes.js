const express = require("express");
const router = express.Router();
const {generateLeadReport} = require('../controllers/reportController');

router.get("/", async(req, res) =>{
    try {
        const csvData = await generateLeadReport();

        // set the response headers to indicate a file download
        res.setHeader('Content-Type', 'text/csv');
        res.setHeader('Content-Disposition','attachment; filename=leads_report.csv');

        res.send(csvData);
    } catch (error) {
        console.log("Error generating report: ", error.message);
        res.status(500).json({message: error.message});
    }
});

module.exports = router;