from typing import Any
from fastapi import APIRouter, Depends, HTTPException, status
from fastapi.security import OAuth2PasswordRequestForm
from sqlmodel import Session, select

from app.api import deps
from app.core import security
from app.core.db import get_session
from app.models.user import User, UserCreate, UserRead
from app.models.task import Task

router = APIRouter()

@router.post("/signup", response_model=UserRead)
def create_user(
    *,
    session: Session = Depends(get_session),
    user_in: UserCreate,
) -> Any:
    print(f"DEBUG: Signup attempt for email: {user_in.email}")
    try:
        user = session.exec(
            select(User).where(User.email == user_in.email)
        ).first()
        if user:
            print(f"DEBUG: User already exists: {user_in.email}")
            raise HTTPException(
                status_code=400,
                detail="The user with this username already exists in the system",
            )
        
        print("DEBUG: Hashing password...")
        hashed_password = security.get_password_hash(user_in.password)
        
        user = User(
            email=user_in.email,
            full_name=user_in.full_name,
            hashed_password=hashed_password
        )
        print("DEBUG: Adding user to session...")
        session.add(user)
        print("DEBUG: Committing session...")
        session.commit()
        print("DEBUG: Refreshing user...")
        session.refresh(user)
        print(f"DEBUG: Signup successful for: {user.email}")
        return user
    except Exception as e:
        import traceback
        print(f"CRITICAL ERROR DURING SIGNUP: {str(e)}")
        traceback.print_exc()
        if isinstance(e, HTTPException):
            raise e
        raise HTTPException(
            status_code=500,
            detail=f"Internal Server Error during signup: {str(e)}"
        )

@router.post("/login")
def login_access_token(
    session: Session = Depends(get_session),
    form_data: OAuth2PasswordRequestForm = Depends(),
) -> Any:
    user = session.exec(
        select(User).where(User.email == form_data.username)
    ).first()
    if not user or not security.verify_password(form_data.password, user.hashed_password):
        raise HTTPException(
            status_code=400, detail="Incorrect email or password"
        )
    
    return {
        "access_token": security.create_access_token(user.id),
        "token_type": "bearer",
    }

@router.get("/me", response_model=UserRead)
def read_users_me(
    current_user: User = Depends(deps.get_current_user),
) -> Any:
    return current_user
