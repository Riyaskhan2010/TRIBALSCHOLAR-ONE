"""
TribalScholar One - Main FastAPI Application Backend
AI-Enabled Scholarship and Fellowship Management System for Scheduled Tribes
Smart India Hackathon 2026 | Problem Statement 26239 | Team Kyro
"""

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from contextlib import asynccontextmanager
import logging

from backend.config import settings
from backend.database import connect_to_mongo, close_mongo_connection
from backend.routes import (
    auth,
    profile,
    vault,
    schemes,
    eligibility,
    readiness,
    tracking,
    jago
)

# Setup logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger("tribalscholar.main")

@asynccontextmanager
async def lifespan(app: FastAPI):
    # Startup: Connect to MongoDB
    logger.info("Starting up TribalScholar One Backend Service...")
    await connect_to_mongo()
    yield
    # Shutdown: Close MongoDB connection
    logger.info("Shutting down TribalScholar One Backend Service...")
    await close_mongo_connection()

app = FastAPI(
    title=settings.PROJECT_NAME,
    version=settings.VERSION,
    description="Full-stack AI-enabled scholarship and fellowship management platform for Scheduled Tribe students. Smart India Hackathon 2026 submission by Team Kyro.",
    lifespan=lifespan
)

# Configure CORS Middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Mount all API Routes
app.include_router(auth.router, prefix=settings.API_PREFIX)
app.include_router(profile.router, prefix=settings.API_PREFIX)
app.include_router(vault.router, prefix=settings.API_PREFIX)
app.include_router(schemes.router, prefix=settings.API_PREFIX)
app.include_router(eligibility.router, prefix=settings.API_PREFIX)
app.include_router(readiness.router, prefix=settings.API_PREFIX)
app.include_router(tracking.router, prefix=settings.API_PREFIX)
app.include_router(jago.router, prefix=settings.API_PREFIX)

@app.get("/")
async def root():
    return {
        "project": "TribalScholar One",
        "tagline": "One Student. One Platform. Every Scholarship.",
        "event": "Smart India Hackathon 2026",
        "problem_statement_id": "26239",
        "theme": "Education & Skill Development",
        "category": "Software",
        "team": "Team Kyro",
        "database": "MongoDB",
        "status": "OPERATIONAL",
        "docs_url": "/docs"
    }

@app.get("/health")
async def health_check():
    return {
        "status": "healthy",
        "database": "MongoDB",
        "version": settings.VERSION
    }
