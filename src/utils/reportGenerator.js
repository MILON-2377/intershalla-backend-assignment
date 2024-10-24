const {Parser} = require("json2csv");
const Lead = require('../models/leadModel');

async function generateReport() {
    const leads = await Lead.find();
    const json2csvParser = new Parser();

    return json2csvParser.parse(leads);
}

module.exports = {generateReport};