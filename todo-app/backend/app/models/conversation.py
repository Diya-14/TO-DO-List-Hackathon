from typing import Optional
from datetime import datetime
from sqlmodel import Field, SQLModel
from uuid import UUID, uuid4

class Conversation(SQLModel, table=True):
    id: Optional[UUID] = Field(default_factory=uuid4, primary_key=True)
    user_id: str = Field(index=True)
    message_text: str
    role: str  # 'user' or 'assistant'
    timestamp: datetime = Field(default_factory=datetime.utcnow)
