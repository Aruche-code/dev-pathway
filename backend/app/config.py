# backend/app/config.py
# このファイルは、アプリケーションの設定情報を管理します。
# 環境に依存する変数や設定値を集約、

import os
from dotenv import load_dotenv

# .envファイルから環境変数を読み込む
load_dotenv()

# 環境変数を使用してデータベースURLを取得
DATABASE_URL = os.getenv("DATABASE_URL")
