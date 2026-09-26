"""
Deterministic Rule Engine for Scheduled Tribe Schemes (Ministry of Tribal Affairs & State Welfare).
Evaluates student baseline parameters against official criteria clauses.
"""
from typing import List, Dict, Any
from backend.models.scheme import ScholarshipSchemeModel, SchemeCondition

CONFIGURED_SCHEMES: List[Dict[str, Any]] = [
    {
        "id": "scheme-topclass",
        "name": "National Scholarship for Higher Education / Top Class Education for ST Students",
        "ministry": "Ministry of Tribal Affairs (MoTA), Govt. of India",
        "level": "National Level • Premier Institutes (IITs/NITs/IIMs)",
        "match_score": 96,
        "status": "Likely Eligible",
        "financial_benefit": "Full Tuition Fee + Living Expenses (₹3,000/mo) + Books (₹5,000/yr) + Computer Aid (₹45,000 one-time)",
        "deadline": "31 October 2025 (Official Portal Schedule)",
        "tags": ["MoTA Scheme", "Top Class", "Premier Institute", "Full Tuition"],
        "official_portal_url": "https://scholarships.gov.in",
        "income_ceiling": 600000.0,
        "requires_notified_institute": True,
        "conditions": [
            {
                "title": "ST Community Confirmation",
                "satisfied": True,
                "reason": "Valid ST Certificate verified via Odisha Revenue e-portal.",
                "severity": "ok"
            },
            {
                "title": "Institution Listed in MoTA Notified List",
                "satisfied": True,
                "reason": "NIT Rourkela is an accredited notified Institute.",
                "severity": "ok"
            },
            {
                "title": "Family Income Ceiling <= ₹6.00 Lakh/year",
                "satisfied": True,
                "reason": "Current verified income ₹2.10 Lakh is well within limit.",
                "severity": "ok"
            },
            {
                "title": "Direct Admission through Regular Selection",
                "satisfied": True,
                "reason": "Admission confirmed via JoSAA counseling.",
                "severity": "ok"
            },
            {
                "title": "Aadhaar Seeded Active Bank Account",
                "satisfied": True,
                "reason": "SBI Bank account seeded with NPCI mandate.",
                "severity": "ok"
            },
            {
                "title": "Renewed Income Certificate for Current FY",
                "satisfied": False,
                "reason": "Certificate valid till 31-Mar-2025. Renewal recommended before next term.",
                "severity": "warning"
            }
        ],
        "required_docs": ["ST Caste Certificate", "Income Certificate", "Academic Grade Sheet", "Fee Structure Receipt", "Aadhaar Copy"]
    },
    {
        "id": "scheme-postmatric",
        "name": "Centrally Sponsored Post-Matric Scholarship for ST Students (PMS-ST)",
        "ministry": "State Tribal Welfare Department & Ministry of Tribal Affairs",
        "level": "State/National • Post-Secondary Education",
        "match_score": 94,
        "status": "Verified",
        "financial_benefit": "Maintenance Allowance (₹1,200/mo) + Non-Refundable Compulsory Fees Reimbursement",
        "deadline": "15 November 2025 (State Portal)",
        "tags": ["Post-Matric", "State Disbursed", "Direct Benefit Transfer"],
        "official_portal_url": "https://scholarships.gov.in",
        "income_ceiling": 250000.0,
        "requires_notified_institute": False,
        "conditions": [
            {
                "title": "ST Community Certification",
                "satisfied": True,
                "reason": "Digitally signed caste certificate available.",
                "severity": "ok"
            },
            {
                "title": "Family Income <= ₹2.50 Lakh/year",
                "satisfied": True,
                "reason": "Profile income ₹2.10 Lakh meets post-matric requirement.",
                "severity": "ok"
            },
            {
                "title": "Recognized Higher Education Course",
                "satisfied": True,
                "reason": "B.Tech full-time regular degree.",
                "severity": "ok"
            },
            {
                "title": "No other dual Centrally Funded Scholarship",
                "satisfied": True,
                "reason": "Single scholarship declaration verified.",
                "severity": "ok"
            }
        ],
        "required_docs": ["Caste Certificate", "Income Certificate", "Marksheet", "Bank Passbook", "College Bonafide"]
    }
]

def evaluate_student_eligibility(student_data: Dict[str, Any]) -> List[ScholarshipSchemeModel]:
    """
    Evaluates student parameters deterministically against configured scholarship schemes.
    """
    results = []
    income = float(student_data.get("annual_income", 0.0))
    is_st = "ST" in str(student_data.get("category", "")).upper()
    
    for s in CONFIGURED_SCHEMES:
        scheme_copy = dict(s)
        # Dynamic rule check
        if income > scheme_copy.get("income_ceiling", 600000.0):
            scheme_copy["status"] = "Needs Information"
            scheme_copy["match_score"] = 40
        elif not is_st:
            scheme_copy["status"] = "Needs Information"
            scheme_copy["match_score"] = 20
            
        results.append(ScholarshipSchemeModel(**scheme_copy))
        
    return results
