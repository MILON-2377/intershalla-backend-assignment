const express = require("express");
const router = express.Router();
const {sendMailAlet} = require('../services/emailServive');

router.post("/", sendMailAlet);

module.exports = router;