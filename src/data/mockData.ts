import { 
  StudentProfile, 
  DocumentItem, 
  ScholarshipScheme, 
  VerificationCheck, 
  WorkflowStep,
  ApplicationMilestone,
  TeamMember
} from '../types';

export const mockStudent: StudentProfile = {
  name: 'Ramesh Hembram',
  studentId: 'TS1-2025-ST-8849',
  category: 'Scheduled Tribe (ST)',
  subTribe: 'Santal Community',
  domicileState: 'Odisha (Mayurbhanj District)',
  academicYear: '2024–2025 (Year 3)',
  institution: 'National Institute of Technology, Rourkela',
  course: 'B.Tech in Computer Science & Engineering',
  cgpa: '8.74 / 10.0',
  annualIncome: 210000,
  incomeLimit: 250000,
  bankDbtLinked: true,
  aadhaarLinked: true,
  digiLockerLinked: true,
  vaultLocked: true,
  profileCompletion: 94,
};

export const mockDocuments: DocumentItem[] = [
  {
    id: 'doc-st-01',
    title: 'ST Caste / Tribe Certificate',
    docNumber: 'REV/OD/ST/2021/99241',
    issuedBy: 'Tahasildar, Baripada, Mayurbhanj (Govt. of Odisha)',
    issueDate: '14-Aug-2021',
    expiryDate: null, // Lifetime validity
    status: 'Verified',
    confidenceScore: 99.4,
    securityLevel: 'DigiLocker Verified',
    extractedFields: [
      { label: 'Beneficiary Name', value: 'Ramesh Hembram' },
      { label: 'Father Name', value: 'Sunil Hembram' },
      { label: 'Community', value: 'Santal (Scheduled Tribe)' },
      { label: 'Issuing Authority', value: 'Executive Magistrate / Tahasildar' },
    ],
  },
  {
    id: 'doc-inc-02',
    title: 'Annual Income Certificate',
    docNumber: 'INC/OD/2024/48102',
    issuedBy: 'Revenue Department, Govt. of Odisha',
    issueDate: '12-May-2024',
    expiryDate: '31-Mar-2025',
    status: 'Expiring Soon',
    confidenceScore: 98.1,
    securityLevel: 'AES-256 Encrypted',
    extractedFields: [
      { label: 'Family Annual Income', value: '₹2,10,000 (Two Lakh Ten Thousand)' },
      { label: 'Assessment Year', value: 'FY 2024-25' },
      { label: 'Validity Period', value: 'Valid till 31-03-2025' },
    ],
  },
  {
    id: 'doc-adh-03',
    title: 'Aadhaar Card (UIDAI Masked)',
    docNumber: 'XXXX-XXXX-7412',
    issuedBy: 'Unique Identification Authority of India (UIDAI)',
    issueDate: '18-Jan-2018',
    expiryDate: null,
    status: 'Verified',
    confidenceScore: 99.8,
    securityLevel: 'SHA-256 Checksum',
    extractedFields: [
      { label: 'Aadhaar Name', value: 'Ramesh Hembram' },
      { label: 'DOB', value: '15/06/2003' },
      { label: 'Gender', value: 'Male' },
      { label: 'DBT Seeding Status', value: 'Active on NPCI Mapper' },
    ],
  },
  {
    id: 'doc-mks-04',
    title: 'Semester Grade Card (Sem IV)',
    docNumber: 'NITR/UG/2024/CS-401',
    issuedBy: 'Office of Academic Affairs, NIT Rourkela',
    issueDate: '20-Jun-2024',
    expiryDate: null,
    status: 'Verified',
    confidenceScore: 97.5,
    securityLevel: 'AES-256 Encrypted',
    extractedFields: [
      { label: 'SGPA', value: '8.90' },
      { label: 'Cumulative CGPA', value: '8.74' },
      { label: 'Academic Standing', value: 'Pass (No Backlogs)' },
    ],
  },
  {
    id: 'doc-bnk-05',
    title: 'Bank Passbook & Mandate Form',
    docNumber: 'SBIN0002112 - A/C ..6641',
    issuedBy: 'State Bank of India (NIT Campus Branch)',
    issueDate: '05-Sep-2022',
    expiryDate: null,
    status: 'Under Review',
    confidenceScore: 94.2,
    securityLevel: 'AES-256 Encrypted',
    extractedFields: [
      { label: 'Account Holder', value: 'Ramesh Hembram' },
      { label: 'IFSC Code', value: 'SBIN0002112' },
      { label: 'Aadhaar Seeding', value: 'Direct Benefit Transfer (DBT) Enabled' },
    ],
  },
];

