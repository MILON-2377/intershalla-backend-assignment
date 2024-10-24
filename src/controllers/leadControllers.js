const lead = require('../models/leadModel');

exports.getAllLeads = async (req, res) => {
    try {
        const leads = await lead.find();
        res.status(200).json(leads);
    } catch (error) {
        res.status(500).json({message:error.message});
    }
}

exports.createLead = async (req, res) => {
    const createLead = new lead(req.body);
    try {
        const saveLead = await createLead.save();
        res.status(201).json(saveLead);
    } catch (error) {
        res.status(500).json({message:error.message});
    }
}