// Mock data for the AgriSure Insurer Portal

export const insurancePackages = [
  {
    id: 1,
    title: 'Wheat Protection Plan',
    cropType: 'Wheat',
    region: 'North India',
    coverage: '₹50,000 per hectare',
    premium: '₹5,000 per season',
    startDate: '2025-02-15',
    endDate: '2025-08-15',
    status: 'Active',
    enrollmentCount: 124,
    description: 'Comprehensive coverage for wheat crops against drought, flood, and pest damage.'
  },
  {
    id: 2,
    title: 'Rice Crop Insurance',
    cropType: 'Rice',
    region: 'East India',
    coverage: '₹45,000 per hectare',
    premium: '₹4,200 per season',
    startDate: '2025-03-01',
    endDate: '2025-09-30',
    status: 'Active',
    enrollmentCount: 231,
    description: 'Protection for paddy fields with special coverage for monsoon-related damages.'
  },
  {
    id: 3,
    title: 'Cotton Standard Coverage',
    cropType: 'Cotton',
    region: 'Central India',
    coverage: '₹60,000 per hectare',
    premium: '₹6,500 per season',
    startDate: '2025-04-10',
    endDate: '2025-11-15',
    status: 'Active',
    enrollmentCount: 89,
    description: 'Standard protection for cotton crops with additional pest control benefits.'
  },
  {
    id: 4,
    title: 'Sugarcane Elite Coverage',
    cropType: 'Sugarcane',
    region: 'South India',
    coverage: '₹75,000 per hectare',
    premium: '₹7,200 per season',
    startDate: '2025-01-15',
    endDate: '2025-12-31',
    status: 'Active',
    enrollmentCount: 67,
    description: 'Premium coverage for sugarcane with drought and flood protection.'
  },
  {
    id: 5,
    title: 'Millet Basic Plan',
    cropType: 'Millet',
    region: 'West India',
    coverage: '₹30,000 per hectare',
    premium: '₹2,800 per season',
    startDate: '2025-05-01',
    endDate: '2025-10-31',
    status: 'Draft',
    enrollmentCount: 0,
    description: 'Affordable basic coverage for millet crops focusing on drought protection.'
  }
];

export const claims = [
  {
    id: 'CLM-1187',
    farmerName: 'Ramesh Kumar',
    farmerId: 'FRM-1234',
    packageId: 1,
    packageTitle: 'Rice Protection Plan',
    description: 'Crop damage due to unexpected flood in the region',
    dateSubmitted: '2025-05-01',
    status: 'Pending',
    damageAmount: '₹27,500',
    location: 'punjab',
    supportingDocs: ['damage-photo-1.jpg', 'weather-report.pdf']
  },
  {
    id: 'CLM-002',
    farmerName: 'Anita Desai',
    farmerId: 'FRM-2345',
    packageId: 2,
    packageTitle: 'wheat Crop Insurance',
    description: 'Flooding destroyed 70% of the paddy field',
    dateSubmitted: '2025-04-12',
    status: 'Approved',
    damageAmount: '₹31,200',
    location: 'West Bengal',
    supportingDocs: ['flood-damage.jpg', 'field-assessment.pdf']
  },
  {
    id: 'CLM-003',
    farmerName: 'Vijay Sharma',
    farmerId: 'FRM-3456',
    packageId: 3,
    packageTitle: 'Cotton Standard Coverage',
    description: 'Severe pest infestation affecting yield',
    dateSubmitted: '2025-04-08',
    status: 'Rejected',
    damageAmount: '₹22,000',
    location: 'Maharashtra',
    supportingDocs: ['pest-evidence.jpg']
  },
  {
    id: 'CLM-004',
    farmerName: 'Priya Patel',
    farmerId: 'FRM-4567',
    packageId: 4,
    packageTitle: 'Sugarcane Elite Coverage',
    description: 'Drought conditions affecting 40% of crops',
    dateSubmitted: '2025-04-18',
    status: 'Pending',
    damageAmount: '₹36,000',
    location: 'Karnataka',
    supportingDocs: ['drought-field.jpg', 'soil-report.pdf']
  },
  {
    id: 'CLM-005',
    farmerName: 'Sunil Mehra',
    farmerId: 'FRM-5678',
    packageId: 1,
    packageTitle: 'Wheat Protection Plan',
    description: 'Locust swarm damage to entire field',
    dateSubmitted: '2025-04-17',
    status: 'Pending',
    damageAmount: '₹48,000',
    location: 'Punjab',
    supportingDocs: ['locust-damage.jpg', 'video-evidence.mp4']
  }
];

export const farmers = [
  {
    id: 'FRM-1234',
    name: 'Rajesh Kumar',
    location: 'Haryana',
    farmSize: '12 hectares',
    cropTypes: ['Wheat', 'Mustard'],
    enrollmentDate: '2025-02-20',
    activePackages: 1,
    totalClaims: 2
  },
  {
    id: 'FRM-2345',
    name: 'Anita Desai',
    location: 'West Bengal',
    farmSize: '8 hectares',
    cropTypes: ['Rice', 'Jute'],
    enrollmentDate: '2025-03-05',
    activePackages: 1,
    totalClaims: 1
  },
  {
    id: 'FRM-3456',
    name: 'Vijay Sharma',
    location: 'Maharashtra',
    farmSize: '15 hectares',
    cropTypes: ['Cotton', 'Soybean'],
    enrollmentDate: '2025-04-12',
    activePackages: 2,
    totalClaims: 1
  },
  {
    id: 'FRM-4567',
    name: 'Priya Patel',
    location: 'Karnataka',
    farmSize: '20 hectares',
    cropTypes: ['Sugarcane', 'Maize'],
    enrollmentDate: '2025-01-25',
    activePackages: 2,
    totalClaims: 1
  },
  {
    id: 'FRM-5678',
    name: 'Sunil Mehra',
    location: 'Punjab',
    farmSize: '18 hectares',
    cropTypes: ['Wheat', 'Rice'],
    enrollmentDate: '2025-02-28',
    activePackages: 1,
    totalClaims: 1
  }
];

