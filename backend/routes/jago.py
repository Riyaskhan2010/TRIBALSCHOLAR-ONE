"""
JAGO AI Assistant Router for TribalScholar One
Handles conversational queries with grounded ST scholarship knowledge.
"""

from fastapi import APIRouter
from pydantic import BaseModel
from backend.services.jago_service import jago_service

router = APIRouter(prefix="/jago", tags=["JAGO AI Assistant"])

class JagoQueryRequest(BaseModel):
    query: str
    language: str = "en"

@router.post("/query")
async def ask_jago_assistant(req: JagoQueryRequest):
    result = jago_service.ask_assistant(req.query)
    return result
