const TODAY = "2026-03-23";

const reps = [
  {
    id: "rep-maya-chen",
    name: "Maya Chen",
    role: "Account Executive",
    department: "Sales",
    manager: "Lauren Bishop",
    tenureMonths: 42,
    metrics: {
      attainmentPct: 128,
      avgFollowupHours: 3.8,
      multiThreadScore: 95,
      forecastAccuracyPct: 94
    },
    habits: [
      "Sends recap notes within the same day",
      "Maps two to four stakeholders before mutual close planning",
      "Brings product specialists into technical calls early"
    ],
    differentiators: [
      "Keeps commercial asks tied to business outcomes",
      "Closes meetings with explicit owners and dates",
      "Surfaces risk before it becomes a leadership surprise"
    ]
  },
  {
    id: "rep-priya-shah",
    name: "Priya Shah",
    role: "Account Executive",
    department: "Sales",
    manager: "Lauren Bishop",
    tenureMonths: 36,
    metrics: {
      attainmentPct: 121,
      avgFollowupHours: 5.2,
      multiThreadScore: 90,
      forecastAccuracyPct: 89
    },
    habits: [
      "Frames every demo around time-to-value",
      "Uses customer examples to create urgency",
      "Works closely with CSMs before renewal conversations"
    ],
    differentiators: [
      "Expands accounts by finding adjacent workflow pain",
      "Asks more change-management questions than most reps",
      "Keeps next steps unusually concrete"
    ]
  },
  {
    id: "rep-elena-torres",
    name: "Elena Torres",
    role: "Account Executive",
    department: "Sales",
    manager: "Lauren Bishop",
    tenureMonths: 30,
    metrics: {
      attainmentPct: 112,
      avgFollowupHours: 6.1,
      multiThreadScore: 87,
      forecastAccuracyPct: 86
    },
    habits: [
      "Explains technical tradeoffs clearly",
      "Handles procurement friction with detailed prep",
      "Brings implementation timelines into deal discussions"
    ],
    differentiators: [
      "Builds trust with operations-heavy buyers",
      "Is especially strong with regulated industries"
    ]
  },
  {
    id: "rep-isaac-romero",
    name: "Isaac Romero",
    role: "Account Executive",
    department: "Sales",
    manager: "Lauren Bishop",
    tenureMonths: 28,
    metrics: {
      attainmentPct: 97,
      avgFollowupHours: 9.4,
      multiThreadScore: 76,
      forecastAccuracyPct: 77
    },
    habits: [
      "Creates strong initial rapport",
      "Leans on product demos more than discovery depth",
      "Needs support tightening forecast discipline"
    ],
    differentiators: [
      "Gets buyers comfortable quickly",
      "Performs better when paired with a strong CSM"
    ]
  },
  {
    id: "rep-ben-foster",
    name: "Ben Foster",
    role: "Account Executive",
    department: "Sales",
    manager: "Lauren Bishop",
    tenureMonths: 18,
    metrics: {
      attainmentPct: 91,
      avgFollowupHours: 12.6,
      multiThreadScore: 69,
      forecastAccuracyPct: 72
    },
    habits: [
      "Connects well with single-threaded champions",
      "Lets calls drift before locking next steps",
      "Benefits from more structured deal reviews"
    ],
    differentiators: [
      "Relationship-first seller",
      "Lower operational rigor than top peers"
    ]
  },
  {
    id: "rep-nolan-brooks",
    name: "Nolan Brooks",
    role: "Account Executive",
    department: "Sales",
    manager: "Lauren Bishop",
    tenureMonths: 16,
    metrics: {
      attainmentPct: 84,
      avgFollowupHours: 16.8,
      multiThreadScore: 62,
      forecastAccuracyPct: 68
    },
    habits: [
      "Runs energetic demos",
      "Often leaves decision criteria implicit",
      "Escalates late when accounts wobble"
    ],
    differentiators: [
      "Good front-of-room energy",
      "Weakest renewal coordination in the group"
    ]
  }
];

const csms = [
  {
    id: "csm-olivia-grant",
    name: "Olivia Grant",
    role: "Customer Success Manager",
    department: "Customer Success",
    manager: "Adrian Cole",
    tenureMonths: 40,
    metrics: {
      grrPct: 96,
      nrrPct: 118,
      qbrCoveragePct: 100,
      timeToSuccessPlanDays: 10
    },
    habits: [
      "Builds success plans early and revisits them monthly",
      "Threads executive sponsors into business reviews",
      "Partners tightly with support after high-severity incidents"
    ],
    differentiators: [
      "Best at turning adoption work into expansion momentum",
      "Most disciplined QBR operator on the team"
    ]
  },
  {
    id: "csm-serena-patel",
    name: "Serena Patel",
    role: "Customer Success Manager",
    department: "Customer Success",
    manager: "Adrian Cole",
    tenureMonths: 33,
    metrics: {
      grrPct: 95,
      nrrPct: 111,
      qbrCoveragePct: 92,
      timeToSuccessPlanDays: 12
    },
    habits: [
      "Strong at change management and rollout planning",
      "Uses product usage snapshots in almost every review",
      "Summarizes open blockers crisply"
    ],
    differentiators: [
      "Very good at recovering shaky implementations",
      "Creates unusually clear adoption goals"
    ]
  },
  {
    id: "csm-jordan-kim",
    name: "Jordan Kim",
    role: "Customer Success Manager",
    department: "Customer Success",
    manager: "Adrian Cole",
    tenureMonths: 24,
    metrics: {
      grrPct: 90,
      nrrPct: 103,
      qbrCoveragePct: 81,
      timeToSuccessPlanDays: 18
    },
    habits: [
      "Highly responsive in reactive situations",
      "Needs stronger executive alignment",
      "Works best with highly engaged admins"
    ],
    differentiators: [
      "Steady operator",
      "Less strategic than top peers"
    ]
  },
  {
    id: "csm-marcus-lee",
    name: "Marcus Lee",
    role: "Customer Success Manager",
    department: "Customer Success",
    manager: "Adrian Cole",
    tenureMonths: 20,
    metrics: {
      grrPct: 87,
      nrrPct: 97,
      qbrCoveragePct: 63,
      timeToSuccessPlanDays: 26
    },
    habits: [
      "Gets on calls quickly during escalations",
      "Relies on heroic effort over structured plans",
      "Often responds after a signal has already worsened"
    ],
    differentiators: [
      "Good under pressure",
      "Weakest proactive account management discipline"
    ]
  }
];

const supportAgents = [
  {
    id: "sup-ava-nguyen",
    name: "Ava Nguyen",
    role: "Support Engineer",
    department: "Support",
    manager: "Mei Thompson",
    tenureMonths: 38,
    metrics: {
      csatPct: 98,
      avgFirstResponseMinutes: 21,
      avgResolutionHours: 10,
      escalationRatePct: 8
    },
    habits: [
      "Documents root causes cleanly",
      "Flags product gaps with reproducible detail",
      "Closes the loop with CSMs on customer sentiment"
    ],
    differentiators: [
      "Best blend of speed and root-cause quality"
    ]
  },
  {
    id: "sup-daniel-cho",
    name: "Daniel Cho",
    role: "Support Engineer",
    department: "Support",
    manager: "Mei Thompson",
    tenureMonths: 31,
    metrics: {
      csatPct: 95,
      avgFirstResponseMinutes: 24,
      avgResolutionHours: 13,
      escalationRatePct: 12
    },
    habits: [
      "Strong on integrations and API issues",
      "Great at customer education",
      "Hands issues to engineering with high signal"
    ],
    differentiators: [
      "Most trusted with technical accounts"
    ]
  },
  {
    id: "sup-rachel-singh",
    name: "Rachel Singh",
    role: "Support Engineer",
    department: "Support",
    manager: "Mei Thompson",
    tenureMonths: 27,
    metrics: {
      csatPct: 96,
      avgFirstResponseMinutes: 28,
      avgResolutionHours: 15,
      escalationRatePct: 11
    },
    habits: [
      "Very strong empathy in escalations",
      "Translates technical issues for non-technical users",
      "Good follow-through after incidents"
    ],
    differentiators: [
      "Best written tone on the team"
    ]
  },
  {
    id: "sup-luis-martinez",
    name: "Luis Martinez",
    role: "Support Engineer",
    department: "Support",
    manager: "Mei Thompson",
    tenureMonths: 22,
    metrics: {
      csatPct: 92,
      avgFirstResponseMinutes: 36,
      avgResolutionHours: 18,
      escalationRatePct: 16
    },
    habits: [
      "Reliable on routine cases",
      "Needs clearer handoffs on complex incidents"
    ],
    differentiators: [
      "Solid generalist"
    ]
  },
  {
    id: "sup-tessa-morgan",
    name: "Tessa Morgan",
    role: "Support Engineer",
    department: "Support",
    manager: "Mei Thompson",
    tenureMonths: 17,
    metrics: {
      csatPct: 90,
      avgFirstResponseMinutes: 44,
      avgResolutionHours: 24,
      escalationRatePct: 19
    },
    habits: [
      "Thorough but slower than peers",
      "Prefers deep investigation over quick containment"
    ],
    differentiators: [
      "Useful for complex reproductions, not fastest at customer comms"
    ]
  },
  {
    id: "sup-omar-haddad",
    name: "Omar Haddad",
    role: "Support Engineer",
    department: "Support",
    manager: "Mei Thompson",
    tenureMonths: 14,
    metrics: {
      csatPct: 88,
      avgFirstResponseMinutes: 49,
      avgResolutionHours: 28,
      escalationRatePct: 23
    },
    habits: [
      "Escalates quickly",
      "Needs stronger expectation setting with frustrated customers"
    ],
    differentiators: [
      "Handles volume, but not yet polished in executive escalations"
    ]
  }
];

