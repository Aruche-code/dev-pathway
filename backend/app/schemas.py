# backend/app/schemas.py
# スキーマの定義
# このファイルは、リクエストとレスポンスのデータ構造を定義します。
# ここでのバリデーションがデータの整合性を保証する重要な役割を果たします。

from pydantic import BaseModel


class CreateUserRequest(BaseModel):
    username: str
