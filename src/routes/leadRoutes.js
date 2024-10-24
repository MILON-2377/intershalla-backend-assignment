const express = require("express");
const router = express.Router();
const leadController = require('../controllers/leadControllers');

router.get("/", leadController.getAllLeads);
router.post("/", leadController.createLead);

module.exports = router;