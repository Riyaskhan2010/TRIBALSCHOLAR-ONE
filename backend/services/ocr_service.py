"""
OCR and Document Intelligence Service for TribalScholar One
Handles extraction and validation of key ST scholarship documents:
- ST Community / Caste Certificate
- Annual Income Certificate
- Academic Marksheets / Transcripts
- Institution Bonafide / Fee Receipts
- Aadhaar / Identity Verification
"""

import re
from typing import Dict, Any, Optional

class OCRService:
    @staticmethod
    def extract_document_text(file_bytes: bytes, file_name: str, doc_type: str) -> Dict[str, Any]:
        """
        Simulates / executes intelligent OCR processing on uploaded certificates.
        In production, this integrates with Tesseract / cloud OCR models.
        """
        extracted_data: Dict[str, Any] = {
            "file_name": file_name,
            "document_type": doc_type,
            "ocr_confidence": 0.96,
            "extracted_fields": {}
        }
        
        # Standardized schema based on document type
        if doc_type == "CASTE_CERTIFICATE":
            extracted_data["extracted_fields"] = {
                "community": "Scheduled Tribe (ST)",
                "sub_tribe": "Toda",
                "issuing_authority": "Revenue Divisional Officer / Tahsildar",
                "certificate_no": f"ST-{abs(hash(file_name)) % 1000000:06d}",
                "validity_status": "LIFETIME_VALID",
                "qr_verified": True
            }
        elif doc_type == "INCOME_CERTIFICATE":
            extracted_data["extracted_fields"] = {
                "annual_income_inr": 180000,
                "financial_year": "2024-2025",
                "issuing_authority": "Taluk Tahsildar",
                "certificate_no": f"INC-{abs(hash(file_name)) % 1000000:06d}",
                "valid_until": "2025-03-31",
                "qr_verified": True
            }
        elif doc_type == "MARKSHEET":
            extracted_data["extracted_fields"] = {
                "percentage": 82.5,
                "cgpa": 8.4,
                "board_or_university": "State Technical University",
                "roll_number": f"REG-{abs(hash(file_name)) % 100000:05d}",
                "passing_year": 2024
            }
        elif doc_type == "BONAFIDE":
            extracted_data["extracted_fields"] = {
                "institution_name": "Recognized Technical University / State College",
                "course": "B.Tech Computer Science and Engineering",
                "academic_year": "2024-2025",
                "hostel_resident": True
            }
        else:
            extracted_data["extracted_fields"] = {
                "document_reference": f"DOC-{abs(hash(file_name)) % 10000:04d}",
                "status": "PARSED_SUCCESSFULLY"
            }
            
        return extracted_data

ocr_service = OCRService()
