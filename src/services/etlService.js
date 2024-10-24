const axios = require("axios");
const Lead = require("../models/leadModel");
const Campaign = require("../models/campaignModel");

async function fetchAndStoreData() {
    const leadsResponse = await axios.get("http://localhost:5000/api/leads");
    const campaignResponse = await axios.get("http://localhost:5000/api/campaigns");

    console.log(leadsResponse);

    // await Lead.insertMany(leadsResponse.data);
    // await Campaign.insertMany(campaignResponse.data);


    console.log("Data fetched and stored successfully");
}

module.exports = {fetchAndStoreData};