const accountBlueprints = [
  {
    id: "alturas-health",
    name: "Alturas Health",
    industry: "Healthcare Operations",
    segment: "Enterprise",
    arr: 420000,
    employees: 2400,
    ownerId: "rep-maya-chen",
    csmId: "csm-olivia-grant",
    seatsPurchased: 820,
    seatsActive: 764,
    renewalDate: "2026-09-30",
    renewalStage: "On Track",
    championStatus: "Strong",
    sponsorStatus: "Stable",
    riskLevel: "low",
    healthScore: 92,
    healthDelta: 6,
    nps: 52,
    callCount: 5,
    ticketCount: 5,
    usageSeries: [84, 86, 88, 89, 91, 93],
    productLikes: [
      "Cross-functional workflow visibility",
      "Fast implementation for regional clinics",
      "Reliable alerts for handoff bottlenecks"
    ],
    painPoints: [
      "Would like deeper export customization"
    ],
    featureThemes: ["reporting_exports", "workflow_automation"],
    repTangentThemes: ["Operational benchmarks at peer health systems"],
    customerTangentThemes: ["How teams handle staffing shortages during winter surges"],
    usageHighlights: ["Workflow automation", "Executive dashboards", "Task routing"],
    riskReasons: [],
    notes: "Model customer with broad adoption, strong executive sponsorship, and clear ROI."
  },
  {
    id: "northstar-retail",
    name: "Northstar Retail Group",
    industry: "Retail Operations",
    segment: "Enterprise",
    arr: 390000,
    employees: 3100,
    ownerId: "rep-priya-shah",
    csmId: "csm-serena-patel",
    seatsPurchased: 900,
    seatsActive: 801,
    renewalDate: "2026-10-15",
    renewalStage: "Expansion Likely",
    championStatus: "Strong",
    sponsorStatus: "Stable",
    riskLevel: "low",
    healthScore: 88,
    healthDelta: 4,
    nps: 48,
    callCount: 6,
    ticketCount: 7,
    usageSeries: [81, 82, 83, 86, 87, 89],
    productLikes: [
      "Store launch templates",
      "Region-level reporting",
      "Cross-team accountability"
    ],
    painPoints: [
      "Wants mobile approvals to feel faster",
      "Needs more flexible role permissions"
    ],
    featureThemes: ["mobile_experience", "rbac_permissions"],
    repTangentThemes: ["Rollout sequencing across stores"],
    customerTangentThemes: ["Seasonal labor planning and regional manager coaching"],
    usageHighlights: ["Launch playbooks", "Approvals", "Reporting dashboards"],
    riskReasons: [],
    notes: "Demanding but healthy strategic account with clear expansion story."
  },
  {
    id: "bluepeak-logistics",
    name: "BluePeak Logistics",
    industry: "Logistics",
    segment: "Mid-Market",
    arr: 210000,
    employees: 980,
    ownerId: "rep-elena-torres",
    csmId: "csm-olivia-grant",
    seatsPurchased: 420,
    seatsActive: 372,
    renewalDate: "2026-08-20",
    renewalStage: "On Track",
    championStatus: "Strong",
    sponsorStatus: "Stable",
    riskLevel: "low",
    healthScore: 84,
    healthDelta: 5,
    nps: 41,
    callCount: 4,
    ticketCount: 6,
    usageSeries: [73, 75, 77, 79, 81, 84],
    productLikes: [
      "Task orchestration across depots",
      "Easy exception tracking",
      "Good support responsiveness"
    ],
    painPoints: [
      "Would like more native carrier integrations"
    ],
    featureThemes: ["integrations"],
    repTangentThemes: ["Operational maturity benchmarks in logistics"],
    customerTangentThemes: ["Dock scheduling and driver retention"],
    usageHighlights: ["Exception queues", "Automated routing", "Ops dashboards"],
    riskReasons: [],
    notes: "Healthy customer with clear operational value and room for integrations."
  },
  {
    id: "redwood-bank",
    name: "Redwood Bank",
    industry: "Financial Services",
    segment: "Enterprise",
    arr: 460000,
    employees: 2700,
    ownerId: "rep-elena-torres",
    csmId: "csm-serena-patel",
    seatsPurchased: 760,
    seatsActive: 654,
    renewalDate: "2026-06-30",
    renewalStage: "At Risk",
    championStatus: "Mixed",
    sponsorStatus: "Changed",
    riskLevel: "high",
    healthScore: 47,
    healthDelta: -18,
    nps: 14,
    callCount: 7,
    ticketCount: 14,
    usageSeries: [81, 77, 72, 68, 63, 58],
    productLikes: [
      "Strong workflow auditability",
      "Vendor team is responsive"
    ],
    painPoints: [
      "Needs deeper audit logs",
      "Role permissions are too coarse",
      "Reporting exports are manual"
    ],
    featureThemes: ["audit_logs", "rbac_permissions", "reporting_exports"],
    repTangentThemes: ["Procurement risk framing and regulatory benchmarks"],
    customerTangentThemes: ["Exams, internal audit prep, and change-control burden"],
    usageHighlights: ["Case routing", "Audit review tasks"],
    riskReasons: [
      "Renewal within 100 days",
      "Executive sponsor changed after internal reorg",
      "Usage and seat activation have declined for four straight months",
      "Repeated escalations tied to auditability and access control"
    ],
    notes: "Flagship churn-risk account with commercial, support, and product pressure aligned."
  },
  {
    id: "solstice-media",
    name: "Solstice Media",
    industry: "Media",
    segment: "Mid-Market",
    arr: 185000,
    employees: 640,
    ownerId: "rep-isaac-romero",
    csmId: "csm-jordan-kim",
    seatsPurchased: 260,
    seatsActive: 212,
    renewalDate: "2026-07-31",
    renewalStage: "Watch",
    championStatus: "Mixed",
    sponsorStatus: "Stable",
    riskLevel: "medium",
    healthScore: 64,
    healthDelta: -6,
    nps: 26,
    callCount: 8,
    ticketCount: 11,
    usageSeries: [76, 74, 73, 71, 69, 66],
    productLikes: [
      "Campaign handoff visibility",
      "Cross-team accountability"
    ],
    painPoints: [
      "Mobile workflow approvals are clunky",
      "Needs easier dashboard exports",
      "Asks for lighter-weight automations"
    ],
    featureThemes: ["mobile_experience", "reporting_exports", "workflow_automation"],
    repTangentThemes: ["Storytelling around campaign planning"],
    customerTangentThemes: ["Content calendars, agency coordination, and ad budget shifts"],
    usageHighlights: ["Campaign planning", "Approvals"],
    riskReasons: [
      "Call volume is high and sentiment is mixed",
      "Adoption remains concentrated in one team"
    ],
    notes: "Support-heavy, noisy account that is not yet a full churn case."
  },
  {
    id: "meridian-bio",
    name: "Meridian BioLabs",
    industry: "Biotech",
    segment: "Mid-Market",
    arr: 275000,
    employees: 760,
    ownerId: "rep-maya-chen",
    csmId: "csm-serena-patel",
    seatsPurchased: 340,
    seatsActive: 304,
    renewalDate: "2026-11-12",
    renewalStage: "Expansion Likely",
    championStatus: "Strong",
    sponsorStatus: "Stable",
    riskLevel: "low",
    healthScore: 86,
    healthDelta: 7,
    nps: 47,
    callCount: 4,
    ticketCount: 4,
    usageSeries: [72, 75, 78, 81, 84, 86],
    productLikes: [
      "Cross-functional experiment tracking",
      "Clear ownership during handoffs",
      "Strong support during implementation"
    ],
    painPoints: [
      "Would like stronger compliance logging"
    ],
    featureThemes: ["audit_logs"],
    repTangentThemes: ["R&D portfolio planning and lab operations"],
    customerTangentThemes: ["Hiring scientists and budget planning for trials"],
    usageHighlights: ["Experiment workflows", "Review queues", "Dashboards"],
    riskReasons: [],
    notes: "Healthy, expanding account with one strategic compliance ask."
  },
  {
    id: "harbor-hotels",
    name: "Harbor Hotels",
    industry: "Hospitality",
    segment: "Mid-Market",
    arr: 155000,
    employees: 1200,
    ownerId: "rep-ben-foster",
    csmId: "csm-jordan-kim",
    seatsPurchased: 280,
    seatsActive: 205,
    renewalDate: "2026-07-15",
    renewalStage: "At Risk",
    championStatus: "Weak",
    sponsorStatus: "Changed",
    riskLevel: "high",
    healthScore: 42,
    healthDelta: -20,
    nps: 11,
    callCount: 9,
    ticketCount: 13,
    usageSeries: [70, 66, 61, 57, 52, 46],
    productLikes: [
      "Property-level coordination when it works"
    ],
    painPoints: [
      "Needs better mobile experience for managers on the floor",
      "Asks for easier permissions for regional leaders",
      "Complains that rollout stalled after champion left"
    ],
    featureThemes: ["mobile_experience", "rbac_permissions"],
    repTangentThemes: ["Property operations anecdotes and hospitality service stories"],
    customerTangentThemes: ["Seasonal staffing, guest complaints, and labor shortages"],
    usageHighlights: ["Daily task lists"],
    riskReasons: [
      "Renewal in under 120 days",
      "Champion left and new executive sponsor is unengaged",
      "Usage has fallen sharply across properties",
      "Frequent support contacts focus on mobile friction"
    ],
    notes: "High-risk account driven by adoption decay and ownership disruption."
  },
  {
    id: "ironcore-manufacturing",
    name: "IronCore Manufacturing",
    industry: "Manufacturing",
    segment: "Enterprise",
    arr: 335000,
    employees: 1800,
    ownerId: "rep-priya-shah",
    csmId: "csm-olivia-grant",
    seatsPurchased: 610,
    seatsActive: 552,
    renewalDate: "2026-12-01",
    renewalStage: "On Track",
    championStatus: "Strong",
    sponsorStatus: "Stable",
    riskLevel: "low",
    healthScore: 83,
    healthDelta: 3,
    nps: 39,
    callCount: 5,
    ticketCount: 7,
    usageSeries: [78, 79, 80, 81, 82, 84],
    productLikes: [
      "Plant-level workflow standardization",
      "Good issue visibility",
      "Strong change-management support"
    ],
    painPoints: [
      "Wants more shop-floor integrations",
      "Would like no-code automations"
    ],
    featureThemes: ["integrations", "workflow_automation"],
    repTangentThemes: ["Lean operations and plant throughput benchmarks"],
    customerTangentThemes: ["Supplier delays and shift scheduling"],
    usageHighlights: ["Shift handoffs", "Issue queues", "Plant dashboards"],
    riskReasons: [],
    notes: "Operationally mature customer with clear automation appetite."
  },
  {
    id: "lumen-energy",
    name: "Lumen Energy Services",
    industry: "Energy",
    segment: "Enterprise",
    arr: 370000,
    employees: 1450,
    ownerId: "rep-maya-chen",
    csmId: "csm-serena-patel",
    seatsPurchased: 590,
    seatsActive: 497,
    renewalDate: "2026-08-31",
    renewalStage: "Watch",
    championStatus: "Strong",
    sponsorStatus: "Stable",
    riskLevel: "medium",
    healthScore: 68,
    healthDelta: -4,
    nps: 24,
    callCount: 6,
    ticketCount: 10,
    usageSeries: [83, 82, 80, 77, 75, 73],
    productLikes: [
      "Strong field-operations coordination",
      "Executive dashboards help regional planning"
    ],
    painPoints: [
      "Integration backlog is slowing rollout",
      "Asks for offline and mobile workflow improvements"
    ],
    featureThemes: ["integrations", "mobile_experience"],
    repTangentThemes: ["Field operations resilience and storm response planning"],
    customerTangentThemes: ["Crew safety, outage drills, and capital planning"],
    usageHighlights: ["Field workflows", "Regional dashboards"],
    riskReasons: [
      "Adoption slipped after integration delays",
      "Renewal is not immediate but sentiment is softening"
    ],
    notes: "Strategic account with recoverable risk if integration gaps are addressed."
  },
  {
    id: "cedar-schools",
    name: "Cedar Public Schools",
    industry: "Education",
    segment: "Mid-Market",
    arr: 125000,
    employees: 540,
    ownerId: "rep-ben-foster",
    csmId: "csm-marcus-lee",
    seatsPurchased: 310,
    seatsActive: 198,
    renewalDate: "2026-06-15",
    renewalStage: "At Risk",
    championStatus: "Weak",
    sponsorStatus: "Stable",
    riskLevel: "high",
    healthScore: 38,
    healthDelta: -15,
    nps: 9,
    callCount: 7,
    ticketCount: 12,
    usageSeries: [65, 61, 57, 52, 48, 44],
    productLikes: [
      "Initial onboarding was smooth"
    ],
    painPoints: [
      "District leaders want easier reporting exports",
      "Admins struggle with permissions by school",
      "Automation setup has stalled"
    ],
    featureThemes: ["reporting_exports", "rbac_permissions", "workflow_automation"],
    repTangentThemes: ["Budget cycles and procurement headaches"],
    customerTangentThemes: ["Board meetings, staffing shortages, and parent communications"],
    usageHighlights: ["School task tracking"],
    riskReasons: [
      "Renewal is close and adoption remains weak",
      "CS coverage has been reactive rather than proactive",
      "Permissioning and reporting gaps are blocking wider rollout"
    ],
    notes: "Small ARR but very clear churn narrative and product gap story."
  },
  {
    id: "nimbus-insurance",
    name: "Nimbus Insurance",
    industry: "Insurance",
    segment: "Enterprise",
    arr: 405000,
    employees: 2300,
    ownerId: "rep-elena-torres",
    csmId: "csm-olivia-grant",
    seatsPurchased: 730,
    seatsActive: 681,
    renewalDate: "2027-01-20",
    renewalStage: "On Track",
    championStatus: "Strong",
    sponsorStatus: "Stable",
    riskLevel: "low",
    healthScore: 87,
    healthDelta: 4,
    nps: 44,
    callCount: 4,
    ticketCount: 5,
    usageSeries: [84, 85, 85, 86, 87, 88],
    productLikes: [
      "Excellent visibility across claims teams",
      "Clear audit trails",
      "Stable performance"
    ],
    painPoints: [
      "Would like deeper export templates"
    ],
    featureThemes: ["reporting_exports"],
    repTangentThemes: ["Claims process modernization and compliance"],
    customerTangentThemes: ["Catastrophe readiness and adjuster training"],
    usageHighlights: ["Claims workflows", "Audit review", "Executive dashboards"],
    riskReasons: [],
    notes: "Healthy regulated-industry lighthouse account."
  },
  {
    id: "freshfork-market",
    name: "FreshFork Market",
    industry: "Food Retail",
    segment: "Mid-Market",
    arr: 145000,
    employees: 860,
    ownerId: "rep-isaac-romero",
    csmId: "csm-jordan-kim",
    seatsPurchased: 250,
    seatsActive: 221,
    renewalDate: "2026-09-10",
    renewalStage: "On Track",
    championStatus: "Strong",
    sponsorStatus: "Stable",
    riskLevel: "low",
    healthScore: 79,
    healthDelta: 5,
    nps: 37,
    callCount: 5,
    ticketCount: 8,
    usageSeries: [71, 73, 74, 76, 78, 80],
    productLikes: [
      "Store manager coordination",
      "Simple task visibility",
      "Good support empathy"
    ],
    painPoints: [
      "Wants better mobile speed in low-connectivity environments"
    ],
    featureThemes: ["mobile_experience"],
    repTangentThemes: ["Store operations and perishables planning"],
    customerTangentThemes: ["Shrink, staffing, and regional promotions"],
    usageHighlights: ["Store checklists", "Regional approvals"],
    riskReasons: [],
    notes: "Loyal, support-heavy but healthy account."
  },
  {
    id: "polaris-telecom",
    name: "Polaris Telecom",
    industry: "Telecommunications",
    segment: "Enterprise",
    arr: 440000,
    employees: 2600,
    ownerId: "rep-priya-shah",
    csmId: "csm-serena-patel",
    seatsPurchased: 840,
    seatsActive: 704,
    renewalDate: "2026-11-30",
    renewalStage: "Expansion Likely",
    championStatus: "Strong",
    sponsorStatus: "Stable",
    riskLevel: "low",
    healthScore: 85,
    healthDelta: 6,
    nps: 46,
    callCount: 6,
    ticketCount: 9,
    usageSeries: [76, 79, 80, 82, 84, 86],
    productLikes: [
      "Cross-regional operational coordination",
      "Better visibility than legacy tools",
      "Solid account team partnership"
    ],
    painPoints: [
      "Requests more integration coverage",
      "Interested in richer workflow automation"
    ],
    featureThemes: ["integrations", "workflow_automation"],
    repTangentThemes: ["Rollout orchestration across regions"],
    customerTangentThemes: ["Fiber build plans, field capacity, and partner coordination"],
    usageHighlights: ["Field ops", "Escalation routing", "Regional dashboards"],
    riskReasons: [],
    notes: "Large, healthy customer with strong expansion and roadmap influence."
  },
  {
    id: "vanta-freight",
    name: "Vanta Freight",
    industry: "Freight",
    segment: "Mid-Market",
    arr: 195000,
    employees: 720,
    ownerId: "rep-nolan-brooks",
    csmId: "csm-marcus-lee",
    seatsPurchased: 360,
    seatsActive: 244,
    renewalDate: "2026-07-10",
    renewalStage: "At Risk",
    championStatus: "Weak",
    sponsorStatus: "Changed",
    riskLevel: "high",
    healthScore: 44,
    healthDelta: -13,
    nps: 13,
    callCount: 10,
    ticketCount: 15,
    usageSeries: [69, 66, 63, 60, 56, 51],
    productLikes: [
      "Dispatch team likes the visibility when integrations hold"
    ],
    painPoints: [
      "Carrier integration problems are creating distrust",
      "Automation rules feel too brittle",
      "Customers ask for better exports for operations leaders"
    ],
    featureThemes: ["integrations", "workflow_automation", "reporting_exports"],
    repTangentThemes: ["War stories from dispatch teams and customer service escalations"],
    customerTangentThemes: ["Driver shortages, fuel costs, and detention charges"],
    usageHighlights: ["Dispatch queues"],
    riskReasons: [
      "High support load and falling usage",
      "Renewal is approaching with little executive alignment",
      "Integration complaints show up in every source"
    ],
    notes: "At-risk account with noisy support and weak account management coverage."
  },
  {
    id: "oakwell-capital",
    name: "Oakwell Capital",
    industry: "Private Equity",
    segment: "Enterprise",
    arr: 320000,
    employees: 410,
    ownerId: "rep-maya-chen",
    csmId: "csm-olivia-grant",
    seatsPurchased: 180,
    seatsActive: 168,
    renewalDate: "2026-12-15",
    renewalStage: "On Track",
    championStatus: "Strong",
    sponsorStatus: "Stable",
    riskLevel: "low",
    healthScore: 90,
    healthDelta: 5,
    nps: 49,
    callCount: 4,
    ticketCount: 4,
    usageSeries: [88, 88, 89, 90, 91, 92],
    productLikes: [
      "Executive visibility into portfolio operations",
      "Strong reporting for portfolio reviews",
      "Fast time to value"
    ],
    painPoints: [
      "Would like more flexible board-ready export formatting"
    ],
    featureThemes: ["reporting_exports"],
    repTangentThemes: ["Portfolio operations and operating partner playbooks"],
    customerTangentThemes: ["Board prep, portfolio oversight, and value-creation plans"],
    usageHighlights: ["Executive reporting", "Portfolio workflows"],
    riskReasons: [],
    notes: "High-value referenceable customer with strong executive use case."
  }
];

