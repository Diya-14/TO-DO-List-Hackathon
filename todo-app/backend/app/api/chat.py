from typing import Any, List
from fastapi import APIRouter, Depends, HTTPException
from sqlmodel import Session, select
from pydantic import BaseModel
from uuid import UUID

from app.api import deps
from app.core.db import get_session
from app.models.conversation import Conversation
from app.models.user import User
from app.core.chat_agent import process_chat

router = APIRouter()

class ChatRequest(BaseModel):
    message: str

class ChatResponse(BaseModel):
    response: str

@router.post("/", response_model=ChatResponse)
def chat(
    *,
    session: Session = Depends(get_session),
    chat_request: ChatRequest,
    current_user: User = Depends(deps.get_current_user),
) -> Any:
    # 1. Fetch History (Context for Agent)
    # Get last 10 messages, ordered by timestamp ascending
    user_id_str = str(current_user.id)
    statement = select(Conversation).where(Conversation.user_id == user_id_str).order_by(Conversation.timestamp.desc()).limit(10)
    history_desc = session.exec(statement).all()
    history = list(reversed(history_desc))

    # 2. Save User Message
    user_msg = Conversation(
        user_id=user_id_str,
        message_text=chat_request.message,
        role="user"
    )
    session.add(user_msg)
    session.commit()
    
    # 3. Generate Response using Agent
    try:
        response_text = process_chat(session, current_user.id, chat_request.message, history)
    except Exception as e:
        import traceback
        print(f"CRITICAL ERROR IN process_chat: {str(e)}")
        traceback.print_exc()
        response_text = f"I encountered a technical error: {str(e)}. Please check the backend logs for details."

    # 4. Save Assistant Response
    assistant_msg = Conversation(
        user_id=user_id_str,
        message_text=response_text or "I'm sorry, I couldn't generate a response.",
        role="assistant"
    )
    session.add(assistant_msg)
    session.commit()
    
    return ChatResponse(response=assistant_msg.message_text)

@router.get("/history", response_model=List[Conversation])
def get_chat_history(
    session: Session = Depends(get_session),
    current_user: User = Depends(deps.get_current_user),
    skip: int = 0,
    limit: int = 50,
) -> Any:
    user_id_str = str(current_user.id)
    statement = select(Conversation).where(Conversation.user_id == user_id_str).order_by(Conversation.timestamp).offset(skip).limit(limit)
    conversations = session.exec(statement).all()
    return conversations