export const mockSchemes: ScholarshipScheme[] = [
  {
    id: 'scheme-topclass',
    name: 'National Scholarship for Higher Education / Top Class Education for ST Students',
    ministry: 'Ministry of Tribal Affairs (MoTA), Govt. of India',
    level: 'National Level • Premier Institutes (IITs/NITs/IIMs)',
    matchScore: 96,
    status: 'Likely Eligible',
    financialBenefit: 'Full Tuition Fee + Living Expenses (₹3,000/mo) + Books (₹5,000/yr) + Computer Aid (₹45,000 one-time)',
    deadline: '31 October 2025 (Official Portal Schedule)',
    tags: ['MoTA Scheme', 'Top Class', 'Premier Institute', 'Full Tuition'],
    officialPortalUrl: 'https://scholarships.gov.in',
    conditions: [
      { title: 'ST Community Confirmation', satisfied: true, reason: 'Valid ST Certificate verified via Odisha Revenue e-portal.' },
      { title: 'Institution Listed in MoTA Notified List', satisfied: true, reason: 'NIT Rourkela is an accredited notified Institute.' },
      { title: 'Family Income Ceiling <= ₹6.00 Lakh/year', satisfied: true, reason: 'Current verified income ₹2.10 Lakh is well within limit.' },
      { title: 'Direct Admission through Regular Selection', satisfied: true, reason: 'Admission confirmed via JoSAA counseling.' },
      { title: 'Aadhaar Seeded Active Bank Account', satisfied: true, reason: 'SBI Bank account seeded with NPCI mandate.' },
      { title: 'Renewed Income Certificate for Current FY', satisfied: false, reason: 'Certificate valid till 31-Mar-2025. Renewal recommended before next term.', severity: 'warning' },
    ],
    requiredDocs: ['ST Caste Certificate', 'Income Certificate', 'Academic Grade Sheet', 'Fee Structure Receipt', 'Aadhaar Copy'],
  },
  {
    id: 'scheme-postmatric',
    name: 'Centrally Sponsored Post-Matric Scholarship for ST Students (PMS-ST)',
    ministry: 'State Tribal Welfare Department & Ministry of Tribal Affairs',
    level: 'State/National • Post-Secondary Education',
    matchScore: 94,
    status: 'Verified',
    financialBenefit: 'Maintenance Allowance (₹1,200/mo) + Non-Refundable Compulsory Fees Reimbursement',
    deadline: '15 November 2025 (State Portal)',
    tags: ['Post-Matric', 'State Disbursed', 'Direct Benefit Transfer'],
    officialPortalUrl: 'https://scholarships.gov.in',
    conditions: [
      { title: 'ST Community Certification', satisfied: true, reason: 'Digitally signed caste certificate available.' },
      { title: 'Family Income <= ₹2.50 Lakh/year', satisfied: true, reason: 'Profile income ₹2.10 Lakh meets post-matric requirement.' },
      { title: 'Recognized Higher Education Course', satisfied: true, reason: 'B.Tech full-time regular degree.' },
      { title: 'No other dual Centrally Funded Scholarship', satisfied: true, reason: 'Single scholarship declaration verified.' },
    ],
    requiredDocs: ['Caste Certificate', 'Income Certificate', 'Marksheet', 'Bank Passbook', 'College Bonafide'],
  },
  {
    id: 'scheme-fellowship',
    name: 'National Fellowship for Higher Education of ST Students (NFST - M.Phil / Ph.D)',
    ministry: 'Ministry of Tribal Affairs',
    level: 'Doctoral / Post-Graduate Research',
    matchScore: 68,
    status: 'Needs Information',
    financialBenefit: 'Fellowship ₹37,000/mo (JRF) / ₹42,000/mo (SRF) + Contingency & HRA',
    deadline: 'December 2025',
    tags: ['Research Fellowship', 'Ph.D Track', 'MoTA'],
    officialPortalUrl: 'https://fellowship.tribal.gov.in',
    conditions: [
      { title: 'ST Community Certification', satisfied: true, reason: 'Verified.' },
      { title: 'Admission to Regular Full-Time M.Phil/Ph.D', satisfied: false, reason: 'Current student is enrolled in B.Tech Undergraduate program.', severity: 'warning' },
      { title: 'UGC-NET / CSIR-NET Qualification (if applicable)', satisfied: false, reason: 'Not yet recorded in student profile.' },
    ],
    requiredDocs: ['ST Certificate', 'Research Proposal', 'Admission Offer Letter', 'Master Degree Transcript'],
  },
  {
    id: 'scheme-nos',
    name: 'National Overseas Scholarship for Scheduled Tribe Candidates (NOS-ST)',
    ministry: 'Ministry of Tribal Affairs',
    level: 'International Higher Studies (Masters & Ph.D Abroad)',
    matchScore: 62,
    status: 'Needs Information',
    financialBenefit: 'Annual Maintenance Allowance (USD 15,400 / GBP 9,900) + Full Tuition Fees + Contingency + Airfare',
    deadline: '31 March 2026',
    tags: ['Overseas Studies', 'Masters/Ph.D Abroad', 'Prestigious'],
    officialPortalUrl: 'https://overseas.tribal.gov.in',
    conditions: [
      { title: 'ST Community Certification', satisfied: true, reason: 'Verified.' },
      { title: 'Total Family Income <= ₹6.00 Lakh/year', satisfied: true, reason: 'Income requirement satisfied.' },
      { title: 'Minimum 55% Marks in Qualifying Degree', satisfied: true, reason: 'Current CGPA 8.74 (approx 83%).' },
      { title: 'Unconditional Admission Offer from Foreign University', satisfied: false, reason: 'Pending foreign university admission offer letter.', severity: 'warning' },
    ],
    requiredDocs: ['ST Certificate', 'Valid Passport', 'Income Certificate', 'Foreign University Offer Letter', 'GRE/IELTS Scorecard'],
  }
];

