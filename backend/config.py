from pydantic_settings import BaseSettings
from typing import Optional
import os

class Settings(BaseSettings):
    PROJECT_NAME: str = "TribalScholar One API"
    VERSION: str = "2.6.0"
    API_PREFIX: str = "/api/v1"
    
    # MongoDB Configuration
    MONGODB_URI: str = os.getenv("MONGODB_URI", "mongodb://localhost:27017")
    DATABASE_NAME: str = os.getenv("DATABASE_NAME", "tribalscholar_db")
    
    # Security & JWT
    JWT_SECRET: str = os.getenv("JWT_SECRET", "super-secret-jwt-key-for-development-only-change-in-production")
    ALGORITHM: str = "HS256"
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 60 * 24  # 24 hours
    
    # AI / LLM Configuration
    OPENAI_API_KEY: Optional[str] = os.getenv("OPENAI_API_KEY", None)
    
    # CORS
    ALLOWED_ORIGINS: list[str] = ["http://localhost:3000", "http://127.0.0.1:3000", "http://localhost:5173"]

    class Config:
        env_file = ".env"
        extra = "ignore"

settings = Settings()
