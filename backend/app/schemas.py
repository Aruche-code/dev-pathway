# backend/app/schemas.py
# スキーマの定義
# このファイルは、リクエストとレスポンスのデータ構造を定義します。
# ここでのバリデーションがデータの整合性を保証する重要な役割を果たします。

from pydantic import BaseModel


# おためし作成用スキーマ
class UserCreate(BaseModel):
    username: str


# おためし読み込み用スキーマ（レスポンス用）
class User(BaseModel):
    id: int
    username: str

    class Config:
        from_attributes = True
