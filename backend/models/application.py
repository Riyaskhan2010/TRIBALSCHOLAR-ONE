from pydantic import BaseModel, Field
from typing import List, Optional
from datetime import datetime

class ApplicationMilestoneModel(BaseModel):
    stage: str
    title: str
    date: str
    status: str  # completed, in_progress, pending
    source: str
    note: str

class ApplicationRecordBase(BaseModel):
    student_id: str
    scheme_id: str
    scheme_name: str
    official_app_id: str = Field(..., example="NSP-OR2024250098412")
    submission_date: str
    portal_name: str = "National Scholarship Portal (scholarships.gov.in)"
    current_status: str = "Institute Verified"
    disbursed_amount: float = 185000.0
    dbt_utr: Optional[str] = "SBIN225091823901"
    milestones: List[ApplicationMilestoneModel] = []

class ApplicationRecordInDB(ApplicationRecordBase):
    id: Optional[str] = None
    created_at: datetime = Field(default_factory=datetime.utcnow)