export const mockVerificationChecks: VerificationCheck[] = [
  {
    id: 'chk-01',
    field: 'Beneficiary Name Match',
    profileValue: 'Ramesh Hembram',
    extractedOcrValue: 'RAMESH HEMBRAM',
    matchStatus: 'Matched',
    similarity: 100,
    sourceDoc: 'ST Caste Certificate & Aadhaar UIDAI',
    note: 'Exact character sequence matched across DigiLocker token & OCR scan.'
  },
  {
    id: 'chk-02',
    field: 'Tribe / Community Category',
    profileValue: 'Scheduled Tribe (Santal)',
    extractedOcrValue: 'Santal (Scheduled Tribe - Sl No. 54)',
    matchStatus: 'Matched',
    similarity: 98,
    sourceDoc: 'Revenue Dept. Gazette Certificate',
    note: 'Valid ST tribe designation identified in Presidential Order Notification.'
  },
  {
    id: 'chk-03',
    field: 'Annual Family Income Verification',
    profileValue: '₹2,10,000 / year',
    extractedOcrValue: 'Rs. 2,10,000/- (Rupees Two Lakh Ten Thousand)',
    matchStatus: 'Matched',
    similarity: 99,
    sourceDoc: 'Income Certificate (FY 2024-25)',
    note: 'Income value below ₹2.50L PMS threshold and ₹6.00L Top Class ceiling.'
  },
  {
    id: 'chk-04',
    field: 'Aadhaar-Bank NPCI DBT Seeding',
    profileValue: 'SBI NIT Rourkela (A/C ...6641)',
    extractedOcrValue: 'NPCI Active: SBI A/C Seeded on 18-Nov-2022',
    matchStatus: 'Matched',
    similarity: 100,
    sourceDoc: 'Bank Mandate & NPCI Mapper',
    note: 'Direct Benefit Transfer routing ready for PFMS disbursement.'
  },
  {
    id: 'chk-05',
    field: 'Income Validity Expiry Window',
    profileValue: 'Valid till 31-03-2025',
    extractedOcrValue: 'Valid for Financial Year 2024-25 (Ending March 2025)',
    matchStatus: 'Discrepancy',
    similarity: 88,
    sourceDoc: 'Income Certificate',
    note: 'Certificate expires in 4 months. Early renewal alert triggered to prevent mid-cycle delay.'
  },
];

