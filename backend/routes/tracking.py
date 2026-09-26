"""
Tracking and DBT Router for TribalScholar One
Provides timeline tracking, nodal officer verification states,
and Direct Benefit Transfer (DBT) disbursement status.
"""

from fastapi import APIRouter

router = APIRouter(prefix="/tracking", tags=["Application Tracking & DBT"])

APPLICATIONS_DATA = [
    {
        "application_id": "APP-2024-ST-9912",
        "scheme_name": "National Fellowship for Scheduled Tribe Students",
        "scheme_type": "CENTRAL SECTOR",
        "applied_date": "2024-08-20",
        "current_stage": "STATE_NODAL_VERIFICATION",
        "status_label": "In Verification - Level 2",
        "dbt_amount": "₹31,000 / month + Contingency",
        "dbt_status": "APPROVED_AWAITING_PFMS_BATCH",
        "timeline": [
            {"date": "2024-08-20", "title": "Application Submitted Online", "status": "COMPLETED"},
            {"date": "2024-08-28", "title": "Institute Verification (Nodal Officer)", "status": "COMPLETED"},
            {"date": "2024-09-12", "title": "District Welfare Verification", "status": "COMPLETED"},
            {"date": "2024-09-24", "title": "State Tribal Development Directorate", "status": "IN_PROGRESS"},
            {"date": "Pending", "title": "PFMS Direct Benefit Transfer Credit", "status": "PENDING"}
        ]
    },
    {
        "application_id": "APP-2024-ST-7731",
        "scheme_name": "Post-Matric Scholarship Scheme for ST Students",
        "scheme_type": "CENTRALLY SPONSORED",
        "applied_date": "2024-07-15",
        "current_stage": "DBT_DISBURSED",
        "status_label": "Funds Disbursed to Bank",
        "dbt_amount": "₹48,000 / annum",
        "dbt_status": "CREDITED",
        "utr_number": "PFMS-UTR-202409159982",
        "timeline": [
            {"date": "2024-07-15", "title": "Application Submitted Online", "status": "COMPLETED"},
            {"date": "2024-07-22", "title": "Institute Verification", "status": "COMPLETED"},
            {"date": "2024-08-05", "title": "State Sanction Order Generated", "status": "COMPLETED"},
            {"date": "2024-08-18", "title": "DBT Bank Transfer Completed via PFMS", "status": "COMPLETED"}
        ]
    }
]

@router.get("/applications")
async def get_student_applications():
    return {
        "active_applications": len(APPLICATIONS_DATA),
        "applications": APPLICATIONS_DATA
    }

@router.get("/dbt-summary")
async def get_dbt_summary():
    return {
        "aadhaar_npc_linked": True,
        "bank_name": "State Bank of India",
        "account_masked": "XXXX-XXXX-4912",
        "total_disbursed_lifetime": "₹1,26,000",
        "last_disbursement_date": "2024-08-18",
        "next_scheduled_cycle": "October 2024"
    }
