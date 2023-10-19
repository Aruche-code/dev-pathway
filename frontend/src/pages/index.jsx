// frontend/pages/index.js
// 必要なモジュールやフックをインポート
import axios from "axios"; // HTTPクライアントのためのライブラリ
import { useState } from "react"; // Reactのステートフック

const Home = () => {
  // usernameのステートを管理するためのuseStateフック
  const [username, setUsername] = useState("");

  // フォームの送信をハンドルする関数
  const handleSubmit = async (e) => {
    e.preventDefault(); // デフォルトのフォーム送信動作を防ぐ

    try {
      // "/api/users/" エンドポイントにPOSTリクエストを送信してユーザーを作成
      const response = await axios.post("/api/users/", { username });
      console.log(response.data); // 応答データをコンソールに表示
    } catch (error) {
      // エラーが発生した場合、コンソールにエラー情報を出力しますtest
      console.error(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {/* ユーザー名を入力するためのテキストフィールド */}
        <input
          type="text"
          value={username}
          // テキストフィールドの値が変更されたときにステートを更新
          onChange={(e) => setUsername(e.target.value)}
        />
        <button type="submit">Create User</button>
      </form>
    </div>
  );
};

export default Home;



// pages/index.js
/*
import React from "react";
import axios from "axios"; // axiosをインポート。

async function fetchEndpoint(endpoint) {
  try {
    const response = await axios.get(`/api${endpoint}`);
    console.log(response.data);
  } catch (error) {
    console.error("Error fetching endpoint:", error);
  }
}

const HomePage = () => {
  return (
    <div>
      <button onClick={() => fetchEndpoint("/hello")}>Fetch Hello</button>
      <button onClick={() => fetchEndpoint("/goodbye")}>Fetch Goodbye</button>
      <button onClick={() => fetchEndpoint("/greet/John")}>Greet John</button>
    </div>
  );
};

export default HomePage;
*/
