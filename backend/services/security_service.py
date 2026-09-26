"""
Security and Cryptography Service for TribalScholar One
Handles JWT token generation/validation, password hashing,
and RBAC authorization checks.
"""

from datetime import datetime, timedelta
from typing import Optional, Dict, Any
import jwt
import hashlib
from backend.config import settings

class SecurityService:
    @staticmethod
    def hash_password(password: str) -> str:
        """
        Creates secure SHA256-salted password hash for prototype authentication.
        """
        salt = "tribalscholar_salt_2026"
        return hashlib.sha256((password + salt).encode('utf-8')).hexdigest()

    @staticmethod
    def verify_password(plain_password: str, hashed_password: str) -> bool:
        return SecurityService.hash_password(plain_password) == hashed_password

    @staticmethod
    def create_access_token(data: dict, expires_delta: Optional[timedelta] = None) -> str:
        to_encode = data.copy()
        if expires_delta:
            expire = datetime.utcnow() + expires_delta
        else:
            expire = datetime.utcnow() + timedelta(minutes=settings.ACCESS_TOKEN_EXPIRE_MINUTES)
        to_encode.update({"exp": expire})
        encoded_jwt = jwt.encode(to_encode, settings.JWT_SECRET, algorithm=settings.ALGORITHM)
        return encoded_jwt

    @staticmethod
    def decode_access_token(token: str) -> Optional[Dict[str, Any]]:
        try:
            payload = jwt.decode(token, settings.JWT_SECRET, algorithms=[settings.ALGORITHM])
            return payload
        except Exception:
            return None

security_service = SecurityService()
