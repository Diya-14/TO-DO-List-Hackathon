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
        import uuid
        print(f"DEBUG: Token data (sub): {token_data} (type: {type(token_data)})")
        
        # Ensure token_data is a valid UUID string
        try:
            user_id = uuid.UUID(str(token_data))
            print(f"DEBUG: Converted user_id: {user_id} (type: {type(user_id)})")
        except ValueError:
            print(f"DEBUG: Invalid UUID format for token: {token_data}")
            raise credentials_exception

        # Explicitly ensure it's a UUID object, though uuid.UUID() returns one.
        user = session.get(User, user_id)
        
    except Exception as e:
        print(f"DEBUG: Error in session.get(User): {e}")
        import traceback
        traceback.print_exc()
        raise credentials_exception

    if not user:
        raise credentials_exception
    return user