export const mockApplicationStages: ApplicationMilestone[] = [
  {
    stage: '1. Profile & Vault Readiness',
    title: 'Pre-flight Readiness Completed',
    date: '10 Aug 2025',
    status: 'completed',
    source: 'TribalScholar One Engine',
    note: '5/5 baseline identity documents verified with 98.2% OCR confidence.',
  },
  {
    stage: '2. Scheme Discovery & Export',
    title: 'Top Class ST Scheme Selected',
    date: '12 Aug 2025',
    status: 'completed',
    source: 'Student Action',
    note: 'Generated structured application dossier & document package.',
  },
  {
    stage: '3. Official Portal Submission',
    title: 'Submitted on National Scholarship Portal',
    date: '15 Aug 2025',
    status: 'completed',
    source: 'Uploaded Official Ack Slip (NSP App ID: OR2024250098412)',
    note: 'Student submitted directly via official NSP portal; acknowledgement receipt archived.',
  },
  {
    stage: '4. Institute Level Verification',
    title: 'Verified by Nodal Officer, NIT Rourkela',
    date: '28 Aug 2025',
    status: 'completed',
    source: 'NSP Public Verification Tracker',
    note: 'Academic records, bonafide status and fee breakdown endorsed by Institute.',
  },
  {
    stage: '5. Ministry Scheme Sanction',
    title: 'Sanction Order Generated by MoTA',
    date: '18 Sep 2025',
    status: 'completed',
    source: 'Sanction Order No. MoTA/EDU/2024/774',
    note: 'Sanction approved for ₹1,85,000 (Tuition + Maintenance + Books).',
  },
  {
    stage: '6. PFMS / FTO Generation',
    title: 'Fund Transfer Order (FTO) Created',
    date: '22 Sep 2025',
    status: 'completed',
    source: 'PFMS Reference: FTO-MOTA-2025-0982',
    note: 'Credit batch scheduled on Reserve Bank of India e-Kuber pipeline.',
  },
  {
    stage: '7. DBT Credit to Student Account',
    title: 'Direct Benefit Transfer Credited',
    date: '25 Sep 2025',
    status: 'completed',
    source: 'Bank SMS Evidence & PFMS Transaction UTR: SBIN225091823901',
    note: '₹1,85,000 credited to Ramesh Hembram (SBI A/C ..6641). Zero deduction.',
  },
];

