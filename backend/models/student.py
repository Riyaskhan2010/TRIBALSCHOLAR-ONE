from pydantic import BaseModel, Field
from typing import Optional, List
from datetime import datetime

class StudentProfileBase(BaseModel):
    name: str = Field(..., example="Ramesh Hembram")
    student_id: str = Field(..., example="TS1-2025-ST-8849")
    category: str = Field(default="Scheduled Tribe (ST)")
    sub_tribe: str = Field(..., example="Santal Community")
    domicile_state: str = Field(..., example="Odisha (Mayurbhanj District)")
    academic_year: str = Field(default="2024–2025 (Year 3)")
    institution: str = Field(..., example="National Institute of Technology, Rourkela")
    course: str = Field(..., example="B.Tech in Computer Science & Engineering")
    cgpa: str = Field(default="8.74 / 10.0")
    annual_income: float = Field(..., example=210000.0)
    income_limit: float = Field(default=250000.0)
    bank_dbt_linked: bool = Field(default=True)
    aadhaar_linked: bool = Field(default=True)
    digilocker_linked: bool = Field(default=True)
    vault_locked: bool = Field(default=True)
    profile_completion: int = Field(default=94)

class StudentProfileCreate(StudentProfileBase):
    pin: str = Field(..., min_length=4, max_length=6, example="8849")

class StudentProfileInDB(StudentProfileBase):
    id: Optional[str] = None
    created_at: datetime = Field(default_factory=datetime.utcnow)
    updated_at: datetime = Field(default_factory=datetime.utcnow)

class StudentLoginRequest(BaseModel):
    student_id: str = Field(..., example="TS1-2025-ST-8849")
    pin: str = Field(..., example="8849")

class TokenResponse(BaseModel):
    access_token: str
    token_type: str = "bearer"
    student: StudentProfileBase
