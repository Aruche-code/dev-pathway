// frontend/pages/index.js
import Link from "next/link";
import AppBar from "../components/AppBar";
import Sidebar from "../components/Sidebar";

const Home = () => {
  return (
    <div className="flex flex-col h-screen">
      <AppBar />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <div className="flex flex-col flex-1 p-4 overflow-auto">
            <div>
                <h1>共通部分を記述します</h1>
                <Link href="/home">
                </Link>
                <Link href="/useradd">
                </Link>
                <br />
                <Link href="/userdelete">
                </Link>
           </div>
    </div>
      </div>
    </div>
  );
}
