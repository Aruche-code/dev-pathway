# backend/app/routers/user_router.py
# ルート（エンドポイント）の整理
# このファイルはユーザーに関連するエンドポイントを管理します。

from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from .. import schemas, models
from ..database import get_db

router = APIRouter()


@router.post("/users", response_model=schemas.CreateUserRequest)
def create_user(user: schemas.CreateUserRequest, db: Session = Depends(get_db)):
    db_user = models.User(username=user.username)
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user
