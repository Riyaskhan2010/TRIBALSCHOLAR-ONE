export type WorkflowStepId = 
  | 'profile'
  | 'documents'
  | 'finder'
  | 'eligibility'
  | 'readiness'
  | 'portal'
  | 'status'
  | 'verification'
  | 'payment';

export interface WorkflowStep {
  id: WorkflowStepId;
  stepNumber: string;
  title: string;
  shortDesc: string;
  category: 'Preparation' | 'Matching' | 'Readiness' | 'Official Execution' | 'Tracking';
  details: string;
  previewTitle: string;
  previewSubtitle: string;
  previewStats: { label: string; value: string; status?: 'success' | 'warning' | 'info' }[];
  highlightNotes: string;
}

export interface DocumentItem {
  id: string;
  title: string;
  docNumber: string;
  issuedBy: string;
  issueDate: string;
  expiryDate: string | null;
  status: 'Verified' | 'Expiring Soon' | 'Under Review' | 'Missing';
  confidenceScore: number;
  extractedFields: { label: string; value: string }[];
  securityLevel: 'AES-256 Encrypted' | 'DigiLocker Verified' | 'SHA-256 Checksum';
}

export interface ScholarshipScheme {
  id: string;
  name: string;
  ministry: string;
  level: string;
  matchScore: number;
  status: 'Likely Eligible' | 'Needs Information' | 'Verified';
  financialBenefit: string;
  deadline: string;
  tags: string[];
  conditions: {
    title: string;
    satisfied: boolean;
    reason: string;
    severity?: 'ok' | 'warning';
  }[];
  requiredDocs: string[];
  officialPortalUrl: string;
}

export interface StudentProfile {
  name: string;
  studentId: string;
  category: string;
  subTribe: string;
  domicileState: string;
  academicYear: string;
  institution: string;
  course: string;
  cgpa: string;
  annualIncome: number;
  incomeLimit: number;
  bankDbtLinked: boolean;
  aadhaarLinked: boolean;
  digiLockerLinked: boolean;
  vaultLocked: boolean;
  profileCompletion: number;
}

export interface VerificationCheck {
  id: string;
  field: string;
  profileValue: string;
  extractedOcrValue: string;
  matchStatus: 'Matched' | 'Discrepancy' | 'Pending Review';
  similarity: number;
  sourceDoc: string;
  note: string;
}

export interface ApplicationMilestone {
  stage: string;
  title: string;
  date: string;
  status: 'completed' | 'in_progress' | 'pending';
  source: string;
  note: string;
}

export interface TeamMember {
  name: string;
  role: string;
  initials: string;
  responsibilities: string[];
  photo: string | null;
  linkedin: string | null;
  isLeader?: boolean;
}

export interface MentorItem {
  name: string;
  designation: string;
  photo: string;
  linkedin: string;
  contribution: string;
}
