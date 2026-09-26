# TRIBALSCHOLAR ONE

> **One Student. One Platform. Every Scholarship.**  
> *AI-Enabled Scholarship and Fellowship Management System for Scheduled Tribes*

[![Smart India Hackathon 2026](https://img.shields.io/badge/SIH-2026-orange.svg)](https://sih.gov.in)
[![Problem Statement](https://img.shields.io/badge/PS_ID-26239-blue.svg)](https://sih.gov.in)
[![Theme](https://img.shields.io/badge/Theme-Education_%26_Skill_Development-green.svg)](https://sih.gov.in)
[![Category](https://img.shields.io/badge/Category-Software-purple.svg)](https://sih.gov.in)
[![Team](https://img.shields.io/badge/Team-Team_Kyro-red.svg)](#team-kyro)
[![Database](https://img.shields.io/badge/Database-MongoDB-brightgreen.svg)](https://www.mongodb.com)

---

## 📌 Project Overview

**TribalScholar One** is an end-to-end AI-enabled scholarship and fellowship discovery, verification, readiness, and lifecycle tracking platform built exclusively for **Scheduled Tribe (ST)** students across India.

By eliminating information asymmetry, reducing fraudulent or incomplete submissions, automating complex multi-criteria eligibility calculations, and providing real-time direct benefit transfer (DBT) visibility, TribalScholar One empowers tribal youth to access higher education and research opportunities seamlessly.

---

## 🏆 Smart India Hackathon 2026 Submission

- **Problem Statement ID**: `26239`
- **Theme**: Education & Skill Development
- **Category**: Software
- **Team Name**: Team Kyro
- **Team ID**: `148751`

---

## 🚀 Key Innovation & Architectural Modules

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                          TRIBALSCHOLAR ONE PLATFORM                         │
├─────────────────┬─────────────────┬───────────────────┬─────────────────────┤
│ 1. Unified Auth │ 2. Secure Vault │ 3. Rule Engine    │ 4. Verification     │
│    APAAR / JWT  │    AES-256 OCR  │    ST Criteria    │    Cross-Field Brain│
├─────────────────┼─────────────────┼───────────────────┼─────────────────────┤
│ 5. Readiness    │ 6. JAGO AI      │ 7. DBT Tracking   │ 8. Officer Hub      │
│    Pre-Submit   │    Grounded ST  │    PFMS / NPCI    │    Audit Dashboard  │
└─────────────────┴─────────────────┴───────────────────┴─────────────────────┘
```

1. **AI Document Vault & Intelligent OCR**:
   - Automated text extraction, certificate authenticity scoring, and document validity checks (ST caste certificate, annual family income, academic marksheets, institutional bonafides).
2. **Deterministic ST Eligibility Engine**:
   - Zero-hallucination multi-criteria rule evaluation across central sector schemes (National Fellowship for ST, National Overseas Scholarship, Top Class Education) and state post-matric schemes.
3. **Verification Brain & Discrepancy Detector**:
   - Cross-field comparison between student demographic records and extracted certificates to flag name discrepancies, invalid certificates, or expired documents prior to submission.
4. **Application Readiness Auditing**:
   - Real-time pre-submission audit score (0-100%) and 1-click auto-populated application packet creation to eliminate procedural rejections.
5. **JAGO Grounded AI Assistant**:
   - Multilingual, policy-grounded contextual assistant providing instant clarifications on scheme guidelines, eligibility limits, income certificates, and grievance procedures.
6. **End-to-End Tracking & DBT Payment Lifecycle**:
   - Stage-by-stage transparent tracking from Institute Nodal Officer to State Tribal Welfare Directorate and PFMS Aadhaar-seeded bank account disbursement.

---

## 🛠️ Technology Stack

| Layer | Technology | Purpose |
| :--- | :--- | :--- |
| **Frontend** | React 18, TypeScript, Tailwind CSS, Lucide Icons | Responsive, accessible, and high-performance user interface |
| **Backend API** | FastAPI (Python 3.10+) | High-throughput asynchronous RESTful API |
| **Database** | **MongoDB** (Motor Async Driver) | Flexible NoSQL schema for student profiles, schemes, and verification metadata |
| **Document AI & OCR** | Computer Vision / OCR Pipeline | Automated certificate text & seal extraction |
| **Rule Engine** | Deterministic Python Rule Matcher | Transparent, explainable eligibility evaluations |
| **AI Assistant** | JAGO Grounded Policy Engine | Grounded ST scholarship assistance and guidance |
| **Security & Auth** | JWT, SHA-256 Salted Hashing, RBAC | Role-based access control (Student, Institute, Nodal Officer) |

---

## 📁 Repository Structure

```
TRIBALSCHOLAR-ONE/
├── backend/
│   ├── models/                  # Pydantic & MongoDB Schemas
│   │   ├── student.py           # Student profile schema
│   │   ├── document.py          # Vault document schema
│   │   ├── scheme.py            # Scholarship scheme schema
│   │   └── application.py       # Application lifecycle schema
│   ├── routes/                  # API Endpoint Routers
│   │   ├── auth.py              # Authentication & JWT tokens
│   │   ├── profile.py           # Student profile endpoints
│   │   ├── vault.py             # Document vault & OCR upload
│   │   ├── schemes.py           # Scheme catalog & filtering
│   │   ├── eligibility.py       # Rule engine evaluation
│   │   ├── readiness.py         # Application readiness audit
│   │   ├── tracking.py          # Application tracking & DBT
│   │   └── jago.py              # JAGO conversational assistant
│   ├── services/                # Core Business Logic
│   │   ├── ocr_service.py       # OCR & document intelligence
│   │   ├── rule_engine.py       # ST scholarship rule engine
│   │   ├── verification_service.py # Cross-field verification brain
│   │   ├── jago_service.py      # Grounded AI assistant service
│   │   └── security_service.py  # Security & token helpers
│   ├── config.py                # Environment & Settings
│   ├── database.py              # Async MongoDB connection
│   ├── main.py                  # FastAPI Application Entry
│   └── requirements.txt         # Python Backend Dependencies
├── public/                      # Static Assets & Media
│   ├── team/                    # Team Kyro Member Photos
│   ├── mentors/                 # Mentor Photos
│   └── team-kyro-logo.png       # Official Team Kyro Logo
├── src/                         # Frontend React + TypeScript
│   ├── assets/                  # Frontend assets & images
│   ├── components/              # UI & Feature Components
│   │   ├── Hero.tsx             # Submission banner & Hero
│   │   ├── ProjectIntro.tsx     # Problem context & mission
│   │   ├── MetricStrip.tsx      # Platform impact metrics
│   │   ├── ProblemSection.tsx   # 6 key systemic challenges
│   │   ├── SolutionWorkflow.tsx # 9-step horizontal architecture
│   │   ├── FeatureSection.tsx   # 9 core functional modules
│   │   ├── ProductJourney.tsx   # 10-step student lifecycle
│   │   ├── ProductShowcase.tsx  # 9 interactive application screens
│   │   ├── SecuritySection.tsx  # Data security & compliance
│   │   ├── TechnologySection.tsx# Full-stack technology breakdown
│   │   ├── InnovationSection.tsx# 4 key innovative pillars
│   │   ├── ImpactSection.tsx    # Measurable national impact
│   │   ├── TeamSection.tsx      # 6 Team Kyro members
│   │   ├── MentorsSection.tsx   # 2 Dedicated Mentors
│   │   ├── CTASection.tsx       # Prototype demo call-to-action
│   │   ├── Footer.tsx           # Disclaimers & navigation
│   │   └── InteractiveDemoModal.tsx # Interactive prototype launcher
│   ├── data/                    # Showcase and scheme mock data
│   ├── types/                   # TypeScript interfaces & types
│   ├── App.tsx                  # Main React App layout
│   ├── index.css                # Custom CSS styling
│   └── main.tsx                 # React DOM mount point
├── .env.example                 # Environment configuration template
├── .gitignore                   # Git exclusion rules
├── package.json                 # Frontend dependencies and scripts
├── requirements.txt             # Root Python requirements
├── tailwind.config.js           # Tailwind CSS configuration
├── tsconfig.json                # TypeScript configuration
├── vite.config.ts               # Vite build configuration
└── README.md                    # Project Documentation
```

---

## ⚡ Quickstart & Installation Guide

### Prerequisites
- **Node.js**: v18.0 or higher
- **Python**: v3.10 or higher
- **MongoDB**: Community Server v6.0+ (or MongoDB Atlas connection string)

---

### 1. Backend Setup (FastAPI + MongoDB)

```bash
# Navigate to project root
cd SIH26239\ LANDING\ PAGE

# Create and activate Python virtual environment
python -m venv .venv
# On Windows:
.venv\Scripts\activate
# On Linux/macOS:
# source .venv/bin/activate

# Install backend dependencies
pip install -r backend/requirements.txt

# Create local .env from template
cp .env.example .env

# Run FastAPI backend server
uvicorn backend.main:app --reload --host 0.0.0.0 --port 8000
```
- **Backend API URL**: `http://localhost:8000`
- **Interactive Swagger Docs**: `http://localhost:8000/docs`

---

### 2. Frontend Setup (React + TypeScript + Vite)

```bash
# In another terminal tab / window:
npm install

# Start Vite development server
npm run dev
```
- **Frontend URL**: `http://localhost:3000` (or `http://localhost:5173`)

---

## 👥 Team Kyro

| Photo | Name | Role | Core Responsibility |
| :---: | :--- | :--- | :--- |
| ![Mohamed Riyaskhan S](public/team/mohamed-riyaskhan.jpg) | **Mohamed Riyaskhan S** | Team Lead & Full-Stack Architect | Full-stack architecture, system integration, backend APIs, and product leadership. |
| ![Thirunesh K](public/team/thirunesh.jpg) | **Thirunesh K** | AI / ML Engineer | Machine learning pipelines, document intelligence, and AI assistant integration. |
| ![Santhosh S](public/team/santhosh.jpg) | **Santhosh S** | Backend & Database Developer | MongoDB database design, API routing, verification logic, and system security. |
| ![Varshitha Ramesh](public/team/varshitha.jpg) | **Varshitha Ramesh** | Frontend & UI/UX Developer | Responsive UI development, student journey workflows, and user experience. |
| ![Thatchayini B](public/team/thatchayini.png) | **Thatchayini B** | Research & Policy Analyst | ST scholarship scheme analysis, eligibility criteria mapping, and user testing. |
| ![Harshini M.P](public/team/harshini.jpg) | **Harshini M.P** | Quality Assurance & Documentation | Quality engineering, API testing, compliance verification, and documentation. |

---

## 🎓 Guidance & Mentorship

| Photo | Name | Designation | Mentorship Contribution |
| :---: | :--- | :--- | :--- |
| ![Muthuswamy K](public/mentors/muthuswamy.png) | **Muthuswamy K** | Head Technical Competitions | Architectural guidance, technical competition strategy, and system scalability. |
| ![Er Gajendran Parthasarathi](public/mentors/gajendran.png) | **Er Gajendran Parthasarathi** | Technical Lead | Technical mentoring, cloud infrastructure, backend best practices, and code review. |

---

## 🔒 Security & Privacy Compliance

- **No Hardcoded Secrets**: All configuration values loaded dynamically from environment variables.
- **Role-Based Access Control (RBAC)**: Distinct permissions for Students, Institutional Verifiers, and Tribal Welfare Nodal Officers.
- **Document Integrity**: Digital hash verification and tamper-evident audit logging for all certificate uploads.
- **Data Protection**: Zero-storage policy for biometric data; secure tokenized authentication.

---

## 📜 Statutory Disclaimer

*TribalScholar One is a technical demonstration and prototype developed by **Team Kyro** for the **Smart India Hackathon 2026** (Problem Statement ID: 26239). All scholarship schemes, guidelines, and benefits reference official public policies of the Ministry of Tribal Affairs, Government of India, and respective State Tribal Welfare Departments. For official submissions and statutory disbursements, applicants continue to respective authorized government portals.*

---

© 2026 **Team Kyro** — Smart India Hackathon 2026. All rights reserved.