export const mockWorkflowSteps: WorkflowStep[] = [
  {
    id: 'profile',
    stepNumber: '01',
    title: 'Student Profile',
    shortDesc: 'Create unified master profile once with verified tribe, academic & socio-economic details.',
    category: 'Preparation',
    details: 'The student builds a single structured master record covering academic credentials, tribal sub-group, domicile coordinates, and family economic baseline.',
    previewTitle: 'Master Demographic & Tribal Identity Registry',
    previewSubtitle: 'Centralized master data eliminates repetitive multi-portal forms.',
    previewStats: [
      { label: 'Profile Health', value: '94% Complete', status: 'success' },
      { label: 'Socio-Economic Group', value: 'ST (Santal)', status: 'info' },
      { label: 'Academic Standing', value: 'B.Tech CSE (8.74 CGPA)', status: 'info' },
    ],
    highlightNotes: 'Master profile data remains fully private and encrypted in student custody.'
  },
  {
    id: 'documents',
    stepNumber: '02',
    title: 'Document Vault',
    shortDesc: 'Secure PIN-locked vault with OCR extraction, validity alerts & DigiLocker sync.',
    category: 'Preparation',
    details: 'Store certificates in an AES-256 encrypted personal locker with automated text parsing, expiry dates detection, and auto-masking of sensitive identity numbers.',
    previewTitle: 'Encrypted Certificate & Identity Vault',
    previewSubtitle: 'Automatic document classification, expiry watchdogs, and tamper-check checksums.',
    previewStats: [
      { label: 'Vault State', value: 'Encrypted & Locked', status: 'success' },
      { label: 'Stored Certificates', value: '5 Verified Files', status: 'success' },
      { label: 'Expiry Alerts', value: '1 Upcoming Renewal', status: 'warning' },
    ],
    highlightNotes: 'Documents are never shared with third parties without student PIN consent.'
  },
  {
    id: 'finder',
    stepNumber: '03',
    title: 'Scholarship Finder',
    shortDesc: 'Smart matching against Central MoTA, State Welfare & Premier Institute schemes.',
    category: 'Matching',
    details: 'The deterministic rule engine evaluates the student profile against real scheme criteria (income ceilings, degree levels, tribal community lists) to surface eligible grants.',
    previewTitle: 'Deterministic Scholarship Matching Grid',
    previewSubtitle: 'Calculates exact eligibility percentages based on official scheme notifications.',
    previewStats: [
      { label: 'Matched Schemes', value: '3 Active Schemes', status: 'success' },
      { label: 'Max Annual Benefit', value: 'Up to ₹2.40 Lakh/yr', status: 'info' },
      { label: 'Match Confidence', value: '96% Match Score', status: 'success' },
    ],
    highlightNotes: 'Clear transparency on why each scheme was matched or filtered out.'
  },
  {
    id: 'eligibility',
    stepNumber: '04',
    title: 'Eligibility Checker',
    shortDesc: 'Explainable rule evaluation showing satisfied, borderline & missing conditions.',
    category: 'Matching',
    details: 'No black-box decisions. Inspect every condition—caste category, domicile, institute accreditation, income bounds, and age restrictions with citations to official gazettes.',
    previewTitle: 'Transparent Rule Evaluation & Audit Breakdown',
    previewSubtitle: 'Every rule is mapped to specific clauses from official scheme guidelines.',
    previewStats: [
      { label: 'Rules Evaluated', value: '6 Criteria', status: 'info' },
      { label: 'Satisfied Rules', value: '5 Cleared', status: 'success' },
      { label: 'Action Needed', value: '1 Renewal Alert', status: 'warning' },
    ],
    highlightNotes: 'Eliminates rejection surprises before applying on official portals.'
  },
  {
    id: 'readiness',
    stepNumber: '05',
    title: 'Readiness Check',
    shortDesc: 'Pre-flight diagnostic checklist flagging document gaps or name mismatches.',
    category: 'Readiness',
    details: 'Cross-validates spelling on certificates vs. Aadhaar, tests NPCI bank mapping, verifies income validity, and bundles all mandatory attachments in official format.',
    previewTitle: 'Pre-Flight Application Readiness Diagnostic',
    previewSubtitle: 'Comprehensive pre-submission sanity checks to guarantee zero documentation errors.',
    previewStats: [
      { label: 'Readiness Index', value: '96% Application Ready', status: 'success' },
      { label: 'Critical Errors', value: '0 Blocking Issues', status: 'success' },
      { label: 'Advisory Notices', value: '1 Minor Reminder', status: 'warning' },
    ],
    highlightNotes: 'The crucial checkpoint that prevents portal rejections and delays.'
  },
  {
    id: 'portal',
    stepNumber: '06',
    title: 'Official Portal',
    shortDesc: 'Guided transition to authoritative portals (NSP, State Welfare, MoTA).',
    category: 'Official Execution',
    details: 'Student exports pre-verified dossier and completes formal submission on the authoritative government portal with their own credentials. Platform provides guided field mapping.',
    previewTitle: 'Authoritative Submission Boundary',
    previewSubtitle: 'We prepare and guide. The student officially submits on government systems.',
    previewStats: [
      { label: 'Official Portal', value: 'scholarships.gov.in (NSP)', status: 'info' },
      { label: 'Auth Method', value: 'Student DigiLocker / Aadhaar OTP', status: 'info' },
      { label: 'Ownership', value: '100% Student Controlled', status: 'success' },
    ],
    highlightNotes: 'Clear legal and technical separation between preparation and official filing.'
  },
  {
    id: 'status',
    stepNumber: '07',
    title: 'Status Tracking',
    shortDesc: 'Unified timeline consolidating application progress and acknowledgement slips.',
    category: 'Tracking',
    details: 'Organize application acknowledgement receipts, application IDs, and timeline updates in one single dashboard without hunting across fragmented email threads.',
    previewTitle: 'Consolidated Application Lifecycle Tracker',
    previewSubtitle: 'Evidence-backed timeline aggregating student application records.',
    previewStats: [
      { label: 'Current State', value: 'Institute Verified', status: 'success' },
      { label: 'Acknowledged On', value: '15 Aug 2025', status: 'info' },
      { label: 'Tracking Mode', value: 'Evidence-Backed', status: 'info' },
    ],
    highlightNotes: 'Keeps evidence records organized for audits, grievances, or follow-ups.'
  },
  {
    id: 'verification',
    stepNumber: '08',
    title: 'Verification Brain',
    shortDesc: 'Automated document-to-profile cross-verification and discrepancy detection.',
    category: 'Tracking',
    details: 'Dual-engine fuzzy string matching and OCR extraction detect typos in names, father names, certificate issue dates, and quota categories before nodal officers flag them.',
    previewTitle: 'AI-OCR & Algorithmic Verification Engine',
    previewSubtitle: 'Pinpoints spelling variations and mismatch anomalies across official records.',
    previewStats: [
      { label: 'Match Confidence', value: '98.8% Overall', status: 'success' },
      { label: 'Fields Inspected', value: '18 Data Points', status: 'info' },
      { label: 'Flagged Mismatches', value: '0 Discrepancies', status: 'success' },
    ],
    highlightNotes: 'Gives students the same rigorous checks used by institutional verification officers.'
  },
  {
    id: 'payment',
    stepNumber: '09',
    title: 'DBT Payment',
    shortDesc: 'Milestone tracking from MoTA Sanction Order to PFMS bank account credit.',
    category: 'Tracking',
    details: 'Monitor financial release milestones: Sanction generation, Fund Transfer Order (FTO) issuance, and Direct Benefit Transfer (DBT) credit to Aadhaar-linked bank accounts.',
    previewTitle: 'Direct Benefit Transfer (DBT) Disbursement Audit',
    previewSubtitle: 'Tracks financial milestones with verifiable UTR and sanction references.',
    previewStats: [
      { label: 'Disbursement Status', value: 'Credited (₹1,85,000)', status: 'success' },
      { label: 'Disbursement Mode', value: 'PFMS Aadhaar Bridge', status: 'info' },
      { label: 'Zero Middlemen', value: '100% Direct DBT', status: 'success' },
    ],
    highlightNotes: 'Provides complete transparency on sanctioned amount vs actual credited funds.'
  },
];

