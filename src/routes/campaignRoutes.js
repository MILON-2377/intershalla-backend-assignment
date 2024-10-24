const express = require("express");
const router = express.Router();
const campaignController = require('../controllers/campaignControllers');

router.get("/", campaignController.getAllCampaigns);
router.post("/", campaignController.createCampaign);

module.exports = router;