from pydantic import BaseModel, Field
from typing import Optional, List, Dict
from datetime import datetime

class ExtractedField(BaseModel):
    label: str
    value: str

class DocumentItemBase(BaseModel):
    title: str = Field(..., example="ST Caste / Tribe Certificate")
    doc_number: str = Field(..., example="REV/OD/ST/2021/99241")
    issued_by: str = Field(..., example="Tahasildar, Baripada, Mayurbhanj")
    issue_date: str = Field(..., example="14-Aug-2021")
    expiry_date: Optional[str] = Field(default=None, example="31-Mar-2025")
    status: str = Field(default="Verified")  # Verified, Expiring Soon, Under Review, Missing
    confidence_score: float = Field(default=98.5)
    security_level: str = Field(default="DigiLocker Verified")
    extracted_fields: List[ExtractedField] = []

class DocumentItemInDB(DocumentItemBase):
    id: Optional[str] = None
    student_id: str
    checksum_sha256: str
    is_encrypted: bool = True
    created_at: datetime = Field(default_factory=datetime.utcnow)

class VaultUnlockRequest(BaseModel):
    pin: str = Field(..., example="8849")