export const mockTeamMembers: TeamMember[] = [
  {
    name: 'MOHAMED RIYASKHAN S',
    role: 'Team Lead & Full-Stack Developer',
    initials: 'MR',
    isLeader: true,
    photo: '/team/mohamed-riyaskhan.jpg',
    linkedin: 'https://www.linkedin.com/in/mohamed-riyaskhan-s-9a5247386',
    responsibilities: [
      'System Architecture',
      'Frontend & Backend Development',
      'Project Integration'
    ]
  },
  {
    name: 'THIRUNESH K',
    role: 'AI / OCR & Intelligence Engineer',
    initials: 'TK',
    isLeader: false,
    photo: '/team/thirunesh.jpg',
    linkedin: 'https://www.linkedin.com/in/thirunesh-k-96a374437?utm_source=share_via&utm_content=profile&utm_medium=member_android',
    responsibilities: [
      'OCR Intelligence Pipeline',
      'Document Verification Models',
      'Text Parsing Engines'
    ]
  },
  {
    name: 'SANTHOSH S',
    role: 'Backend & Security Architecture',
    initials: 'SS',
    isLeader: false,
    photo: '/team/santhosh.jpg',
    linkedin: 'https://www.linkedin.com/in/santhosh-s-929990383?utm_source=share_via&utm_content=profile&utm_medium=member_android',
    responsibilities: [
      'FastAPI Microservices',
      'AES-256 Vault Encryption',
      'RBAC & Audit Trails'
    ]
  },
  {
    name: 'VARSHITHA RAMESH',
    role: 'Frontend & UI/UX Developer',
    initials: 'VR',
    isLeader: false,
    photo: '/team/varshitha.jpg',
    linkedin: 'https://www.linkedin.com/in/varshitha-ramesh-91a459384?utm_source=share_via&utm_content=profile&utm_medium=member_android',
    responsibilities: [
      'Civic-Tech Design System',
      'Responsive Interface Layouts',
      'Accessibility & UX'
    ]
  },
  {
    name: 'THATCHAYINI B',
    role: 'Research & Scheme Intelligence',
    initials: 'TB',
    isLeader: false,
    photo: '/team/thatchayini.png',
    linkedin: 'https://www.linkedin.com/in/thatchayini-b-b577143b7?utm_source=share_via&utm_content=profile&utm_medium=member_android',
    responsibilities: [
      'MoTA Scheme Policy Mapping',
      'Grounded Scheme RAG',
      'Clause Verification Rules'
    ]
  },
  {
    name: 'HARSHINI M.P',
    role: 'Verification & Quality Assurance',
    initials: 'HM',
    isLeader: false,
    photo: '/team/harshini.jpg',
    linkedin: null,
    responsibilities: [
      'Pre-Flight Diagnostic Testing',
      'Readiness Engine QA',
      'Validation Pipelines'
    ]
  }
];

