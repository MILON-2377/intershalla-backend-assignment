const Campaign = require("../models/campaignModel");

exports.getAllCampaigns = async (req, res) => {
    try {
        const campaigns = await Campaign.find();
        res.status(200).json(campaigns);
    } catch (error) {
        res.status(500).json({message:error.message});
    }
}


exports.createCampaign = async (req, res) => {
    const campaign = new Campaign(req.body);
    console.log(campaign);
    try {
        const saveCampaign = await campaign.save();
        res.status(201).json(saveCampaign);
    } catch (error) {
        res.status(500).json({message:error.message});
    }
}