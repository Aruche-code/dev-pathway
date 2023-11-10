import AppBar from "../components/AppBar";
import Sidebar from "../components/Sidebar";
import React, { useState, useEffect } from "react";
import axios from "axios";
//開発動作確認用のトップレベルのページコンポーネント

export default function User() {
  // ユーザー名のテキストを管理するためのステート
  const [userName, setUserName] = useState("");
  // 送信されたユーザ名を表示するためのステート
  const [users, setUsers] = useState([]);

  // ユーザ名のリストを取得する関数
  const fetchUsers = async () => {
    try {
      const response = await axios.get("/api/users");
      setUsers(response.data);
    } catch (error) {
      console.error("ユーザーの取得に失敗しました:", error);
    }
  };

  // コンポーネントがマウントされた時にユーザ名のリストを取得
  useEffect(() => {
    fetchUsers();
  }, []);

  // ユーザー名を送信する関数
  const handleUserSubmission = async () => {
    try {
      const response = await axios.post("/api/users", { username: userName });
      // 新しいユーザ名をステートに追加
      setUsers([...users, response.data]);
      // フォームの入力をリセット
      setUserName("");
    } catch (error) {
      console.error("ユーザ名の送信に失敗しました:", error);
    }
  };

  // ユーザ名を削除する関数
  const handleUserDelete = async (id) => {
    try {
      await axios.delete(`/api/users/${id}`);
      setUsers(users.filter((user) => user.id !== id));
    } catch (error) {
      console.error("ユーザの削除に失敗しました:", error);
    }
  };

  return (
    <div className="flex flex-col h-screen">
      <AppBar />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <div className="flex flex-col flex-1 p-4 overflow-auto">
          <div className="flex-1 bg-gray-100 p-4 shadow rounded-lg m-2">
            <h1 className="text-xl font-bold mb-4">ユーザを作成</h1>
            <input
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              className="border p-2 rounded w-full mb-4"
              placeholder="ユーザ名をここに入力..."
              required
            />
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={handleUserSubmission}
            >
              送信
            </button>
            <h2 className="text-lg font-bold mt-6">ユーザ一覧</h2>
            <ul className="list-disc pl-5">
              {users.map((user) => (
                <li key={user.id} className="mb-2">
                  {user.username}
                  <button
                    className="ml-2 bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
                    onClick={() => handleUserDelete(user.id)}
                  >
                    削除
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