export const mockMentors = [
  {
    name: 'MUTHUSWAMY K',
    designation: 'HEAD TECHNICAL COMPETITION AND HACKATHONS',
    photo: '/mentors/muthuswamy.png',
    linkedin: 'https://www.linkedin.com/in/muthusamy-k-a7ba161b6?utm_source=share_via&utm_content=profile&utm_medium=member_android',
    contribution: 'Strategic competition direction, system architecture review, and technical alignment for Smart India Hackathon.'
  },
  {
    name: 'Er GAJENDRAN PARTHASARATHI',
    designation: 'HEAD - SCHOOL OF DESIGN AND INNOVATION',
    photo: '/mentors/gajendran.png',
    linkedin: 'https://www.linkedin.com/in/er-gajendran-parthasarathi-9689a2109?utm_source=share_via&utm_content=profile&utm_medium=member_android',
    contribution: 'User experience methodology, interface accessibility frameworks, and pre-flight readiness workflow innovation.'
  }
];

export const jagoSampleConversations = [
  {
    id: 'q1',
    label: 'What documents are required for Top Class ST Scheme?',
    question: 'What documents do I need to prepare for the Top Class Education Scheme for ST Students?',
    answer: 'Based on the Ministry of Tribal Affairs (MoTA) guidelines for the Top Class Education Scheme:\n\n1. Valid ST Caste Certificate issued by competent Revenue Authority.\n2. Current Financial Year Income Certificate (family income ≤ ₹6.00 Lakh/yr).\n3. Proof of Admission in a notified institute (Bonafide certificate / JoSAA allotment).\n4. Institute Fee Structure endorsed by Registrar / Dean.\n5. Aadhaar Card linked to an active bank account (NPCI DBT enabled).\n6. Class 12 / Semester Transcripts.\n\nNote: All documents can be pre-verified in your TribalScholar One Document Vault before applying on scholarships.gov.in.',
  },
  {
    id: 'q2',
    label: 'How does DBT linking work with my bank account?',
    question: 'How do I ensure my bank account receives DBT payments without rejection?',
    answer: 'Direct Benefit Transfer (DBT) under Central ST schemes requires NPCI Aadhaar Seeding:\n\n• Having your Aadhaar number given to the bank is not enough; the account must be actively seeded on the NPCI Mapper.\n• You can check this in our Document Vault by inspecting the Bank Mandate status.\n• If not seeded, submit the NPCI Aadhaar Seeding Consent Form to your bank branch.\n• Ensure the account has no debit/credit transaction freezes or minor-account caps.',
  },
  {
    id: 'q3',
    label: 'Can I apply for both Post-Matric and Top Class ST scholarship?',
    question: 'Can I avail both Post-Matric Scholarship and Top Class Education Scheme simultaneously?',
    answer: 'According to Central & State Scholarship regulations:\n\n• No. A student can hold only ONE central/state government scholarship at a time for tuition and maintenance.\n• If you qualify for both, the Top Class Education Scheme is generally recommended for premier institutes because it covers 100% non-refundable fees + ₹3,000/mo living allowance + ₹45,000 computer aid.\n• Our Eligibility Engine will automatically highlight the scheme offering maximum legitimate benefit.',
  },
  {
    id: 'q4',
    label: 'Why does my income certificate show "Expiring Soon"?',
    question: 'Why is my income certificate flagged as "Expiring Soon"?',
    answer: 'Income certificates in Odisha and most states are issued for a single financial year (FY 2024-25, ending March 31, 2025).\n\n• While valid for current applications, renewing it ensures no delays during mid-term verification.\n• TribalScholar One flags documents 90 days before expiry so you have ample time to apply on your state e-District portal without missing scholarship deadlines.',
  }
];
