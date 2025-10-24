// Mock Data for IRIS Dashboard
export const mockData = {
  user: {
    name: "Rahul Gupta",
    avatar: "" // Will use icon
  },
  
  stats: {
    majorCGPA: "--",
    majorCredits: 44,
    semester: 5
  },
  
  announcements: [
    {
      id: 1,
      title: "Kind Attention : Mega Mess members",
      type: "announcement"
    },
    {
      id: 2,
      title: "Safe, Secure and Serene Campus Policy",
      type: "announcement"
    }
  ],
  
  frequentlyUsed: [
    { id: 1, name: "Institute", icon: "building" },
    { id: 2, name: "Fee structure", icon: "receipt" },
    { id: 3, name: "Pay Fees", icon: "credit-card" },
    { id: 4, name: "NITK website", icon: "globe" },
    { id: 5, name: "Sports", icon: "trophy" },
    { id: 6, name: "Contact Advisor", icon: "user" },
    { id: 7, name: "Hostel Dashboard", icon: "home" },
    { id: 8, name: "Eligible Mess", icon: "utensils" }
  ],
  
  quickLinks: [
    "Login to moodle",
    "About iris",
    "IRIS Blog",
    "NITK website",
    "Terms and services"
  ],
  
  upcomingEvents: [
    {
      id: 1,
      title: "Kannada vedi...",
      organizer: "Parva",
      date: "Nov 1st",
      venue: "SAC",
      isFlagship: true,
      type: "myEvent"
    },
    {
      id: 2,
      title: "ACM",
      organizer: "Innovation",
      date: "Nov 28th",
      venue: "LHC-C",
      isFlagship: true,
      type: "myEvent"
    },
    {
      id: 3,
      title: "TEDx",
      organizer: "Order Chaos",
      date: "Nov 5-6",
      venue: "Main building",
      description: "",
      type: "myEvent"
    },
    {
      id: 4,
      title: "INCUBE8",
      date: "Oct 24, 25 & 26",
      venue: "SJA",
      description: "Where every vision become a voyage",
      type: "myEvent"
    }
  ]
};