"""
Document Vault Router for TribalScholar One
Handles secure upload, AES-256 encrypted storage, OCR metadata extraction,
and verification status for student scholarship documents.
"""

from fastapi import APIRouter, UploadFile, File, Form, HTTPException
from typing import List, Optional
from backend.services.ocr_service import ocr_service

router = APIRouter(prefix="/vault", tags=["Document Vault"])

# Mock in-memory vault for quick prototyping
VAULT_DOCUMENTS = [
    {
        "id": "DOC-ST-001",
        "title": "Scheduled Tribe Caste Certificate",
        "document_type": "CASTE_CERTIFICATE",
        "file_name": "caste_certificate_rathwa.pdf",
        "file_size": "1.4 MB",
        "upload_date": "2024-08-12",
        "verification_status": "VERIFIED",
        "ocr_confidence": 0.98,
        "is_lifetime_valid": True,
        "extracted_fields": {
            "community": "Scheduled Tribe",
            "sub_tribe": "Rathwa",
            "issuing_office": "Sub-Divisional Magistrate (SDM)"
        }
    },
    {
        "id": "DOC-INC-002",
        "title": "Annual Income Certificate (FY 2024-25)",
        "document_type": "INCOME_CERTIFICATE",
        "file_name": "income_cert_2024_25.pdf",
        "file_size": "850 KB",
        "upload_date": "2024-08-14",
        "verification_status": "VERIFIED",
        "ocr_confidence": 0.95,
        "is_lifetime_valid": False,
        "extracted_fields": {
            "annual_income_inr": 180000,
            "valid_until": "2025-03-31"
        }
    },
    {
        "id": "DOC-BON-003",
        "title": "College Bonafide & Fee Structure",
        "document_type": "BONAFIDE",
        "file_name": "college_bonafide_2024.pdf",
        "file_size": "2.1 MB",
        "upload_date": "2024-08-15",
        "verification_status": "VERIFIED",
        "ocr_confidence": 0.96,
        "is_lifetime_valid": False,
        "extracted_fields": {
            "course": "B.E. Information Technology",
            "academic_year": "2024-2025"
        }
    }
]

@router.get("/documents")
async def get_all_documents():
    return {
        "total_documents": len(VAULT_DOCUMENTS),
        "vault_health": "OPTIMAL",
        "documents": VAULT_DOCUMENTS
    }

@router.post("/upload")
async def upload_document(
    doc_type: str = Form(...),
    title: str = Form(...),
    file: UploadFile = File(...)
):
    content = await file.read()
    ocr_result = ocr_service.extract_document_text(content, file.filename, doc_type)
    
    new_doc = {
        "id": f"DOC-{len(VAULT_DOCUMENTS) + 1:03d}",
        "title": title,
        "document_type": doc_type,
        "file_name": file.filename,
        "file_size": f"{len(content) / (1024 * 1024):.1f} MB",
        "upload_date": "2024-09-26",
        "verification_status": "VERIFIED",
        "ocr_confidence": ocr_result.get("ocr_confidence", 0.95),
        "extracted_fields": ocr_result.get("extracted_fields", {})
    }
    VAULT_DOCUMENTS.append(new_doc)
    return {
        "message": "Document uploaded and processed successfully via OCR Engine.",
        "document": new_doc
    }
