import uuid
from typing import Annotated
from fastapi import Depends, HTTPException, status
from fastapi.security import OAuth2PasswordBearer
from jose import JWTError, jwt
from sqlmodel import Session

from app.core import security
from app.core.config import settings
from app.core.db import get_session
from app.models.user import User

reusable_oauth2 = OAuth2PasswordBearer(
    tokenUrl=f"{settings.API_V1_STR}/auth/login"
)

def get_current_user(
    token: Annotated[str, Depends(reusable_oauth2)],
    session: Session = Depends(get_session),
) -> User:
    credentials_exception = HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="Could not validate credentials",
        headers={"WWW-Authenticate": "Bearer"},
    )
    try:
        payload = jwt.decode(
            token, settings.SECRET_KEY, algorithms=[settings.ALGORITHM]
        )
        token_data = payload.get("sub")
        if token_data is None:
            raise credentials_exception
    except JWTError:
        raise credentials_exception

    try:
        # Robustly handle the user_id conversion
        if isinstance(token_data, str):
            try:
                user_id = uuid.UUID(token_data)
            except ValueError:
                print(f"DEBUG: Invalid UUID string: {token_data}")
                raise credentials_exception
        else:
            user_id = token_data
            
        print(f"DEBUG: calling session.get(User, {user_id}) type={type(user_id)}")
        print(f"DEBUG: DB URL starts with: {settings.DATABASE_URL[:10] if settings.DATABASE_URL else 'None'}")
        
        # Ensure we are passing a UUID object to session.get
        user = session.get(User, user_id)
        
        if not user:
            print(f"DEBUG: User not found by UUID, trying string fallback for SQLite compatibility...")
            # Try searching by string ID if UUID fails (for SQLite compatibility)
            from sqlmodel import select
            user = session.exec(select(User).where(User.id == str(user_id))).first()
            
    except (ValueError, TypeError) as e:
        print(f"DEBUG: Auth error - invalid UUID format: {token_data}")
        raise credentials_exception
    except Exception as e:
        print(f"DEBUG: Unexpected error in get_current_user: {str(e)}")
        raise credentials_exception

    if not user:
        raise credentials_exception
    return user