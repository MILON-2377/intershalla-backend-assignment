// Dummy data for leads and campaigns
const leads = [
  {
    name: "John Doe",
    email: "john@example.com",
    phone: "123-456-7890",
    status: "New",
    source: "Website",
  },
  {
    name: "Jane Doe",
    email: "jane@example.com",
    phone: "234-567-8901",
    status: "Contacted",
    source: "Referral",
  },
  {
    name: "Alice Smith",
    email: "alice.smith@example.com",
    phone: "345-678-9012",
    status: "Qualified",
    source: "Social Media",
  },
  {
    name: "Bob Johnson",
    email: "bob.johnson@example.com",
    phone: "456-789-0123",
    status: "Converted",
    source: "Email Campaign",
  },
  {
    name: "Charlie Brown",
    email: "charlie.brown@example.com",
    phone: "567-890-1234",
    status: "New",
    source: "Website",
  },
  {
    name: "Daisy Miller",
    email: "daisy.miller@example.com",
    phone: "678-901-2345",
    status: "Contacted",
    source: "Cold Call",
  },
  {
    name: "Evan Green",
    email: "evan.green@example.com",
    phone: "789-012-3456",
    status: "Qualified",
    source: "Trade Show",
  },
  {
    name: "Fiona White",
    email: "fiona.white@example.com",
    phone: "890-123-4567",
    status: "Converted",
    source: "Website",
  },
  {
    name: "George Black",
    email: "george.black@example.com",
    phone: "901-234-5678",
    status: "New",
    source: "Referral",
  },
  {
    name: "Hannah Blue",
    email: "hannah.blue@example.com",
    phone: "012-345-6789",
    status: "Contacted",
    source: "Social Media",
  },
];

const campaigns = [
  {
    name: "Campaign 1",
    description: "Summer Sale Promotion",
    budget: 1000,
    leadsGenerated: 50,
    startDate: "2024-06-01",
    endDate: "2024-06-30",
  },
  {
    name: "Campaign 2",
    description: "Back-to-School Discount",
    budget: 2000,
    leadsGenerated: 100,
    startDate: "2024-08-01",
    endDate: "2024-08-31",
  },
  {
    name: "Campaign 3",
    description: "Holiday Season Special",
    budget: 3000,
    leadsGenerated: 150,
    startDate: "2024-12-01",
    endDate: "2024-12-31",
  },
  {
    name: "Campaign 4",
    description: "Winter Clearance Sale",
    budget: 1500,
    leadsGenerated: 80,
    startDate: "2025-01-15",
    endDate: "2025-02-15",
  },
  {
    name: "Campaign 5",
    description: "Spring New Arrivals",
    budget: 2500,
    leadsGenerated: 120,
    startDate: "2025-03-01",
    endDate: "2025-03-31",
  },
  {
    name: "Campaign 6",
    description: "Flash Sale Event",
    budget: 1800,
    leadsGenerated: 90,
    startDate: "2024-07-15",
    endDate: "2024-07-20",
  },
  {
    name: "Campaign 7",
    description: "Black Friday Mega Sale",
    budget: 4000,
    leadsGenerated: 200,
    startDate: "2024-11-20",
    endDate: "2024-11-27",
  },
  {
    name: "Campaign 8",
    description: "Cyber Monday Specials",
    budget: 3000,
    leadsGenerated: 160,
    startDate: "2024-11-28",
    endDate: "2024-12-01",
  },
];

module.exports = { leads, campaigns };
