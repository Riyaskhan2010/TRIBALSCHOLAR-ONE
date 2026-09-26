"""
Profile Router for TribalScholar One
Handles student profile lifecycle, academic record, and demographic details.
"""

from fastapi import APIRouter, HTTPException, Depends
from pydantic import BaseModel
from typing import Optional

router = APIRouter(prefix="/profile", tags=["Student Profile"])

@router.get("/me")
async def get_my_profile():
    return {
        "id": "STU-26239-8812",
        "full_name": "Kiran Rathva",
        "email": "student@tribalscholar.gov.in",
        "phone": "+91 98765 43210",
        "gender": "Female",
        "dob": "2003-04-15",
        "tribe_name": "Rathwa",
        "sub_tribe": "Pardi",
        "state_of_domicile": "Gujarat",
        "district": "Chhota Udaipur",
        "annual_family_income": 180000,
        "current_academic_level": "Undergraduate",
        "institution_name": "Government Technical Institute",
        "course_name": "B.E. Information Technology",
        "current_year_or_semester": "3rd Year / 5th Sem",
        "cgpa_or_percentage": 8.42,
        "apaar_id": "APAAR-9821-4432-1102",
        "digilocker_linked": True,
        "dbt_bank_seeded": True,
        "is_verified": True
    }

@router.put("/me")
async def update_profile(profile_data: dict):
    return {
        "message": "Student profile updated successfully.",
        "updated_data": profile_data
    }
