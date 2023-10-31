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
        
        <input 
          className=" m-2 p-0.5 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500"
          type="text" 
          value={username}
          onChange={(e) => setUsername(e.target.value)} 
        />
        
        <button
          className="px-2 py-0.5 bg-blue-500 hover:bg-blue-700 text-white rounded-lg self-start"
          type="submit"
        >
          Create User
        </button>
        
      </form>
    </div>
  );
};

export default Home;