const featureThemeCatalog = {
  rbac_permissions: {
    label: "Role-Based Permissions",
    problem: "Admins need more granular control by region, school, property, or function.",
    roadmapCandidate: "Scoped roles, field-level permissions, and regional admin templates"
  },
  reporting_exports: {
    label: "Reporting And Exports",
    problem: "Leaders want dashboard exports that fit board, audit, and operating review formats.",
    roadmapCandidate: "Custom export builder, scheduled CSV/PDF delivery, and template library"
  },
  audit_logs: {
    label: "Audit Logs And Compliance",
    problem: "Regulated customers want deeper, easier-to-search change history.",
    roadmapCandidate: "Expanded audit event coverage, exportable logs, and retention controls"
  },
  workflow_automation: {
    label: "Workflow Automation",
    problem: "Teams want no-code routing and follow-up rules without brittle setup.",
    roadmapCandidate: "Visual builder, safer rule testing, and reusable automation recipes"
  },
  integrations: {
    label: "Integrations",
    problem: "Rollouts stall when data must be moved manually across adjacent systems.",
    roadmapCandidate: "Prebuilt connectors, deeper API coverage, and integration health monitoring"
  },
  mobile_experience: {
    label: "Mobile Experience",
    problem: "Frontline managers need a faster mobile workflow for approvals and updates.",
    roadmapCandidate: "Offline support, quicker approvals, and simplified manager views"
  }
};

