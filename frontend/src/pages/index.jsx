// frontend/pages/index.jsx
import Link from "next/link";

export default function Index() {
  return (
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
  );
}
