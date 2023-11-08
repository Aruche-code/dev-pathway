# backend/app/routers/user_router.py
# ルート（エンドポイント）の整理
# このファイルはユーザーに関連するエンドポイントを管理します。

from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from .. import schemas, models
from ..database import get_db

# このルーターに追加されるすべてのルート（エンドポイント）は、/usersから始まる
router = APIRouter(tags=["users"])


# 作成済みのユーザを取得
@router.get("/users", response_model=list[schemas.User])
def read_users(db: Session = Depends(get_db)):
    return db.query(models.User).all()


# ユーザ新規作成
@router.post("/users", response_model=schemas.User)
def create_user(user: schemas.UserCreate, db: Session = Depends(get_db)):
    db_user = models.User(username=user.username)
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user


# ユーザを削除
@router.delete("/users/{id}", response_model=schemas.User)
def delete_user(id: int, db: Session = Depends(get_db)):
    # データベースからユーザを検索
    db_user = db.query(models.User).filter(models.User.id == id).first()
    if db_user is None:
        raise HTTPException(status_code=404, detail="Idea not found")
    db.delete(db_user)
    db.commit()
    return db_user


# ユーザを編集
@router.put("/users/{id}", response_model=schemas.User)
def update_user(id: int, user: schemas.UserCreate, db: Session = Depends(get_db)):
    existing_user = db.query(models.User).filter(models.User.id == id).first()
    if not existing_user:
        raise HTTPException(status_code=404, detail="Idea not found")

    existing_user.username = user.username
    db.add(existing_user)
    db.commit()
    db.refresh(existing_user)
    return existing_user