export const activityLog = [
  {
    id: 1,
    title: 'New Claim Submitted',
    description: 'Farmer Rajesh Kumar (FRM-1234) submitted a claim for Wheat Protection Plan',
    time: '2 hours ago',
    status: 'Pending'
  },
  {
    id: 2,
    title: 'Claim Approved',
    description: 'Claim CLM-002 from Anita Desai for Rice Crop Insurance was approved',
    time: '5 hours ago',
    status: 'Approved'
  },
  {
    id: 3,
    title: 'New Package Created',
    description: 'Millet Basic Plan was created and saved as draft',
    time: '1 day ago',
    status: 'Draft'
  },
  {
    id: 4,
    title: 'Claim Rejected',
    description: 'Claim CLM-003 from Vijay Sharma was rejected due to insufficient evidence',
    time: '2 days ago',
    status: 'Rejected'
  },
  {
    id: 5,
    title: 'New Farmer Enrolled',
    description: 'Farmer Priya Patel signed up for Sugarcane Elite Coverage',
    time: '3 days ago',
    status: 'Active'
  }
];

export const riskAlerts = [
  {
    id: 1,
    title: 'Heavy Rainfall Alert',
    description: 'Predicted heavy rainfall in Western Maharashtra may affect cotton crops.',
    severity: 'Medium',
    affectedRegion: 'Western Maharashtra',
    affectedCrops: ['Cotton'],
    timestamp: '2025-04-20'
  },
  {
    id: 2,
    title: 'Drought Conditions',
    description: 'Prolonged drought conditions in Karnataka affecting sugarcane cultivation.',
    severity: 'High',
    affectedRegion: 'Karnataka',
    affectedCrops: ['Sugarcane', 'Maize'],
    timestamp: '2025-04-19'
  },
  {
    id: 3,
    title: 'Pest Outbreak Warning',
    description: 'Increased locust activity reported near Punjab-Haryana border.',
    severity: 'High',
    affectedRegion: 'Punjab, Haryana',
    affectedCrops: ['Wheat'],
    timestamp: '2025-04-18'
  }
];

export const subscriptionPlans = [
  {
    id: 'basic',
    name: 'Basic Plan',
    price: '₹5,000/mo',
    description: 'Essential features for small insurance providers',
    features: [
      'Up to 5 insurance packages',
      'Basic analytics dashboard',
      'Standard claim processing',
      'Email support',
      '100 farmer enrollments'
    ],
    isPopular: false
  },
  {
    id: 'professional',
    name: 'Professional Plan',
    price: '₹12,000/mo',
    description: 'Comprehensive tools for growing insurance businesses',
    features: [
      'Up to 15 insurance packages',
      'Advanced analytics and reporting',
      'Priority claim processing',
      'Dedicated account manager',
      'Unlimited farmer enrollments',
      'API access'
    ],
    isPopular: true
  },
  {
    id: 'enterprise',
    name: 'Enterprise Plan',
    price: 'Custom',
    description: 'Tailored solutions for large insurance organizations',
    features: [
      'Unlimited insurance packages',
      'Real-time risk assessment',
      'Custom branded portal',
      'White-glove onboarding',
      'Premium support SLA',
      'Full API suite access',
      'Custom integrations'
    ],
    isPopular: false
  }
];

export const analyticsData = {
  policySales: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    data: [18, 32, 45, 61, 58, 72]
  },
  claimsByCrop: {
    labels: ['Wheat', 'Rice', 'Cotton', 'Sugarcane', 'Millet'],
    data: [42, 28, 15, 19, 8]
  },
  revenueCollection: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    data: [120000, 185000, 210000, 298000, 312000, 375000]
  },
  farmersLocation: {
    labels: ['North', 'South', 'East', 'West', 'Central'],
    data: [35, 20, 18, 15, 12]
  },
  approvalRate: {
    labels: ['Approved', 'Rejected', 'Pending'],
    data: [68, 12, 20]
  }
};

export const testimonials = [
  {
    id: 1,
    content: "AgriSure has revolutionized how we manage our crop insurance. The platform's analytics have helped us identify high-risk areas and optimize our offerings.",
    author: "Pankaj Sharma",
    title: "CEO, GreenShield Insurance",
    avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 2,
    content: "The farmer onboarding process is seamless, and the blockchain-backed claims system has drastically reduced our processing times. Our customers are much happier.",
    author: "Meera Reddy",
    title: "Operations Director, AgroProtect Ltd",
    avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 3,
    content: "Since partnering with AgriSure, we've expanded our reach to farmers in five new states. The platform's credibility gives farmers confidence in our insurance products.",
    author: "Vikram Malhotra",
    title: "Regional Manager, KisanCover Insurance",
    avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  }
];