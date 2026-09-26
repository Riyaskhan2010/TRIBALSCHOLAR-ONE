from motor.motor_asyncio import AsyncIOMotorClient, AsyncIOMotorDatabase
from backend.config import settings
import logging

logger = logging.getLogger("tribalscholar.database")

class Database:
    client: AsyncIOMotorClient = None
    db: AsyncIOMotorDatabase = None

db = Database()

async def connect_to_mongo():
    logger.info(f"Connecting to MongoDB at {settings.MONGODB_URI}...")
    try:
        db.client = AsyncIOMotorClient(
            settings.MONGODB_URI,
            serverSelectionTimeoutMS=5000
        )
        db.db = db.client[settings.DATABASE_NAME]
        logger.info(f"Successfully connected to MongoDB database: {settings.DATABASE_NAME}")
    except Exception as e:
        logger.warning(f"Could not connect to live MongoDB instance ({e}). Running in fallback mode.")

async def close_mongo_connection():
    logger.info("Closing MongoDB connection...")
    if db.client:
        db.client.close()
        logger.info("MongoDB connection closed.")

def get_database() -> AsyncIOMotorDatabase:
    return db.db
