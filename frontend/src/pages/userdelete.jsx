// frontend/pages/userdelete.jsx
import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

export default function UserDelete() {
    const [username, setUsername] = useState("");
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
        // "/api/users/delete" エンドポイントにPOSTリクエストを送信してユーザーを削除
        const response = await axios.post("/api/users/delete", { username });
        console.log(response.data);
        // ユーザーが削除された後、ページを移動する
        router.push("/");
        } catch (error) {
        console.error(error);
        }
    };

    return (
        <div className="p-8 max-w-md mx-auto">
            <h1 className="text-3xl font-semibold mb-6">User Delete Page</h1>
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
                Delete User
                </button>
            </form>
            <Link href="/useradd">
                <div className="block text-blue-500 mt-4 hover:underline">Add User</div>
            </Link>
        </div>
    );
}
