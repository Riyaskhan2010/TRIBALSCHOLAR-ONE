"""
Eligibility Engine Router for TribalScholar One
Runs deterministic multi-criteria checks across family income, domicile,
academic merit, course level, and category.
"""

from fastapi import APIRouter
from pydantic import BaseModel
from typing import Optional, Dict, Any
from backend.services.rule_engine import rule_engine

router = APIRouter(prefix="/eligibility", tags=["Eligibility Engine"])

class EligibilityCheckRequest(BaseModel):
    category: str = "ST"
    annual_family_income: float = 180000
    state_of_domicile: str = "Gujarat"
    current_academic_level: str = "Undergraduate"
    cgpa_or_percentage: float = 84.0
    is_pvtg: bool = False
    is_differently_abled: bool = False

@router.post("/evaluate")
async def evaluate_eligibility(profile: EligibilityCheckRequest):
    eval_result = rule_engine.evaluate_student(profile.dict())
    return {
        "student_profile_summary": profile.dict(),
        "evaluation_summary": {
            "total_schemes_checked": eval_result["total_schemes_evaluated"],
            "eligible_schemes_count": eval_result["eligible_count"],
            "ineligible_schemes_count": len(eval_result["ineligible_schemes"])
        },
        "eligible_schemes": eval_result["eligible_schemes"],
        "ineligible_schemes": eval_result["ineligible_schemes"]
    }
