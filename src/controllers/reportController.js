const Lead = require('../models/leadModel');
const {Parser} = require("json2csv");


// to generate a csv report of all leads
const generateLeadReport = async () => {
    const leads = await Lead.find();

    // define the field to be included in the csv
    const field = ['name','email','phone','campaign','createdAt'];
    const opts = {field};

    // convert json to csv
    const parser = new Parser(opts);
    const csv = parser.parse(leads);

    return csv;
}

module.exports = {generateLeadReport};