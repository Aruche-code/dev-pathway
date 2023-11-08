// frontend/pages/useradd.jsx
import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/router"; // ページ遷移のためのフック
import Link from "next/link";

export default function UserAdd() {
    const [username, setUsername] = useState("");
    const router = useRouter(); // ルーターを取得

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
        const response = await axios.post("/api/users/", { username });
        console.log(response.data);
        // ユーザーが作成された後、ページを移動する
        router.push("/"); // ルートページに遷移
        } catch (error) {
        console.error(error);
        }
    };

    return (
        <div className="p-8 max-w-md mx-auto">
            <h1 className="text-3xl font-semibold mb-6">User Create Page</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                <label htmlFor="username" className="block text-gray-600 text-sm font-medium mb-1">
                    Username
                </label>
                <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300"
                />
                </div>
                <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200"
                >
                Create User
                </button>
            </form>
            <Link href="/userdelete">
                <div className="block text-blue-500 mt-4 hover:underline">Delete User</div>
            </Link>
        </div>
    );
}