const supportRotation = supportAgents.map((agent) => agent.id);

function formatCurrency(value) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0
  }).format(value);
}

function parseDate(value) {
  return new Date(`${value}T00:00:00Z`);
}

function daysUntil(date) {
  const ms = parseDate(date) - parseDate(TODAY);
  return Math.round(ms / (1000 * 60 * 60 * 24));
}

function buildMonthLabels({ startYear, startMonth, count }) {
  return Array.from({ length: count }, (_, index) => {
    const monthIndex = startMonth - 1 + index;
    const year = startYear + Math.floor(monthIndex / 12);
    const month = (monthIndex % 12) + 1;
    return `${year}-${String(month).padStart(2, "0")}`;
  });
}

function monthLabel(indexFromOldest) {
  const labels = buildMonthLabels({ startYear: 2025, startMonth: 10, count: 6 });
  return labels[indexFromOldest];
}

function revenueMonthLabel(indexFromOldest) {
  const labels = buildMonthLabels({ startYear: 2025, startMonth: 4, count: 12 });
  return labels[indexFromOldest];
}

function ticketMonthLabel(indexFromOldest) {
  const labels = buildMonthLabels({ startYear: 2025, startMonth: 10, count: 6 });
  return labels[indexFromOldest];
}

function titleCase(value) {
  return value
    .split("_")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

function accountPriority(account) {
  if (account.riskLevel === "high") return 3;
  if (account.riskLevel === "medium") return 2;
  return 1;
}

function buildContacts(account) {
  const orgSlug = account.id;
  return [
    {
      id: `contact-${orgSlug}-champion`,
      accountId: account.id,
      name: `${account.name.split(" ")[0]} Operations Champion`,
      title: "Director of Operations",
      relationship: "Champion",
      sentiment: account.riskLevel === "high" ? "Concerned" : "Supportive"
    },
    {
      id: `contact-${orgSlug}-sponsor`,
      accountId: account.id,
      name: `${account.name.split(" ")[0]} Executive Sponsor`,
      title: "VP Operations",
      relationship: "Executive Sponsor",
      sentiment: account.sponsorStatus === "Changed" ? "New" : "Engaged"
    },
    {
      id: `contact-${orgSlug}-admin`,
      accountId: account.id,
      name: `${account.name.split(" ")[0]} System Admin`,
      title: "Business Systems Manager",
      relationship: "Admin",
      sentiment: account.ticketCount > 10 ? "Busy" : "Positive"
    },
    {
      id: `contact-${orgSlug}-power-user`,
      accountId: account.id,
      name: `${account.name.split(" ")[0]} Team Lead`,
      title: "Regional Operations Lead",
      relationship: "Power User",
      sentiment: account.riskLevel === "low" ? "Advocate" : "Mixed"
    }
  ];
}

function buildSalesforceAccount(account) {
  return {
    accountId: account.id,
    accountName: account.name,
    industry: account.industry,
    segment: account.segment,
    employeeCount: account.employees,
    arr: account.arr,
    arrFormatted: formatCurrency(account.arr),
    seatsPurchased: account.seatsPurchased,
    seatsActive: account.seatsActive,
    activeSeatPct: Math.round((account.seatsActive / account.seatsPurchased) * 100),
    renewalDate: account.renewalDate,
    daysToRenewal: daysUntil(account.renewalDate),
    renewalStage: account.renewalStage,
    championStatus: account.championStatus,
    sponsorStatus: account.sponsorStatus,
    ownerId: account.ownerId,
    csmId: account.csmId,
    riskLevel: account.riskLevel,
    commercialSummary:
      account.riskLevel === "high"
        ? "Renewal requires executive attention due to weak adoption and unresolved product gaps."
        : account.renewalStage === "Expansion Likely"
          ? "Healthy account with expansion potential tied to broader rollout."
          : "Renewal outlook is stable with normal monitoring.",
    notes: account.notes
  };
}

function buildOpportunity(account) {
  return {
    opportunityId: `opp-${account.id}-renewal`,
    accountId: account.id,
    type: "Renewal",
    stage: account.renewalStage,
    amount: account.arr,
    amountFormatted: formatCurrency(account.arr),
    closeDate: account.renewalDate,
    probabilityPct:
      account.riskLevel === "high" ? 45 : account.riskLevel === "medium" ? 70 : 92,
    summary:
      account.riskLevel === "high"
        ? "Commercial risk tied to product gaps, sponsor change, and shrinking adoption."
        : account.renewalStage === "Expansion Likely"
          ? "Renewal with credible expansion path if roadmap asks stay on track."
          : "Expected flat-to-up renewal."
  };
}

function buildUsageSnapshots(account) {
  return account.usageSeries.map((activePct, index) => ({
    accountId: account.id,
    month: monthLabel(index),
    activeSeatPct: activePct,
    activeSeats: Math.round((account.seatsPurchased * activePct) / 100),
    workflowRuns:
      Math.round(account.seatsPurchased * activePct * 1.8) + index * 10,
    dashboardsViewed:
      Math.round(account.seatsPurchased * activePct * 0.9) + index * 7,
    adoptionTrend:
      index === 0
        ? "baseline"
        : activePct > account.usageSeries[index - 1]
          ? "up"
          : activePct < account.usageSeries[index - 1]
            ? "down"
            : "flat"
  }));
}

function buildRevenueHistory(account) {
  const latestArr = account.arr;
  const monthlyDelta = Math.round((account.arr * 0.02) / 12);
  const baseDelta =
    account.riskLevel === "high"
      ? monthlyDelta * -3
      : account.renewalStage === "Expansion Likely"
        ? monthlyDelta * 3
        : account.riskLevel === "medium"
          ? monthlyDelta * -1
          : monthlyDelta * 1;
  const fluctuations = account.usageSeries.flatMap((value, index, series) => {
    const previous = index === 0 ? value : series[index - 1];
    return [Math.round((previous - value) / 3), Math.round((value - previous) / 2)];
  });
  const multipliers = Array.from({ length: 12 }, (_, index) => 11 - index);

  return multipliers.map((monthsBeforeLatest, index) => {
    const trendAdjustment = baseDelta * monthsBeforeLatest;
    const fluctuation = (fluctuations[index] || 0) * 200;
    const arr = Math.max(60000, latestArr - trendAdjustment - fluctuation);
    const priorArr = index === 0 ? arr : null;
    return {
      accountId: account.id,
      accountName: account.name,
      month: revenueMonthLabel(index),
      arr,
      arrFormatted: formatCurrency(arr),
      mrr: Math.round(arr / 12),
      mrrFormatted: formatCurrency(Math.round(arr / 12)),
      netChangeFromPriorMonth:
        priorArr === null ? 0 : arr - priorArr,
      trend:
        index === 0
          ? "baseline"
          : arr > latestArr
            ? "down_to_current"
            : arr < latestArr
              ? "up_to_current"
              : "flat_to_current"
    };
  }).map((point, index, series) => ({
    ...point,
    netChangeFromPriorMonth: index === 0 ? 0 : point.arr - series[index - 1].arr
  }));
}

function buildHealthProfile(account) {
  return {
    accountId: account.id,
    accountName: account.name,
    healthScore: account.healthScore,
    healthDelta: account.healthDelta,
    riskLevel: account.riskLevel,
    renewalDate: account.renewalDate,
    daysToRenewal: daysUntil(account.renewalDate),
    sponsorStatus: account.sponsorStatus,
    championStatus: account.championStatus,
    ctas: account.riskReasons.length
      ? account.riskReasons.map((reason, index) => ({
          ctaId: `cta-${account.id}-${index + 1}`,
          type: index === 0 ? "Renewal Risk" : "Adoption Risk",
          priority: accountPriority(account),
          status: index < 2 ? "Open" : "Monitoring",
          summary: reason
        }))
      : [
          {
            ctaId: `cta-${account.id}-expansion`,
            type: account.renewalStage === "Expansion Likely" ? "Expansion" : "Value Reinforcement",
            priority: 1,
            status: "Open",
            summary:
              account.renewalStage === "Expansion Likely"
                ? "Use strong adoption and advocacy to scope expansion."
                : "Capture wins and maintain executive visibility."
          }
        ],
    successPlan: {
      objective:
        account.riskLevel === "high"
          ? "Recover stakeholder confidence before renewal."
          : account.renewalStage === "Expansion Likely"
            ? "Scale successful workflows into more teams."
            : "Sustain adoption and document business value.",
      nextMilestones:
        account.riskLevel === "high"
          ? [
              "Run executive recovery meeting",
              "Close highest-severity product gaps or define mitigation plan",
              "Re-baseline rollout by team"
            ]
          : [
              "Share usage wins with sponsor",
              "Refresh success metrics",
              "Review roadmap alignment in next QBR"
            ]
    }
  };
}

function buildHealthHistory(account) {
  const latestScore = account.healthScore;
  const startingScore = Math.max(18, Math.min(97, latestScore - account.healthDelta));
  const slope = account.healthDelta / 11;

  return Array.from({ length: 12 }, (_, index) => {
    const rawScore = startingScore + slope * index;
    const healthScore = Math.max(10, Math.min(99, Math.round(rawScore)));
    const usageIndex = Math.min(Math.floor(index / 2), account.usageSeries.length - 1);
    const adoptionScore = Math.max(
      10,
      Math.min(
        99,
        Math.round(
          (account.usageSeries[usageIndex] || account.usageSeries.at(-1)) +
            (account.riskLevel === "low" ? 4 : account.riskLevel === "high" ? -4 : 0)
        )
      )
    );
    const supportScore = Math.max(
      10,
      Math.min(99, Math.round(85 - account.ticketCount * 1.8 - (account.riskLevel === "high" ? 12 : account.riskLevel === "medium" ? 4 : -3) + index))
    );
    const sentimentScore = Math.max(
      10,
      Math.min(99, Math.round(healthScore + (account.riskLevel === "high" ? -6 : 5)))
    );
    const renewalRiskScore = Math.max(
      1,
      Math.min(100, Math.round(100 - healthScore + (account.renewalStage === "At Risk" ? 15 : account.renewalStage === "Expansion Likely" ? -10 : 0)))
    );

    return {
      accountId: account.id,
      accountName: account.name,
      month: revenueMonthLabel(index),
      healthScore,
      adoptionScore,
      supportScore,
      sentimentScore,
      renewalRiskScore,
      trend:
        index === 0
          ? "baseline"
          : healthScore > startingScore
            ? "improving"
            : healthScore < startingScore
              ? "declining"
              : "flat"
    };
  });
}

function buildTickets(account, indexOffset) {
  const issues = account.painPoints.length ? account.painPoints : ["General configuration guidance"];
  return Array.from({ length: account.ticketCount }, (_, index) => {
    const issue = issues[index % issues.length];
    const severity =
      account.riskLevel === "high" && index < 3
        ? "sev1"
        : account.riskLevel !== "low" && index < 4
          ? "sev2"
          : "sev3";
    const assigneeId = supportRotation[(indexOffset + index) % supportRotation.length];
    return {
      ticketId: `zd-${account.id}-${String(index + 1).padStart(3, "0")}`,
      accountId: account.id,
      accountName: account.name,
      subject: `${titleCase(account.featureThemes[index % account.featureThemes.length] || "general_support")} request or issue`,
      severity,
      status: index < Math.max(2, Math.floor(account.ticketCount / 5)) ? "Open" : "Closed",
      assigneeId,
      createdAt: `2026-0${(index % 3) + 1}-${String((index * 3) % 27 + 1).padStart(2, "0")}`,
      firstResponseMinutes:
        severity === "sev1" ? 18 + index * 3 : severity === "sev2" ? 42 + index * 4 : 88 + index * 5,
      resolutionHours:
        severity === "sev1" ? 15 + index * 4 : severity === "sev2" ? 22 + index * 3 : 36 + index * 2,
      tags: [
        "customer-360-demo",
        account.riskLevel,
        account.featureThemes[index % account.featureThemes.length] || "general"
      ],
      summary:
        severity === "sev1"
          ? `${account.name} escalated a high-visibility issue tied to: ${issue}.`
          : `${account.name} requested help or reported friction related to: ${issue}.`,
      customerTone:
        account.riskLevel === "high"
          ? "Frustrated but still engaged"
          : account.ticketCount > 9
            ? "High-touch but constructive"
            : "Generally positive"
    };
  });
}

function buildTicketHistory(account) {
  const openNow = Math.max(1, Math.floor(account.ticketCount / 5));
  const baseline = Math.max(1, Math.round(account.ticketCount / 6));
  const trend =
    account.riskLevel === "high"
      ? [0, 1, 1, 2, 2, 3]
      : account.riskLevel === "medium"
        ? [1, 1, 0, 0, -1, -1]
        : [1, 0, 0, -1, -1, -1];

  return Array.from({ length: 6 }, (_, index) => {
    const ticketCount = Math.max(1, baseline + trend[index]);
    const sev1Count =
      account.riskLevel === "high"
        ? Math.max(0, Math.min(ticketCount, index < 2 ? 1 : 2))
        : account.riskLevel === "medium"
          ? Math.max(0, Math.min(ticketCount, index === 0 ? 1 : 0))
          : 0;
    const openCount =
      index === 5
        ? openNow
        : Math.max(0, Math.min(ticketCount, Math.round(openNow * ((index + 1) / 6) * 0.6)));
    const avgResolutionHours = Math.max(
      8,
      Math.round(
        (account.riskLevel === "high" ? 28 : account.riskLevel === "medium" ? 20 : 14) +
          sev1Count * 6 +
          ticketCount * 1.2 -
          index
      )
    );

    return {
      accountId: account.id,
      accountName: account.name,
      month: ticketMonthLabel(index),
      ticketCount,
      sev1Count,
      openCount,
      avgResolutionHours
    };
  });
}

function buildFeatureRequests(account) {
  return account.featureThemes.map((theme, index) => ({
    requestId: `pb-${account.id}-${index + 1}`,
    accountId: account.id,
    accountName: account.name,
    theme,
    themeLabel: featureThemeCatalog[theme].label,
    title: `${featureThemeCatalog[theme].label} for ${account.name}`,
    priority:
      account.riskLevel === "high" ? "critical" : account.renewalStage === "Expansion Likely" ? "high" : "medium",
    impact:
      account.riskLevel === "high"
        ? "Renewal blocker"
        : account.renewalStage === "Expansion Likely"
          ? "Expansion enabler"
          : "Adoption accelerator",
    linkedArr: account.arr,
    linkedArrFormatted: formatCurrency(account.arr),
    problem: featureThemeCatalog[theme].problem,
    customerQuote:
      account.riskLevel === "high"
        ? `Without better ${featureThemeCatalog[theme].label.toLowerCase()}, it is hard to justify broader rollout.`
        : `If ${featureThemeCatalog[theme].label.toLowerCase()} improves, we could expand usage further.`,
    source: index % 2 === 0 ? "Call feedback" : "Support escalation"
  }));
}

function buildCalls(account) {
  return Array.from({ length: account.callCount }, (_, index) => ({
    ...buildCallRecord(account, index)
  }));
}

function buildTranscriptSegments(account, employeeName, callDate, index) {
  const heroTranscript = buildHeroTranscriptSegments(account, employeeName, callDate, index);
  if (heroTranscript) {
    return heroTranscript;
  }

  const primaryPain = account.painPoints[0] || "the current workflow setup";
  const secondaryPain = account.painPoints[1] || "some reporting friction";
  const primaryLike = account.productLikes[0] || "workflow visibility";
  const secondaryLike = account.productLikes[1] || "cross-team coordination";
  const featureLabels = account.featureThemes.map((theme) => featureThemeCatalog[theme].label);
  const featurePhrase = featureLabels.length ? featureLabels.join(", ") : "workflow improvements";
  const topFeature = featureLabels[0] || "workflow improvements";
  const repTangent = account.repTangentThemes[0] || "rollout sequencing";
  const customerTangent = account.customerTangentThemes[0] || "team planning";
  const championName = `${account.name} Champion`;
  const adminName = `${account.name} Admin`;
  const execName = `${account.name} Sponsor`;
  const amaroPmName = index % 3 === 0 ? "Nadia Park" : "Evan Brooks";
  const callType = inferCallType(account, index);
  const callTypeIntro = callTypeIntroLine(callType, account, callDate);
  const accountJargon = buildAccountJargon(account);
  const filler = fillerPhrase(index);
  const interruption = index % 2 === 0 ? "Sorry, let me jump in there for a second." : "Actually, before we move on.";
  const frictionTone =
    account.riskLevel === "high"
      ? "Honestly, this is the thing people keep bringing back to me."
      : account.riskLevel === "medium"
        ? "It is not a fire, but it does keep slowing the teams down."
        : "It is more of a polish issue than a real blocker.";
  const riskLine =
    account.riskLevel === "high"
      ? `The biggest blocker right now is ${primaryPain.toLowerCase()}, and yes, that is coming up in renewal conversations.`
      : account.riskLevel === "medium"
        ? `We are seeing some pressure around ${primaryPain.toLowerCase()}, but it still feels fixable if we keep momentum.`
        : `The team is in a good place overall, and the main ask is just better ${topFeature.toLowerCase()}.`;
  const featureRequestLine =
    account.riskLevel === "high"
      ? `If you asked me to be very direct, we need better ${topFeature.toLowerCase()} before I can confidently push broader rollout.`
      : `The feature request that would make the biggest difference is better ${topFeature.toLowerCase()}, because that is what comes up in internal feedback.`;
  const tangentIntro =
    account.riskLevel === "low"
      ? "Small tangent, but it came up in our leadership meeting"
      : "Quick tangent, because it is related to how much change we can absorb";
  const closingLine =
    account.riskLevel === "high"
      ? "If we can leave this call with owners and dates, that will help me internally."
      : "If we can keep the roadmap discussion moving, I think we can broaden usage.";

  return [
    {
      speaker: employeeName,
      role: "Amaro",
      type: "discussion",
      text: `${callTypeIntro} ${filler} I wanted to review adoption, open blockers, and how the team is feeling about the rollout.`
    },
    {
      speaker: championName,
      role: "Customer",
      type: "feedback",
      text: `Yeah, overall people still like ${primaryLike.toLowerCase()}, and we get good comments about ${secondaryLike.toLowerCase()}, but we keep running into ${primaryPain.toLowerCase()}. In our world that usually shows up when ${accountJargon}.`
    },
    {
      speaker: adminName,
      role: "Customer",
      type: "feedback",
      text: `From the admin side, I would say ${secondaryPain.toLowerCase()} also creates extra cleanup for us. It is not catastrophic, just repetitive. We end up doing more manual cleanup than we expected.`
    },
    {
      speaker: employeeName,
      role: "Amaro",
      type: "discovery",
      text: `That makes sense. I want to understand whether this is mostly process friction, product friction, or some combination of both.`
    },
    {
      speaker: championName,
      role: "Customer",
      type: "risk_signal",
      text: `${frictionTone} ${riskLine}`
    },
    {
      speaker: adminName,
      role: "Customer",
      type: "interruption",
      text: `${interruption} The practical issue is that frontline users do not describe this as one bug. They describe it as a lot of little speed bumps that pile up.`
    },
    {
      speaker: execName,
      role: "Customer",
      type: "executive",
      text: account.riskLevel === "high"
        ? `From my side, I need confidence we are not asking the teams to fight the tool. The value is there, but the drag is visible.`
        : `From my side, the value case is still solid. I mostly want to know whether the product is evolving in the areas we care about.`
    },
    {
      speaker: employeeName,
      role: "Amaro",
      type: "feature_request",
      text: `That is helpful. We have heard similar asks around ${featurePhrase.toLowerCase()}, and I want to capture the sharpest version of the request from your side, not the polite version.`
    },
    {
      speaker: adminName,
      role: "Customer",
      type: "feature_request",
      text: `The cleanest way to say it is this: ${featureRequestLine} That is the thing our team keeps writing in notes after meetings.`
    },
    {
      speaker: amaroPmName,
      role: "Amaro",
      type: "product_followup",
      text: `I joined for this section because I wanted to hear it directly. It sounds like the request is not just convenience, it changes rollout confidence and admin overhead. I also hear that it affects how credible the next expansion conversation feels.`
    },
    {
      speaker: championName,
      role: "Customer",
      type: "tangent",
      text: `${tangentIntro}: we spent a lot of time internally talking about ${customerTangent.toLowerCase()}, because it affects how much operational change the teams can realistically absorb.`
    },
    {
      speaker: employeeName,
      role: "Amaro",
      type: "tangent",
      text: `Understood. On our side, we have been discussing ${repTangent.toLowerCase()} with similar customers, so I can bring a few concrete rollout ideas next time instead of keeping this abstract.`
    },
    {
      speaker: execName,
      role: "Customer",
      type: "next_step",
      text: closingLine
    }
  ];
}

function buildHeroTranscriptSegments(account, employeeName, callDate, index) {
  const heroBuilders = {
    "redwood-bank": buildRedwoodHeroTranscript,
    "alturas-health": buildAlturasHeroTranscript,
    "vanta-freight": buildVantaHeroTranscript,
    "northstar-retail": buildNorthstarHeroTranscript
  };

  const builder = heroBuilders[account.id];
  return builder ? builder(account, employeeName, callDate, index) : null;
}

function buildRedwoodHeroTranscript(account, employeeName, callDate, index) {
  const amaroPmName = index % 2 === 0 ? "Nadia Park" : "Evan Brooks";
  return [
    {
      speaker: employeeName,
      role: "Amaro",
      type: "discussion",
      text: `Thanks for joining on ${callDate}. I know this is a renewal-risk conversation more than a routine check-in, so I want to be pretty direct about what has to change in the next few weeks.`
    },
    {
      speaker: "Redwood Bank Champion",
      role: "Customer",
      type: "feedback",
      text: `That is fair. The team still sees value in the platform, especially around audit review workflows, but the mood has definitely shifted. People are asking whether we are adapting our process to the product instead of the other way around.`
    },
    {
      speaker: "Redwood Bank Admin",
      role: "Customer",
      type: "feedback",
      text: `From the admin side, the pain is not one dramatic outage. It is the steady accumulation of friction. Permissions are too coarse, audit questions take too long to answer, and I am still hand-building exports for control reviews.`
    },
    {
      speaker: employeeName,
      role: "Amaro",
      type: "discovery",
      text: `When that comes up internally, is the concern mainly admin effort, or is it affecting confidence from operations leadership and compliance as well?`
    },
    {
      speaker: "Redwood Bank Sponsor",
      role: "Customer",
      type: "executive",
      text: `It is both. If my controls team asks who changed a workflow state and we cannot answer that quickly, it stops being a product preference issue and becomes a governance issue.`
    },
    {
      speaker: "Redwood Bank Champion",
      role: "Customer",
      type: "risk_signal",
      text: `Honestly, this is the thing people keep bringing back to me. The biggest blocker right now is deeper audit logs, and yes, that is now part of the renewal discussion.`
    },
    {
      speaker: "Redwood Bank Admin",
      role: "Customer",
      type: "interruption",
      text: `Sorry, let me jump in. It is not even just audit logs in isolation. If roles were more granular, a lot of the internal objections would soften because the operational model would feel safer.`
    },
    {
      speaker: employeeName,
      role: "Amaro",
      type: "feature_request",
      text: `That helps. So if I say the combined ask is better audit logs, more granular role-based permissions, and less manual reporting work, does that capture the real blocker?`
    },
    {
      speaker: "Redwood Bank Admin",
      role: "Customer",
      type: "feature_request",
      text: `Yes. If you asked me for the blunt version, we need better audit logs and compliance support before I can credibly tell the admins to expand usage. Right now they think we are signing up for more cleanup.`
    },
    {
      speaker: amaroPmName,
      role: "Amaro",
      type: "product_followup",
      text: `That is exactly why I joined. I do not want this summarized as a generic reporting ask if the real issue is operational trust. The difference matters for prioritization.`
    },
    {
      speaker: "Redwood Bank Sponsor",
      role: "Customer",
      type: "tangent",
      text: `Quick tangent, but this came up in an audit steering meeting yesterday. Everyone is already carrying extra change-control work because of upcoming exams, so tolerance for product friction is unusually low right now.`
    },
    {
      speaker: employeeName,
      role: "Amaro",
      type: "tangent",
      text: `That context helps. We have been talking with other regulated customers about procurement risk framing and regulatory benchmarks, and I think I should bring you a tighter mitigation plan instead of another broad roadmap answer.`
    },
    {
      speaker: "Redwood Bank Champion",
      role: "Customer",
      type: "next_step",
      text: `That would be useful. I can handle hearing "not yet" on a feature if I also have a clear workaround, owner, and timeline. What is hard is carrying ambiguity back into the room.`
    },
    {
      speaker: "Redwood Bank Sponsor",
      role: "Customer",
      type: "next_step",
      text: `If we leave this with named owners and dates, I can keep the renewal conversation constructive. If not, I should be honest that it will probably get harder from here.`
    }
  ];
}

function buildAlturasHeroTranscript(account, employeeName, callDate, index) {
  const amaroPmName = index % 2 === 0 ? "Nadia Park" : "Evan Brooks";
  return [
    {
      speaker: employeeName,
      role: "Amaro",
      type: "discussion",
      text: `Thanks for making time on ${callDate}. I wanted to use this like a working QBR, not a slideshow, and spend most of the time on what is actually helping the regional clinic teams.`
    },
    {
      speaker: "Alturas Health Champion",
      role: "Customer",
      type: "feedback",
      text: `That is perfect. The good news is adoption is broad now. Teams like the visibility, and honestly the handoff discipline is better than it was two quarters ago. We are seeing fewer tasks disappear between departments.`
    },
    {
      speaker: "Alturas Health Admin",
      role: "Customer",
      type: "feedback",
      text: `From an admin perspective, rollout has been much easier than some of our other tools. The only recurring ask I keep hearing is around export flexibility for leadership reviews.`
    },
    {
      speaker: employeeName,
      role: "Amaro",
      type: "discovery",
      text: `Is that mostly a presentation-layer ask, or are there decisions your leaders cannot make quickly enough with the current reporting format?`
    },
    {
      speaker: "Alturas Health Sponsor",
      role: "Customer",
      type: "executive",
      text: `Mostly speed and polish. The information is there. We just spend extra time reshaping it for operating reviews, and that feels like avoidable admin work.`
    },
    {
      speaker: "Alturas Health Champion",
      role: "Customer",
      type: "feature_request",
      text: `Exactly. This is not a churn issue or even a major complaint. It is more that if reporting and exports got better, we would put the platform in front of even more leaders because it already has the trust.`
    },
    {
      speaker: "Alturas Health Admin",
      role: "Customer",
      type: "interruption",
      text: `Sorry, one nuance there. It would also help with winter surge planning, because right now we do a little manual cleanup before sharing dashboards with the regional operations group.`
    },
    {
      speaker: employeeName,
      role: "Amaro",
      type: "feature_request",
      text: `That is helpful. So the sharper version is not just prettier exports, it is less prep work for exec reviews and easier operational planning when staffing gets tight.`
    },
    {
      speaker: amaroPmName,
      role: "Amaro",
      type: "product_followup",
      text: `I like hearing that because it means the request is attached to success, not dissatisfaction. Those are often the best roadmap signals for us.`
    },
    {
      speaker: "Alturas Health Champion",
      role: "Customer",
      type: "tangent",
      text: `Small tangent, but it came up in our leadership meeting that the reason this rollout worked is the regional directors actually used it instead of delegating it downward. That is not always true for us.`
    },
    {
      speaker: employeeName,
      role: "Amaro",
      type: "tangent",
      text: `That lines up with what we see in the best customers. The teams that pull leaders into the workflow early usually get much broader adoption than the ones that treat the system as admin-only.`
    },
    {
      speaker: "Alturas Health Sponsor",
      role: "Customer",
      type: "next_step",
      text: `If the reporting roadmap keeps moving, I would be comfortable being a reference for the product. The team genuinely likes what this has changed operationally.`
    }
  ];
}

function buildVantaHeroTranscript(account, employeeName, callDate, index) {
  const amaroPmName = index % 2 === 0 ? "Nadia Park" : "Evan Brooks";
  return [
    {
      speaker: employeeName,
      role: "Amaro",
      type: "discussion",
      text: `Thanks for making time on ${callDate}. I wanted this to be an escalation follow-up, but also a bit of a reset, because the pattern across the last few calls is pretty clear.`
    },
    {
      speaker: "Vanta Freight Champion",
      role: "Customer",
      type: "feedback",
      text: `I appreciate that. Dispatch still likes the visibility when the integrations are working, but confidence is slipping because every manual workaround turns into another thing shift leads have to remember.`
    },
    {
      speaker: "Vanta Freight Admin",
      role: "Customer",
      type: "feedback",
      text: `That is exactly it. We are not mad about one broken feature. We are tired of brittle automations, partial carrier data, and then having to clean up reports for operations every week.`
    },
    {
      speaker: employeeName,
      role: "Amaro",
      type: "discovery",
      text: `If we fixed only one thing first, would you put integrations ahead of automation reliability, or are those too connected to separate?`
    },
    {
      speaker: "Vanta Freight Champion",
      role: "Customer",
      type: "risk_signal",
      text: `They are connected, but integrations come first. If dispatch does not trust the incoming data, nobody really cares how elegant the automation rules are after that.`
    },
    {
      speaker: "Vanta Freight Sponsor",
      role: "Customer",
      type: "executive",
      text: `From my side, the cost is credibility. We bought this to reduce operational drag. If the teams think it creates another reconciliation step, that is the narrative I have to unwind.`
    },
    {
      speaker: "Vanta Freight Admin",
      role: "Customer",
      type: "interruption",
      text: `Actually, before we move on, I want to be explicit about something. The request we keep making is not abstract integration coverage. We need the existing carrier flows to be dependable enough that dispatch is not second-guessing them mid-shift.`
    },
    {
      speaker: employeeName,
      role: "Amaro",
      type: "feature_request",
      text: `That is a good distinction. So the sharpest request is deeper and more reliable integrations first, then better workflow automation and reporting once trust in the underlying data improves.`
    },
    {
      speaker: "Vanta Freight Admin",
      role: "Customer",
      type: "feature_request",
      text: `Yes. If you need a one-line version for product, here it is: make the carrier integrations trustworthy enough that my team stops building safety nets outside the platform.`
    },
    {
      speaker: amaroPmName,
      role: "Amaro",
      type: "product_followup",
      text: `That is very clear. I would much rather hear that directly than translate a softer request and miss the actual severity.`
    },
    {
      speaker: "Vanta Freight Champion",
      role: "Customer",
      type: "tangent",
      text: `Quick tangent, but this connects to how dispatch works. When fuel prices swing and driver availability gets weird, nobody has the patience for another manual checkpoint. That is when trust breaks fastest.`
    },
    {
      speaker: employeeName,
      role: "Amaro",
      type: "tangent",
      text: `That makes sense. We have heard similar stories from other freight teams, especially around exception handling during high-volume weeks, so I should bring back a reliability-first plan rather than a broad innovation pitch.`
    },
    {
      speaker: "Vanta Freight Sponsor",
      role: "Customer",
      type: "next_step",
      text: `That is the right tone. Right now we do not need a vision deck. We need confidence that the core flow will hold under pressure.`
    }
  ];
}

function buildNorthstarHeroTranscript(account, employeeName, callDate, index) {
  const amaroPmName = index % 2 === 0 ? "Nadia Park" : "Evan Brooks";
  return [
    {
      speaker: employeeName,
      role: "Amaro",
      type: "discussion",
      text: `Thanks for making time on ${callDate}. I wanted this one to be half roadmap, half rollout planning, because it feels like your team is already beyond the basic adoption questions.`
    },
    {
      speaker: "Northstar Retail Group Champion",
      role: "Customer",
      type: "feedback",
      text: `That is right. The product is working well for us. The conversation now is really about how much faster we can scale it to more stores without creating friction for regional managers.`
    },
    {
      speaker: "Northstar Retail Group Admin",
      role: "Customer",
      type: "feedback",
      text: `The two recurring asks I hear are better mobile approvals and more flexible permissions. Neither one is a deal problem, but both would reduce the amount of training and exception handling we are doing.`
    },
    {
      speaker: employeeName,
      role: "Amaro",
      type: "discovery",
      text: `When you say mobile approvals, is the issue speed, screen design, or connectivity in the stores?`
    },
    {
      speaker: "Northstar Retail Group Champion",
      role: "Customer",
      type: "feature_request",
      text: `Mostly speed and simplicity. Store managers are moving, they are interrupted constantly, and if the approval flow takes too much attention they postpone it until later.`
    },
    {
      speaker: "Northstar Retail Group Sponsor",
      role: "Customer",
      type: "executive",
      text: `That is why I keep treating this as an expansion lever, not a complaint. We already trust the platform. We just want the last mile to be smoother for people in stores.`
    },
    {
      speaker: "Northstar Retail Group Admin",
      role: "Customer",
      type: "interruption",
      text: `Sorry, and the permissions point matters more than it sounds. Regional leaders want enough control to move quickly, but not so much that we end up with inconsistent process by market.`
    },
    {
      speaker: employeeName,
      role: "Amaro",
      type: "feature_request",
      text: `That is helpful. So the product ask is really a combination of faster mobile approvals and more practical role-based templates for regional leadership.`
    },
    {
      speaker: amaroPmName,
      role: "Amaro",
      type: "product_followup",
      text: `That is a strong signal for us because it is tied directly to rollout scale. Requests from healthy customers often tell us where the product can unlock the next wave of adoption.`
    },
    {
      speaker: "Northstar Retail Group Champion",
      role: "Customer",
      type: "tangent",
      text: `Small tangent, but one reason this matters is seasonal labor planning. During launch periods, managers are already coaching new staff and they have almost no spare attention.`
    },
    {
      speaker: employeeName,
      role: "Amaro",
      type: "tangent",
      text: `That tracks with what we hear from other retail operators. The teams that make approvals almost invisible tend to get much better store-level follow-through.`
    },
    {
      speaker: "Northstar Retail Group Sponsor",
      role: "Customer",
      type: "next_step",
      text: `If you make progress on those two areas, I think the expansion conversation gets easier very quickly. Internally, this is already one of the better-behaved systems we use.`
    }
  ];
}

function inferCallType(account, index) {
  if (account.riskLevel === "high") {
    return index % 2 === 0 ? "renewal_risk_review" : "escalation_followup";
  }
  if (account.renewalStage === "Expansion Likely") {
    return index % 2 === 0 ? "roadmap_checkin" : "qbr";
  }
  if (account.riskLevel === "medium") {
    return index % 2 === 0 ? "adoption_review" : "qbr";
  }
  return index % 2 === 0 ? "qbr" : "roadmap_checkin";
}

function callTypeIntroLine(callType, account, callDate) {
  switch (callType) {
    case "renewal_risk_review":
      return `Thanks for joining on ${callDate}. I know this is more of a renewal-risk review than a normal check-in, so I want to be direct.`;
    case "escalation_followup":
      return `Thanks for making time on ${callDate}. This is mainly a follow-up on the recent escalation, and I want to make sure we are not talking past each other.`;
    case "roadmap_checkin":
      return `Thanks for making time on ${callDate}. I wanted this one to be part roadmap check-in, part usage review, because the two seem pretty connected for ${account.name}.`;
    case "adoption_review":
      return `Thanks for making time on ${callDate}. I was hoping we could do a practical adoption review today and separate signal from noise a bit.`;
    case "qbr":
    default:
      return `Thanks for making time on ${callDate}. I wanted to use this like a light QBR and talk through progress, blockers, and what the next quarter should look like.`;
  }
}

function buildAccountJargon(account) {
  const byIndustry = {
    "Healthcare Operations": "a clinic lead is trying to move work across regions during a staffing crunch",
    "Retail Operations": "a store manager is juggling approvals during a busy launch week",
    Logistics: "a depot team is trying to keep exceptions moving without bouncing between systems",
    "Financial Services": "an audit or controls team asks who changed what and when",
    Media: "a campaign team is trying to move quickly without losing handoff visibility",
    Biotech: "a program manager is coordinating reviews across research and operations",
    Hospitality: "a property manager is trying to get through a shift without opening a laptop",
    Manufacturing: "a plant team is trying to standardize work across multiple lines",
    Energy: "a field team needs to keep work moving while crews are already stretched",
    Education: "a district admin is trying to standardize reporting across schools",
    Insurance: "a claims leader wants the process to be auditable without adding overhead",
    "Food Retail": "a regional manager is moving between stores and needs quick updates",
    Telecommunications: "a regional ops lead is coordinating field work across several markets",
    Freight: "dispatch is already in motion and nobody wants another manual workaround",
    "Private Equity": "an operating partner wants a board-ready answer without a lot of cleanup"
  };
  return byIndustry[account.industry] || "a team is under pressure and needs the workflow to stay simple";
}

function fillerPhrase(index) {
  const phrases = [
    "Maybe the best place to start is usage.",
    "I know we have looked at pieces of this already.",
    "I do not want to over-rotate on one incident.",
    "I figured it would be better to have this conversation live."
  ];
  return phrases[index % phrases.length];
}

function buildCallRecord(account, index) {
  const employeeId = index % 2 === 0 ? account.ownerId : account.csmId;
  const employeeName =
    reps.find((rep) => rep.id === employeeId)?.name ||
    csms.find((csm) => csm.id === employeeId)?.name ||
    "Amaro Team";
  const date = `2026-0${((index + 1) % 3) + 1}-${String((index * 4) % 27 + 2).padStart(2, "0")}`;
  const transcriptSegments = buildTranscriptSegments(account, employeeName, date, index);
  const transcript = transcriptSegments
    .map((segment) => `${segment.speaker} (${segment.role}): ${segment.text}`)
    .join("\n");
  const participants = [...new Set(transcriptSegments.map((segment) => `${segment.speaker} (${segment.role})`))];
  const transcriptHighlights = {
    featureRequests: transcriptSegments
      .filter((segment) => segment.type === "feature_request")
      .map((segment) => segment.text),
    tangents: transcriptSegments
      .filter((segment) => segment.type === "tangent")
      .map((segment) => ({
        speaker: segment.speaker,
        text: segment.text
      })),
    riskSignals: transcriptSegments
      .filter((segment) => segment.type === "risk_signal" || segment.type === "executive")
      .map((segment) => segment.text)
  };

  return {
    callId: `call-${account.id}-${String(index + 1).padStart(2, "0")}`,
    accountId: account.id,
    accountName: account.name,
    employeeId,
    date,
    durationMinutes: 24 + index * 7,
    sentiment:
      account.riskLevel === "high" ? (index % 2 === 0 ? "negative" : "mixed") : account.riskLevel === "medium" ? "mixed" : "positive",
    customerTopics: [
      ...account.painPoints.slice(0, 2),
      ...account.productLikes.slice(0, 1)
    ],
    repTangents: account.repTangentThemes,
    customerTangents: account.customerTangentThemes,
    summary:
      account.riskLevel === "high"
        ? `${account.name} discussed active blockers, renewal concerns, and repeatedly returned to ${account.painPoints[0].toLowerCase()}.`
        : `${account.name} reviewed adoption progress, upcoming priorities, and interest in ${account.featureThemes.map((theme) => featureThemeCatalog[theme].label).join(", ")}.`,
    notableQuotes:
      account.riskLevel === "high"
        ? [
            `We like the team, but the current gaps are making rollout difficult.`,
            `We need proof this will get easier before renewal.`
          ]
        : [
          `The platform helps our teams stay aligned.`,
          `If you improve this area, we can use it more broadly.`
        ],
    participants,
    transcriptSegments,
    transcript,
    transcriptHighlights
  };
}

function buildAccount360(account, related) {
  return {
    accountId: account.id,
    name: account.name,
    segment: account.segment,
    industry: account.industry,
    arr: account.arr,
    arrFormatted: formatCurrency(account.arr),
    renewalDate: account.renewalDate,
    renewalStage: account.renewalStage,
    riskLevel: account.riskLevel,
    healthScore: account.healthScore,
    healthDelta: account.healthDelta,
    productLikes: account.productLikes,
    painPoints: account.painPoints,
    featureThemes: account.featureThemes.map((theme) => featureThemeCatalog[theme].label),
    ownerId: account.ownerId,
    csmId: account.csmId,
    supportOpenTickets: related.tickets.filter((ticket) => ticket.status === "Open").length,
    recentCallCount: related.calls.length,
    usageTrend: account.usageSeries,
    riskReasons: account.riskReasons,
    notes: account.notes
  };
}

const contacts = accountBlueprints.flatMap(buildContacts);
const salesforceAccounts = accountBlueprints.map(buildSalesforceAccount);
const opportunities = accountBlueprints.map(buildOpportunity);
const healthProfiles = accountBlueprints.map(buildHealthProfile);
const tickets = accountBlueprints.flatMap((account, index) => buildTickets(account, index));
const featureRequests = accountBlueprints.flatMap(buildFeatureRequests);
const calls = accountBlueprints.flatMap(buildCalls);
const usageSnapshots = accountBlueprints.flatMap(buildUsageSnapshots);
const revenueHistory = accountBlueprints.flatMap(buildRevenueHistory);
const healthHistory = accountBlueprints.flatMap(buildHealthHistory);
const ticketHistory = accountBlueprints.flatMap(buildTicketHistory);

const account360 = accountBlueprints.map((account) =>
  buildAccount360(account, {
    tickets: tickets.filter((ticket) => ticket.accountId === account.id),
    calls: calls.filter((call) => call.accountId === account.id)
  })
);

const employeeDirectory = [...reps, ...csms, ...supportAgents];

const roadmapSummary = Object.entries(featureThemeCatalog)
  .map(([theme, config]) => {
    const relatedRequests = featureRequests.filter((request) => request.theme === theme);
    const impactedArr = relatedRequests.reduce((sum, request) => sum + request.linkedArr, 0);
    const criticalCount = relatedRequests.filter((request) => request.priority === "critical").length;
    return {
      theme,
      themeLabel: config.label,
      requestCount: relatedRequests.length,
      impactedAccounts: [...new Set(relatedRequests.map((request) => request.accountId))].length,
      impactedArr,
      impactedArrFormatted: formatCurrency(impactedArr),
      criticalCount,
      problem: config.problem,
      roadmapCandidate: config.roadmapCandidate
    };
  })
  .sort((left, right) => {
    if (right.criticalCount !== left.criticalCount) return right.criticalCount - left.criticalCount;
    if (right.requestCount !== left.requestCount) return right.requestCount - left.requestCount;
    return right.impactedArr - left.impactedArr;
  });

const peopleBenchmarks = {
  sales: reps
    .map((employee) => ({
      ...employee,
      ownedAccounts: salesforceAccounts.filter((account) => account.ownerId === employee.id).length,
      bookArr: salesforceAccounts
        .filter((account) => account.ownerId === employee.id)
        .reduce((sum, account) => sum + account.arr, 0)
    }))
    .sort((left, right) => right.metrics.attainmentPct - left.metrics.attainmentPct),
  customer_success: csms
    .map((employee) => ({
      ...employee,
      managedAccounts: salesforceAccounts.filter((account) => account.csmId === employee.id).length,
      avgHealthScore:
        Math.round(
          healthProfiles
            .filter((profile) => salesforceAccounts.find((account) => account.accountId === profile.accountId)?.csmId === employee.id)
            .reduce((sum, profile, _, arr) => sum + profile.healthScore / arr.length, 0)
        ) || 0
    }))
    .sort((left, right) => right.metrics.nrrPct - left.metrics.nrrPct),
  support: supportAgents
    .map((employee) => ({
      ...employee,
      assignedTickets: tickets.filter((ticket) => ticket.assigneeId === employee.id).length
    }))
    .sort((left, right) => right.metrics.csatPct - left.metrics.csatPct)
};

const demoNarratives = {
  highRiskAccounts: account360.filter((account) => account.riskLevel === "high"),
  bestCustomers: account360
    .filter((account) => account.riskLevel === "low" && account.healthScore >= 85)
    .sort((left, right) => right.healthScore - left.healthScore),
  supportHeavyAccounts: account360
    .slice()
    .sort((left, right) => right.supportOpenTickets - left.supportOpenTickets || right.recentCallCount - left.recentCallCount)
    .slice(0, 5)
};

export const demoCompany = {
  today: TODAY,
  org: {
    name: "Amaro Demo Portfolio",
    description: "Synthetic cross-system customer universe for Customer 360 demonstrations."
  },
  employees: employeeDirectory,
  reps,
  csms,
  supportAgents,
  accounts: accountBlueprints,
  contacts,
  salesforceAccounts,
  opportunities,
  healthProfiles,
  revenueHistory,
  healthHistory,
  tickets,
  ticketHistory,
  featureRequests,
  calls,
  usageSnapshots,
  account360,
  roadmapSummary,
  peopleBenchmarks,
  demoNarratives,
  featureThemeCatalog
};

export function getAccountById(accountId) {
  return demoCompany.account360.find((account) => account.accountId === accountId);
}

export function getEmployeeById(employeeId) {
  return demoCompany.employees.find((employee) => employee.id === employeeId);
}

export function summarizeCommonalities(accountIds) {
  const selected = demoCompany.account360.filter((account) => accountIds.includes(account.accountId));
  const themes = new Map();
  const likes = new Map();
  for (const account of selected) {
    for (const theme of account.featureThemes) {
      themes.set(theme, (themes.get(theme) || 0) + 1);
    }
    for (const like of account.productLikes) {
      likes.set(like, (likes.get(like) || 0) + 1);
    }
  }
  return {
    accountCount: selected.length,
    mostCommonThemes: [...themes.entries()]
      .sort((left, right) => right[1] - left[1])
      .slice(0, 5)
      .map(([label, count]) => ({ label, count })),
    mostCommonLikes: [...likes.entries()]
      .sort((left, right) => right[1] - left[1])
      .slice(0, 5)
      .map(([label, count]) => ({ label, count }))
  };
}
