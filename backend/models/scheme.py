from pydantic import BaseModel, Field
from typing import List, Optional

class SchemeCondition(BaseModel):
    title: str
    satisfied: bool
    reason: str
    severity: Optional[str] = "ok"  # ok, warning, critical

class ScholarshipSchemeModel(BaseModel):
    id: str
    name: str
    ministry: str
    level: str
    match_score: int
    status: str  # Likely Eligible, Needs Information, Verified
    financial_benefit: str
    deadline: str
    tags: List[str] = []
    conditions: List[SchemeCondition] = []
    required_docs: List[str] = []
    official_portal_url: str

class SchemeMatchRequest(BaseModel):
    student_id: str
    annual_income: float
    category: str
    sub_tribe: str
    course: str
    institution: str

class JagoChatRequest(BaseModel):
    question: str
    student_id: Optional[str] = None
    context_scheme_id: Optional[str] = None

class JagoChatResponse(BaseModel):
    answer: str
    grounded_source: str
    confidence: float
    disclaimer: str = "Grounded guidance based on official gazette guidelines • Not an automated government submission."
