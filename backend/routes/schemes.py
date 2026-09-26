"""
Schemes Router for TribalScholar One
Lists and filters verified Central and State Scheduled Tribe scholarships and fellowships.
"""

from fastapi import APIRouter, Query
from typing import List, Optional
from backend.services.rule_engine import ALL_SCHEMES

router = APIRouter(prefix="/schemes", tags=["Scholarship Schemes"])

@router.get("/")
async def get_all_schemes(
    scheme_type: Optional[str] = Query(None, description="FILTER by CENTRAL / STATE / OVERSEAS / FELLOWSHIP"),
    state: Optional[str] = Query(None, description="Filter by state of domicile")
):
    results = ALL_SCHEMES
    if scheme_type:
        results = [s for s in results if s["scheme_type"].upper() == scheme_type.upper()]
    if state:
        results = [s for s in results if s["state_specific"] is None or s["state_specific"].lower() == state.lower()]
        
    return {
        "count": len(results),
        "schemes": results
    }

@router.get("/{scheme_id}")
async def get_scheme_by_id(scheme_id: str):
    scheme = next((s for s in ALL_SCHEMES if s["id"] == scheme_id), None)
    if not scheme:
        return {"error": "Scheme not found"}
    return scheme
