// Dummy data for leads and campaigns
const leads = [
  { name: "John Doe", email: "john@example.com", status: "New" },
  { name: "Jane Doe", email: "jane@example.com", status: "Contacted" },
];

const campaigns = [
  { name: "Campaign 1", budget: 1000, leadsGenerated: 50 },
  { name: "Campaign 2", budget: 2000, leadsGenerated: 100 },
];
module.exports = { campaigns, leads };
