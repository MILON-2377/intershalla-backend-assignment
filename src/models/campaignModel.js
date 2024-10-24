const mongoose = require("mongoose");

const campaignSchema = mongoose.Schema({
    name:{
        type:String,
        required: true,
    },
    budget:{
        type: Number,
        required: true,
    },
    leadsGenerated:{
        type: Number,
        required: true,
    },
    name:{
        type:String,
        required: true,
    },
    name:{
        type:String,
        required: true,
    },
});

const Campaign = mongoose.models.campaign || mongoose.model("campaign", campaignSchema);
module.exports = Campaign;