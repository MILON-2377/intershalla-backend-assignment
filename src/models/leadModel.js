const mongoose = require("mongoose");

const leadSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    requied: true,
  },
  status: { 
    type: String, 
    requied: true 
},
});

const lead = mongoose.models.lead || mongoose.model("lead", leadSchema);
module.exports = lead;
